"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useMemo,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
  type SVGProps,
} from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  type Transition,
  type VariantLabels,
  type Target,
  type AnimationControls,
  type TargetAndTransition,
  type Variants,
  useInView,
  useTransform,
  useSpring,
} from "framer-motion";
import { Typewriter } from "../ui/typewriter";
import ParticlesBackground from "../ui/particles-background";

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

interface RotatingTextRef {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
}
const ChevronDownIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-3 h-3 ml-1 inline-block transition-transform duration-200 group-hover:rotate-180"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);
interface Dot {
  x: number;
  y: number;
  baseColor: string;
  targetOpacity: number;
  currentOpacity: number;
  opacitySpeed: number;
  baseRadius: number;
  currentRadius: number;
}
const ImageVariants: Variants = {
  initial: {
    // width: 0,
  },
  animate: {
    width: "100%",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Studio: React.FC = () => {
  const parentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "center end"],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: parentRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const x = useTransform(scrollYProgress2, [0, 1], ["-300vw", "0"]);
  
  return (
    <>
      <ParticlesBackground color="#000"></ParticlesBackground>
      <div
        ref={parentRef}
        className="mx-auto pt-[100px] relative  min-h-screen flex flex-col"
      >
        {/* Image Section */}
        <motion.div
          className="absolute -top-30 right-0 overflow-hidden min-h-100"
          style={{ width }}
        >
          <motion.div className="absolute right-0 w-[75vw]">
            <motion.img
              src="images/team-img.webp"
              style={{ scale }}
              className="w-[100%] h-[100%] object-contain"
              alt="group image"
            />
          </motion.div>
        </motion.div>

        {/* Header */}
        <motion.div className="mt-100 mb-50 text-9xl w-[100%] text-nowrap overflow-x-hidden">
          {/* Rotating Text */}
          <motion.h1
            // initial={{ x: 0 }}
            animate={{ x: "-300vw" }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity,repeatType:"loop"  }}
            viewport={{ once: false, margin: "0px 0px -100px 0px" }}
            style={{
              x: useTransform(
                scrollYProgress2,
                [0, 1],
                [0, -1000],
                {
                  clamp:false,
                }
              )
                // stiffness: 100,
                // damping: 30,
                // mass: 1
              
            }}
            className="  text-black mb-4 font-semibold uppercase"
          >
            Digital Agency Solutions For your Business Digital Agency Solutions For your Business Digital Agency
            Solutions For your Business Digital Agency Solutions For your Business
          </motion.h1>
        </motion.div>

        <main className="container mx-auto flex-grow relative flex flex-col lg:flex-row justify-start gap-20  px-4 pb-16 mb-50 z-10">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: false, margin: "0px 0px -100px 0px" }}
            className="lg:w-1/3 flex justify-center"
          >
            <img className="object-contain" src="images/team-02-img.webp" alt="group image" />
          </motion.div>
          <div className="lg:w-1/2 flex justify-center flex-col">
          
            <>
              <motion.div
                className="text-[64px] text-black overflow-hidden"
              >
                <motion.h1
                 initial={{y: 80 }}
                 whileInView={{y: 0 }}
                 transition={{ duration: 0.5, ease: "easeInOut" }}>
                    Innovative Solutions for 
                </motion.h1>
              </motion.div>

              <motion.div
                className="text-[64px] text-black overflow-hidden"
              >
                <motion.h1
                 initial={{y: 80 }}
                 whileInView={{y: 0 }}
                 transition={{ duration: 0.5, ease: "easeInOut" }}>
                    Your Business
                </motion.h1>
              </motion.div>
              <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease:"easeInOut" }}
            viewport={{ once: false, margin: "0px 0px -100px 0px" }}
            className="hidden md:block text-4xl text-[64px] text-black mb-4 font-semibold">
                
            </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: false, margin: "0px 0px -100px 0px" }}
                className="block md:hidden text-4xl text-[64px] text-black mb-4 font-semibold"
              >
                Discover Our <span className="font-thin">Studio</span>
              </motion.h1>
            </>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: false, margin: "0px 0px -100px 0px" }}
              className="text-base  sm:text-lg lg:text-md text-gray-500 mt-10"
            >
              <motion.p>
                At our design studio, we are a collective of talented
                individuals ignited by our unwavering passion for transforming
                ideas into reality. With a harmonious blend of diverse
                backgrounds and a vast array of skill sets, we join forces to
                create compelling solutions for our esteemed clients.
              </motion.p>
              <br />
              <motion.p>
                Collaboration is at the heart of what we do. Our team thrives on
                the synergy that arises when unique perspectives converge,
                fostering an environment of boundless creativity. By harnessing
                our collective expertise, we produce extraordinary results that
                consistently surpass expectations.
              </motion.p>
            </motion.div>
          </div>
         
        </main>
      </div>
    </>
  );
};

export default Studio;
