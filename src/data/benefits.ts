export interface BenefitModule {
  id: string;
  number: string;
  titleFa: string;
  titleEn: string;
  description: string;
  metric: string;
  metricLabel: string;
  technicalDetails: string;
}

export const BENEFIT_MODULES: BenefitModule[] = [
  {
    id: "low-latency",
    number: "۰۱",
    titleFa: "تأخیر زیر ۱۰ میلی‌ثانیه در گستره شبکه",
    titleEn: "Sub-10ms Global Latency",
    description: "با استقرار پاپ‌سایت‌های مجهز به روت‌های Anycast BGP، درخواست‌های کاربران بدون واسطه‌های غیرضروری به نزدیک‌ترین هسته فیزیکی متصل می‌شوند.",
    metric: "< ۱۰ ms",
    metricLabel: "میانگین تأخیر نهایی",
    technicalDetails: "بهینه‌سازی شده برای پروتکل TCP Fast Open و استقرار مستقیم در نقاط تبادل داده اصلی (IXP).",
  },
  {
    id: "ddos-defense",
    number: "۰۲",
    titleFa: "سپر دفاعی چندلایه در برابر حملات DDoS",
    titleEn: "Multi-Terabit DDoS Shield",
    description: "سامانه پالایش ترافیک در لایه‌های ۳، ۴ و ۷ به طور آنی حملات سیل‌آسای حجمی و حملات هدفمند لایه اپلیکیشن را بدون مسدودسازی کاربران واقعی دفع می‌کند.",
    metric: "۲۵+ Tbps",
    metricLabel: "ظرفیت پالایش بلادرنگ",
    technicalDetails: "تجزیه و تحلیل الگوریتمی ترافیک با یادگیری ماشین و مسدودسازی در لبه نودها پیش از رسیدن به سرور.",
  },
  {
    id: "infrastructure-as-code",
    number: "۰۳",
    titleFa: "یکپارچگی عمیق با Terraform و CI/CD",
    titleEn: "Native Infrastructure as Code",
    description: "تمام منابع از رکوردهای DNS تا کلاسترهای دیتابیس و تنظیمات CDN با پرووایدر رسمی Terraform و API مهندسی‌شده قابل مدیریت و نسخه‌بندی هستند.",
    metric: "۱۰۰٪",
    metricLabel: "پوشش اتوماسیون API",
    technicalDetails: "ارائه خروجی‌های ساخت‌یافته JSON و توکن‌های دسترسی با کنترل نقش‌های تفکیک‌شده (RBAC).",
  },
  {
    id: "zero-downtime-scale",
    number: "۰۴",
    titleFa: "مقیاس‌پذیری آنی با تضمین صفر قطعی",
    titleEn: "Instant Zero-Downtime Scaling",
    description: "هنگام افزایش ناگهانی ترافیک، زیرساخت به طور اتوماتیک منابع پردازشی و استخرهای اتصال را بدون نیاز به ری‌استارت یا توقف سرویس گسترش می‌دهد.",
    metric: "۰ ثانیه",
    metricLabel: "توقف سرویس حین مقیاس",
    technicalDetails: "معماری توزیع بار الاستیک با پایش لایه سلامت در دوره‌های زمانی میلی‌ثانیه‌ای.",
  },
  {
    id: "high-availability-db",
    number: "۰۵",
    titleFa: "پایگاه‌داده‌های مقاوم با تعویض خودکار سرور",
    titleEn: "High-Availability Auto-Failover",
    description: "در صورت بروز مشکل سخت‌افزاری در هر نود، ترافیک خواندن و نوشتن دیتابیس در کمتر از ۳ ثانیه بدون قطعی به نسخه پشتیبان همگام منتقل می‌شود.",
    metric: "۹۹.۹۹٪",
    metricLabel: "تضمین پایداری در قرارداد",
    technicalDetails: "تکثیر همزمان (Synchronous Replication) روی دیسک‌های NVMe در مناطق دسترسی ایزوله فیزیکی.",
  },
  {
    id: "microsecond-telemetry",
    number: "۰۶",
    titleFa: "مانیتورینگ و تله‌متری با تفکیک میکروثانیه",
    titleEn: "Microsecond Realtime Telemetry",
    description: "پایش شفاف تک‌تک درخواست‌ها، خطاهای شبکه، پهنای باند مصرفی و وضعیت کش به صورت زنده بدون نیاز به ابزارهای سنگین شخص ثالث.",
    metric: "۱۰۰ میلی‌ثانیه",
    metricLabel: "فاصله زمانی به‌روزرسانی متریک‌ها",
    technicalDetails: "جریان داده‌های OpenTelemetry با قابلیت فیلترگذاری بلادرنگ بر اساس کدهای وضعیت HTTP.",
  },
];
