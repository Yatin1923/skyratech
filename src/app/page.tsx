"use client"
import InteractiveHero from "@/components/blocks/hero-section-nexus";
import { Services } from "@/components/blocks/services";
import Studio from "@/components/blocks/studio-section";
import { WhyChooseUs } from "@/components/blocks/why-choose-us";
import { Navbar } from "@/components/ui/navbar";
import Preloader from "@/components/ui/preloader";
import { Typewriter } from "@/components/ui/typewriter";
import Image from "next/image";

export default function Home() {
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
    }
  ];
  return (
    <div>
      {/* <Preloader /> */}
      <Navbar/>
      <InteractiveHero/>
      <div className="bg-[#EEEEEE]">

      <Studio/>
      </div>
      <div className="bg-[#000]">
      <Services 
        plans={demoPlans}
        title="Simple, Transparent Pricing"
        description="Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support."
      />
    </div>
      <WhyChooseUs/>
    </div>

  );
}
