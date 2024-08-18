import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Snappark from "./Snappark/Snappark";
import Ream from "./Ream/Ream";
import Crosscopy from "./Crosscopy/Crosscopy";
import Assetrix from "./Assetrix/Assetrix";
import Stellarmetrics from "./Stellarmetrics/Stellarmetrics";
import { CiSatellite1, CiLinkedin } from "react-icons/ci";
import {
  HomeIcon,
  BellIcon,
  DocumentChartBarIcon,
} from "@heroicons/react/20/solid";
import { FaGithub } from "react-icons/fa";

import SnapparkIcon from "./Snappark/Assets/App_Icon.png";
import CrosscopyIcon from "./Crosscopy/Assets/CC_ICON.png";
import ReamIcon from "./Ream/Assets/Ream_icon_dark.png";
import AssetrixIcon from "./Assetrix/Assets/ATMS_logo_small.png";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.1, duration: 1 },
  }),
  hover: {
    boxShadow: "inset 0 0 3px rgba(0, 255, 0, 0.8)",
    scale: 1.015,
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
    icon: ReamIcon,
  },
  {
    name: "Snap Park",
    id: 0,
    href: "/projects/snappark",
    external_url: "snappark.co",
    icon: SnapparkIcon,
  },
  {
    name: "Cross Copy",
    id: 2,
    href: "/projects/crosscopy",
    external_url: "crosscopy.dev",
    icon: CrosscopyIcon,
  },
  {
    name: "Assetrix",
    id: 3,
    href: "/projects/assetrix",
    external_url: "/",
    icon: AssetrixIcon,
  },
  {
    name: "Stellarmetrics",
    id: 4,
    href: "/projects/stellarmetrics",
    external_url: "/",
    icon: AssetrixIcon,
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

export default function Projects() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const [currentNav, setCurrentNav] = useState("/");

  useEffect(() => {
    setCurrentNav(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <div className="bg-black">
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
              {/* Sidebar */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                <div className="flex h-16 shrink-0 items-center">
                  <motion.div
                    className=" text-3xl text-white lg:text-3xl 2xl:text-4xl  font-black absolute top-2 left-4"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                  >
                    TOM CARRUTHERS
                  </motion.div>
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
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
                              {item.name != "Stellarmetrics" ? (
                                <img
                                  alt={item.name}
                                  src={item.icon}
                                  className={`max-w-[35px] rounded-lg bg-gray-900  ring-gray-400/10 
                  ${item.name === "Assetrix" ? "p-1.5" : "p-0"}`}
                                />
                              ) : (
                                <div className="p-2 ml-0.5 border rounded-lg">
                                  <CiSatellite1 />
                                </div>
                              )}
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

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[320px] lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900/60 px-6">
            <Link to="/" className="flex h-16 shrink-0 items-center">
              <motion.div
                className=" cursor-pointer text-xl text-white lg:text-3xl 2xl:text-3xl  font-black absolute top-2 left-4"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                TOM CARRUTHERS
              </motion.div>
            </Link>
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
                            "group flex gap-x-3 rounded-md p-2 text-md items-center font-semibold leading-6"
                          )}
                          onClick={() => setCurrentNav(item.href)}
                        >
                          {item.name != "Stellarmetrics" ? (
                            <img
                              alt={item.name}
                              src={item.icon}
                              className={`max-w-[35px] rounded-lg bg-gray-900  ring-gray-400/10 
                  ${item.name === "Assetrix" ? "p-1.5" : "p-0"}`}
                            />
                          ) : (
                            <div className="p-2 ml-0.5 border rounded-lg">
                              <CiSatellite1 />
                            </div>
                          )}
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
                            <team.icon className="h-4 w-4" aria-hidden="true" />{" "}
                            {/* Display the icon */}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="-mx-6 mt-auto"></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900/90 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <div className="flex-1 font-black text-xl leading-6 text-white">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              TOM CARRUTHERS
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

        <main className="pb-10 lg:pl-72">
          <div className="px-0 sm:px-6 lg:px-8">
            <div className="relative">
              <div className="fixed inset-0 z-0 bg-black">
                <svg
                  aria-hidden="true"
                  className="absolute left-1/2 top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-green-900 [mask-image:radial-gradient(100rem_74rem_at_top,white,transparent)]"
                >
                  <defs>
                    <pattern
                      x="50%"
                      y={-1}
                      id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                      width={200}
                      height={200}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M100 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <svg
                    x="50%"
                    y={-1}
                    className="overflow-visible fill-[#24242469]"
                  >
                    <path
                      d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                      strokeWidth={0}
                    />
                  </svg>
                  <rect
                    fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                  />
                </svg>
              </div>
              <div className="flex-1 h-full" id="project-display">
                <Routes>
                  <Route path="/" element={<Ream />} />
                  <Route path="snappark" element={<Snappark />} />
                  <Route path="ream" element={<Ream />} />
                  <Route path="crosscopy" element={<Crosscopy />} />
                  <Route path="assetrix" element={<Assetrix />} />
                  <Route path="stellarmetrics" element={<Stellarmetrics />} />
                </Routes>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
