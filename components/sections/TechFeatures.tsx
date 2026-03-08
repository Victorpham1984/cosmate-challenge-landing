"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  { emoji: "🔓", title: "100% Opensource", desc: "n8n, Baserow, FFmpeg, Postiz — tiết kiệm chi phí SaaS" },
  { emoji: "👤", title: "Human In the Loop", desc: "Kiểm duyệt chặt chẽ từ con người ở công đoạn quan trọng" },
  { emoji: "🔍", title: "DeepResearch", desc: "Dẫn chứng thực tế, không AI bịa — nội dung có độ tin cậy cao" },
  { emoji: "📋", title: "PARS Framework", desc: "Content đồng bộ xuyên suốt mọi nền tảng" },
  { emoji: "📅", title: "Auto-Scheduling", desc: "Đăng bài tự động lên YouTube, TikTok, Instagram, X, LinkedIn, Wordpress, Email, Blog…" },
  { emoji: "📊", title: "Baserow Dashboard", desc: "Quản lý sản xuất nội dung trên giao diện trực quan miễn phí (giống Airtable)" },
  { emoji: "🔄", title: "Xây 1 lần, mở rộng mãi", desc: "Workflow có khả năng nâng cấp tính năng mới theo thời gian" },
];

const pipelineSteps = [
  "Create Topics",
  "In-Processing Blog",
  "Generate Content",
  "Finalize Post",
  "Multi Pipeline",
  "Approve Image",
  "Publishing",
  "Backup",
];

export default function TechFeatures() {
  return (
    <section className="py-20 px-4 grid-bg">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-4">
            Sức Mạnh <span className="gradient-text">Bên Trong</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Công nghệ đẳng cấp, chi phí bằng 0
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.05}>
              <div className="glow-border rounded-xl p-5 bg-dark-card hover:border-neon-purple/40 transition-all h-full">
                <span className="text-2xl">{f.emoji}</span>
                <h3 className="font-semibold mt-2 mb-1 text-white">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pipeline Visualization */}
        <ScrollReveal>
          <div className="glow-border rounded-xl p-6 bg-dark-card">
            <p className="text-xs text-neon-blue uppercase tracking-wider mb-4 font-semibold">
              Pipeline Visualization — Baserow Dashboard
            </p>
            <div className="flex flex-wrap gap-2 items-center">
              {pipelineSteps.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="text-xs bg-dark-border/50 border border-dark-border rounded-lg px-3 py-2 text-gray-300 whitespace-nowrap">
                    {step}
                  </span>
                  {i < pipelineSteps.length - 1 && (
                    <span className="text-neon-blue text-xs">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
