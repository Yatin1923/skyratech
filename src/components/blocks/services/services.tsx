import { motion } from "framer-motion";
import React from "react";
import SingleService from "./service";

export default function Services() {
  const services = [
    {
      image: "/images/website-service.webp",
      title: "Website Design",
      description: "We create visually stunning and user-friendly websites that reflect your brand identity and engage your target audience."
    },
    {
      image: "/images/marketing.webp",
      title: "Digital Marketing",
      description: "Grow your brand with smart digital strategies. From SEO and social media to performance marketing and email campaigns, we help you reach the right audience and boost your ROI."
    },
    {
      image: "/images/brand.webp",
      title: "Branding & Identity",
      description: "We shape memorable brand experiences through strategic logo design, color schemes, typography, and complete brand kits. Stand out with a visual identity that truly represents your business."
    },
    {
      image: "/images/web.webp",
      title: "Web Development",
      description: "We build high-performance websites using modern technologies. Whether it's a corporate site or a full-fledged web app, our development team ensures speed, security, and scalability."
    },
    {
      image: "/images/app.webp",
      title: "App Development",
      description: "Deliver seamless mobile experiences with custom Android and iOS apps. We specialize in intuitive, feature-rich apps that keep your users engaged and coming back for more."
    },
    {
      image: "/images/website-service.webp",
      title: "Maintainence & Support",
      description: "We keep your digital products running smoothly with regular updates, bug fixes, and performance monitoring. Focus on growth while we handle the tech."
    }
  ]
  return (
    <motion.div className="text-white min-h-screen container mx-auto py-20">
      <motion.h4 className="border-2 w-fit p-2 px-5 rounded-md opacity-90">
        Our Services
      </motion.h4>
      <motion.div className="flex items-center mt-10">
        <motion.h1 className="text-7xl font-bold w-[50%]">
          What We Do <span className="text-[#F4A261]">Best.</span>
        </motion.h1>
        <motion.p className="w-[50%] text-gray-400">
          At Skyratech, we offer a full spectrum of digital solutions to help
          your business thrive in the online world. Whether you need a stunning
          website, a mobile app, or a complete brand makeover — we’ve got you
          covered with design, development, and growth services tailored to your
          goals.
        </motion.p>
      </motion.div>
      <motion.div className="mt-20 grid grid-cols-12 gap-0">
        {services.map((service, index) => (
          <SingleService
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
