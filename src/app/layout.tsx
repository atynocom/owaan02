import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  title: "پلتفرم زیرساخت دیجیتال و شبکه ابری توزیع‌شده | OWAAN",
  description:
    "پلتفرم پیشرفته زیرساخت دیجیتال، Smart DNS Anycast، شبکه توزیع محتوا (CDN)، پایگاه‌داده‌های ابری توزیع‌شده و سرورهای لبه با مقیاس‌پذیری آنی و تأخیر زیر ۱۰ میلی‌ثانیه.",
  keywords: [
    "زیرساخت ابری",
    "Smart DNS",
    "CDN",
    "شبکه توزیع محتوا",
    "پایگاه داده ابری",
    "Anycast DNS",
    "Cloud Infrastructure",
    "سرور ابری",
  ],
  authors: [{ name: "OWAAN Cloud Infrastructure" }],
  icons: {
    icon: "/images/owan-sign.svg",
    apple: "/images/owan-sign.svg",
  },
  openGraph: {
    title: "پلتفرم زیرساخت دیجیتال و شبکه ابری توزیع‌شده | OWAAN",
    description: "شبکه یکپارچه ابری برای توسعه‌دهندگان، استارتاپ‌ها و زیرساخت‌های بزرگ سازمانی با قابلیت اطمینان ۹۹.۹۹٪.",
    type: "website",
    locale: "fa_IR",
  },
  alternates: {
    canonical: "https://owaan.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
        />
        {/* Anti-flash theme script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('owaan-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-foreground selection:text-background transition-colors duration-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
