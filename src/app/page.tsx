"use client";
import InteractiveHero from "@/components/blocks/hero-section-nexus";
import { ScrollSection } from "@/components/blocks/scroll";
import { Services } from "@/components/blocks/services";
import Studio from "@/components/blocks/studio-section";
import { WhyChooseUs } from "@/components/blocks/why-choose-us";
import { Navbar } from "@/components/ui/navbar";
import Preloader from "@/components/ui/preloader";
import { Typewriter } from "@/components/ui/typewriter";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Lenis from '@studio-freight/lenis'
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      // duration: 1.2,
      // easing: (t) => Math.min(1, 1.001 - Math.pow(1, -10 * t)),
      // smoothWheel:true
    })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  const demoPlans = [
    {
      name: "STARTER",
      price: "50",
      yearlyPrice: "40",
      period: "per month",
      features: [
        "Up to 10 projects",
        "Basic analytics",
        "48-hour support response time",
        "Limited API access",
        "Community support",
      ],
      description: "Perfect for individuals and small projects",
      buttonText: "Know More",
      href: "/sign-up",
      isPopular: false,
    },
    {
      name: "PROFESSIONAL",
      price: "99",
      yearlyPrice: "79",
      period: "per month",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "24-hour support response time",
        "Full API access",
        "Priority support",
        "Team collaboration",
        "Custom integrations",
      ],
      description: "Ideal for growing teams and businesses",
      buttonText: "Know More",
      href: "/sign-up",
      isPopular: false,
    },
    {
      name: "ENTERPRISE",
      price: "299",
      yearlyPrice: "239",
      period: "per month",
      features: [
        "Everything in Professional",
        "Custom solutions",
        "Dedicated account manager",
        "1-hour support response time",
        "SSO Authentication",
        "Advanced security",
        "Custom contracts",
        "SLA agreement",
      ],
      description: "For large organizations with specific needs",
      buttonText: "Know More",
      href: "/contact",
      isPopular: false,
    },
    {
      name: "ENTERPRISE",
      price: "299",
      yearlyPrice: "239",
      period: "per month",
      features: [
        "Everything in Professional",
        "Custom solutions",
        "Dedicated account manager",
        "1-hour support response time",
        "SSO Authentication",
        "Advanced security",
        "Custom contracts",
        "SLA agreement",
      ],
      description: "For large organizations with specific needs",
      buttonText: "Know More",
      href: "/contact",
      isPopular: false,
    },
  ];
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vh", "100vh"]
    // { ease: [0.32, 0.72, 0, 1] }
  );

  return (
    <div>
      {/* <Preloader /> */}
      {/* <Navbar/> */}
      {/* <ScrollSection label="Offset: ['start start', 'end start']" offset={['start start', 'end start']} color="#FF6B6B" />
      <ScrollSection label="Offset: ['start end', 'end start']" offset={['start end', 'end start']} color="#FFD93D" />
      <ScrollSection label="Offset: ['center center', 'end center']" offset={['center center', 'end center']} color="#6BCB77" />
      <ScrollSection label="Offset: ['start start', 'start start'] (Instant)" offset={['start start', 'start start']} color="#4D96FF" /> */}
      <div ref={container} className=" will-change-transform overflow-hidden relative">
        <motion.div>
          <InteractiveHero/>
        </motion.div>
        {/* <motion.div style={{y}} className="bg-[#EEEEEE]">
          <Studio />
        </motion.div> */}
      </div>
      <div className="bg-[#EEEEEE]">
        <Studio />
      </div>
      <div className="bg-[#000]">
        <Services
          plans={demoPlans}
          title="Simple, Transparent Pricing"
          description="Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support."
        />
      </div>
      <WhyChooseUs />
      {/* <ParallaxSection/> */}
    </div>
  );
}
