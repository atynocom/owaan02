export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: {
    title: string;
    description: string;
    href: string;
    icon?: string;
  }[];
}

export const ANNOUNCEMENT_DATA = {
  id: "announcement-2026-edge-q1",
  text: "مراکز داده ابری جدید و نودهای Anycast هوشمند با تأخیر زیر ۱۰ میلی‌ثانیه فعال شدند.",
  linkText: "مشاهده نقشه پوشش شبکه",
  href: "#architecture",
};

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    label: "محصولات",
    href: "#products",
    children: [
      {
        title: "Smart DNS & Anycast",
        description: "مسیریابی هوشمند ترافیک با پوشش جهانی Anycast و تفکیک جغرافیایی GeoDNS.",
        href: "#smart-dns",
      },
      {
        title: "شبکه توزیع محتوا (CDN)",
        description: "تحویل محتوای فوق سریع با کش لبه هوشمند، فشرده‌سازی Brotli و HTTP/3.",
        href: "#cdn",
      },
      {
        title: "پایگاه‌داده‌های ابری",
        description: "دیتابیس‌های مدیریت‌شده PostgreSQL و Redis با تکثیر بلادرنگ و Auto-Failover.",
        href: "#database",
      },
      {
        title: "زیرساخت ابری و سرورهای لبه",
        description: "رایانش بدون سرور (Serverless) در لبه شبکه با استقرار خودکار و ایزوله‌سازی سخت‌افزاری.",
        href: "#infrastructure",
      },
    ],
  },
  {
    label: "معماری شبکه",
    href: "#architecture",
  },
  {
    label: "توسعه‌دهندگان",
    href: "#developers",
  },
  {
    label: "تعرفه‌ها",
    href: "#pricing",
  },
  {
    label: "کاربردها",
    href: "#use-cases",
  },
  {
    label: "پرسش‌های متداول",
    href: "#faq",
  },
];

export const FOOTER_COLUMNS = [
  {
    title: "محصولات",
    links: [
      { label: "Smart DNS", href: "#smart-dns" },
      { label: "شبکه توزیع محتوا (CDN)", href: "#cdn" },
      { label: "پایگاه داده ابری PostgreSQL", href: "#database" },
      { label: "کش ابری توزیع‌شده Redis", href: "#database" },
      { label: "سرورهای لبه (Edge Compute)", href: "#infrastructure" },
      { label: "مدیریت گواهی SSL خودکار", href: "#products" },
    ],
  },
  {
    title: "توسعه‌دهندگان",
    links: [
      { label: "مستندات API و SDK", href: "#developers" },
      { label: "ابزار خط فرمان (CLI)", href: "#developers" },
      { label: "ماژول رسمی Terraform", href: "#developers" },
      { label: "وضعیت پایداری شبکه (Status)", href: "#architecture" },
      { label: "گیت‌هاب و مثال‌های متن‌باز", href: "https://github.com" },
      { label: "راهنمای انتقال بدون قطعی", href: "#faq" },
    ],
  },
  {
    title: "کاربردها و راهکارها",
    links: [
      { label: "استارتاپ‌ها و محصولات SaaS", href: "#use-cases" },
      { label: "فروشگاه‌های اینترنتی پرترافیک", href: "#use-cases" },
      { label: "پلتفرم‌های مالی و بانکی", href: "#use-cases" },
      { label: "آژانس‌های توسعه وب و نرم‌افزار", href: "#use-cases" },
      { label: "معماری مقیاس‌پذیر سازمانی", href: "#use-cases" },
    ],
  },
  {
    title: "پلتفرم و پشتیبانی",
    links: [
      { label: "درباره معماری پلتفرم", href: "#why-us" },
      { label: "تعهدنامه سطح خدمات (SLA)", href: "#faq" },
      { label: "حفاظت سخت‌افزاری در برابر DDoS", href: "#why-us" },
      { label: "امنیت و استاندارد ISO 27001", href: "#why-us" },
      { label: "ارتباط با مهندسان زیرساخت", href: "#contact" },
    ],
  },
];
