import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { BentoCard, BentoGrid } from "../ui/bento-grid";
import {
  Package,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  NutIcon,
  Clock,
  Users,
  LifeBuoy,
  MessageSquare,
} from "lucide-react";
import { useRef } from "react";
export const WhyChooseUs = () => {
  const parentRef = useRef(null)
  const isInView = useInView(parentRef, { margin: '-20% 0px -20% 0px', once: false })
  const features = [
    {
      Icon: Clock,
      name: "Fast Turnaround",
      description: "We deliver projects on time without compromising quality.",
      href: "/",
      isInView:isInView,
      delay: 0.5,
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "bg-[#EEEEEE] lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: Package,
      name: "Why Choose Skyratech",
      main:true,
      delay: 0.2,
      isInView:isInView,
      description:
        " We’re more than developers—we’re your technology partners, helping you launch, grow, and scale with smart digital solutions.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "bg-[#EEEEEE] lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-6",
    },
    {
      Icon: LifeBuoy,
      name: "Ongoing Support",
      isInView:isInView,
      description:
        "We’re here after launch—bug fixes, upgrades, and marketing help.",
      href: "/",
      delay: 0.5,

      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "bg-[#EEEEEE] lg:col-start-6 lg:col-end-12 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Package,
      name: "End-to-End Solutions",
      isInView:isInView,
      description:
        "From strategy and design to development and digital marketing, we’ve got you covered.",
      href: "/",
      delay: 0.5,

      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "bg-[#EEEEEE] lg:row-start-3 lg:row-end-4 lg:col-start-4 lg:col-end-6",
    },
    {
      Icon: Users,
      name: "Skilled & Passionate Team",
      isInView:isInView,
      description:
        "Our developers, designers, and marketers are committed to excellence.",
      href: "/",
      delay: 0.5,

      cta: "Learn more",
      background: <img className="  absolute -right-20 -top-20 opacity-60" />,
      className: "bg-[#EEEEEE] bg-[#EEEEEE] lg:col-start-1 lg:col-end-4 lg:row-start-3 lg:row-end-4",
    },
   
    {
      Icon: Users,
      name: "Best Price Guarantee",
      isInView:isInView,
      description:
        "Our developers, designers, and marketers are committed to excellence.",
      href: "/",
      delay: 0.5,

      cta: "Learn more",
      background: <img className="  absolute -right-20 -top-20 opacity-60" />,
      className: "bg-[#EEEEEE] bg-[#EEEEEE] lg:col-start-6 lg:col-end-12 lg:row-start-2 lg:row-end-4",
    },
   
    {
      Icon: MessageSquare,
      name: "Transparent Communication",
      isInView:isInView,
      description:
        "Regular updates, direct access to developers, and no jargon.",
      href: "/",
      delay: 0.5,
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "bg-[#EEEEEE] lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-6",
    },
  ];
  return (
  <div ref={parentRef}  className="bg-[#EEEEEE]">
      <div className="min-h-screen py-20 container mx-auto flex flex-col gap-20 items-center">
        <motion.div className="">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl font-bold text-black">
              Why Choose Skyratech
            </h2>
            <p className="mt-4 text-base text-gray-600">
              We’re more than developers—we’re your technology partners, helping
              you launch, grow, and scale with smart digital solutions.
            </p>
          </div>
        </motion.div>
        <BentoGrid className="lg:grid-rows-3 lg:grid-cols-8">
          {features.map((feature) => (
           
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
};
