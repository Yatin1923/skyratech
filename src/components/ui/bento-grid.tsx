import { ReactNode, useRef } from "react";
import { ArrowRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion, MotionStyle, MotionValue, useScroll, useTransform } from "framer-motion";
import React from "react";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const cardContainer = useRef(null);
  const{scrollYProgress} = useScroll({
    target: cardContainer,
    offset: ["start center", "start start"],
  })
  // const y = useTransform(scrollYProgress, [0, 1],[0,100]);
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={cardContainer}
      className={cn(
        "grid w-full auto-rows-[22rem] gap-4",
        className,
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child,scale);
        }
        return child;
      })}
    </div>
  );
};

const BentoCard = ({
  name,
  delay,
  isInView,
  className,
  background,
  Icon,
  description,
}: {
  name: string;
  delay: number;
  className: string;
  isInView:boolean;
  background: ReactNode;
  Icon: any;
  description: string;
}) => (
  <motion.div
    key={name}
    initial={{ opacity: 0,scale:0,transformOrigin:"center" }}
    animate={isInView?{
      opacity: 1, y: 0,scale:1
    }:{} }
    transition={{ delay: delay,duration:0.28,type:'spring' }}
    className={cn(
      "group relative col-span-5 flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-5">
      <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
        {name}
      </h3>
      <p className="max-w-lg text-neutral-400">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      {/* <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button> */}
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </motion.div>
);

export { BentoCard, BentoGrid };
