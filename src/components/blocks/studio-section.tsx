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

const Studio: React.FC = () => {

  return (
    <>
    <ParticlesBackground color="#000"></ParticlesBackground>
    <div className="container mx-auto pt-[100px] relative  min-h-screen flex flex-col overflow-x-hidden ">
      <main className="flex-grow relative flex flex-col lg:flex-row justify-start gap-20  px-4 pb-16 z-10">
       <div className="lg:w-1/2 flex justify-center flex-col">
       <>
            <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease:"easeInOut" }}
            viewport={{ once: false, margin: "0px 0px -100px 0px" }}
            className="hidden md:block text-4xl text-[64px] text-black mb-4 font-semibold">
                Discover 
            </motion.h1>
            <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease:"easeInOut" }}
            viewport={{ once: false, margin: "0px 0px -100px 0px" }}
            className="hidden md:block text-4xl text-[64px] text-black mb-4 font-semibold">
                Our <span className="font-thin">Studio</span>
            </motion.h1>
            <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease:"easeInOut" }}
            viewport={{ once: false, margin: "0px 0px -100px 0px" }}
            className="block md:hidden text-4xl text-[64px] text-black mb-4 font-semibold">
                Discover Our <span className="font-thin">Studio</span>
            </motion.h1>
        </>
            <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease:"easeInOut" }}
            viewport={{ once: false, margin: "0px 0px -100px 0px" }}
            className="text-base  sm:text-lg lg:text-md text-gray-500 mt-10">
                <motion.p>
                    At our design studio, we are a collective of talented individuals ignited by our unwavering passion for transforming ideas into reality. With a harmonious blend of diverse backgrounds and a vast array of skill sets, we join forces to create compelling solutions for our esteemed clients.
                </motion.p>
                <br />
                <motion.p>
                Collaboration is at the heart of what we do. Our team thrives on the synergy that arises when unique perspectives converge, fostering an environment of boundless creativity. By harnessing our collective expertise, we produce extraordinary results that consistently surpass expectations.
                </motion.p>
            </motion.div>

       </div>
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease:"easeInOut" }}
        viewport={{ once: false, margin: "0px 0px -100px 0px" }}
        className="lg:w-1/3 flex justify-center">
            <img className="object-contain" src="images/team.jpg" alt="group image" />
        </motion.div>
      </main>

    </div>
    </>

  );
}

export default Studio;
