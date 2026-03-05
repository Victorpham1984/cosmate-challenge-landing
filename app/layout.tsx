import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "COSMATE Challenge — 10 Ngày Xây Dựng Hệ Thống Content Tự Động",
  description: "Từ zero đến tự động hóa 4 loại content cùng lúc — không cần thuê freelancer. Tham gia challenge 15 ngày cùng COSMATE.",
  openGraph: {
    title: "COSMATE Challenge — 10 Ngày Xây Dựng Hệ Thống Content Tự Động",
    description: "Từ zero đến tự động hóa 4 loại content cùng lúc — không cần thuê freelancer.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
