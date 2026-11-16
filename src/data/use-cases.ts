export interface UseCaseItem {
  id: string;
  tag: string;
  titleFa: string;
  titleEn: string;
  description: string;
  architectureHighlight: string;
  keyMetric: string;
  keyMetricLabel: string;
}

export const USE_CASES_DATA: UseCaseItem[] = [
  {
    id: "saas-platforms",
    tag: "محصولات نرم‌افزاری",
    titleFa: "پلتفرم‌های SaaS و خدمات نرم‌افزاری ابری",
    titleEn: "B2B & B2C SaaS Platforms",
    description: "توسعه سریع ویژگی‌های محصول با پایگاه‌داده‌های ایزوله، روت‌های لبه کم‌تأخیر و مدیریت خودکار زیرساخت بدون صرف وقت روی سرور.",
    architectureHighlight: "جداسازی داده‌های سازمانی با منطق چندمستأجره و کش هوشمند نشست‌ها در لایه Redis.",
    keyMetric: "۹۹.۹۹٪",
    keyMetricLabel: "پایداری دسترسی کاربران",
  },
  {
    id: "ecommerce",
    tag: "تجارت الکترونیک",
    titleFa: "فروشگاه‌های اینترنتی با ترافیک فصلی و کمپینی",
    titleEn: "High-Traffic E-Commerce",
    description: "عبور بدون اختلال از حراج‌های بزرگ و کمپین‌های پرفشار با توزیع بار کاتالوگ در کش لبه و پاسخ‌دهی آنی به میلیون‌ها سبد خرید همزمان.",
    architectureHighlight: "کاهش بار کوئری‌های تکراری دیتابیس تا ۹۰٪ به کمک لایه شتاب‌دهنده Anycast CDN.",
    keyMetric: "< ۳۵۰ms",
    keyMetricLabel: "زمان بارگذاری کامل صفحه محصول",
  },
  {
    id: "mobile-apps",
    tag: "اپلیکیشن‌های موبایل",
    titleFa: "بک‌اند اپلیکیشن‌های موبایل در مقیاس وسیع",
    titleEn: "Mobile Backend & Global APIs",
    description: "سرویس‌دهی امن به میلیون‌ها کاربر تلفن همراه با شبکه Anycast DNS که کوتاه‌ترین مسیر مخابراتی را بر اساس اپراتور کاربر انتخاب می‌کند.",
    architectureHighlight: "پروتکل HTTP/3 بر بستر QUIC جهت مقابله با افت سیگنال و تغییر شبکه در موبایل.",
    keyMetric: "۳.۲ برابر",
    keyMetricLabel: "سرعت پاسخ‌دهی API در اینترنت همراه",
  },
  {
    id: "agile-teams",
    tag: "استارتاپ‌ها",
    titleFa: "تیم‌های توسعه چابک و استارتاپ‌های پیشرو",
    titleEn: "Agile Engineering Teams",
    description: "استقرار بلادرنگ محیط‌های پیش‌نمایش (Preview Deployments)، انشعاب پایگاه‌داده با یک کلیک و حذف هزینه‌های سنگین استخدام مهندس DevOps تمام‌وقت.",
    architectureHighlight: "همگام‌سازی کامل با خط لوله Git و استقرار آنی تغییرات زیرساخت با Terraform.",
    keyMetric: "۷۰٪",
    keyMetricLabel: "کاهش زمان انتشار نسخه‌های جدید",
  },
  {
    id: "digital-agencies",
    tag: "آژانس‌های نرم‌افزاری",
    titleFa: "آژانس‌های طراحی وب و مجریان پروژه‌های سفارشی",
    titleEn: "Software & Web Agencies",
    description: "میزبانی ده‌ها وبسایت مشتریان با کنترل پنل یکپارچه، صدور خودکار فاکتور و تخصیص منابع تفکیک‌شده بدون تداخل پهنای باند مشتریان.",
    architectureHighlight: "پشتیبانی از دامنه‌های سفارشی نامحدود (Custom Domains) با صدور خودکار گواهی SSL.",
    keyMetric: "۰ قطعی",
    keyMetricLabel: "ایزولاسیون کامل منابع میان پروژه‌ها",
  },
  {
    id: "enterprise-finance",
    tag: "سامانه‌های سازمانی",
    titleFa: "زیرساخت‌های مالی، بانکی و سازمانی حساس",
    titleEn: "Enterprise & Financial Grade",
    description: "پاسخ‌گویی به سخت‌گیرانه‌ترین استانداردهای امنیتی داده، رمزنگاری نقطه به نقطه و ذخیره‌سازی داده‌ها در مناطق جغرافیایی تعیین‌شده با توافق‌نامه سطح خدمات اختصاصی.",
    architectureHighlight: "اتصال به شبکه داخلی سازمان از طریق تونل اختصاصی WireGuard با رمزنگاری سخت‌افزاری.",
    keyMetric: "۹۹.۹۹۹٪",
    keyMetricLabel: "تضمین پایداری قراردادی با جریمه",
  },
];
