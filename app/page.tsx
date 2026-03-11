"use client";

import Hero from "@/components/sections/Hero";
import VideoDemo from "@/components/sections/VideoDemo";
import OutputCards from "@/components/sections/OutputCards";
import TechFeatures from "@/components/sections/TechFeatures";
import Timeline from "@/components/sections/Timeline";
import BonusGift from "@/components/sections/BonusGift";
import ChatbotEmbed from "@/components/sections/ChatbotEmbed";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark overflow-hidden">
      <Hero />
      <VideoDemo />
      <OutputCards />
      <TechFeatures />
      <Timeline />
      <BonusGift />
      <ChatbotEmbed />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
