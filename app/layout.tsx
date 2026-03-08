import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "COSMATE Challenge — 10 Ngày Xây Hệ Thống Content Tự Động",
  description:
    "Từ 1 chủ đề → Avatar Video + Video Short + Social Post + Email Newsletter — đăng tự động lên 10+ nền tảng. 100% miễn phí, 100% opensource.",
  openGraph: {
    title: "COSMATE Challenge — 10 Ngày Xây Hệ Thống Content Tự Động",
    description:
      "Từ 1 chủ đề → Avatar Video + Video Short + Social Post + Email Newsletter — đăng tự động lên 10+ nền tảng.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.className} bg-dark text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
