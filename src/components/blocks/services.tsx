"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
// import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";
import { SkButton } from "../ui/flow-button";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Services({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const switchRef = useRef<HTMLButtonElement>(null);
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
      name: "STARTER1",
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
    }
  ];
  const cardContainer = useRef<HTMLDivElement>(null);
  const{scrollYProgress} = useScroll({
    target: cardContainer,
    offset: ["start center", "start start"],
  })
  // const y = useTransform(scrollYProgress, [0, 1],[0,100]);
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1])
  const x = useTransform(scrollYProgress, [0, 1], [-100, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          "hsl(var(--primary))",
          "hsl(var(--accent))",
          "hsl(var(--secondary))",
          "hsl(var(--muted))",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <div ref={cardContainer} className="container mx-auto min-h-screen py-20 ">
      <div className="text-center text-white space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg whitespace-pre-line">
          {description}
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <label className="relative inline-flex items-center cursor-pointer">
          <Label>
            <Switch
              ref={switchRef as any}
              checked={!isMonthly}
              onCheckedChange={handleToggle}
              className="relative"
            />
          </Label>
        </label>
        <span className="ml-2 font-semibold text-white">
          Annual billing <span className="text-primary">(Save 20%)</span>
        </span>
      </div>

      <div  className="relative flex justify-center items-center gap-4">
        {demoPlans.map((plan, index) => (
          <motion.div
            key={index}
            style={index==0?{x: useTransform(scrollYProgress, [0, 1], [-100 * (index + 1), 0]),opacity}:{x: useTransform(scrollYProgress, [0, 1], [-100 * (index + 1), 0]),opacity}}
            // initial={{ scale:0, y: 50, opacity: 1}} 
            // whileInView={{
            //   scale: 1,
            //   y: 0,
            //   opacity: 1,
            // }}
            // whileHover={{
            //   scale: 1.02,
            // }}
            // transition={{
            //   duration: 0.5,
            //   ease: "easeInOut",
            //   type: "spring",

            // }}
            className={cn(
              `rounded-2xl border-[1px] p-6 bg-transparent text-white text-center lg:flex lg:flex-col lg:justify-center relative border-muted-foreground `,
              "hover:border-white border-2",
              "flex flex-col",
              "hover:mt-0",
              // index === 0 || index === 2
              //   ? "z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg]"
              //   : "z-10",
              // index === 0 && "origin-right",
              // index === 2 && "origin-left"
            )}
          >
            {/* {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-primary py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center">
                <Star className="text-primary-foreground h-4 w-4 fill-current" />
                <span className="text-primary-foreground ml-1 font-sans font-semibold">
                  Popular
                </span>
              </div>
            )} */}
            <div className="flex-1 flex flex-col justify-between">
              <p className="text-base font-semibold text-muted-foreground">
                {plan.name}
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-white">
                  <NumberFlow
                    value={
                      isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)
                    }
                    format={{
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }}
                    // formate={(value) => `$${value}`}
                    transformTiming={{
                      duration: 500,
                      easing: "ease-out",
                    }}
                    willChange
                    className="font-variant-numeric: tabular-nums"
                  />
                </span>
                {plan.period !== "Next 3 months" && (
                  <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                    / {plan.period}
                  </span>
                )}
              </div>

              <p className="text-xs leading-5 text-muted-foreground">
                {isMonthly ? "billed monthly" : "billed annually"}
              </p>

              <ul className="mt-5 mb-5 gap-2 flex flex-col">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-white mt-1 flex-shrink-0" />
                    <span className="text-left">{feature}</span>
                  </li>
                ))}
              </ul>
              {/* <div className="mt-5"> */}
                {/* <hr className="w-full my-4" /> */}
                <SkButton text={plan.buttonText} />
              {/* </div> */}

              {/* <Link
                href={plan.href}
                className={cn(
                  buttonVariants({
                    variant: "outline",
                  }),
                  "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter bg-transparent text-foreground",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-1 hover:bg-primary hover:text-primary-foreground",
                   "hover:bg-white text-white-foreground"
                )}
              >
                {plan.buttonText}
              </Link> */}
              <p className="mt-6 text-xs leading-5 text-muted-foreground">
                {plan.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
