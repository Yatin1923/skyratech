import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import ParticlesBackground from "../ui/particles-background";

export default function TrustedClients() {
  const parentRef = React.useRef(null);
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: parentRef,
    offset: ["start end", "end start"],
  });
  //   const plugin = React.useRef(
  //     Autoplay({ delay: 2000, stopOnInteraction: true })
  //   )
  return (
    <>
    <ParticlesBackground color="#000"></ParticlesBackground>
    <motion.div ref={parentRef} className="min-h-screen">

      <motion.div className="mt-50 mb-10 text-9xl w-[100%] text-nowrap overflow-x-hidden">
        {/* Rotating Text */}
        <motion.h1
          // initial={{ x: 0 }}
          animate={{ x: "-300vw" }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          viewport={{ once: false, margin: "0px 0px -100px 0px" }}
          style={{
            x: useTransform(scrollYProgress2, [0, 1], [0, -1000], {
              clamp: false,
            }),
            // stiffness: 100,
            // damping: 30,
            // mass: 1
          }}
          className="  text-black  font-semibold uppercase"
        >
          OUR TRUSTED CLIENTS SAY. OUR TRUSTED CLIENTS SAY. OUR TRUSTED CLIENTS
          SAY. OUR TRUSTED CLIENTS SAY.
        </motion.h1>
      </motion.div>
      <motion.div className="flex justify-between gap-20 container mx-auto">
        <Carousel className="max-w-screen max-h-full w-1/2">
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <motion.div className="p-1">
                  <motion.div>
                    <motion.div className="flex flex-col gap-10 aspect-square items-center justify-center p-6 relative">
                      <motion.div className="absolute">
                        <motion.img
                          src="/images/quote-img.png"
                          className="w-full h-full object-contain relative contrast-90 -z-10"
                        />
                      </motion.div>
                      <motion.p className="disc text-2xl">
                        The group at Baroque is unimaginably committed, <br />{" "}
                        educated, and supportive. The completed item was <br />{" "}
                        delightful, and worth each penny. I would totally <br />{" "}
                        suggest Baroque...
                      </motion.p>
                      <hr className="text-black w-full font-bold border-t-2" />
                      <motion.div className="w-full text-left">
                      <motion.h1 className="text-black text-2xl font-bold">
                        Adam Daniel Smith
                      </motion.h1>
                      <motion.h1>Product Designer</motion.h1>
                    </motion.div>
                    </motion.div>
                   
                  </motion.div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <motion.div className="w-1/3">
          <motion.img
            src="/images/team-06-img.webp"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
    </>

  );
}
