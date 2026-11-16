import React from "react";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/home/hero/hero-section";
import { TrustSection } from "@/components/home/trust-section";
import { ProductCategories } from "@/components/home/product-categories";
import { FeaturedProducts } from "@/components/home/featured-products";
import { InfrastructureDiagram } from "@/components/home/infrastructure-diagram";
import { BenefitsSection } from "@/components/home/benefits-section";
import { DeveloperSection } from "@/components/home/developer-section";
import { PricingPreview } from "@/components/home/pricing-preview";
import { UseCasesSection } from "@/components/home/use-cases-section";
import { FAQSection } from "@/components/home/faq-section";
import { FinalCTASection } from "@/components/home/final-cta-section";
import { Footer } from "@/components/layout/footer";
import { FAQ_DATA } from "@/data/faq";

export default function HomePage() {
  // Structured Multi-Schema Graph for Full SEO & GEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://owaan.com/#organization",
        name: "OWAAN Cloud Infrastructure",
        alternateName: "اووان - زیرساخت دیجیتال",
        url: "https://owaan.com",
        logo: {
          "@type": "ImageObject",
          url: "https://owaan.com/favicon.ico",
        },
        description:
          "پلتفرم پیشرفته زیرساخت ابری، Smart DNS Anycast، شبکه توزیع محتوا (CDN) و پایگاه‌داده‌های توزیع‌شده با پایداری ۹۹.۹۹٪.",
      },
      {
        "@type": "WebSite",
        "@id": "https://owaan.com/#website",
        url: "https://owaan.com",
        name: "OWAAN",
        inLanguage: "fa-IR",
        publisher: {
          "@id": "https://owaan.com/#organization",
        },
      },
      {
        "@type": "Product",
        "@id": "https://owaan.com/#product-anycast-dns",
        name: "Smart DNS Anycast",
        description: "مسیریابی هوشمند ترافیک نام دامنه با فناوری Anycast جهانی در بیش از ۳۲۰ نقطه تبادل ترافیک.",
        brand: {
          "@id": "https://owaan.com/#organization",
        },
      },
      {
        "@type": "Product",
        "@id": "https://owaan.com/#product-edge-cdn",
        name: "Enterprise Edge CDN",
        description: "شبکه توزیع محتوا با پشتیبانی از HTTP/3 بر بستر QUIC، فشرده‌سازی Brotli و تخلیه آنی کش.",
        brand: {
          "@id": "https://owaan.com/#organization",
        },
      },
      {
        "@type": "Product",
        "@id": "https://owaan.com/#product-cloud-db",
        name: "Managed Cloud Databases",
        description: "پایگاه‌های داده ابری مدیریت‌شده PostgreSQL و Redis با تکثیر بلادرنگ چندمنطقه‌ای.",
        brand: {
          "@id": "https://owaan.com/#organization",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://owaan.com/#faq",
        mainEntity: FAQ_DATA.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans transition-colors duration-200">
      {/* Multi-Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Section 01: Announcement Bar */}
      <AnnouncementBar />

      {/* Main Header & Navigation */}
      <Navbar />

      {/* Main Content Area: Sections 02 through 12 */}
      <main className="flex-1 flex flex-col">
        {/* Section 02: Hero Section */}
        <HeroSection />

        {/* Section 03: Trust & Credibility */}
        <TrustSection />

        {/* Section 04: Product Categories */}
        <ProductCategories />

        {/* Section 05: Featured Products */}
        <FeaturedProducts />

        {/* Section 06: Infrastructure Architecture Diagram */}
        <InfrastructureDiagram />

        {/* Section 07: Why Choose Us */}
        <BenefitsSection />

        {/* Section 08: Developer Experience */}
        <DeveloperSection />

        {/* Section 09: Pricing Preview */}
        <PricingPreview />

        {/* Section 10: Use Cases */}
        <UseCasesSection />

        {/* Section 11: FAQ Section */}
        <FAQSection />

        {/* Section 12: Final CTA */}
        <FinalCTASection />
      </main>

      {/* Section 13: Footer */}
      <Footer />
    </div>
  );
}
