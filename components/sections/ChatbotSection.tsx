"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { fadeInUp } from "@/lib/animations";

export default function ChatbotSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showPulse, setShowPulse] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPulse(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="typebot-section"
      className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-accent-pink/5 to-accent/5 relative overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-pink/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Bắt đầu bằng cách trả lời vài câu hỏi với AI assistant
          </h2>
          <p className="text-gray-600 text-lg">
            Xem lộ trình phù hợp cho bạn
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={`relative bg-white rounded-3xl shadow-2xl border border-gray-100 min-h-[500px] flex items-center justify-center ${showPulse ? "animate-pulse-slow" : ""}`}
        >
          {/* Typebot embed placeholder */}
          <div id="typebot-container" className="w-full h-full min-h-[500px] flex items-center justify-center p-8">
            <div className="text-center text-gray-400">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent-pink rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <p className="font-medium text-dark">Typebot chatbot sẽ được nhúng tại đây</p>
              <p className="text-sm mt-2">Đang chờ embed script...</p>
            </div>
          </div>
          {/* Typebot embed script from Sếp */}
        </motion.div>
      </div>
    </section>
  );
}
