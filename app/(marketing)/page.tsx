import HeroSection from "@/components/marketing/hero";
import { AboutPage } from "./about/page";

export default function HomePage() {
  return (
    <div className="min-h-screen items-center justify-center font-base">
      <HeroSection />
      <AboutPage />
      <HeroSection />
      <HeroSection />
    </div>
  );
}
