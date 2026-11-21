import { NextResponse } from "next/server";

export async function GET() {
  const content = `# OWAAN — Digital Infrastructure Platform
> پلتفرم جامع زیرساخت دیجیتال، شبکه Anycast DNS، شبکه توزیع محتوا (CDN)، پایگاه‌داده‌های ابری توزیع‌شده و پردازش در لبه شبکه.

## درباره پلتفرم
- نام سامانه: اُوان (OWAAN Cloud Infrastructure)
- آدرس وب‌سایت: https://owaan.com
- زبان اصلی: فارسی (Persian / Farsi) با پشتیبانی کامل از اصطلاحات فنی بین‌المللی
- سبک طراحی: مونوکروم ناب (Pure Monochrome) الهام‌گرفته از نظم مینیمال Linear و ساختار مهندسی Vercel

## محصولات اصلی
1. Smart DNS & Anycast BGP Fabric:
   - میانگین زمان پاسخ‌دهی جهانی: کمتر از ۸ میلی‌ثانیه
   - پوشش جهانی: بیش از ۳۲۰ نقطه تبادل ترافیک
   - پروتکل‌ها: DNS over HTTPS (DoH), DoT, UDP/TCP Port 53
   - توزیع سلامت‌محور ترافیک با تعویض خودکار در صورت خطا (Auto-Failover)

2. Content Delivery Network (CDN):
   - پروتکل پیشرفته: HTTP/3 بر بستر پروتکل QUIC
   - بهینه‌سازی خودکار تصاویر در لبه به AVIF و WebP
   - تخلیه آنی کش در کمتر از ۱۵۰ میلی‌ثانیه با تگ‌های کش (Surrogate-Keys)

3. Managed Cloud Databases:
   - پایگاه‌داده‌های مدیریت‌شده PostgreSQL و Redis با تکثیر همزمان در چندمنطقه
   - بازیابی در نقطه زمانی دلخواه (PITR) تا ۳۵ روز گذشته با دقت ثانیه
   - استخرهای اتصال توکار PgBouncer با تأخیر زیر ۲ میلی‌ثانیه

4. Edge Infrastructure & Serverless Compute:
   - محیط اجرای ایزوله سبک V8 با زمان راه‌اندازی زیر ۵ میلی‌ثانیه
   - یکپارچگی مستقیم با خطوط لوله CI/CD و پرووایدر رسمی Terraform

## پروتکل‌های امنیتی
- حفاظت خودکار در برابر حملات انکار سرویس (DDoS) تا ظرفیت بیش از ۲۵ ترابیت بر ثانیه
- گواهی‌های امنیتی SSL/TLS 1.3 خودکار در لبه
- شبکه خصوصی ایزوله (VPC) بر بستر WireGuard

## روش‌های مالی و تسویه
- پرداخت آنلاین از طریق درگاه پرداخت بانکی معتبر
- امکان پیش‌پرداخت اینترنتی جهت شارژ حساب اعتباری
- صدور فاکتور رسمی شرکتی با تسویه بانکی به شماره شبا
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
