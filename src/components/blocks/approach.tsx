import { motion } from "framer-motion";
import React from "react";

export default function Approach() {
  return (
    <motion.div className="text-white container mx-auto p-20">
      <motion.div>
      <motion.div className="overflow-hidden">
        <motion.div className="text-1xl text-gray-400"
         initial={{y: 20 }}
         whileInView={{y: 0 }}
         transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            Our Approach
        </motion.div>
        </motion.div>
        <br />
        <motion.div className="overflow-hidden">
            <motion.h1 className="text-4xl font-semibold leading-normal"
                initial={{y: 50 }}
                whileInView={{y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
            CRAFTING EXPERIENCES — FROM PLANNING TO LAUNCH & BEYOND
            </motion.h1>
        </motion.div>
        <br />
        <motion.div className="overflow-hidden">

            <motion.p className="w-[80%] text-gray-400"
             initial={{y: 50 }}
             whileInView={{y: 0 }}
             transition={{ duration: 0.5, ease: "easeInOut" }}
            >
            The web development journey is a collaborative and evolving process
            that blends creativity, strategy, and technology. At every stage, we
            work closely with our clients to understand their vision, define clear
            goals, and adapt to changing needs. From initial concept to final
            launch — and everything in between — our approach is designed to
            deliver tailored digital solutions that resonate with your audience.
            Beyond launch, we continue to support and scale your online presence
            to ensure long-term success.
            </motion.p>
        </motion.div>

      </motion.div>
      <motion.div className="flex my-20 origin-left"
       initial={{width: 0,opacity:0 }}
       whileInView={{width: "100%",opacity:1 }}
       transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.div className="rounded-l-2xl flex flex-col items-center relative border-1 border-gray-500 w-1/6 group h-100 hover:w-1/2 transition-all p-5 overflow-hidden">
          <motion.img
            className="transition-all z-0 group-hover:w-[100%] opacity-40 absolute top-0 left-0 h-100 w-0"
            src="/images/team-03-img.webp"
          />
          <motion.h1 className="text-5xl outlined-text opacity-40 group-hover:opacity-100 group-hover:text-2xl transition-all duration-500">
            01
          </motion.h1>
          <motion.div className="transition-all duration-500 group-hover:opacity-0 h-full flex justify-center items-center">
            <motion.h1 className="text-3xl outlined-text opacity-70 w-full text-center align-middle transition-all duration-500">
            Discovery & Planning
            </motion.h1>
          </motion.div>
        </motion.div>
        <motion.div className=" flex flex-col items-center relative border-1 border-gray-500 w-1/6 group h-100 hover:w-1/2 transition-all p-5 overflow-hidden">
          <motion.img
            className="transition-all z-0 group-hover:w-[100%] opacity-40 absolute top-0 left-0 h-100 w-0"
            src="/images/team-04-img.webp"
          />
          <motion.h1 className="text-5xl outlined-text opacity-40 group-hover:opacity-100 group-hover:text-2xl transition-all duration-500">
            02
          </motion.h1>
          <motion.div className="transition-all duration-500 group-hover:opacity-0 h-full flex justify-center items-center">
            <motion.h1 className="text-3xl outlined-text opacity-70 w-full text-center align-middle transition-all duration-500">
              Design
            </motion.h1>
          </motion.div>
        </motion.div>
        <motion.div className="flex flex-col items-center relative border-1 border-gray-500 w-1/6 group h-100 hover:w-1/2 transition-all p-5 overflow-hidden">
          <motion.img
            className="transition-all z-0 group-hover:w-[100%] opacity-40 absolute top-0 left-0 h-100 w-0"
            src="/images/team-05-img.webp"
          />
          <motion.h1 className="text-5xl outlined-text opacity-40 group-hover:opacity-100 group-hover:text-2xl transition-all duration-500">
            03
          </motion.h1>
          <motion.div className="transition-all duration-500 group-hover:opacity-0 h-full flex justify-center items-center">
            <motion.h1 className="text-3xl outlined-text opacity-70 w-full text-center transition-all duration-500">
              Development
            </motion.h1>
          </motion.div>
        </motion.div>
        <motion.div className="flex flex-col items-center relative border-1 border-gray-500 w-1/6 group h-100 hover:w-1/2 transition-all p-5 overflow-hidden">
          <motion.img
            className="transition-all z-0 group-hover:w-[100%] opacity-40 absolute top-0 left-0 h-100 w-0"
            src="/images/team-06-img.webp"
          />
          <motion.h1 className="text-5xl outlined-text opacity-40 group-hover:opacity-100 group-hover:text-2xl transition-all duration-500">
            04
          </motion.h1>
          <motion.div className="transition-all duration-500 group-hover:opacity-0 h-full flex justify-center items-center">
            <motion.h1 className="text-3xl outlined-text opacity-70 w-full text-center transition-all duration-500">
              Testing & Refinement
            </motion.h1>
          </motion.div>
        </motion.div>
        <motion.div className="flex flex-col items-center relative border-1 border-gray-500 w-1/6 group h-100 hover:w-1/2 transition-all p-5 overflow-hidden">
          <motion.img
            className="transition-all z-0 group-hover:w-[100%] opacity-40 absolute top-0 left-0 h-100 w-0"
            src="/images/team-07-img.webp"
          />
          <motion.h1 className="text-5xl outlined-text opacity-40 group-hover:opacity-100 group-hover:text-2xl transition-all duration-500">
            05
          </motion.h1>
          <motion.div className="transition-all duration-500 group-hover:opacity-0 h-full flex justify-center items-center">
            <motion.h1 className="text-3xl outlined-text opacity-70 w-full text-center transition-all duration-500">
              Launch & Training
            </motion.h1>
          </motion.div>
        </motion.div>
        <motion.div className="flex flex-col rounded-r-2xl items-center relative border-1 border-gray-500 w-1/6 group h-100 hover:w-1/2 transition-all p-5 overflow-hidden">
          <motion.img
            className="transition-all z-0 group-hover:w-[100%] opacity-40 absolute top-0 left-0 h-100 w-0"
            src="/images/team-08-img.webp"
          />
          <motion.h1 className="text-5xl outlined-text opacity-40 group-hover:opacity-100 group-hover:text-2xl transition-all duration-500">
            06
          </motion.h1>
          <motion.div className="transition-all duration-500 group-hover:opacity-0 h-full flex justify-center items-center">
            <motion.h1 className="text-3xl outlined-text opacity-70 w-full text-center transition-all duration-500">
              Marketing & Growth
            </motion.h1>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
