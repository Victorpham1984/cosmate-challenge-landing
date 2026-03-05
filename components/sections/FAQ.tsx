"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const faqs = [
  { q: "Tôi chưa biết gì về AI/automation, có phù hợp không?", a: "Có. Chương trình được thiết kế cho người mới từ zero đến basic. Mỗi buổi đều đi từng bước, có video hướng dẫn + live thực hành + hỗ trợ xử lý lỗi trực tiếp." },
  { q: "Thời gian học bao lâu mỗi ngày?", a: "Bạn cần 3h/ngày: 1h video bài tập về nhà + 2h workshop live. Tổng 30 giờ trong 10 ngày — nhịp độ nhanh, yêu cầu cam kết cao để đạt kết quả tốt nhất." },
  { q: "10 ngày có đủ thời gian không? Tôi lo không theo kịp.", a: "Chương trình được thiết kế intensive để build nhanh. Nếu bạn cam kết 3h/ngày và làm bài tập đầy đủ, bạn sẽ hoàn thành 4 pipelines. Live workshop giúp giải đáp ngay, không bỏ lại phía sau." },
  { q: "Công nghệ nào được sử dụng?", a: "Bạn sẽ dùng n8n, Baserow, FFmpeg, Postiz và AI APIs theo hướng no-code/low-code. Không yêu cầu nền tảng lập trình để bắt đầu." },
  { q: "Có hoàn tiền không nếu không phù hợp?", a: "Có chính sách hoàn tiền 7 ngày nếu bạn cảm thấy không phù hợp sau khi đã tham gia đến Day 3 và làm theo đúng hướng dẫn cơ bản. Mục tiêu là minh bạch và công bằng cho cả hai bên." },
  { q: "Tôi có được support không?", a: "Có. Bạn được tham gia live session mỗi ngày, hỏi đáp trong cộng đồng Skool và nhận hỗ trợ khi gặp lỗi triển khai để không bị \"kẹt\" giữa chừng." },
  { q: "Chi phí chạy hệ thống sau khi học xong là bao nhiêu?", a: "Tùy sản lượng nội dung, chi phí có thể bắt đầu rất thấp. Mốc tham khảo: khoảng 13.000 VNĐ cho 1 bài blog dùng API. n8n/Baserow có gói free để bạn khởi động trước khi scale." },
  { q: "Kết quả có giống demo không?", a: "Demo là case thật từ học viên, nhưng kết quả sẽ phụ thuộc vào mức độ áp dụng và thị trường của bạn. Chúng tôi tập trung vào hệ thống bền vững, không hứa hẹn \"thần tốc\" phi thực tế." },
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
