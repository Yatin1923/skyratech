import React, { useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

const Preloader = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start("showPreloader");
      await controls.start("animateTexts1");
      await controls.start("hideTexts1");
      await controls.start("revealBox");
      await controls.start("animateTexts2");
      await controls.start("hideTexts2");
      await controls.start("hidePreloader");
      await controls.start("fadeInContent");
    };
    sequence().then(() => {});
  }, [controls]);

  return (
    <motion.div className="mil-preloader" variants={variants.preloaderWrapper} initial="hidden" animate={controls}>
      <motion.div className="mil-preloader-animation" variants={variants.preloaderAnimation}>
        <div className="mil-pos-abs mil-animation-1">
          <motion.p className="mil-h3 mil-muted mil-thin" variants={variants.text1} custom={0}>Pioneering</motion.p>
          <motion.p className="mil-h3 mil-muted" variants={variants.text1} custom={1}>Creative</motion.p>
          <motion.p className="mil-h3 mil-muted mil-thin" variants={variants.text1} custom={2}>Excellence</motion.p>
        </div>
        <div className="mil-pos-abs mil-animation-2">
          <div className="mil-reveal-frame">
            <motion.p className="mil-reveal-box" variants={variants.revealBox}></motion.p>
            <motion.p className="mil-h3 mil-muted mil-thin" variants={variants.text2}>SkyraTech.com</motion.p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const variants = {
  preloaderWrapper:{
    hidden: {},
    hidePreloader: {
      opacity: 0,
      display: 'none',
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  },
  preloaderAnimation: {
    showPreloader: {
      opacity: 1
    }
  },
  text1: {
    animateTexts1: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.4, duration: 0.6 }
    }),
    hideTexts1: {
      opacity: 0,
      y: -30,
      transition: { delay: 0.3, duration: 0.5 }
    }
  },
  revealBox: {
    revealBox: {
      opacity: 1,
      x: -30,
      width: '100%',
      transition: { duration: 0.6 },
      zIndex:1
    },
    hideBox: {
      width: '0%',
      transition: { delay: 0.3, duration: 0.3 }
    }
  },
  text2: {
    animateTexts2: {
      opacity: 1,
      transition: { duration: 0.6 }
    },
    hideTexts2: {
      opacity: 0,
      y: -30,
      transition: { delay: 0.5, duration: 0.6 }
    }
  },
  fadeInContent: {
    fadeInContent: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  }
};

export default Preloader;