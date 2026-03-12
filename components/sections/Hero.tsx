"use client";

import { motion } from "framer-motion";
import { pushDataLayer } from "@/lib/gtm";

const inputItems = ["Topic", "YouTube Link", "Website Link"];
const outputItems = [
  { emoji: "🎭", label: "Avatar Video" },
  { emoji: "🎬", label: "Video Short" },
  { emoji: "📱", label: "Social Post" },
  { emoji: "📧", label: "Email" },
];

function FlowDiagram() {
  return (
    <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
      {/* Input */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="glow-border rounded-xl p-4 bg-dark-card min-w-[180px]"
      >
        <p className="text-xs text-neon-blue mb-2 font-semibold uppercase tracking-wider">Input</p>
        {inputItems.map((item) => (
          <div key={item} className="text-sm text-gray-300 py-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-blue inline-block" />
            {item}
          </div>
        ))}
      </motion.div>

      {/* Flow lines + Processing */}
      <div className="flex flex-col md:flex-row items-center gap-2">
        <div className="hidden md:block w-16 flow-line" />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-16 h-16 rounded-full bg-dark-card border border-neon-purple/40 flex items-center justify-center"
        >
          <span className="text-2xl">⚙️</span>
        </motion.div>
        <div className="hidden md:block w-16 flow-line" />
      </div>

      {/* Outputs */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="grid grid-cols-2 gap-3"
      >
        {outputItems.map((item) => (
          <div
            key={item.label}
            className="glow-border rounded-lg p-3 bg-dark-card text-center min-w-[110px] hover:border-neon-blue/50 transition-all"
          >
            <span className="text-xl">{item.emoji}</span>
            <p className="text-xs text-gray-300 mt-1">{item.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const scrollToChat = () => {
    pushDataLayer("cta_click", {
      cta_name: "hero_join_challenge",
      section: "hero",
    });
    document.getElementById("chatbot")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 grid-bg">
      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-neon-blue/30"
          style={{
            top: `${15 + i * 18}%`,
            left: `${10 + i * 20}%`,
          }}
          animate={{ y: [-10, 10, -10], opacity: [0.2, 0.6, 0.2] }}
          transition={{ repeat: Infinity, duration: 4 + i, ease: "easeInOut" }}
        />
      ))}

      <div className="text-center max-w-5xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Từ 5 Tiếng Mỗi Ngày Xuống 30 Phút —{" "}
          <span className="gradient-text">Xây Hệ Thống Content Tự Động</span> Trong 10 Ngày
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto"
        >
          Xây xong 4 pipeline: Social Post, Email, Video Ngắn, Avatar Video
          — bạn trở thành người điều khiển, không phải người cặm cụi gõ từng bài.
        </motion.p>

        <FlowDiagram />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-10"
        >
          <button
            onClick={scrollToChat}
            className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-xl text-lg glow-blue hover:scale-105 transition-transform"
          >
            Tham Gia Challenge Ngay
          </button>

          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              100% Miễn Phí
            </span>
            <span>•</span>
            <span>10 Ngày</span>
            <span>•</span>
            <span>Opensource Stack</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
