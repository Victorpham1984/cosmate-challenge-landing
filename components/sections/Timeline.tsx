"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const phases = [
  {
    days: "Day 1-2",
    title: "Foundation",
    desc: "Setup hệ thống + PARS Framework + DeepResearch",
    color: "border-neon-blue",
    glow: "shadow-[0_0_15px_rgba(0,212,255,0.2)]",
  },
  {
    days: "Day 3-6",
    title: "Build 4 Modules",
    desc: "Social Post → Email Newsletter → Video Short → Avatar Video",
    color: "border-neon-purple",
    glow: "shadow-[0_0_15px_rgba(139,92,246,0.2)]",
  },
  {
    days: "Day 7-9",
    title: "Integration",
    desc: "Master Workflow (1 input → 4 outputs) + Human In the Loop + Optimization",
    color: "border-neon-cyan",
    glow: "shadow-[0_0_15px_rgba(6,182,212,0.2)]",
  },
  {
    days: "Day 10",
    title: "Launch Day 🚀",
    desc: "Graduation + hệ thống chạy thật",
    color: "border-green-400",
    glow: "shadow-[0_0_15px_rgba(74,222,128,0.2)]",
  },
];

export default function Timeline() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-4">
            Hành Trình <span className="gradient-text">10 Ngày</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Từ zero đến hệ thống hoàn chỉnh
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-dark-border" />

          <div className="space-y-8">
            {phases.map((phase, i) => (
              <ScrollReveal key={phase.days} delay={i * 0.15}>
                <div className="flex gap-4 md:gap-6 items-start">
                  <div className={`relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-dark-card border-2 ${phase.color} ${phase.glow} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-xs md:text-sm font-bold text-white">
                      {phase.days.replace("Day ", "")}
                    </span>
                  </div>
                  <div className="pt-2 md:pt-3">
                    <h3 className="text-lg font-semibold text-white">
                      {phase.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{phase.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal>
          <p className="text-center text-gray-500 text-sm mt-12">
            3h/ngày (1h video + 2h workshop thực hành)
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
