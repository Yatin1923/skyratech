"use client"
import InteractiveHero from "@/components/blocks/hero-section-nexus";
import { Navbar } from "@/components/ui/navbar";
import { Typewriter } from "@/components/ui/typewriter";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <InteractiveHero/>
    </div>

  );
}
