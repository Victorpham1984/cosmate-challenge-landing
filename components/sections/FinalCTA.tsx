"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { pushDataLayer } from "@/lib/gtm";

export default function FinalCTA() {
  const scrollToChat = () => {
    pushDataLayer("cta_click", {
      cta_name: "final_join_challenge",
      section: "final_cta",
    });
    document.getElementById("chatbot")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Sẵn Sàng Xây Hệ Thống Content{" "}
            <span className="gradient-text">Của Riêng Bạn?</span>
          </h2>
          <p className="text-gray-400 mt-6 text-lg">
            10 ngày. 100% miễn phí. Hệ thống thuộc về bạn vĩnh viễn.
          </p>
          <button
            onClick={scrollToChat}
            className="mt-8 px-10 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-xl text-lg glow-blue hover:scale-105 transition-transform"
          >
            Tham Gia Challenge Ngay
          </button>
{/* removed */}
        </ScrollReveal>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-dark-border">
          <p className="text-gray-600 text-xs">
            © 2026 COSMATE. Built by BizMateHub
          </p>
        </div>
      </div>
    </section>
  );
}
