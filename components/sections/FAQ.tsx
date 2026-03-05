"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const faqs = [
  { q: "Tôi chưa biết gì về AI, có phù hợp không?", a: "Hoàn toàn phù hợp! Challenge được thiết kế cho người mới bắt đầu. Bạn sẽ được hướng dẫn từng bước từ cơ bản đến nâng cao." },
  { q: "Thời gian học bao lâu mỗi ngày?", a: "Chỉ cần 2 giờ mỗi ngày trong 15 ngày. Bạn có thể linh hoạt sắp xếp theo lịch của mình." },
  { q: "Có hoàn tiền không nếu không phù hợp?", a: "Chúng tôi cam kết hoàn tiền 100% trong 3 ngày đầu nếu bạn cảm thấy không phù hợp." },
  { q: "Công nghệ nào được dùng?", a: "COSMATE sử dụng các công cụ AI hàng đầu, được tích hợp thành hệ thống tự động hoàn chỉnh. Không cần biết code." },
  { q: "Có support không?", a: "Có! Bạn sẽ được support 1-1 qua Skool group và có thể hỏi bất kỳ lúc nào trong suốt challenge." },
];

function FAQItem({ item, isOpen, toggle }: { item: typeof faqs[0]; isOpen: boolean; toggle: () => void }) {
  return (
    <motion.div
      className={`border-2 rounded-2xl overflow-hidden transition-colors ${isOpen ? "border-primary bg-primary/5" : "border-gray-200 bg-white"}`}
      layout
    >
      <button
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
        onClick={toggle}
      >
        <span className={`font-bold text-lg ${isOpen ? "text-primary" : "text-dark"}`}>{item.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-2xl shrink-0 text-primary"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-6 pb-5 text-gray-600 leading-relaxed">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Câu hỏi thường gặp</h2>
          <p className="text-gray-600 text-lg">Giải đáp mọi thắc mắc của bạn</p>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <FAQItem
                item={faq}
                isOpen={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
