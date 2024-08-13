import {
  CheckCircleIcon,
  InformationCircleIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Assets/App_Icon.png";
import HeroExample from "./Assets/Snap_park_hero.png";
import ExampleSticker from "./Assets/Example_Sticker.png";
import ExampleSpotPage from "./Assets/SnapPark_Example.png";
import useMediaQuery from "../../Hooks/MediaQuery";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiGooglecloud,
  SiTailwindcss,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

import SnapparkWebsite from "./SnapparkWebsite";
import SnapparkApp from "./SnapparkApp";

const images = [
  {
    src: ExampleSticker,
    alt: "An example of a QR Code Sticker.",
    caption: "An example of a QR Code Sticker.",
  },
  {
    src: ExampleSpotPage,
    alt: "An example parking spot webpage.",
    caption: "An example parking spot webpage.",
  },
];

const stack = [
  { name: "Typescript", icon: SiTypescript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "React", icon: FaReact },
  { name: "React Native", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "GCP", icon: SiGooglecloud },
  { name: "Firebase", icon: IoLogoFirebase },
];

const Slideshow = ({ imageIndex }: { imageIndex: number }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={images[imageIndex].src}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center"
    >
      <img
        alt={images[imageIndex].alt}
        src={images[imageIndex].src}
        className="rounded-xl object-cover"
      />
      <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-300">
        <InformationCircleIcon
          aria-hidden="true"
          className="mt-0.5 h-5 w-5 flex-none text-gray-300"
        />
        {images[imageIndex].caption}
      </figcaption>
    </motion.div>
  </AnimatePresence>
);

export default function Snappark() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <>
      <div className="relative isolate overflow-hidden px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl 2xl:max-w-4xl text-base leading-7 text-gray-200">
          <div className="inline-flex align-middle justify-center">
            <img
              alt=""
              src={Icon}
              className=" max-w-[50px] p-1 rounded-lg bg-gray-900 shadow-xl ring-1 ring-gray-400/10 "
            />
            <h1 className="mt-1 ml-3 text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">
              Snap Park
            </h1>
          </div>
          <p className="mt-6 text-xl leading-8">
            Snap Park is my latest endevour, and as I mentioned on my homepage I
            built it to solve a common problem with workplace parking - spot
            availability.
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
              src={HeroExample}
              className=" rounded-xl bg-gray-50 object-cover"
            />
            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-300">
              <InformationCircleIcon
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 flex-none text-gray-300"
              />
              The Snap Park Landing page.
            </figcaption>
          </figure>
          <div className="mt-10 max-w-3xl 2xl:max-w-4xl">
            <p>
              At my previous job we had 20 employees who drove to work, and only
              6 available carparks in the office. However, as it was a
              multi-story carpark, there was no way of knowing if there were
              still spots available before driving all the way up to check.
              Unless you were there bright and early, you enevitably found
              yourself frustrated, fighting your way back down against oncoming
              traffic, only to then have to seek out some kind of alternative
              parking (in a busy business district).
              <br />
              <br />
              While Snap Park doesnt aleviate the issue of parking spot
              availability, it at least saves you the hassle and time of getting
              stuck in an already full office carpark.
              <br />
              <br />
              Having just recently built Assetrix for a client at work, I was
              inspired by how easy it was to use QR codes for inventory
              management, and was looking for other ways I could utilise them.
              The premise of Snap Park is quite simple, I placed QR code
              stickers like the one below on each of our carparks, when an
              employee arrives at work and takes an available park, they then
              scan the adjacent code and mark it as unavailable on it's
              associated webpage. When all carparks are taken, a text message is
              sent out to all employees enrolled in the system that the work
              carpark is now full, and that they should seek alternative
              parking.
              <div className="inline-flex w-full justify-center items-end gap-x-6">
                {isMobile ? (
                  <div className="relative mt-6 min-h-[500px]flex min-h flex-col items-center justify-center w-full">
                    <motion.div
                      key={currentIndex}
                      custom={currentIndex}
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                      }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                          handleNext();
                        } else if (swipe > swipeConfidenceThreshold) {
                          handlePrev();
                        }
                      }}
                      className="w-full"
                    >
                      <Slideshow imageIndex={currentIndex} />
                    </motion.div>
                  </div>
                ) : (
                  images.map((image, index) => (
                    <figure
                      key={index}
                      className="flex mt-8 flex-col items-center justify-center"
                    >
                      <img
                        alt={image.alt}
                        src={image.src}
                        className="rounded-xl max-w-[350px] object-cover"
                      />
                      <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-300">
                        <InformationCircleIcon
                          aria-hidden="true"
                          className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                        />
                        {image.caption}
                      </figcaption>
                    </figure>
                  ))
                )}
              </div>
              <br />
              <br />
              At any point an employee can simply visit their company's page to
              quickly see which carparks are still available, and at what time
              each unavailable spot was taken. At midnight local time, a GCP
              cloud function runs that will automatically reset each parking
              spot back to available, ready for the next day.
            </p>
            <ul role="list" className="mt-8 space-y-8 text-gray-300">
              <li className="flex gap-x-3">
                <GlobeAltIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    The Main Web App
                  </strong>{" "}
                  The web application allows employees to interact with the QR
                  code stickers, such as marking them taken or available. It
                  also alows companies to monitor the usage and billing across
                  the month.
                </span>
              </li>
              <li className="flex gap-x-3">
                <DevicePhoneMobileIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    The Mobile Application
                  </strong>{" "}
                  Designed to reduce notification costs, the native application
                  is intended to provide a more streamlined UI/UX experience for
                  the employees.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    The backend
                  </strong>{" "}
                  The Snappark backend is again serverless, but is hosted by a
                  series of GCP Cloud Functions instead of AWS. While this does
                  offer some advantages when working with other Google products,
                  I think I'll stick to AWS from now on.
                </span>
              </li>
            </ul>

            <SnapparkWebsite />
            <SnapparkApp />
          </div>
        </div>
      </div>
    </>
  );
}
