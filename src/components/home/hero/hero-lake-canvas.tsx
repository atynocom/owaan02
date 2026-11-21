"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * OWAAN — LIVING LAKE ECOSYSTEM 3D ENGINE (Three.js + Custom GLSL Shaders)
 * 
 * Concept inspired by Lake Ovan (دریاچه اوان):
 * 1. Custom GLSL Obsidian Lake Surface with harmonic ripple propagation,
 *    cursor wake displacement, and Fresnel grazing reflections.
 * 2. Submerged Ecosystem Network: bathymetric contours, 260 orbital ecosystem nodes,
 *    and dynamic synaptic filaments illuminating on wake & acoustic shockwaves.
 */
export function HeroLakeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animId: number;
    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;
    let raycaster: THREE.Raycaster | null = null;
    let lakeHitPlane: THREE.Mesh | null = null;

    // Simulation state
    const state = {
      mouseNDC: new THREE.Vector2(0, 0),
      smoothMouseNDC: new THREE.Vector2(0, 0),
      lakeCursorWorld: new THREE.Vector3(0, -0.55, 0),
      smoothLakeCursor: new THREE.Vector3(0, -0.55, 0),
      cursorSpeed: 0,
      shockwaveOrigin: new THREE.Vector2(0, 0),
      shockwaveTime: 99.0,
      shockwaveStrength: 0.0,
      targetCamPos: new THREE.Vector3(0, 4.2, 7.8),
      targetLookAt: new THREE.Vector3(0, -0.35, 0),
    };

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene & Fog
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.055);

    // Camera
    camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.copy(state.targetCamPos);
    camera.lookAt(state.targetLookAt);

    // Renderer
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0); // Transparent so it blends with hero background
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Raycaster & invisible hit plane
    raycaster = new THREE.Raycaster();
    lakeHitPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(40, 40),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    lakeHitPlane.rotation.x = -Math.PI / 2;
    lakeHitPlane.position.y = -0.55;
    scene.add(lakeHitPlane);

    // Studio Environment Map
    const envCanvas = document.createElement("canvas");
    envCanvas.width = 512;
    envCanvas.height = 256;
    const envCtx = envCanvas.getContext("2d");
    if (envCtx) {
      envCtx.fillStyle = "#010101";
      envCtx.fillRect(0, 0, 512, 256);
      const topStrip = envCtx.createLinearGradient(0, 10, 0, 52);
      topStrip.addColorStop(0, "rgba(255,255,255,0.95)");
      topStrip.addColorStop(1, "rgba(255,255,255,0.0)");
      envCtx.fillStyle = topStrip;
      envCtx.fillRect(48, 10, 416, 42);
      envCtx.fillStyle = "rgba(255,255,255,0.8)";
      envCtx.fillRect(24, 36, 8, 184);
      envCtx.fillRect(480, 36, 8, 184);
      envCtx.fillStyle = "rgba(255,255,255,0.35)";
      envCtx.fillRect(0, 126, 512, 4);
    }
    const envTexture = new THREE.CanvasTexture(envCanvas);
    envTexture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = envTexture;

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.25));
    const rimLight = new THREE.DirectionalLight(0xffffff, 2.2);
    rimLight.position.set(2.5, 6.0, 4.0);
    scene.add(rimLight);

    const backRim = new THREE.DirectionalLight(0xe4e4e7, 1.4);
    backRim.position.set(-3.0, 4.0, -4.0);
    scene.add(backRim);

    const coreLight = new THREE.PointLight(0xffffff, 3.4, 9.0);
    coreLight.position.set(0, 0.25, 0);
    scene.add(coreLight);

    // Node Sprite Texture
    const spriteCanvas = document.createElement("canvas");
    spriteCanvas.width = 64;
    spriteCanvas.height = 64;
    const sCtx = spriteCanvas.getContext("2d");
    if (sCtx) {
      const g = sCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      g.addColorStop(0.0, "rgba(255,255,255,1.0)");
      g.addColorStop(0.28, "rgba(255,255,255,0.85)");
      g.addColorStop(0.6, "rgba(255,255,255,0.2)");
      g.addColorStop(1.0, "rgba(255,255,255,0.0)");
      sCtx.fillStyle = g;
      sCtx.fillRect(0, 0, 64, 64);
    }
    const nodeSprite = new THREE.CanvasTexture(spriteCanvas);

    // 1. GLSL Obsidian Lake Surface
    const waterUniforms = {
      uTime: { value: 0 },
      uCursor: { value: new THREE.Vector2(0, 0) },
      uCursorSpeed: { value: 0 },
      uShockOrigin: { value: new THREE.Vector2(0, 0) },
      uShockTime: { value: 99.0 },
      uShockStrength: { value: 0.0 },
      uDepthReveal: { value: 0.0 },
      uCameraPos: { value: camera.position },
    };

    const waterVertexShader = `
      uniform float uTime;
      uniform vec2 uCursor;
      uniform float uCursorSpeed;
      uniform vec2 uShockOrigin;
      uniform float uShockTime;
      uniform float uShockStrength;

      varying vec3 vWorldPos;
      varying vec3 vNormal;
      varying float vWaveHeight;
      varying float vShockWave;

      float getWaveElevation(vec2 p) {
        float distCenter = length(p);
        
        // 1. Continuous gentle harmonic ripples radiating from center
        float sourceRipple = sin(distCenter * 5.2 - uTime * 2.1) * exp(-distCenter * 0.22) * 0.032;
        sourceRipple += cos(distCenter * 9.5 - uTime * 3.0) * exp(-distCenter * 0.35) * 0.012;

        // 2. Micro surface currents
        float micro = sin(p.x * 2.4 + uTime * 0.9) * cos(p.y * 2.4 - uTime * 0.75) * 0.012;

        // 3. Cursor wake & displacement
        float distCursor = length(p - uCursor);
        float cursorWake = sin(distCursor * 8.0 - uTime * 5.5) * exp(-distCursor * 1.4) * (0.025 + uCursorSpeed * 0.06);

        // 4. Acoustic / Hydro Shockwave
        float shockRadius = uShockTime * 4.8;
        float clickDist = abs(length(p - uShockOrigin) - shockRadius);
        float waveBand = exp(-clickDist * clickDist * 3.8) * exp(-uShockTime * 0.75) * uShockStrength;
        float shockRipple = sin((length(p - uShockOrigin) - shockRadius) * 10.0) * waveBand * 0.095;

        return sourceRipple + micro + cursorWake + shockRipple;
      }

      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vec2 p = worldPosition.xz;

        float h = getWaveElevation(p);
        worldPosition.y += h;

        float eps = 0.04;
        float hx = getWaveElevation(p + vec2(eps, 0.0));
        float hz = getWaveElevation(p + vec2(0.0, eps));
        vec3 n = normalize(vec3(h - hx, eps, h - hz));

        vWorldPos = worldPosition.xyz;
        vNormal = n;
        vWaveHeight = h;

        float shockRadius = uShockTime * 4.8;
        float clickDist = abs(length(p - uShockOrigin) - shockRadius);
        vShockWave = exp(-clickDist * clickDist * 5.0) * exp(-uShockTime * 0.75) * uShockStrength;

        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `;

    const waterFragmentShader = `
      uniform float uTime;
      uniform vec2 uCursor;
      uniform float uDepthReveal;
      uniform vec3 uCameraPos;

      varying vec3 vWorldPos;
      varying vec3 vNormal;
      varying float vWaveHeight;
      varying float vShockWave;

      void main() {
        vec3 N = normalize(vNormal);
        vec3 V = normalize(uCameraPos - vWorldPos);
        vec2 p = vWorldPos.xz;
        float distCenter = length(p);

        float fresnel = pow(1.0 - max(dot(N, V), 0.0), 3.6);

        vec3 L1 = normalize(vec3(0.25, 1.0, 0.35));
        vec3 H1 = normalize(L1 + V);
        float specMain = pow(max(dot(N, H1), 0.0), 140.0) * 0.85;

        vec3 L2 = normalize(vec3(-0.4, 0.8, -0.5));
        vec3 H2 = normalize(L2 + V);
        float specRim = pow(max(dot(N, H2), 0.0), 90.0) * 0.35;

        // Procedural Squircle Reflection on rippling lake surface
        vec2 reflUV = p + N.xz * 1.45;
        vec2 q = abs(reflUV);
        float squircleDist = pow(pow(q.x, 3.2) + pow(q.y, 3.2), 1.0 / 3.2);
        float outerShadow = 1.0 - smoothstep(0.65, 1.15, squircleDist) * 0.45;
        float innerORefl = smoothstep(0.22, 0.30, squircleDist) * (1.0 - smoothstep(0.32, 0.44, squircleDist));
        float coreGlowRefl = exp(-distCenter * 1.15) * 0.28;

        float contour = smoothstep(0.92, 0.99, sin(distCenter * 6.0 - uTime * 2.1));
        float contourFade = exp(-distCenter * 0.25) * 0.14;
        float cursorGlow = exp(-length(p - uCursor) * 1.3) * 0.16;

        float luminance = 0.012;
        luminance *= outerShadow;
        luminance += specMain + specRim;
        luminance += innerORefl * 0.55;
        luminance += coreGlowRefl;
        luminance += contour * contourFade;
        luminance += cursorGlow;
        luminance += vShockWave * 0.65;
        luminance += fresnel * 0.09;

        float edgeFade = 1.0 - smoothstep(5.5, 11.5, distCenter);
        luminance *= edgeFade;

        float alpha = clamp(0.42 + fresnel * 0.38 + specMain + vShockWave * 0.4 - uDepthReveal * 0.18, 0.22, 0.92);
        alpha *= edgeFade;

        gl_FragColor = vec4(vec3(luminance), alpha);
      }
    `;

    const waterGeo = new THREE.PlaneGeometry(24, 24, 160, 160);
    waterGeo.rotateX(-Math.PI / 2);

    const waterMat = new THREE.ShaderMaterial({
      uniforms: waterUniforms,
      vertexShader: waterVertexShader,
      fragmentShader: waterFragmentShader,
      transparent: true,
      depthWrite: false,
    });

    const waterMesh = new THREE.Mesh(waterGeo, waterMat);
    waterMesh.position.y = -0.55;
    waterMesh.renderOrder = 2;
    scene.add(waterMesh);

    // 2. Submerged Bathymetric Contours
    const bathymetryGroup = new THREE.Group();
    bathymetryGroup.position.y = -0.82;
    scene.add(bathymetryGroup);

    const ringRadii = [1.45, 2.3, 3.25, 4.3, 5.45, 6.7];
    ringRadii.forEach((r, idx) => {
      const pts: THREE.Vector3[] = [];
      const segments = 128;
      const squareness = Math.max(0, 1 - idx * 0.22);
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        const cosT = Math.cos(theta);
        const sinT = Math.sin(theta);
        const n = 2.0 + squareness * 1.6;
        const denom = Math.pow(Math.pow(Math.abs(cosT), n) + Math.pow(Math.abs(sinT), n), 1.0 / n);
        const x = (cosT / denom) * r;
        const z = (sinT / denom) * r;
        pts.push(new THREE.Vector3(x, -idx * 0.06, z));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: Math.max(0.03, 0.14 - idx * 0.018),
      });
      const line = new THREE.Line(geo, mat);
      line.userData = { baseY: -idx * 0.06, phase: idx * 0.7 };
      bathymetryGroup.add(line);
    });

    // 3. Submerged Ecosystem Nodes (260 particles)
    const ECO_NODE_COUNT = 260;
    const ecoNodes: Array<{
      radius: number;
      angle: number;
      baseDepth: number;
      speed: number;
      phase: number;
      pos: THREE.Vector3;
      energy: number;
    }> = [];

    const positions = new Float32Array(ECO_NODE_COUNT * 3);
    const colors = new Float32Array(ECO_NODE_COUNT * 3);

    for (let i = 0; i < ECO_NODE_COUNT; i++) {
      const t = Math.pow(Math.random(), 0.78);
      const radius = 1.15 + t * 6.3;
      const angle = Math.random() * Math.PI * 2;
      const depth = -0.68 - Math.random() * 0.85;
      const speed = (0.08 + Math.random() * 0.12) * (2.2 / (radius + 0.8)) * (i % 5 === 0 ? -0.6 : 1.0);

      const pos = new THREE.Vector3(Math.cos(angle) * radius, depth, Math.sin(angle) * radius);
      ecoNodes.push({
        radius,
        angle,
        baseDepth: depth,
        speed,
        phase: Math.random() * Math.PI * 2,
        pos,
        energy: 0.25,
      });

      positions[i * 3] = pos.x;
      positions[i * 3 + 1] = pos.y;
      positions[i * 3 + 2] = pos.z;

      colors[i * 3] = 0.5;
      colors[i * 3 + 1] = 0.5;
      colors[i * 3 + 2] = 0.5;
    }

    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pointsGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const pointsMat = new THREE.PointsMaterial({
      size: 0.11,
      map: nodeSprite,
      vertexColors: true,
      transparent: true,
      opacity: 0.92,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const ecoPointsMesh = new THREE.Points(pointsGeo, pointsMat);
    ecoPointsMesh.renderOrder = 1;
    scene.add(ecoPointsMesh);

    // 4. Dynamic Synaptic Filaments
    const MAX_FILAMENTS = 750;
    const linePositions = new Float32Array(MAX_FILAMENTS * 2 * 3);
    const lineColors = new Float32Array(MAX_FILAMENTS * 2 * 3);

    const ecoLinesGeo = new THREE.BufferGeometry();
    ecoLinesGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    ecoLinesGeo.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));
    ecoLinesGeo.setDrawRange(0, 0);

    const linesMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const ecoLinesMesh = new THREE.LineSegments(ecoLinesGeo, linesMat);
    ecoLinesMesh.renderOrder = 1;
    scene.add(ecoLinesMesh);

    // Pointer Interaction
    function updateCursor(clientX: number, clientY: number) {
      if (!container || !camera || !raycaster || !lakeHitPlane) return;
      const rect = container.getBoundingClientRect();
      state.mouseNDC.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      state.mouseNDC.y = -(((clientY - rect.top) / rect.height) * 2 - 1);

      raycaster.setFromCamera(state.mouseNDC, camera);
      const hits = raycaster.intersectObject(lakeHitPlane);
      if (hits.length > 0) {
        state.lakeCursorWorld.set(
          THREE.MathUtils.clamp(hits[0].point.x, -7.5, 7.5),
          -0.55,
          THREE.MathUtils.clamp(hits[0].point.z, -7.5, 7.5)
        );
      }
    }

    const onPointerMove = (e: PointerEvent) => {
      updateCursor(e.clientX, e.clientY);
    };

    const onPointerDown = (e: PointerEvent) => {
      updateCursor(e.clientX, e.clientY);
      state.shockwaveOrigin.set(state.lakeCursorWorld.x, state.lakeCursorWorld.z);
      state.shockwaveTime = 0.0;
      state.shockwaveStrength = 1.0;
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerdown", onPointerDown);

    const onResize = () => {
      if (!container || !camera || !renderer) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // Animation Loop
    let prevTime = performance.now();

    function renderLoop(now: number) {
      animId = requestAnimationFrame(renderLoop);
      const dt = Math.min((now - prevTime) / 1000, 0.05);
      prevTime = now;
      const elapsed = now * 0.001;

      if (!renderer || !scene || !camera) return;

      // Cursor interpolation
      state.smoothMouseNDC.lerp(state.mouseNDC, 0.08);
      const prevX = state.smoothLakeCursor.x;
      const prevZ = state.smoothLakeCursor.z;
      state.smoothLakeCursor.lerp(state.lakeCursorWorld, 0.1);
      const distMoved = Math.hypot(state.smoothLakeCursor.x - prevX, state.smoothLakeCursor.z - prevZ);
      state.cursorSpeed += (Math.min(distMoved * 18.0, 1.5) - state.cursorSpeed) * 0.12;

      // Advance shockwave
      state.shockwaveTime += dt;
      state.shockwaveStrength *= 0.985;

      // Parallax camera
      const parallaxX = state.smoothMouseNDC.x * 0.55;
      const parallaxY = state.smoothMouseNDC.y * 0.25;
      camera.position.x += (parallaxX - camera.position.x) * 0.04;
      camera.lookAt(state.targetLookAt.x, state.targetLookAt.y - parallaxY * 0.2, state.targetLookAt.z);

      // Core light gentle pulse
      coreLight.intensity =
        3.2 +
        Math.sin(elapsed * 2.0) * 0.35 +
        Math.exp(-state.shockwaveTime * 1.5) * state.shockwaveStrength * 4.5;

      // Water uniforms
      waterUniforms.uTime.value = elapsed;
      waterUniforms.uCursor.value.set(state.smoothLakeCursor.x, state.smoothLakeCursor.z);
      waterUniforms.uCursorSpeed.value = state.cursorSpeed;
      waterUniforms.uShockOrigin.value.copy(state.shockwaveOrigin);
      waterUniforms.uShockTime.value = state.shockwaveTime;
      waterUniforms.uShockStrength.value = state.shockwaveStrength;

      // Update Bathymetric Rings
      bathymetryGroup.children.forEach((ring, idx) => {
        const line = ring as THREE.Line;
        line.position.y = line.userData.baseY + Math.sin(elapsed * 1.2 + line.userData.phase) * 0.025;
        line.rotation.y = Math.sin(elapsed * 0.3 + idx * 0.4) * 0.04;
      });

      // Update Ecosystem Nodes & Filaments
      const posAttr = ecoPointsMesh.geometry.getAttribute("position");
      const colAttr = ecoPointsMesh.geometry.getAttribute("color");
      const shockRadius = state.shockwaveTime * 4.8;

      for (let i = 0; i < ECO_NODE_COUNT; i++) {
        const node = ecoNodes[i];
        node.angle += node.speed * dt;

        const x = Math.cos(node.angle) * node.radius;
        const z = Math.sin(node.angle) * node.radius;
        const y = node.baseDepth + Math.sin(elapsed * 1.5 + node.phase) * 0.045;
        node.pos.set(x, y, z);

        const distCursor = Math.hypot(x - state.smoothLakeCursor.x, z - state.smoothLakeCursor.z);
        const cursorBoost = Math.exp(-distCursor * distCursor * 0.45) * 0.75;

        const distShockOrigin = Math.hypot(x - state.shockwaveOrigin.x, z - state.shockwaveOrigin.y);
        const shockBand =
          Math.exp(-Math.pow(distShockOrigin - shockRadius, 2.0) * 1.6) *
          Math.exp(-state.shockwaveTime * 0.7) *
          state.shockwaveStrength;

        const baseGlow = 0.18 + (1.0 - Math.min(node.radius / 7.5, 1.0)) * 0.22;
        const energy = Math.min(baseGlow + cursorBoost + shockBand * 1.2, 1.0);
        node.energy = energy;

        posAttr.setXYZ(i, x, y, z);
        colAttr.setXYZ(i, energy, energy, energy);
      }
      posAttr.needsUpdate = true;
      colAttr.needsUpdate = true;

      // Connect nearby active nodes
      const linePosArr = ecoLinesGeo.attributes.position.array as Float32Array;
      const lineColArr = ecoLinesGeo.attributes.color.array as Float32Array;
      let segmentCount = 0;
      const maxConnectDist = 1.18;

      for (let i = 0; i < ECO_NODE_COUNT && segmentCount < MAX_FILAMENTS; i++) {
        const a = ecoNodes[i];
        for (let j = i + 1; j < ECO_NODE_COUNT && segmentCount < MAX_FILAMENTS; j++) {
          const b = ecoNodes[j];
          const dx = a.pos.x - b.pos.x;
          if (Math.abs(dx) > maxConnectDist) continue;
          const dz = a.pos.z - b.pos.z;
          if (Math.abs(dz) > maxConnectDist) continue;
          const dy = a.pos.y - b.pos.y;
          const dSq = dx * dx + dy * dy + dz * dz;

          if (dSq < maxConnectDist * maxConnectDist) {
            const dist = Math.sqrt(dSq);
            const proximity = 1.0 - dist / maxConnectDist;
            const avgEnergy = (a.energy + b.energy) * 0.5;
            const alpha = proximity * avgEnergy * 0.42;

            if (alpha > 0.04) {
              const idx = segmentCount * 6;
              linePosArr[idx] = a.pos.x;
              linePosArr[idx + 1] = a.pos.y;
              linePosArr[idx + 2] = a.pos.z;
              linePosArr[idx + 3] = b.pos.x;
              linePosArr[idx + 4] = b.pos.y;
              linePosArr[idx + 5] = b.pos.z;

              lineColArr[idx] = alpha;
              lineColArr[idx + 1] = alpha;
              lineColArr[idx + 2] = alpha;
              lineColArr[idx + 3] = alpha;
              lineColArr[idx + 4] = alpha;
              lineColArr[idx + 5] = alpha;
              segmentCount++;
            }
          }
        }
      }
      ecoLinesGeo.setDrawRange(0, segmentCount * 2);
      ecoLinesGeo.attributes.position.needsUpdate = true;
      ecoLinesGeo.attributes.color.needsUpdate = true;

      renderer.render(scene, camera);
    }

    renderLoop(performance.now());

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("resize", onResize);
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* 3D WebGL Lake Canvas (Captures pointer moves & clicks seamlessly) */}
      <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-auto" />

      {/* Seamless Obsidian Vignette (Lake edges fade gracefully into pure black in dark mode) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[1] hidden dark:block"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 32%, rgba(0, 0, 0, 0.72) 70%, #000000 94%)",
        }}
      />

      {/* Light Mode Vignette (Lake edges fade gracefully into pure white in light mode) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[1] block dark:hidden"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 32%, rgba(255, 255, 255, 0.85) 70%, #ffffff 96%)",
        }}
      />

      {/* Architectural Hairline Grid with Radial Fade */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[1] opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(120, 120, 120, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(120, 120, 120, 0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 50%, black 20%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 50%, black 20%, transparent 85%)",
        }}
      />
    </div>
  );
}
