import React, { Suspense, useRef, useState } from "react";
import { Model } from "./Model";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";

import { InformationCircleIcon } from "@heroicons/react/24/outline";
import TileCutDark from "./Assets/Ream_tile_cutaway_dark.png";
import PCB_FRONT from "./Assets/REAM_PCB_FRONT.png";
import PCB_BACK from "./Assets/REAM_PCB_BACK.png";
import Prototype from "./Assets/Ream_Tile_Prototype.jpeg";
import useMediaQuery from "../../Hooks/MediaQuery";

const images = [
  {
    src: PCB_FRONT,
    alt: "The Tile PCB front.",
    caption: "The Tile PCB front.",
  },
  {
    src: PCB_BACK,
    alt: "The Tile PCB back with PCB antenna.",
    caption: "The Tile PCB back with PCB antenna.",
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

export default function ReamTile() {
  const ref = useRef();
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
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          marginTop: 40,
          height: 550,
        }}
      >
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold tracking-tight text-gray-50">
            The Ream Tile
          </h2>
          <p className="mt-6">
            The Tile is simultaneously the most difficult and most rewarding
            thing I've ever built. I designed then built every aspect of it from
            the ground up, including the housing, circuitry/PCB, and firmware.
            For testing and iteration purposes the housing is 3D printed out of
            ABS, but I designed it with injection moulding in mind. As a
            mechanical engineer this is the one part of the device that I was
            already familiar with.
          </p>
        </div>
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ fov: 30 }}
          style={{ flex: 1, minHeight: "200px", background: "transparent" }}
        >
          {/* <CameraController /> */}
          {/* <PerspectiveCamera   zoom={0.8} /> */}
          <Suspense fallback={null}>
            <Stage preset="rembrandt" intensity={0.08} environment="apartment">
              <Model />
            </Stage>
          </Suspense>
          <OrbitControls ref={ref} autoRotate={false} />
        </Canvas>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          marginTop: 40,
          minHeight: 500,
        }}
      >
        <p className="mt-8">
          At the time of it's construction there were no development boards
          available that had the features I needed, so I decided to build my own
          custom PCB. I just needed to learn some basic circuit & PCB design,
          source the correct components, have the boards manufactured, solder
          the ICs, and learn basic C++ and write some firmware - how hard can it
          be right?
          <br />
          <br />
          Six months and around 50 expensive prototypes later I finally landed
          on a working design. The core of the system is the Dynamic NFC chip,
          which allows you to programmatically store and change the data it
          displays. This requires a correctly tuned PCB antenna so that standard
          mobile devices can correctly interperet the NFC signal. To control the
          IC I use an ESP32-C3 which has WiFi & BLE baked in. Then to power the
          whole system I have a LiPo battery and a charge/protection circuit
          with a USB-C port.
        </p>
        <div className="inline-flex w-full min-h-[430px] justify-center items-end gap-x-6">
          {isMobile ? (
            <div className="relative mt-6 flex min-h flex-col items-center justify-center w-full">
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
                className="flex flex-col items-center justify-center"
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
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          //   marginTop: 40,
          minHeight: 500,
        }}
      >
        <p className="mt-8">
          After sorting through issue after issue figuring out the integration
          between the housing, PCB, and battery management, I needed to write
          the firmware for the device. I won't go into too much detail on this
          but it's written in C++ using the ESP-IDF framework specifically
          designed for Espressif microcontrollers with a wide range of
          examples/support.
          <br />
          <br /> The firmware includes support for both BLE and WiFi, and can
          present a receipt URL via either method. When using Bluetooth, the
          device provides a GATT Server service which a mobile application can
          send data to - a digital receipt URL in this case. When using WiFi,
          the device connects to the internet via a local network, then
          subscribes to a specific AWS IoT MQTT topic. When a digital receipt is
          created by the POS software via the Ream API, it pushes the resulting
          receipt URL out to the specified Tile.
          <br />
          <br />
          After months of integration hell I finally had a fully working system.
          You can see an x-ray view of the Tile below, as well as some
          functioning prototypes.
        </p>

        <figure className="mt-16">
          <img
            alt="Ream_tile_xray"
            src={TileCutDark}
            className=" rounded-xl bg-gray-50 object-cover"
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-300">
            <InformationCircleIcon
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 flex-none text-gray-300"
            />
            An x-ray view of the Ream Tile.
          </figcaption>
        </figure>
        <figure className="mt-16">
          <img
            alt="Ream_tile_prototype"
            src={Prototype}
            className=" rounded-xl bg-gray-50 object-cover"
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-300">
            <InformationCircleIcon
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 flex-none text-gray-300"
            />
            Some examples of prototype Tiles with black and white 3D printed
            housings.
          </figcaption>
        </figure>
      </div>
    </>
  );
}
