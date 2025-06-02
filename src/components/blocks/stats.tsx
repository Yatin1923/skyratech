import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

export default function Stats() {
  const parentRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  return (
    <motion.div
      ref={parentRef}
      className="container relative mx-auto p-10 min-h-screen py-40"
    >
      <motion.div className="flex relative">
        <motion.div>
          <motion.div className="z-10 text-center relative">
            <motion.h1 className="text-7xl font-bold z-10">
              {" "}
              DIGITAL EXPERTISE ACTION
            </motion.h1>
            <motion.h1 className="text-8xl font-bold z-10">
              {" "}
              DIGITAL SERVICES
            </motion.h1>
          </motion.div>
          <motion.div className="-translate-y-20">
            <motion.video
              className=""
              style={{ scale }}
              src="images/team-video.mp4"
              autoPlay
              preload="metadata"
              loop
              muted
              playsInline
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="flex justify-between">
        <motion.div className="text-center w-1/4 flex flex-col items-center justify-center gap-5 p-10 border-r-1 border-gray-800">
          <motion.h1 className="text-7xl font-bold z-10"> 362K</motion.h1>
          <hr className="w-[20%] opacity-35" />
          <motion.h1 className="text-2xl font-bold z-10"> Project Completed</motion.h1>
        </motion.div>
        <motion.div className="text-center w-1/4 flex flex-col items-center justify-center gap-5 p-10 border-r-1 border-gray-800">
          <motion.h1 className="text-7xl font-bold z-10"> 300M</motion.h1>
          <hr className="w-[20%] opacity-35" />
          <motion.h1 className="text-2xl font-bold z-10"> Happy Customer</motion.h1>
        </motion.div>
        <motion.div className="text-center w-1/4 flex flex-col items-center justify-center gap-5 p-10 border-r-1 border-gray-800">
          <motion.h1 className="text-7xl font-bold z-10"> 62+</motion.h1>
          <hr className="w-[20%] opacity-35" />
          <motion.h1 className="text-2xl font-bold z-10"> Years experience</motion.h1>
        </motion.div>
        <motion.div className="text-center w-1/4 flex flex-col items-center justify-center gap-5 p-10 ">
          <motion.h1 className="text-7xl font-bold z-10"> 105k</motion.h1>
          <hr className="w-[20%] opacity-35" />
          <motion.h1 className="text-2xl font-bold z-10"> Awards Achievement</motion.h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
