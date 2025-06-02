"use client";
import React, { type MouseEvent as ReactMouseEvent } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { Squares } from "../ui/squares-background";
import { SkButton } from "../ui/flow-button";
import { Typewriter } from "../ui/typewriter";
import { ArrowRight, Star } from "lucide-react";

const Hero: React.FC = () => {
  const heroCtn = React.useRef(null);
  const {scrollYProgress} = useScroll({
    target: heroCtn,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress,[0,1],["0vh","-100vh"])
  const x = useTransform(scrollYProgress,[0,1],["0vh","-100vw"])
  const contentDelay = 0.3;
  const itemDelayIncrement = 0.1;
  const headlineVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: contentDelay + itemDelayIncrement },
    },
  };
  const subHeadlineVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: contentDelay + itemDelayIncrement * 2,
      },
    },
  };
  const text = "Contact Us • Contact Us • Contact Us •";
  const letters = text.split("");
  const radius = 100;
  return (
    <motion.div ref={heroCtn} className="bg-[#0D181C]">
      <div className="absolute inset-0 bg-transparent z-11">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333"
          hoverFillColor="#222"
          className="pointer-events-auto bg-transparent"
        />
      </div>
      <div className="relative md:px-20 pt-[100px] text-gray-300 min-h-screen flex flex-col overflow-x-hidden">
        <main className="flex-grow flex flex-col justify-center text-start px-4 pt-8 pb-16 relative">
          <motion.div className="absolute top-50">
            <motion.img src="images/banner-img.webp" />
          </motion.div>
          <motion.div className="z-12 flex">
            <div>
              <motion.h1
                variants={headlineVariants}
                initial="hidden"
                animate="visible"
                className="sm:text-4xl z-12 lg:text-8xl font-semibold text-white leading-tight mb-4"
              >
                <p className="whitespace-pre-wrap z-12">
                  <span>{"Let's create something "}</span>
                </p>
                <Typewriter
                  text={[
                    "innovative",
                    "groundbreaking",
                    "extraordinary",
                    "revolutionary",
                    "fun",
                    "that inspires others",
                    "that solves real problems",
                    "that changes perspectives",
                    "together",
                  ]}
                  speed={70}
                  className="text-[var(--primary)] mx-1"
                  waitTime={1500}
                  deleteSpeed={40}
                  cursorChar={"_"}
                />
              </motion.h1>
              <motion.p
                variants={subHeadlineVariants}
                initial="hidden"
                animate="visible"
                className="text-base z-12 flex justify-center  sm:text-lg lg:text-xl text-gray-400 max-w-2xl mb-8"
              >
                Welcome to our world of endless imagination and boundless
                creativity. Together, let's embark on a remarkable journey where
                dreams become tangible realities.
              </motion.p>
            </div>
            <motion.a href="" style={{y}} className="relative w-[20vw] h-[20vw] mx-auto border-0 rounded-full">
            <motion.div 
              className="relative w-[20vw] h-[20vw] mx-auto"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            >
              {letters.map((char, i) => {
                const angle = (360 / letters.length) * i;
                const rad = (angle * Math.PI) / 180;
                const x = Math.round(radius * Math.cos(rad) * 1000) / 1000;
                const y = Math.round(radius * Math.sin(rad) * 1000) / 1000;

                return (
                  <span
                    key={i}
                    className="absolute text-sm"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: `translate(-50%, -50%) rotate(${
                        angle + 90
                      }deg)`,
                      transformOrigin: "center",
                    }}
                  >
                    {char}
                  </span>
                );
              })}
              
            </motion.div>
            <span
                className="absolute text-2xl"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Star
                  className="absolute"
                  size={32}
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    fill: "currentColor",
                  }}
                />
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            className="z-12"
            variants={subHeadlineVariants}
            initial="hidden"
            animate="visible"

            style={{x}}
          >
            <button className="group relative h-50 w-50 flex items-center gap-1 overflow-hidden rounded-full border-[1.5px] border-[#333333]/40 bg-transparent px-8 py-3 text-md font-semibold text-[var(--primary)] cursor-pointer transition-all duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:text-black active:scale-[0.95]">
              {/* Left arrow (arr-2) */}
              <ArrowRight className="absolute w-4 h-4 left-[-25%] stroke-[#111111] fill-none z-[9] group-hover:left-4 group-hover:stroke-black transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" />

              {/* Text */}
              <span className="relative z-[1] -translate-x-3 font-light  group-hover:translate-x-3 transition-all duration-[800ms] ease-out">
                EXPLORE OUR SERVICES
              </span>

              {/* Circle */}
              <span
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-[50%] opacity-0 group-hover:w-screen group-hover:h-[220px] group-hover:opacity-100 transition-all duration-[1500ms] ease-[cubic-bezier(0.19,1,0.22,1)]`}
              ></span>

              {/* Right arrow (arr-1) */}
              <ArrowRight
                className={`absolute w-4 h-4 right-4 stroke-[var(--primary)] fill-none z-[9] group-hover:right-[-25%] group-hover:stroke-white transition-all duration-[1500ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]`}
              />
            </button>
          </motion.div>
        </main>
      </div>
    </motion.div>
  );
};

export default Hero;
