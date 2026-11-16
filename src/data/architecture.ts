export interface ArchitectureNode {
  id: string;
  step: string;
  titleFa: string;
  titleEn: string;
  description: string;
  latency: string;
  status: "عملیاتی" | "بهینه" | "فعال";
  protocol: string;
  specs: { label: string; value: string }[];
}

export const ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: "user",
    step: "۰۱",
    titleFa: "درخواست کاربر نهایی",
    titleEn: "End User Request",
    description: "کاربر یا ایجنت نرم‌افزاری درخواستی امن بر بستر اینترنت به سمت آدرس دامنه ارسال می‌کند.",
    latency: "۰ ms",
    status: "فعال",
    protocol: "HTTPS / TLS 1.3",
    specs: [
      { label: "پروتکل اولیه", value: "HTTP/3 & HTTP/2" },
      { label: "رمزنگاری", value: "TLS 1.3 256-bit" },
    ],
  },
  {
    id: "anycast-dns",
    step: "۰۲",
    titleFa: "دروازه Anycast DNS",
    titleEn: "Anycast BGP Fabric",
    description: "جدول مسیرهای BGP ترافیک را در کمتر از ۸ میلی‌ثانیه به نزدیک‌ترین نود جغرافیایی متصل می‌کند.",
    latency: "< ۸ ms",
    status: "عملیاتی",
    protocol: "BGP Anycast / UDP 53",
    specs: [
      { label: "توزیع جغرافیایی", value: "+۳۲۰ مرکز تبادل" },
      { label: "مسیریابی", value: "Geo-Lowest-Latency" },
    ],
  },
  {
    id: "cdn-edge",
    step: "۰۳",
    titleFa: "لایه کش و شتاب‌دهی CDN",
    titleEn: "Edge Caching & WAF",
    description: "محتوای استاتیک و پاسخ‌های کش‌شده بلافاصله در لبه تحویل شده و درخواست‌های مشکوک مسدود می‌شوند.",
    latency: "< ۲ ms",
    status: "عملیاتی",
    protocol: "HTTP/3 over QUIC",
    specs: [
      { label: "نرخ هیت حافظه", value: "۹۹.۴٪ Hit Rate" },
      { label: "فایروال WAF", value: "پالایش در لایه ۷" },
    ],
  },
  {
    id: "edge-compute",
    step: "۰۴",
    titleFa: "رایانش و پردازش لبه",
    titleEn: "V8 Isolate Serverless",
    description: "منطق برنامه و روت‌های داینامیک بدون نیاز به کانتینرهای سنگین، در صدم ثانیه اجرا و پاسخ داده می‌شوند.",
    latency: "< ۵ ms",
    status: "بهینه",
    protocol: "Micro-V8 Runtime",
    specs: [
      { label: "زمان راه‌اندازی", value: "۴.۲ میلی‌ثانیه" },
      { label: "ایزولاسیون", value: "سخت‌افزاری V8" },
    ],
  },
  {
    id: "cloud-db",
    step: "۰۵",
    titleFa: "پایگاه داده ابری مدیریت‌شده",
    titleEn: "HA Distributed PostgreSQL",
    description: "داده‌های تراکنشی با قابلیت ACID و تکثیر لحظه‌ای در کلاستر خواندن و نوشتن پایدار ذخیره می‌شوند.",
    latency: "< ۱ ms",
    status: "عملیاتی",
    protocol: "VPC Private / TCP 5432",
    specs: [
      { label: "تکثیر داده", value: "Multi-Zone HA" },
      { label: "پایداری داده", value: "۹۹.۹۹۹۹۹٪" },
    ],
  },
];
