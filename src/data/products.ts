export interface ProductCategory {
  id: string;
  titleFa: string;
  titleEn: string;
  description: string;
  badge: string;
  metrics: { label: string; value: string }[];
  features: string[];
}

export interface FeaturedProduct {
  id: string;
  nameFa: string;
  nameEn: string;
  category: string;
  description: string;
  headline: string;
  metrics: { label: string; value: string; hint: string }[];
  technicalSpecs: { key: string; value: string }[];
  highlights: string[];
  codeExample?: {
    lang: string;
    code: string;
  };
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "network-dns",
    titleFa: "شبکه و DNS هوشمند",
    titleEn: "Smart DNS & Network Fabric",
    badge: "Anycast BGP Fabric",
    description: "شبکه مسیریابی نام دامنه با فناوری Anycast جهانی و تفکیک جغرافیایی هوشمند بر پایه سلامت نودها و نزدیک‌ترین مرکز داده.",
    metrics: [
      { label: "میانگین پاسخ‌دهی DNS", value: "۸ میلی‌ثانیه" },
      { label: "پوشش مراکز داده جهانی", value: "+۳۲۰ پاپ‌سایت" },
    ],
    features: [
      "پشتیبانی کامل از DNSSEC و DoH / DoT",
      "مسیریابی هوشمند بر اساس سلامت سرویس (Failover)",
      "ثبت و انتشار بلادرنگ رکوردها در کمتر از ۱ ثانیه",
      "محافظت کامل در برابر حملات لایه ۳ و ۴ DNS",
    ],
  },
  {
    id: "content-delivery",
    titleFa: "شبکه توزیع محتوا",
    titleEn: "Content Delivery Network (CDN)",
    badge: "Tier-1 Edge Cache",
    description: "تحویل فوق‌سریع دارایی‌های استاتیک و محتوای داینامیک با بهینه‌سازی خودکار در لبه، فشرده‌سازی Brotli و پشتیبانی از پروتکل مدرن HTTP/3.",
    metrics: [
      { label: "نرخ هیت کش لبه (Edge Hit)", value: "۹۹.۴٪" },
      { label: "کاهش مصرف پهنای باند مبدا", value: "تا ۸۵٪" },
    ],
    features: [
      "پشتیبانی سراسری از پروتکل HTTP/3 بر بستر QUIC",
      "بهینه‌سازی و تبدیل خودکار تصاویر در لبه به AVIF و WebP",
      "تخلیه آنی کش (Instant Purge) در کمتر از ۱۵۰ میلی‌ثانیه",
      "قوانین کش پیشرفته (Cache-Control & Edge Rules)",
    ],
  },
  {
    id: "cloud-databases",
    titleFa: "پایگاه‌داده‌های ابری توزیع‌شده",
    titleEn: "Managed Cloud Databases",
    badge: "High Availability & ACID",
    description: "پایگاه‌های داده مدیریت‌شده PostgreSQL و کلاسترهای کش Redis با تکثیر بلادرنگ چندمرکزی، پشتیبان‌گیری خودکار نقطه به نقطه و اتصال امن ایزوله.",
    metrics: [
      { label: "تأخیر خواندن از کپی محلی", value: "< ۲ میلی‌ثانیه" },
      { label: "تضمین پایداری داده (Durability)", value: "۹۹.۹۹۹۹۹٪" },
    ],
    features: [
      "مهاجرت و بازیابی در نقطه زمانی (Point-In-Time Recovery)",
      "تعویض خودکار سرور در صورت بروز خطا (Auto-Failover)",
      "مدیریت استخر اتصالات با PgBouncer تعبیه‌شده",
      "رمزنگاری در حال انتقال و در حالت سکون (AES-256)",
    ],
  },
  {
    id: "cloud-infrastructure",
    titleFa: "زیرساخت ابری و سرورهای لبه",
    titleEn: "Edge Infrastructure & Serverless",
    badge: "Microsecond Cold Starts",
    description: "زیرساخت پردازش بدون سرور و کانتینری در لبه شبکه، با شروع به کار زیر ۵ میلی‌ثانیه‌ای و مقیاس‌پذیری خودکار از صفر تا میلیون‌ها درخواست همزمان.",
    metrics: [
      { label: "زمان راه‌اندازی اولیه (Cold Start)", value: "< ۵ میلی‌ثانیه" },
      { label: "مقیاس‌پذیری خودکار همزمان", value: "نامحدود" },
    ],
    features: [
      "محیط اجرای ایزوله سبک با تکنولوژی V8 Isolate",
      "پشتیبانی کامل از توابع Next.js, Node.js و Go",
      "فایروال برنامه‌های کاربردی تحت وب (WAF پیشرفته)",
      "یکپارچگی مستقیم با سیستم‌های ساخت و گیت‌هاب",
    ],
  },
];

