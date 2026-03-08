"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ChatbotEmbed() {
  return (
    <section id="chatbot" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="text-center text-lg md:text-xl text-gray-300 mb-8">
            Sẵn sàng chưa?{" "}
            <span className="gradient-text font-semibold">
              Bắt đầu hành trình ngay!
            </span>
          </p>

          <div className="glow-border rounded-2xl bg-dark-card overflow-hidden">
            <div className="px-6 py-4 border-b border-dark-border flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-neon-blue animate-pulse-glow" />
              <span className="text-sm font-semibold text-white">
                Chat với COSMATE
              </span>
            </div>
            <div className="p-6 min-h-[400px] flex items-center justify-center">
              {/* Typebot embed script will be added by Sếp */}
              <div id="typebot-container" className="w-full h-full min-h-[350px]">
                <p className="text-gray-500 text-sm text-center">
                  Chatbot đang được kết nối...
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
