"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

const cards = [
  {
    emoji: "🎭",
    title: "Avatar Video",
    desc: "AI thay mặt bạn 24/7 tạo nội dung Avatar xây dựng thương hiệu cá nhân",
  },
  {
    emoji: "🎬",
    title: "Video Short",
    desc: "Tự động sản xuất Short về tin tức, kiến thức, case study cho YouTube, TikTok, Reels",
  },
  {
    emoji: "📱",
    title: "Bundle Social Post",
    desc: "Chuẩn hóa và đồng nhất nội dung cho X, Facebook, LinkedIn theo Framework PARS",
  },
  {
    emoji: "📧",
    title: "Email Newsletter",
    desc: "Nurture audience tự động với nội dung chất lượng cao từ DeepResearch",
  },
];

export default function OutputCards() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-4">
            Hệ Thống Bạn Sẽ <span className="gradient-text">Sở Hữu</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            4 module sản xuất content tự động — chạy 24/7, thuộc về bạn vĩnh viễn
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02, borderColor: "rgba(0,212,255,0.5)" }}
                className="glow-border rounded-xl p-6 bg-dark-card transition-all h-full"
              >
                <span className="text-4xl block mb-4">{card.emoji}</span>
                <h3 className="text-xl font-semibold mb-2 text-white">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
