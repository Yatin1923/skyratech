"use client";
import Hero from "@/components/blocks/hero";
import { WhyChooseUs } from "@/components/blocks/why-choose-us";
import { Navbar } from "@/components/ui/navbar";
import Preloader from "@/components/ui/preloader";
import { Typewriter } from "@/components/ui/typewriter";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Solutions from "@/components/blocks/solutions";
import Approach from "@/components/blocks/approach";
import Services from "@/components/blocks/services/services";
import Pricing from "@/components/blocks/pricing";
import Stats from "@/components/blocks/stats";
import TrustedClients from "@/components/blocks/trusted-clients";
import ContactUs from "@/components/blocks/contact";
import Footer from "@/components/blocks/footer";
import RootLayout from "./layout";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      // duration: 1.2,
      // easing: (t) => Math.min(1, 1.001 - Math.pow(1, -10 * t)),
      // smoothWheel:true
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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
    ["0vh", "-50vh"]
  );

  return (
    <div className="overflow-hidden">
      {/* <Preloader /> */}
      <Navbar />
      {/* <ScrollSection label="Offset: ['start start', 'end start']" offset={['start start', 'end start']} color="#FF6B6B" />
      <ScrollSection label="Offset: ['start end', 'end start']" offset={['start end', 'end start']} color="#FFD93D" />
      <ScrollSection label="Offset: ['center center', 'end center']" offset={['center center', 'end center']} color="#6BCB77" />
      <ScrollSection label="Offset: ['start start', 'start start'] (Instant)" offset={['start start', 'start start']} color="#4D96FF" /> */}
      <div className="will-change-transform overflow-hidden relative">
        <motion.div>
          <Hero />
        </motion.div>
        {/* <motion.div style={{y}} className="bg-[#EEEEEE]">
          <Studio />
        </motion.div> */}
      </div>
      <div className="bg-[#EEEEEE]">
        <Solutions />
      </div>
      <div className="bg-[#000]">
        <Approach />
      </div>
      <div className="bg-[#0E0E0E]">
        <Services />
      </div>
      {/* <Pricing /> */}
      <div className="bg-black text-white">
        <Stats />
      </div>
      <div ref={container} className="will-change-transform overflow-hidden relative">
        <TrustedClients />
      </div>
      <motion.div className="bg-black rounded-t-2xl">
        <ContactUs />
      </motion.div>
      <motion.div className="bg-black text-white">
        <Footer />
      </motion.div>

    </div>

  );
}
