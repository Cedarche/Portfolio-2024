import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import GradientHero from "./GradientHero";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.3, duration: 1 },
  }),
  hover: {
    textShadow: "0 0 8px rgba(0, 255, 0, 0.8)",
    scale: 1.02,
    transition: {
      duration: 0.3,
    },
  },
};

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(3);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        width: "100%",
        height: "120vh",
        overflow: "hidden", // Prevent actual scrolling
      }}
      className="bg-black no-scrollbar"
    >
      <div className="flex flex-1  flex-row z-20 m-2">
        <div className="flex flex-col sm:ml-40 2xl:ml-96 pb-32 h-full items-center justify-center z-50 text-white relative">
          <motion.div
            className="relative px-4 md:pl-0 lg:shrink-1 xl:max-w-2xl lg:-mt-60 items-start flex flex-col"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl  font-bold tracking-tight text-white sm:text-6xl 2xl:text-8xl">
              Hi, I'm Tom.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100 sm:max-w-md lg:max-w-none text-left 2xl:text-2xl">
              I'm a mechanical engineer by profession, but I love to build
              anything and everything - from software to hardware. I've built a number of both personal and commercial projects over the years, and I'm currently
              looking to change careers into front-end/fullstack software engineering.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
              >
                Get in contact
              </Link>
              <Link
                to="/projects"
                className="text-sm font-semibold leading-6 text-gray-100"
              >
                See Projects <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="font-paytone text-xl lg:text-4xl font-bold absolute"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        style={{
          display: "flex",
          flex: 1,
          width: "100%",
          height: "120vh",
          borderRadius: 0,
          padding: "4px",
          overflow: "hidden",
        }}
      >
        <GradientHero scrollY={scrollY} />
      </motion.div>
    </div>
  );
};

export default Hero;
