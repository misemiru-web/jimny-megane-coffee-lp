import type { Metadata, Viewport } from "next";
import { assetPath } from "@/lib/asset-path";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jimny megane coffee｜用宗のcoffee stand & bar",
  description:
    "静岡市駿河区用宗のJimny megane coffee。南部鉄器で淹れるドリップ珈琲、食事やお酒など、店舗の雰囲気・アクセス・最新情報への導線を1ページに整理。",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  icons: {
    icon: [
      {
        url: assetPath("/branding/jimny-megane-coffee-icon-symbol.png"),
        type: "image/png",
      },
    ],
    shortcut: assetPath("/branding/jimny-megane-coffee-icon-symbol.png"),
    apple: assetPath("/branding/jimny-megane-coffee-icon-symbol.png"),
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
