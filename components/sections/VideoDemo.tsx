"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function VideoDemo() {
  return (
    <section className="py-20 px-4">
      <ScrollReveal className="max-w-4xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
          Xem Demo Hệ Thống COSMATE <span className="gradient-text">Đang Chạy Thật</span>
        </h2>
        <div className="relative rounded-2xl overflow-hidden glow-border bg-dark-card p-2">
          {/* Monitor frame effect */}
          <div className="relative aspect-video bg-black/50 rounded-xl flex items-center justify-center">
            <video
              className="w-full h-full rounded-xl object-cover"
              poster=""
              controls
              preload="none"
            >
              {/* Video source will be added */}
              <source src="" type="video/mp4" />
            </video>
            {/* Play overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-neon-blue/20 backdrop-blur-sm flex items-center justify-center border border-neon-blue/40">
                <svg className="w-6 h-6 text-neon-blue ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
          {/* Monitor base */}
          <div className="flex justify-center mt-2">
            <div className="w-20 h-1 bg-dark-border rounded-full" />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
