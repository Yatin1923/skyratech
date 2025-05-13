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
import { CTAButton } from "../ui/flow-button";
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

const InteractiveHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  const dotsRef = useRef<Dot[]>([]);
  const gridRef = useRef<Record<string, number[]>>({});
  const canvasSizeRef = useRef<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const mousePositionRef = useRef<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  });

  const DOT_SPACING = 25;
  const BASE_OPACITY_MIN = 0.4;
  const BASE_OPACITY_MAX = 0.5;
  const BASE_RADIUS = 1;
  const INTERACTION_RADIUS = 150;
  const INTERACTION_RADIUS_SQ = INTERACTION_RADIUS * INTERACTION_RADIUS;
  const OPACITY_BOOST = 0.6;
  const RADIUS_BOOST = 2.5;
  const GRID_CELL_SIZE = Math.max(50, Math.floor(INTERACTION_RADIUS / 1.5));

  const handleMouseMove = useCallback((event: globalThis.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) {
      mousePositionRef.current = { x: null, y: null };
      return;
    }
    const rect = canvas.getBoundingClientRect();
    const canvasX = event.clientX - rect.left;
    const canvasY = event.clientY - rect.top;
    mousePositionRef.current = { x: canvasX, y: canvasY };
  }, []);

  const createDots = useCallback(() => {
    const { width, height } = canvasSizeRef.current;
    if (width === 0 || height === 0) return;

    const newDots: Dot[] = [];
    const newGrid: Record<string, number[]> = {};
    const cols = Math.ceil(width / DOT_SPACING);
    const rows = Math.ceil(height / DOT_SPACING);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * DOT_SPACING + DOT_SPACING / 2;
        const y = j * DOT_SPACING + DOT_SPACING / 2;
        const cellX = Math.floor(x / GRID_CELL_SIZE);
        const cellY = Math.floor(y / GRID_CELL_SIZE);
        const cellKey = `${cellX}_${cellY}`;

        if (!newGrid[cellKey]) {
          newGrid[cellKey] = [];
        }

        const dotIndex = newDots.length;
        newGrid[cellKey].push(dotIndex);

        const baseOpacity =
          Math.random() * (BASE_OPACITY_MAX - BASE_OPACITY_MIN) +
          BASE_OPACITY_MIN;
        newDots.push({
          x,
          y,
          baseColor: `rgba(87, 220, 205, ${BASE_OPACITY_MAX})`,
          targetOpacity: baseOpacity,
          currentOpacity: baseOpacity,
          opacitySpeed: Math.random() * 0.005 + 0.002,
          baseRadius: BASE_RADIUS,
          currentRadius: BASE_RADIUS,
        });
      }
    }
    dotsRef.current = newDots;
    gridRef.current = newGrid;
  }, [
    DOT_SPACING,
    GRID_CELL_SIZE,
    BASE_OPACITY_MIN,
    BASE_OPACITY_MAX,
    BASE_RADIUS,
  ]);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const container = canvas.parentElement;
    const width = container ? container.clientWidth : window.innerWidth;
    const height = container ? container.clientHeight : window.innerHeight;

    if (
      canvas.width !== width ||
      canvas.height !== height ||
      canvasSizeRef.current.width !== width ||
      canvasSizeRef.current.height !== height
    ) {
      canvas.width = width;
      canvas.height = height;
      canvasSizeRef.current = { width, height };
      createDots();
    }
  }, [createDots]);

  const animateDots = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const dots = dotsRef.current;
    const grid = gridRef.current;
    const { width, height } = canvasSizeRef.current;
    const { x: mouseX, y: mouseY } = mousePositionRef.current;

    if (!ctx || !dots || !grid || width === 0 || height === 0) {
      animationFrameId.current = requestAnimationFrame(animateDots);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    const activeDotIndices = new Set<number>();
    if (mouseX !== null && mouseY !== null) {
      const mouseCellX = Math.floor(mouseX / GRID_CELL_SIZE);
      const mouseCellY = Math.floor(mouseY / GRID_CELL_SIZE);
      const searchRadius = Math.ceil(INTERACTION_RADIUS / GRID_CELL_SIZE);
      for (let i = -searchRadius; i <= searchRadius; i++) {
        for (let j = -searchRadius; j <= searchRadius; j++) {
          const checkCellX = mouseCellX + i;
          const checkCellY = mouseCellY + j;
          const cellKey = `${checkCellX}_${checkCellY}`;
          if (grid[cellKey]) {
            grid[cellKey].forEach((dotIndex) => activeDotIndices.add(dotIndex));
          }
        }
      }
    }

    dots.forEach((dot, index) => {
      dot.currentOpacity += dot.opacitySpeed;
      if (
        dot.currentOpacity >= dot.targetOpacity ||
        dot.currentOpacity <= BASE_OPACITY_MIN
      ) {
        dot.opacitySpeed = -dot.opacitySpeed;
        dot.currentOpacity = Math.max(
          BASE_OPACITY_MIN,
          Math.min(dot.currentOpacity, BASE_OPACITY_MAX)
        );
        dot.targetOpacity =
          Math.random() * (BASE_OPACITY_MAX - BASE_OPACITY_MIN) +
          BASE_OPACITY_MIN;
      }

      let interactionFactor = 0;
      dot.currentRadius = dot.baseRadius;

      if (mouseX !== null && mouseY !== null && activeDotIndices.has(index)) {
        const dx = dot.x - mouseX;
        const dy = dot.y - mouseY;
        const distSq = dx * dx + dy * dy;

        if (distSq < INTERACTION_RADIUS_SQ) {
          const distance = Math.sqrt(distSq);
          interactionFactor = Math.max(0, 1 - distance / INTERACTION_RADIUS);
          interactionFactor = interactionFactor * interactionFactor;
        }
      }

      const finalOpacity = Math.min(
        1,
        dot.currentOpacity + interactionFactor * OPACITY_BOOST
      );
      dot.currentRadius = dot.baseRadius + interactionFactor * RADIUS_BOOST;

      const colorMatch = dot.baseColor.match(
        /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/
      );
      const r = colorMatch ? colorMatch[1] : "87";
      const g = colorMatch ? colorMatch[2] : "220";
      const b = colorMatch ? colorMatch[3] : "205";

      ctx.beginPath();
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${finalOpacity.toFixed(3)})`;
      ctx.arc(dot.x, dot.y, dot.currentRadius, 0, Math.PI * 2);
      ctx.fill();
    });

    animationFrameId.current = requestAnimationFrame(animateDots);
  }, [
    GRID_CELL_SIZE,
    INTERACTION_RADIUS,
    INTERACTION_RADIUS_SQ,
    OPACITY_BOOST,
    RADIUS_BOOST,
    BASE_OPACITY_MIN,
    BASE_OPACITY_MAX,
    BASE_RADIUS,
  ]);

  useEffect(() => {
    handleResize();
    const canvasElement = canvasRef.current;
    const handleMouseLeave = () => {
      mousePositionRef.current = { x: null, y: null };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    animationFrameId.current = requestAnimationFrame(animateDots);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [handleResize, handleMouseMove, animateDots]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const headerVariants: Variants = {
    top: {
      position: "fixed",
      boxShadow: "none",
    },
    scrolled: {
      position: "fixed",
    },
  };

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.15, ease: "easeIn" },
    },
  };

  const contentDelay = 0.3;
  const itemDelayIncrement = 0.1;

  const bannerVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: contentDelay },
    },
  };
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
  const formVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: contentDelay + itemDelayIncrement * 3,
      },
    },
  };
  const trialTextVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: contentDelay + itemDelayIncrement * 4,
      },
    },
  };
  const worksWithVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: contentDelay + itemDelayIncrement * 5,
      },
    },
  };
  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: contentDelay + itemDelayIncrement * 6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="md:px-20 pt-[100px] relative bg-[#111111] text-gray-300 min-h-screen flex flex-col overflow-x-hidden ">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-100"
      />
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, #111111 150%), radial-gradient(ellipse at center, transparent 0%,#111111 95%)",
        }}
      ></div>
    {/* <ParticlesBackground color="#fff"></ParticlesBackground> */}

      <main className="flex-grow flex flex-col justify-center  text-start px-4 pt-8 pb-16 relative z-10">
        <motion.h1 
        variants={headlineVariants}
        initial="hidden"
        animate="visible"
        className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-white leading-tight mb-4"
        >
          <p className="whitespace-pre-wrap">
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
          className="text-base flex justify-center  sm:text-lg lg:text-xl text-gray-400 max-w-2xl mb-8"
        >
         Welcome to our world of endless imagination and boundless creativity. Together, let's embark on a remarkable journey where dreams become tangible realities.
        </motion.p>
        <motion.div className=""
         variants={subHeadlineVariants}
         initial="hidden"
         animate="visible"
         >
          <CTAButton text="What we do" />
        </motion.div>
      </main>
     

    </div>
  );
};

export default InteractiveHero;
