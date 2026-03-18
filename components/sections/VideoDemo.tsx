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
            <iframe
              className="w-full h-full absolute top-0 left-0 rounded-xl"
              src="https://www.youtube.com/embed/EVY3Utsala4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
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
