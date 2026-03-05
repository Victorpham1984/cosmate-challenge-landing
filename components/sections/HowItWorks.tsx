"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const steps = [
  { icon: "💬", title: "Bắt đầu với AI chatbot", desc: "Trả lời vài câu hỏi ngắn để hệ thống xác định mục tiêu, mức độ hiện tại và gợi ý lộ trình phù hợp. Bạn nhận ngay hướng dẫn tham gia rõ ràng.", color: "bg-purple-500" },
  { icon: "💳", title: "Thanh toán qua QR code", desc: "Quét mã và thanh toán trong chưa đến 1 phút. Giao dịch xác nhận tự động, bảo mật, không cần chờ xử lý thủ công.", color: "bg-blue-500" },
  { icon: "📧", title: "Nhận email + link Skool group", desc: "Ngay sau khi thanh toán, bạn nhận email chào mừng, tài liệu chuẩn bị và link vào cộng đồng Skool để kết nối mentor và học viên.", color: "bg-pink-500" },
  { icon: "🚀", title: "Bắt đầu challenge ngày hôm sau", desc: "Vào ngày học đầu tiên, bạn được hướng dẫn thiết lập từ cơ bản, có phiên live hỗ trợ hằng ngày để đảm bảo theo kịp nhịp độ nhanh và hoàn thành đủ 4 hệ thống.", color: "bg-orange-500" },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Bắt đầu chỉ trong 4 bước
          </h2>
          <p className="text-gray-600 text-lg">Đơn giản, nhanh chóng, không phức tạp</p>
        </motion.div>

        <motion.div
          className="relative"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Timeline line */}
          <motion.div
            className="absolute left-8 md:left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent-pink to-accent origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex gap-6 items-start">
                <motion.div
                  className={`relative z-10 w-16 h-16 md:w-20 md:h-20 ${step.color} rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-lg`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {step.icon}
                </motion.div>
                <div className="pt-2 md:pt-4">
                  <h3 className="text-xl font-bold text-dark mb-2">
                    <span className="text-primary mr-2">Bước {i + 1}.</span>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
