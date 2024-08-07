import React, { useState, useEffect } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

interface Heading {
  headingName: string;
  link: string;
}

interface NavbarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const headings: Heading[] = [
  { headingName: "Home", link: "/" },
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

const Navbar: React.FC<NavbarProps> = ({ open, setOpen }) => {
  return (
    <>
      <div className="sticky top-0 left-0 right-0 h-[45px] lg:h-[55px] xl:h-[1px]  bg-black items-center justify-center z-50 text-white ">
        <motion.div
          className="font-paytone text-xl lg:text-3xl 2xl:text-4xl  font-bold absolute top-2 left-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          TOM CARRUTHERS
        </motion.div>
        <div className="flex absolute top-0 right-0 lg:hidden  p-4 text-white">
          {open ? (
            <XMarkIcon className="h-6 w-6" onClick={() => setOpen(false)} />
          ) : (
            <Bars3Icon className="h-6 w-6" onClick={() => setOpen(true)} />
          )}
        </div>
        <div className="hidden  relative lg:flex flex-1  p-4 text-white">
          <div className="absolute top-0 right-0 flex p-4 flex-col items-end space-y-2">
            {headings.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={fadeIn}
                custom={index}
              >
                <Link to={item.link} className="font-paytone text-lg">
                  {item.headingName}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Transition show={open}>
        <Dialog className="lg:hidden relative z-40" onClose={setOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0  flex max-w-full pl-20 top-14 ">
                <TransitionChild
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <DialogPanel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-[#1c1c1ced]  shadow-xl rounded-xl p-4">
                      <div className=" relative flex flex-1 h-full p-4 px-8 text-white">
                        <div className="absolute top-0 right-0 flex p-4 flex-col items-end space-y-2">
                          {headings.map((item, index) => (
                            <Link
                              key={index}
                              to={item.link}
                              className="font-playfair text-xl"
                            >
                              {item.headingName}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {/* Your content */}
                      </div>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Navbar;
