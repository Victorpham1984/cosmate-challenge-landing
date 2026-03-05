import Hero from "@/components/sections/Hero";
import VideoSection from "@/components/sections/VideoSection";
import Overview from "@/components/sections/Overview";
import HowItWorks from "@/components/sections/HowItWorks";
import ChatbotSection from "@/components/sections/ChatbotSection";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoSection />
      <Overview />
      <HowItWorks />
      <ChatbotSection />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
