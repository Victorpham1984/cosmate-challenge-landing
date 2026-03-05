"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Card from "@/components/ui/Card";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const cards = [
  {
    icon: "📅",
    title: "15 Ngày, 2h/Ngày",
    description: "Lộ trình rõ ràng, từng bước một. Chỉ cần 2 giờ mỗi ngày để xây dựng hệ thống hoàn chỉnh.",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    icon: "✅",
    title: "4 Content Pipelines + Master Dashboard",
    description: "Tạo 4 pipeline content tự động và dashboard quản lý tất cả trong một nơi.",
    gradient: "from-orange-500 to-pink-500",
  },
  {
    icon: "🚀",
    title: "Hệ thống COSMATE hoàn chỉnh",
    description: "Kết thúc challenge với hệ thống content automation hoạt động 24/7.",
    gradient: "from-green-500 to-teal-500",
  },
];

export default function Overview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Bạn sẽ nhận được gì?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Mọi thứ bạn cần để xây dựng hệ thống content tự động từ A đến Z
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {cards.map((card, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-3xl mb-6`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
