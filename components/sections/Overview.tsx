"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Card from "@/components/ui/Card";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const cards = [
  {
    icon: "📅",
    title: "10 Ngày Intensive, 3h/Ngày (1h Video + 2h Workshop)",
    description: "Toàn bộ lộ trình gói gọn trong 10 ngày: xây đủ nền tảng, 4 hệ thống content, tích hợp và vận hành. Tổng 30 giờ học — nhanh, dồn dập, hiệu quả; mỗi ngày đều có hướng dẫn và thực hành trực tiếp.",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    icon: "✅",
    title: "4 Hệ Thống Content + Dashboard Quản Lý",
    description: "Sau challenge, bạn sở hữu bộ máy tạo nội dung đa kênh: social post, email newsletter, video short, avatar video; kèm dashboard duyệt nội dung và lịch 30 ngày.",
    gradient: "from-orange-500 to-pink-500",
  },
  {
    icon: "🚀",
    title: "Từ 0 Đến Tự Động Hóa Hoàn Chỉnh Trong 10 Ngày",
    description: "1 đầu vào tạo ra 4 đầu ra cùng lúc, tiết kiệm thời gian triển khai mỗi tuần, giảm chi phí thuê ngoài và mở rộng sản xuất content mà vẫn giữ chất lượng ổn định. Nhịp độ nhanh, yêu cầu cam kết cao, đổi lại bạn có hệ thống vận hành thực tế ngay sau challenge.",
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
