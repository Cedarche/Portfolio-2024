import { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  InformationCircleIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/20/solid";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiStyledcomponents } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

import CrossCopyIcon from "./Assets/CC_ICON.png";
import HomepageImage1 from "./Assets/CC_homepage.png";
import CrosscopyWeb from "./CrosscopyWeb";
import CrosscopApp from "./CrosscopyApp";

const stack = [
  { name: "Javascript", icon: SiJavascript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "React", icon: FaReact },
  { name: "React Native", icon: FaReact },
  { name: "Styled Components", icon: SiStyledcomponents },
  { name: "Firebase", icon: IoLogoFirebase },
];

export default function Crosscopy() {
  useEffect(() => {
    const preloadIcon = (iconSrc) => {
      const img = new Image();
      img.src = iconSrc;
    };

    preloadIcon(HomepageImage1); // Preload the icon
    preloadIcon(CrossCopyIcon); // Preload the icon
  }, []);

  return (
    <>
      {/* <Navbar open={open} setOpen={setOpen} /> */}
      <div className="relative isolate overflow-hidden px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl 2xl:max-w-4xl text-base leading-7 text-gray-200">
          <div className="flex w-full items-center justify-between ">
            <div className="inline-flex align-middle justify-center">
              <img
                alt=""
                src={CrossCopyIcon}
                className=" max-w-[50px] rounded-lg bg-gray-900 shadow-xl ring-1 ring-gray-400/10 "
              />
              <h1 className="mt-1 ml-3 text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                Cross Copy
              </h1>
            </div>
            <div className="h-full flex align-middle justify-center ">
              <Link
                to="https://crosscopy.dev"
                target="_blank"
                className="inline-flex  gap-x-1 rounded-md max-h-[40px] bg-green-500/80 p-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
              >
                <span className="hidden sm:block">Open</span>
                <ArrowTopRightOnSquareIcon
                  aria-hidden="true"
                  className="ml-0.5 h-5 w-5 flex-none text-white"
                />
              </Link>
            </div>
          </div>
          <p className="mt-6 text-xl leading-8">
            At it's core, Cross Copy just provides a simple way to avoid having
            to email text and files to yourself. It works in a similar way to
            Google Drive or Dropbox, but without the bloat of folders,
            subscriptions, or size limits.
          </p>
          <div className=" z-10 rounded-xl flex no-scrollbar items-center gap-x-2 overflow-x-scroll  h-[50px]">
            {stack.map((item, index) => (
              <span
                key={index}
                className="flex items-center rounded-md gap-x-1 bg-green-500/10 px-2 py-1.5 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20 whitespace-nowrap"
              >
                <item.icon aria-hidden="true" />
                <span className="mt-0.5 ml-0.5">{item.name}</span>
              </span>
            ))}
          </div>
          <figure className="mt-16">
            <img
              alt=""
              src={HomepageImage1}
              className=" rounded-xl bg-gray-50 object-cover"
            />
            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-300">
              <InformationCircleIcon
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 flex-none text-gray-300"
              />
              The Cross Copy landing page.
            </figcaption>
          </figure>
          <div className="mt-10">
            <p>
              As with most of my projects, I built Cross Copy to overcome a
              common problem that I encountered at work. Part of my previous job
              was to create and deliver weekly (sometimes daily) reports which
              included photos of the work that had been completed on a job-site.
              Since I was using an iPhone, and my work computer was a Windows, I
              used to simply email the photos to myself. However, the 20MB limit
              on emails is quite limiting when each photo is 6MB+ each.
              Additionally, sending files/photo/url links from my personal Mac
              to my work PC was a pain.
              <br />
              <br />
              This is obviously not a new problem, and there are dozens if not
              hundreds of solutions out there already, most of which are better
              than Cross Copy and offer more features. I decided to build it
              myself, 1. because I wanted to see if I could do it, and 2.
              because I found using common services like Google Drive or Dropbox
              to be cumbersome, with honestly too many features.
              <br />
              <br />
              Cross Copy is the simplest service I have come across, a basic
              interface that works well on mobile and desktop, no storage or
              folders (files are automatically deleted after 7 days), and no
              account/subscription required. I even built a Chrome extension
              which means you don't even have to open the webpage to access your
              files.
              <br />
              <br />
              It uses Firebase Authentication, Storage, and Firestore, which are
              accessed directly on the client side using carefully set rules.
              All of the source code is available on my <a href="https://github.com/Cedarche/CrossCopy" target="_blank">GitHub</a>.
              <br />
              <br />
            </p>
            <ul role="list" className="mt-8 space-y-8 text-gray-300">
              <li className="flex gap-x-3">
                <CloudArrowUpIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    The Main Web App
                  </strong>{" "}
                  Transfer text, photos, and files, directly in the browser from
                  any device.
                </span>
              </li>
              <li className="flex gap-x-3">
                <LockClosedIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    The Mobile Application
                  </strong>{" "}
                  Allows you to share photos and files directly from your mobile
                  device to Cross Copy, skipping the step of having to first
                  open your mobile browser and select which photos you'd like to
                  send.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    The Chrome Extension
                  </strong>{" "}
                  Again, simply click on the Cross Copy extension icon when
                  using Chrome to instantly access copied text, files, and
                  photos.
                </span>
              </li>
            </ul>
          </div>
          <CrosscopyWeb />
          <CrosscopApp />
        </div>
      </div>
    </>
  );
}
