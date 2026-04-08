import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { About } from "@/components/sections/About";
import { Trust } from "@/components/sections/Trust";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Ecosystem />
      <HowItWorks />
      <Pricing />
      <About />
      <Trust />
    </>
  );
}
