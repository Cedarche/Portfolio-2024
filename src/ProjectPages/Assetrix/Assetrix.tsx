import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import useMediaQuery from "../../Hooks/MediaQuery";

import Icon from "./Assets/ATMS_logo_small.png";
import Assetrix_1 from "./Assets/Assetrix_1.jpeg";
import Assetrix_2 from "./Assets/Assetrix_2.jpeg";
import AssetrixQR1 from "./Assets/Assetrix_QRCodes_1.jpeg";
import AssetrixQR2 from "./Assets/Assetrix_QRCodes_2.jpeg";
import AssetrixAppDemo from "./Assets/Assetrix_example.mov";

const stack = [
  { name: "Typescript", icon: SiTypescript },
  { name: "React Native", icon: FaReact },
  { name: "Firebase", icon: IoLogoFirebase },
];

const images = [
  {
    src: Assetrix_2,
    alt: "An example of an asset data entry page",
    caption: "An example of an asset data entry page",
  },
  {
    src: Assetrix_1,
    alt: "A view of the Inventory page.",
    caption: "A view of the Inventory page.",
  },
];
const images2 = [
  {
    src: AssetrixQR1,
    alt: "An example of an asset data entry page",
    caption: "An example of an asset data entry page",
  },
  {
    src: AssetrixQR2,
    alt: "A view of the Inventory page.",
    caption: "A view of the Inventory page.",
  },
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

export default function Assetrix() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload images and video when the component mounts
  useEffect(() => {
    const preloadImages = (imageArray) => {
      imageArray.forEach((image) => {
        const img = new Image();
        img.src = image.src;
      });
    };

    const preloadVideo = (videoSrc) => {
      const video = document.createElement("video");
      video.src = videoSrc;
      video.preload = "auto"; // Preload video
    };

    const preloadIcon = (iconSrc) => {
      const img = new Image();
      img.src = iconSrc;
    };

    preloadImages(images);
    preloadImages(images2);
    preloadVideo(AssetrixAppDemo);
    preloadIcon(Icon); // Preload the icon
  }, []);

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
      {/* <Navbar open={open} setOpen={setOpen} /> */}
      <div className="relative isolate overflow-hidden px-6 py-32 lg:px-8">
        <div className="mx-auto  max-w-3xl 2xl:max-w-4xl text-base leading-7 text-gray-200">
          <div className="inline-flex align-middle justify-center">
            <img
              alt=""
              src={Icon}
              className=" max-w-[50px] p-1 rounded-lg bg-gray-900 shadow-xl ring-1 ring-gray-400/10 "
            />
            <h1 className="mt-1 ml-3 text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">
              Assetrix
            </h1>
          </div>
          <p className="mt-6 text-xl leading-8">
            Assetrix is really just a simple QR code asset management
            application, which is not a new idea by any stretch. However, I was
            somewhat forced to build it out of necessity at my previous job.
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
          <figure className="mt-8">
            <div className="relative mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
              {/* Video only for mobile */}
              <div className="sm:hidden flex items-center justify-center rounded-[45px] p-3  bg-gray-400/80">
                <video
                  src={AssetrixAppDemo}
                  className="w-full h-full max-w-[316px] max-h-[684px] rounded-[35px] shadow-xl"
                  loop
                  // autoPlay
                  muted
                />
              </div>

              {/* SVG with video for larger screens */}
              <div className="hidden sm:block">
                <svg
                  role="img"
                  viewBox="0 0 366 729"
                  className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
                >
                  <title>Assetrix App demo</title>
                  <defs>
                    <clipPath id="clipPath">
                      <rect rx={36} width={316} height={684} />
                    </clipPath>
                  </defs>
                  <path
                    d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                    fill="#4B5563"
                  />
                  <path
                    d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                    fill="#343E4E"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <video
                    src={AssetrixAppDemo}
                    className="max-w-full max-h-full w-[316px] h-[684px] rounded-[35px] shadow-xl"
                    loop
                    autoPlay
                    muted
                  />
                </div>
              </div>
            </div>

            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-300">
              <InformationCircleIcon
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 flex-none text-gray-300"
              />
              A demo of the Assetrix Mobile App.
            </figcaption>
          </figure>
          <div className="mt-10  max-w-3xl 2xl:max-w-4xl">
            <p>
              One of our primary clients had been in discussions with a major
              power company to purchase a decomissioned gas compressor station
              that had already started to be dismantled. The plant still had
              years of use left, and the client intended to repurpose the
              equipment for a new gas field they were developing. While we had
              the original construction plans, ISO's and P&IDs, we quickly
              realised that once it had been dissassembled it would be
              incredibly difficult to identify the thousands of components -
              piping, valves, instruments, supports, and machinery. If we wanted
              to have any chance at reassembling the compressor station, we
              needed a comprehensive inventory management system.
              <br />
              <br />
              However time was not on our side; the decomissioning had already
              begun when it was purchased and we essentially had 3 business days
              to get some sort of asset tracking system in place. Our first
              thought was to use an established, industry specific asset
              managment tool, which are quite common. When I contacted several
              providers I was told that the lead time to get set-up was in the
              order of weeks, not days.
              <br />
              <br />
              I volunteered to build a system that would hopefully get us
              accross the line so we at least had some kind of record of how
              everything was put together. The client approved our request on
              Wednesday morning, by lunchtime I had ordered 2000 generic QR code
              stickers/tags incremented from 000001 to 002000 that would be
              ready for collection the next day. At the same time, another
              member of our team worked out the data structure we'd need to
              record of each piece of equipment: Plant Section, Subsection, Item
              No., P&ID No. ISO No., Equipment type, description, photos, etc.
              <br />
              <br />I then spent the next 4 days building a cross-platform
              application using react-native that would allow us to quickly
              input the required information. I wanted it to be accessible as a
              native mobile application, as well as from the browser. This
              turned out to be overkill, and a simple web application would have
              worked fine, but hindsight is 2020.
            </p>
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
                      className="rounded-xl object-cover"
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
            <p className="mt-8">
              On Monday the next week, myself and another engineer from the team
              flew out to site and spent the next 3 weeks meticulously going
              through the original plans and marking every relavent piece of
              equipment on the site.
              <br />
              <br />
              We divided the compressor station into super structures
              (Compressor 1, TEG Unit, Flare, etc.) and assigned each of these a
              color. When placing a QR code sticker, we also placed a dot of
              spray paint that corresponded with the relavent section. As the
              plant was being dissassembled and temporarily placed in a laydown
              yard for storage, we wanted to make sure that all related pieces
              were placed in the same spot. Of course it isnt that simply, with
              multiple systems being interconnected which you can see in the
              Inventory page example above, where the super structures often
              have 2 or more colours attached to them.
            </p>

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
                images2.map((image, index) => (
                  <figure
                    key={index}
                    className="flex mt-8 flex-col items-center justify-center"
                  >
                    <img
                      alt={image.alt}
                      src={image.src}
                      className="rounded-xl object-cover"
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

            <div className="mt-8 ">
              <p className="mt-6">
                We used heavyduty all-weather stickers for the QR codes with the
                intent that when the compressor station is reconstructed in Q4
                2024, the engineers and construction crew will be able to scan a
                piece of equipment, and know exactly where it is meant to go.
              </p>
              <p className="mt-6">
                The app is still in regular use at my previous company to help
                organise equipment refurbishment. I havent made either the code
                or the app itself public as it is technically not my property -
                being built on company time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
