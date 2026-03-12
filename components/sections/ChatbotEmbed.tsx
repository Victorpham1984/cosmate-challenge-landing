"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { Standard } from "@typebot.io/react";
import { useEffect, useRef } from "react";
import { pushDataLayer } from "@/lib/gtm";

export default function ChatbotEmbed() {
  const hasTrackedStart = useRef(false);

  useEffect(() => {
    pushDataLayer("typebot_render", {
      section: "chatbot",
      bot: "customer-support-zm",
    });
  }, []);

  const trackTypebotStart = () => {
    if (hasTrackedStart.current) return;
    hasTrackedStart.current = true;
    pushDataLayer("typebot_start", {
      section: "chatbot",
      bot: "customer-support-zm",
    });
  };

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
                Đăng ký tham gia COSMATE Challenge
              </span>
            </div>
            <div className="min-h-[500px]" onClick={trackTypebotStart}>
              <Standard
                typebot="customer-support-zm"
                apiHost="https://bot.bizmate.app"
                style={{ width: "100%", height: "500px" }}
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
