import { motion } from "framer-motion";
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
export const WhyChooseUs = () => {
  const features = [
    {
      Icon: Package,
      name: "End-to-End Solutions",
      description:
        "From strategy and design to development and digital marketing, we’ve got you covered.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "bg-[#EEEEEE] lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: Clock,
      name: "Fast Turnaround",
      description: "We deliver projects on time without compromising quality.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "bg-[#EEEEEE] lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: Users,
      name: "Skilled & Passionate Team",
      description:
        "Our developers, designers, and marketers are committed to excellence.",
      href: "/",
      cta: "Learn more",
      background: <img className="  absolute -right-20 -top-20 opacity-60" />,
      className: "bg-[#EEEEEE] bg-[#EEEEEE] lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: LifeBuoy,
      name: "Ongoing Support",
      description:
        "We’re here after launch—bug fixes, upgrades, and marketing help.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "bg-[#EEEEEE] lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: MessageSquare,
      name: "Transparent Communication",
      description:
        "Regular updates, direct access to developers, and no jargon.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "bg-[#EEEEEE] lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];
  return (
    <div className="bg-[#EEEEEE]">
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
        <motion.div>
          <BentoCard key={features[0].name} {...features[0]} />
        </motion.div>
        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
};
