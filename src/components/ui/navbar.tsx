import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  Variants,
} from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import { ReactNode, SVGProps, type MouseEvent as ReactMouseEvent } from "react";
import { TextParticle } from "./text-particle";

export const Navbar = () => {
  interface DropdownMenuProps {
    children: ReactNode;
    isOpen: boolean;
  }
  interface NavLinkProps {
    href?: string;
    children: ReactNode;
    hasDropdown?: boolean;
    className?: string;
    onClick?: (event: ReactMouseEvent<HTMLAnchorElement>) => void;
  }

  const NavLink: React.FC<NavLinkProps> = ({
    href = "#",
    children,
    hasDropdown = false,
    className = "",
    onClick,
  }) => (
    <motion.a
      href={href}
      onClick={onClick}
      className={cn(
        "relative group text-3xl font-medium text-gray-300 hover:text-white transition-colors duration-200 flex items-center py-1",
        className
      )}
      whileHover="hover"
    >
      {children}
      {hasDropdown && <ChevronDownIcon />}
      {!hasDropdown && (
        <motion.div
          className="absolute bottom-[-2px] left-0 right-0 h-[1px] bg-[var(--primary)]"
          variants={{
            initial: { scaleX: 0, originX: 0.5 },
            hover: { scaleX: 1, originX: 0.5 },
          }}
          initial="initial"
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      )}
    </motion.a>
  );

  const headerVariants: Variants = {
    top: {
      backgroundColor: "transparent",
      // borderBottomColor: "rgba(55, 65, 81, 0.5)",
      position: "fixed",
      boxShadow: "none",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    scrolled: {
      backgroundColor:  "rgba(17, 17, 17, 0.95)",
      position: "fixed",
      borderBottomColor: "rgba(75, 85, 99, 0.7)",
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      // position: "fixed",
    },
  };
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const MenuIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );

  const CloseIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );

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

  return (
    //  {/* Navbar */}
    <motion.header
      variants={headerVariants}
      initial="top"
      animate={isScrolled ? "scrolled" : "top"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="px-6 md:px-20 w-full top-0 z-30 bg-black"
    >
      <nav className="flex justify-between items-center h-[70px]">
        <div className="text-[#fff] ">
                {/* <TextParticle
                text="Skyratech."
                fontSize={40}
                particleColor="#0CF2A0"
                particleSize={1}
                className="hidden md:block"
                particleDensity={1}
            /> */}
            <span className="text-3xl text-[var(--primary)] font-bold ml-2">
            Skyratech.
          </span>
            </div>
        <div className="flex items-center flex-shrink-0 space-x-4 lg:space-x-6">
          <motion.button
            className="text-gray-300 hover:text-white z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-[#111111]/95 backdrop-blur-sm shadow-lg py-4 border-t border-gray-800/50 flex items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-4 px-6">
              <NavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>
                Product
              </NavLink>
              <NavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>
                Customers
              </NavLink>
              <NavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>
                Channels
              </NavLink>
              <NavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>
                Resources
              </NavLink>
              <NavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>
                Docs
              </NavLink>
              <NavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>
                Pricing
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
