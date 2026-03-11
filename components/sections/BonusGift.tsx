"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const prompts = [
  { emoji: "📣", label: "Marketing", desc: "200+ Prompts chiến lược", color: "from-neon-blue to-blue-500" },
  { emoji: "💰", label: "Sales", desc: "200+ Prompts tăng chuyển đổi", tag: "New" , color: "from-neon-purple to-purple-500" },
  { emoji: "📊", label: "Business", desc: "200+ Prompts hỗ trợ ra quyết định", color: "from-emerald-400 to-teal-500" },
];

export default function BonusGift() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="text-4xl">🎁</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-4">
              Tặng Ngay Khi <span className="gradient-text">Tham Gia</span>
            </h2>
            <p className="text-gray-400 mt-3 text-lg">
              Bộ <span className="text-white font-semibold">600+ Mega-Prompts</span> trị giá{" "}
              <span className="text-neon-blue font-bold">$50</span>
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {prompts.map((p, i) => (
            <ScrollReveal key={p.label} delay={i * 0.1}>
              <div className="glow-border rounded-xl bg-dark-card p-6 text-center hover:border-neon-purple/40 transition-all h-full relative overflow-hidden">
                {p.tag && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold uppercase bg-gradient-to-r from-neon-blue to-neon-purple text-white px-2 py-0.5 rounded-full">
                    {p.tag}
                  </span>
                )}
                <span className="text-3xl">{p.emoji}</span>
                <h3 className="font-semibold text-white mt-3 text-lg">{p.label}</h3>
                <p className="text-gray-400 text-sm mt-1">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
