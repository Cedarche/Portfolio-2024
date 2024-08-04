import React, { useState, useEffect } from "react";
import GradientHero from "./GradientHero";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import MobileNav from "../Navbar/Navbar";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

interface Heading {
  headingName: string;
  link: string;
}

const headings: Heading[] = [
  { headingName: "About", link: "/about" },
  { headingName: "Projects", link: "/projects" },
  { headingName: "Experience", link: "/experience" },
  { headingName: "Contact", link: "/contact" },
];

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

const Hero2: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(3);

  //   useEffect(() => {
  //     function handleWheel(event: WheelEvent) {
  //       setScrollY((prevScrollY) => Math.max(prevScrollY + event.deltaY, 0));
  //     }

  //     window.addEventListener("wheel", handleWheel);
  //     return () => {
  //       window.removeEventListener("wheel", handleWheel);
  //     };
  //   }, []);

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
      className="bg-black"
    >
      <div className="flex flex-1 flex-row z-20 m-2">
        <div className="flex flex-col flex-2 h-full items-center justify-center z-50 text-white relative">
          <motion.div
            className="font-paytone text-xl lg:text-4xl font-bold absolute top-2 left-4"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            TOM CARRUTHERS
          </motion.div>
          <div className="flex absolute top-0 right-0 md:hidden h-full p-4 text-white">
            {open ? (
              <XMarkIcon className="h-6 w-6" onClick={() => setOpen(false)} />
            ) : (
              <Bars3Icon className="h-6 w-6" onClick={() => setOpen(true)} />
            )}
          </div>
          <motion.div
            className="relative px-4 md:pl-0 lg:shrink-1 xl:max-w-2xl lg:-mt-60 items-start flex flex-col"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl font-roboto font-bold tracking-tight text-white sm:text-6xl 2xl:text-8xl">
              Hi, I'm Tom.
            </h1>
            <p className="mt-6 text-lg leading-8 font-roboto text-gray-100 sm:max-w-md lg:max-w-none text-left 2xl:text-2xl">
              I'm a mechanical engineer by profession, but I love to build
              anything and everything - from software to hardware. Most of my
              projects stay in the development phase indefinitely, however a
              couple are live and used by people all around the globe.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md font-roboto bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
              >
                Get in contact
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-100"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>
        </div>
        <div className="hidden relative md:flex flex-1 h-full p-4 text-white">
          <div className="absolute top-0 right-0 flex p-4 flex-col items-end space-y-2">
            {headings.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                className="font-paytone text-lg"
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={fadeIn}
                custom={index}
              >
                {item.headingName}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      <MobileNav open={open} setOpen={setOpen} />
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
}

export default Hero2;
