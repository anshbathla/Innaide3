"use client";


import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";

import Resources from "@/components/Resources";

import FAQ from "@/components/FAQ"
import Team from "@/components/Team";

import Work from "@/components/Work";
import Services from "@/components/AppData";
import USP from"@/components/USP";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <HeroSection />
      <Features />
     
      <Resources />
      <FAQ/>
      <Work />
      <USP/>
     <Services/>
      {/* <Team /> */}
      <ContactUs/>
    </div>
  );
}
