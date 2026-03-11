"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const faqs = [
  { q: "Challenge này có thật sự miễn phí không?", a: "100% miễn phí. Không phí ẩn, không upsell." },
  { q: "Tôi không biết code, có tham gia được không?", a: "Hoàn toàn được. Hệ thống dùng giao diện kéo-thả (n8n, Baserow), có hướng dẫn từng bước." },
  { q: "10 ngày có đủ thời gian xây xong hệ thống?", a: "Đủ. Chương trình thiết kế intensive 3h/ngày, có template và workflow sẵn để bạn customize." },
  { q: "Cần chuẩn bị gì trước khi tham gia?", a: "Laptop/PC, internet ổn định, và sẵn sàng cam kết 3h/ngày trong 10 ngày." },
  { q: "Sau 10 ngày tôi sẽ có gì?", a: "1 hệ thống hoàn chỉnh: nhập topic → tự động tạo 4 loại content → đăng lên 10+ nền tảng. Của bạn vĩnh viễn." },
  { q: "Opensource có nghĩa là chất lượng kém?", a: "Tôi lựa chọn những ứng dụng mã nguồn mở tốt nhất thị trường hiện tại với chi phí tối thiểu, là các ứng dụng hàng trăm nghìn khách hàng cài đặt sử dụng, bạn tiết kiệm chi phí mà không giảm chất lượng." },
  { q: "Có hỗ trợ sau challenge không?", a: "Có. Cộng đồng COSMATE tiếp tục hỗ trợ, chia sẻ workflow mới và cập nhật tính năng." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="glow-border rounded-xl bg-dark-card overflow-hidden cursor-pointer transition-all"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between p-5">
        <span className="text-sm md:text-base font-medium text-white pr-4">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          className="text-neon-blue text-xl flex-shrink-0"
        >
          +
        </motion.span>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-5 pb-5 text-sm text-gray-400 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-20 px-4 grid-bg">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
            Câu Hỏi <span className="gradient-text">Thường Gặp</span>
          </h2>
        </ScrollReveal>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <FAQItem q={faq.q} a={faq.a} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
