"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  const scrollToChatbot = () => {
    document.getElementById("typebot-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-primary to-accent-pink">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-float-delay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-pink/10 rounded-full blur-3xl animate-float-slow" />
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-[15%] right-[20%] w-16 h-16 border-4 border-white/20 rounded-xl"
          animate={{ rotate: 360, y: [-10, 10, -10] }}
          transition={{ rotate: { duration: 20, repeat: Infinity }, y: { duration: 4, repeat: Infinity } }}
        />
        <motion.div
          className="absolute bottom-[25%] left-[15%] w-12 h-12 bg-accent/30 rounded-full"
          animate={{ scale: [1, 1.3, 1], y: [-15, 15, -15] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-[40%] right-[10%] w-8 h-8 bg-yellow-400/30 rotate-45"
          animate={{ rotate: [45, 225, 45], x: [-10, 10, -10] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/20">
            🚀 Challenge mới — Bắt đầu ngay hôm nay
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
        >
          10 Ngày Xây Dựng 4 Hệ Thống{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-accent bg-clip-text text-transparent">
            Content Tự Động
          </span>{" "}
          — Không Cần Freelancer
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Khóa học intensive, dồn dập và hiệu quả cao: 10 ngày để build trọn bộ Social Post, Email Newsletter, Video Short, Avatar Video. Tổng 30 giờ học (1h video + 2h workshop/ngày), nhịp độ nhanh nhưng kết quả rõ ràng.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <Button onClick={scrollToChatbot} className="text-xl px-10 py-5">
            Bắt Đầu Challenge Ngay →
          </Button>
        </motion.div>

        <motion.p variants={fadeInUp} className="mt-6 text-white/60 text-sm">
          ✓ Miễn phí tư vấn &nbsp; ✓ Không cần kinh nghiệm &nbsp; ✓ Support 1-1
        </motion.p>
      </motion.div>
    </section>
  );
}