export const FEATURED_PRODUCTS: FeaturedProduct[] = [
  {
    id: "smart-dns",
    nameFa: "سرویس Smart DNS و مسیریابی Anycast",
    nameEn: "Smart DNS Architecture",
    category: "Network & DNS",
    headline: "سریع‌ترین و پایدارترین وضوح نام دامنه با مسیریابی Anycast در مقیاس میلیونی",
    description:
      "با توزیع یکپارچه آدرس‌های IP روی بیش از ۳۰۰ مرکز داده، درخواست‌های کاربران به نزدیک‌ترین نقطه جغرافیایی هدایت می‌شوند و در صورت از دست رفتن هر مرکز داده، ترافیک بدون کوچک‌ترین وقفه در سطح پروتکل BGP بازتوزیع می‌شود.",
    metrics: [
      { label: "سرعت رزولوشن", value: "۶.۸ms", hint: "میانگین جهانی پاسخ‌دهی" },
      { label: "مراکز تبادل داده", value: "+۳۲۰", hint: "نودهای مستقیم Anycast" },
      { label: "قابلیت اطمینان", value: "۱۰۰٪", hint: "تضمین SLA ترافیک DNS" },
    ],
    technicalSpecs: [
      { key: "پروتکل‌های پشتیبانی‌شده", value: "DNS over HTTPS (DoH), DoT, UDP/TCP Port 53" },
      { key: "توزیع بار سلامت‌محور", value: "بررسی وضعیت لایه ۴ و ۷ با پایش ۵ ثانیه‌ای" },
      { key: "حفاظت امنیتی", value: "DDoS Mitigation تا حجم بیش از ۲۵ ترابیت بر ثانیه" },
      { key: "مدیریت رکوردها", value: "API Restful, Terraform Provider, پنل مدیریت مدرن" },
    ],
    highlights: [
      "مسیریابی جغرافیایی مبتنی بر کشور، شهر و شماره سیستم خودمختار (ASN)",
      "امکان تعریف وزن ترافیکی (Weighted Round Robin) برای تست A/B زیرساخت",
      "فعال‌سازی امضای دیجیتال DNSSEC تنها با یک کلیک بدون تنظیم دستی کلیدها",
    ],
    codeExample: {
      lang: "bash",
      code: `$ curl -X POST https://api.infra.io/v1/dns/records \\
  -H "Authorization: Bearer $INFRA_TOKEN" \\
  -d '{"type":"A","name":"api","content":"192.0.2.1","routing":"geo_lowest_latency"}'`,
    },
  },
  {
    id: "cdn",
    nameFa: "شبکه توزیع محتوا و کش لبه (CDN)",
    nameEn: "Enterprise Edge CDN",
    headline: "تحویل محتوای پایدار با کمترین تأخیر، بدون فشار بر سرورهای مبدا",
    category: "Content Delivery",
    description:
      "تکنولوژی کش لبه هوشمند با بهره‌گیری از هارددیسک‌های پرسرعت NVMe، حافظه رم چندلایه‌ای و فشرده‌سازی اختصاصی، بار سرورهای اصلی شما را تا ۸۵ درصد کاهش داده و صفحات را در کسری از ثانیه در سراسر جهان بارگذاری می‌کند.",
    metrics: [
      { label: "تخلیه آنی کش", value: "< ۱۵۰ms", hint: "توزیع دستور Purge در کل شبکه" },
      { label: "پروتکل ارتباطی", value: "HTTP/3", hint: "رمزنگاری 0-RTT با QUIC" },
      { label: "فشرده‌سازی داده", value: "Brotli 11", hint: "کاهش حجم تا ۴۰٪ نسبت به Gzip" },
    ],
    technicalSpecs: [
      { key: "پروتکل‌های لبه", value: "HTTP/3 (QUIC), HTTP/2, TLS 1.3 اختصاصی" },
      { key: "بهینه‌سازی تصاویر", value: "تبدیل بلادرنگ فرمت‌ها به AVIF و WebP در حافظه" },
      { key: "کلیدهای کش", value: "پشتیبانی از تگ‌های کش (Cache-Tags) و هدر Surrogate-Key" },
      { key: "گواهی‌های SSL", value: "تولید و تمدید رایگان و خودکار گواهینامه‌های لبه" },
    ],
    highlights: [
      "پالایش و تحویل محتوا با قانون‌های اختصاصی Edge Rules بدون نیاز به سرور میانی",
      "قابلیت ذخیره‌سازی محتوای پویا و استاتیک با TTL ثانیه‌ای یا سالانه",
      "محافظت کامل در برابر افزایش ناگهانی ترافیک (Traffic Spikes) در کمپین‌ها",
    ],
    codeExample: {
      lang: "json",
      code: `// Next.js & CDN Edge Cache Header Example
headers: {
  'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=59',
  'CDN-Cache-Control': 'max-age=604800',
  'Surrogate-Key': 'product-catalog-2026'
}`,
    },
  },
  {
    id: "database",
    nameFa: "پایگاه‌داده‌های ابری توزیع‌شده (PostgreSQL & Redis)",
    nameEn: "Managed Cloud Databases",
    headline: "دیتابیس مدیریت‌شده بدون دغدغه سرور، مقیاس‌پذیر و پایدار",
    category: "Cloud Databases",
    description:
      "دیگر نگران پیکربندی دستی کلاستر، تهیه پشتیبان، ارتقای نسخه یا خطاهای دیسک نباشید. پایگاه‌داده‌های ما با معماری مستقل از ذخیره‌سازی، به صورت خودکار مقیاس می‌یابند و بالاترین کارایی را ارائه می‌دهند.",
    metrics: [
      { label: "بازیابی در نقطه زمانی", value: "۳۵ روز", hint: "دقت بازیابی تا سطح ثانیه" },
      { label: "حداکثر IOPS دیسک", value: "۸۰,۰۰۰", hint: "حافظه‌های فوق‌سریع NVMe" },
      { label: "تأخیر همگام‌سازی", value: "< ۵ms", hint: "تکثیر خودکار داده‌ها" },
    ],
    technicalSpecs: [
      { key: "موتورهای تحت پشتیبانی", value: "PostgreSQL 16/17, Redis 7.2+, Valkey" },
      { key: "معماری ذخیره‌سازی", value: "توزیع‌شده در ۳ منطقه دسترسی با تکثیر همزمان" },
      { key: "مدیریت اتصالات", value: "تراکنش‌های نامحدود با PgBouncer بومی لبه" },
      { key: "امنیت دسترسی", value: "دسترسی فقط از طریق شبکه خصوصی VPC و فایروال IP" },
    ],
    highlights: [
      "تعویض سرور بدون قطعی (Zero-Downtime Auto-Failover) در کمتر از ۳ ثانیه",
      "انشعاب‌گیری آنی دیتابیس (Branching) برای تست توسعه‌دهندگان بدون هزینه اضافی",
      "نمایشگر بصری کوئری‌ها و تحلیلگر خودکار کندی ایندکس‌ها (Slow Queries)",
    ],
    codeExample: {
      lang: "typescript",
      code: `// اتصال ایمن به دیتابیس با لایه اتصال توزیع‌شده
import { Pool } from 'pg';

export const db = new Pool({
  connectionString: process.env.INFRA_DATABASE_URL,
  ssl: { rejectUnauthorized: true },
  max: 20,
  idleTimeoutMillis: 30000,
});`,
    },
  },
  {
    id: "infrastructure",
    nameFa: "زیرساخت ابری و رایانش لبه (Edge Compute)",
    nameEn: "Global Edge Infrastructure",
    headline: "کد خود را بنویسید؛ ما آن را در صدم ثانیه در نزدیکی کاربران اجرا می‌کنیم",
    category: "Cloud Infrastructure",
    description:
      "زیرساخت ابری ایزوله مبتنی بر میکروماشین‌های V8 Isolate، اجرای توابع سرورلس را با زمان راه‌اندازی کمتر از ۵ میلی‌ثانیه امکان‌پذیر می‌کند. بدون نیاز به نگهداری سرور یا مدیریت سیستم‌عامل.",
    metrics: [
      { label: "زمان آماده‌سازی کانتینر", value: "< ۵ms", hint: "شروع فوق‌سریع Isolate" },
      { label: "مقیاس‌پذیری آنی", value: "خودکار", hint: "از صفر تا صد هزار درخواست در ثانیه" },
      { label: "جداسازی سخت‌افزاری", value: "ایزوله", hint: "امنیت چندمستأجره در لایه هسته" },
    ],
    technicalSpecs: [
      { key: "محیط‌های اجرایی", value: "V8 JavaScript, WebAssembly (Wasm), Node.js, Go" },
      { key: "زمان اجرای مجاز", value: "از ۵۰ میلی‌ثانیه تا ۳۰ ثانیه برای پردازش‌های سنگین" },
      { key: "شبکه داخلی", value: "شبکه لایه ۳ با تأخیر زیرشبکه کمتر از ۱ میلی‌ثانیه" },
      { key: "پایش لاگ‌ها", value: "جریان زنده لاگ‌ها (Live Streaming) با تأخیر صفر" },
    ],
    highlights: [
      "یکپارچگی بومی با خط لوله‌های CI/CD و استقرار با یک دستور git push",
      "متغیرهای محیطی رمزنگاری‌شده در لایه سخت‌افزاری با کلیدهای اختصاصی",
      "مانیتورینگ لحظه‌ای منابع مصرفی بدون سربار یا کدهای ردیابی سنگین",
    ],
    codeExample: {
      lang: "bash",
      code: `$ infra deploy --region auto --prod
✓ Scanning build configuration... Next.js 16 detected
✓ Compiling edge functions (14 routes)
✓ Deploying to 320+ edge regions
✓ Live URL: https://api.prod.owaan.infra [0.84s]`,
    },
  },
];
