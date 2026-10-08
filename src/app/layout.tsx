import type { Metadata } from "next";
import { Barlow_Condensed, DM_Mono, DM_Sans } from "next/font/google";
import { QueryProvider } from "@/components/providers/query-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eko170.com"),
  title: "EKO170 — Lagos' Biggest Cycling Challenge",
  description:
    "170 kilometres of closed roads from Eko Atlantic City through Victoria Island, Lekki, and Epe. Register for EKO170.",
  openGraph: {
    title: "EKO170 — Lagos' Biggest Cycling Challenge",
    description:
      "170 kilometres of closed roads from Eko Atlantic City through Victoria Island, Lekki, and Epe.",
    url: "https://www.eko170.com",
    siteName: "EKO170",
    type: "website",
    images: [
      {
        url: "/og-image.png", // resolved against metadataBase
        width: 1200,
        height: 630,
        alt: "EKO170 logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${dmSans.variable} ${dmMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <QueryProvider>{children}</QueryProvider>
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
