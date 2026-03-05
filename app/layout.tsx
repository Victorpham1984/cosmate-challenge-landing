import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "COSMATE Challenge: 10 Ngày Xây Dựng 4 Hệ Thống Content Tự Động",
  description: "Khóa học intensive 10 ngày, 3h/ngày. Xây dựng 4 content pipelines (Social, Email, Video, Avatar) tự động hóa hoàn toàn. Không cần freelancer, sở hữu hệ thống vĩnh viễn.",
  openGraph: {
    title: "COSMATE Challenge: 10 Ngày Xây Dựng 4 Hệ Thống Content Tự Động",
    description: "Khóa học intensive 10 ngày, 3h/ngày. Xây dựng 4 content pipelines (Social, Email, Video, Avatar) tự động hóa hoàn toàn. Không cần freelancer, sở hữu hệ thống vĩnh viễn.",
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
