"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToChatbot = () => {
    document.getElementById("typebot-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-purple-700 to-accent-pink relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-4 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-5xl font-extrabold text-white mb-6"
        >
          Đừng Để Việc Sản Xuất Content Luôn Bị Trễ Hạn Thêm 1 Tháng Nữa
        </motion.h2>

        <motion.p variants={fadeInUp} className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          Đã được triển khai bởi cộng đồng agency, marketer và chủ doanh nghiệp muốn tự chủ hệ thống content.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <Button onClick={scrollToChatbot} className="text-xl px-12 py-5 bg-white !text-primary font-extrabold shadow-2xl">
            Bắt Đầu Challenge Ngay 🚀
          </Button>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-10 flex items-center justify-center gap-6 flex-wrap">
          <span className="text-white/70 text-sm flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
            Cộng đồng agency & marketer
          </span>
          <span className="text-white/70 text-sm flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
            Thanh toán an toàn
          </span>
          <span className="text-white/70 text-sm flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
            Hoàn tiền 7 ngày
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
