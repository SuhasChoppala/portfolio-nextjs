import Image from "next/image";
import { base, heading } from "@/constants/fonts";
import HeroSection from "@/components/marketing/hero";

export default function HomePage() {
  return (
    <div className="min-h-screen items-center justify-center font-base">
      <HeroSection />
    </div>
  );
}
