import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { CiLinkedin } from "react-icons/ci";
import {
  HomeIcon,
  BellIcon,
  DocumentChartBarIcon,
} from "@heroicons/react/20/solid";
import { FaGithub } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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

const navigation = [
  {
    name: "Ream",
    id: 1,
    href: "/projects/ream",
    external_url: "https://ream-1.web.app/",
    current: false,
  },
  {
    name: "Snap Park",
    id: 0,
    href: "/projects/snappark",
    external_url: "snappark.co",
  },
  {
    name: "Cross Copy",
    id: 2,
    href: "/projects/crosscopy",
    external_url: "crosscopy.dev",
  },
  {
    name: "Assetrix",
    id: 3,
    href: "/projects/assetrix",
    external_url: "/",
  },
  {
    name: "Stellarmetrics",
    id: 4,
    href: "/projects/stellarmetrics",
    external_url: "/",
  },
];
const links = [
  {
    id: 1,
    name: "Homepage",
    href: "/",
    initial: "H",
    icon: HomeIcon,
    current: false,
  },
  {
    id: 2,
    name: "Experience",
    href: "/experience",
    initial: "E",
    icon: DocumentChartBarIcon,
    current: false,
  },
  {
    id: 3,
    name: "Contact",
    href: "/contact",
    initial: "C",
    icon: BellIcon,
    current: false,
  },
  {
    id: 4,
    name: "Github",
    href: "https://github.com/Cedarche",
    initial: "G",
    icon: FaGithub,
    current: false,
  },
  {
    id: 5,
    name: "linkedin",
    href: "https://www.linkedin.com/in/tom-carruthers-1b8709184/",
    initial: "L",
    icon: CiLinkedin,
    current: false,
  },
];

interface Heading {
  headingName: string;
  link: string;
}

const headings: Heading[] = [
  { headingName: "Home", link: "/" },
  { headingName: "Projects", link: "/projects" },
  { headingName: "Experience", link: "/experience" },
  { headingName: "Contact", link: "/contact" },
];

type LayoutProps = {
  children: React.ReactNode;
};

export default function Navbar({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [currentNav, setCurrentNav] = useState("/");

  const location = useLocation();

  useEffect(() => {
    setCurrentNav(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <div
        className={`${
          currentNav === "/" ? "fixed sm:static" : "fixed"
        } inset-0 overflow-auto no-scrollbar`}
      >
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild>

              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                <div className="flex h-16 shrink-0 items-center">
                  <motion.div
                    className="font-paytone text-3xl text-white lg:text-3xl 2xl:text-4xl  font-bold absolute top-2 left-4"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                  >
                    <Link to="/">TOM CARRUTHERS</Link>
                  </motion.div>
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <div className="text-xs font-semibold leading-6 text-green-400">
                        Projects
                      </div>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <Link
                              to={item.href}
                              className={classNames(
                                currentNav === item.href
                                  ? "bg-gray-800 text-white"
                                  : "text-gray-400 hover:bg-gray-800 hover:text-white",
                                "group flex gap-x-3 rounded-md p-2  text-md items-center font-semibold leading-6"
                              )}
                              onClick={() => {
                                setCurrentNav(item.href);
                                setSidebarOpen(false); // Close sidebar on navigation
                              }}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <div className="text-xs font-semibold leading-6 text-green-400">
                        Other links
                      </div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {links.map((team) => (
                          <li key={team.name}>
                            <Link
                              to={team.href}
                              className={classNames(
                                team.current
                                  ? "bg-gray-800 text-white"
                                  : "text-gray-400 hover:bg-gray-800 hover:text-white",
                                "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                              )}
                            >
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                <team.icon
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />{" "}
                                {/* Display the icon */}
                              </span>
                              <span className="truncate">{team.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
        <div className="hidden lg:block sticky top-0 left-0 right-0 h-[45px] z-60 lg:h-[55px] xl:h-[60px] 2xl:h-[1px]  bg-black items-center justify-center z-50 text-white ">
          <motion.div
            className="font-paytone text-xl lg:text-3xl 2xl:text-4xl  font-bold absolute top-2 left-4"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Link to="/">TOM CARRUTHERS</Link>
          </motion.div>

          <div className="hidden  relative  lg:flex flex-1  p-4 text-white">
            <div className="absolute top-0 right-0 flex p-4 flex-row 2xl:flex-col items-end space-x-2 2xl:space-y-2">
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

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900/90 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <div className="flex-1 font-semibold font-paytone text-xl leading-6 text-white">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <Link to="/">TOM CARRUTHERS</Link>
            </motion.div>
          </div>
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        {children}
      </div>
    </>
  );
}
