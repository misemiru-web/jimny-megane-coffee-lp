import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAMPLE COFFEE STAND｜ミセミルWeb 制作デザインサンプル",
  description:
    "COFFEE STAND & BARを想定した、ミセミルWebの制作デザインサンプルです。レイアウト、配色、タイポグラフィ、レスポンシブ表現をご覧いただけます。",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  icons: {
    icon: "data:,",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5efe3",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
