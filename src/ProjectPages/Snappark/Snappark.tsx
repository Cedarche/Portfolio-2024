import {
  CheckCircleIcon,
  InformationCircleIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  GlobeAltIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Assets/App_Icon.png";
import WebsiteExample from "./DashboardExample.png";
import HeroExample from "./Assets/Snap_park_hero.png";
import ExampleSticker from "./Assets/Example_Sticker.png";
import ExampleSpotPage from "./Assets/SnapPark_Example.png";
import useMediaQuery from "../../Hooks/MediaQuery";

import SnapparkWebsite from "./SnapparkWebsite";

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
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-200">
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
              The Snap Park Dashboard.
            </figcaption>
          </figure>
          <div className="mt-10 max-w-3xl">
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
              <br />
              <br />
              It uses Firebase Authentication, Storage, and Firestore, which are
              accessed directly on the client side using carefully set rules.
              All of the source code is available on my Github.
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

            <SnapparkWebsite />
          </div>
        </div>
      </div>
    </>
  );
}
