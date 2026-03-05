"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { fadeInUp } from "@/lib/animations";

export default function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Xem cách một chủ agency chuyển sang tự động hóa 40+ bài/tháng
          </h2>
          <p className="text-gray-600 text-lg">Case study thực tế: từ 1 ý tưởng tạo đồng thời post mạng xã hội, email, video ngắn và avatar video.</p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary to-accent-pink aspect-video"
        >
          {/* Placeholder video frame */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <motion.button
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40 mb-4 mx-auto cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.button>
              <p className="text-white/70 text-sm">Video placeholder — Sẽ được thêm sau</p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 left-4 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-white/30" />
            <div className="w-3 h-3 rounded-full bg-white/30" />
            <div className="w-3 h-3 rounded-full bg-white/30" />
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-3">
              <div className="h-1 flex-1 bg-white/20 rounded-full">
                <div className="h-1 w-1/3 bg-white rounded-full" />
              </div>
              <span className="text-white/60 text-xs">0:00 / 1:30</span>
            </div>
          </div>

          {/* Subtitle indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <span className="bg-black/50 text-white text-sm px-3 py-1 rounded">CC</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
