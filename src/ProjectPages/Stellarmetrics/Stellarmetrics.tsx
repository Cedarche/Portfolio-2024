import {
  InformationCircleIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import React, { Suspense, useRef, useState } from "react";
import { Model } from "./StellarmetricsModel";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import StellarmetricsWeb from "./StellarmetricsWeb";

import Icon from "./App_Icon.png";
import WebsiteExample from "./Assets/Stellarmetrics_homepage_1.png";
import WebsiteExample2 from "./Assets/Stellarmetrics_homepage_2.png";
import Stellarmetrics_front from "./Assets/Stellarmetrics_front.png";
import Stellarmetrics_back from "./Assets/Stellarmetrics_back.png";
import Prototype1 from "./Assets/Stellarmetrics_prototype1.jpeg";
import useMediaQuery from "../../Hooks/MediaQuery";

const images = [
  {
    src: Stellarmetrics_front,
    alt: "The Stellarmetrics hub front.",
    caption: "The Stellarmetrics hub front.",
  },
  {
    src: Stellarmetrics_back,
    alt: "The Stellarmetrics hub back with PCB.",
    caption: "The Stellarmetrics hub back with PCB.",
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

export default function Stellarmetrics() {
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
      {/* <Navbar open={open} setOpen={setOpen} /> */}
      <div className="relative isolate overflow-hidden px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-200">
          <div className="inline-flex align-middle justify-center">
            {/* <img
              alt=""
              src={Icon}
              className=" max-w-[50px] p-1 rounded-lg bg-gray-900 shadow-xl ring-1 ring-gray-400/10 "
            /> */}
            <h1 className="mt-1 ml-3 text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">
              Stellarmetrics
            </h1>
          </div>
          <p className="mt-6 text-xl leading-8">
            A common issue that we used to run into at my previous job was
            remote data monitoring. The majority of our work site were in
            extremely remote areas without mobile coverage; during operations we
            would often have a generator, and satelite internet (Starlink) set
            up to provide telemetry.
          </p>
          <figure className="mt-16">
            <img
              alt=""
              src={WebsiteExample}
              className=" rounded-xl bg-gray-50 object-cover"
            />
            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-300">
              <InformationCircleIcon
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 flex-none text-gray-300"
              />
              The Stellarmetrics Landing Page (unfinished, don't judge).
            </figcaption>
          </figure>
          <div className="mt-10 ">
            <p>
              The issue comes when long term monitoring of a remote asset(s) is
              required, either for governmental compliance reasons or simply for
              data collection. It's uneconomical to leave a leave a generator on
              site just to power a single Starlink, not to mention maintenance
              and refuelling. What we had been using perviously was mobile
              satellite monitering systems that came with a long-term battery.
              However these were bulky (had to be towed in on a trailer), and
              extremely expensive.
              <br />
              <br />
              Once on-site activites have ceased, the amount of data that needs
              to be transferred is relatively small, think wellhead pressure
              readings, tank water levels, salinity, temperature, etc. A
              coworker and I decided that we could provide semi-realtime data
              collection for remote assets at a fraction of the current cost by
              using established small-satellite networks such as the{" "}
              <a
                href="https://swarm.space/"
                target="_blank"
                className="text-blue-500"
              >
                SWARM
              </a>{" "}
              satellite network - and specifially the Swarm M138 Modem.
              <br />
              <br />
              The Swarm modem would allow us to offer global satellite
              connectivity for drastically lower prices. Small scale satellite
              IoT connectivity is not a new concept, and there are several
              companies out there creating a similar product, so we wanted to do
              something differently. The vast majority of the time, assets in
              remote areas are not located next to each other, and are often
              spread out over several kilometers. I had the idea to have a
              single <span className="italic">Hub</span> that act as a LoRa
              gateway, as well as a transciever for the Swarm network. Each
              asset would then be equipped with a LoRa{" "}
              <span className="italic">Node</span> that would transmit data to
              the Hub. The Hub would then collate the data into a single packet
              that would then be transmitted to the network.
              <br />
              <br />
              This would allow us to even further reduce costs by removing the
              need to have a separate Swarm modem for each asset (which made up
              the majority of the cost of the Hub). Through testing with long
              range fiberglass LoRa antennas, and by using the nodes as relays,
              we figured we could service an area of 15km^2 with a single Hub.
              <br />
              <br />
            </p>
          </div>

          <div className="mt-10 ">
            <h2 className="text-2xl font-bold tracking-tight text-gray-50">
              Early prototypes and proof of concept.
            </h2>
            <p className="mt-4">
              As with most of my electronics projects I started out with a
              simple breadboard, an ESP32, LoRa Module, a 3.7v LiPo battery, and
              a couple of OLED screens. Once I had successfully got the Swarm
              module to transmit to the satellite network, I pulled everything
              together into some EDA software and had some prototype PCBs
              manufactured. Luckily my struggles learning to build the the Ream
              Tile had finally paid off and I was able to get them mostly right
              the first time round (somehow).
            </p>
            <figure className="mt-8">
              <img
                alt=""
                src={Prototype1}
                className=" rounded-xl bg-gray-50 object-cover"
              />
              <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-300">
                <InformationCircleIcon
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                />
                An early example
              </figcaption>
            </figure>
            <p className="mt-4">
              In the image above you can see early prototypes of the Hub (in
              red) and a node (black). The node takes distance measurement using
              an ultrasonic sensor, combines the data with device UID and a
              timestamp, then sends it over the LoRa network to the Hub.
              <br />
              <br />
              The Hub is continuously listening for incoming data from the
              nodes, and stores any incoming messages in memory. When the Swarm
              module detects there is a satellite overhead, it transmits it's
              backlog of messages all at once.
              <br />
              <br /> The Swarm network provides an API interface which you can
              setup a webhook to listen for new incoming messages. I ended up
              building a simple backend to listen to changes in the webook, and
              save the data into a database. I then built a dashboard with react
              to display everything, which I talk about later.
              <br />
              <br />I was stoked to finally get a working system. However, I
              realised that having two separate PCB designs for both the Node
              and the Hub was redundant, and that I could achieve the same thing
              with a single design, but running different firmware on each
              device.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold tracking-tight text-gray-50">
              The Stellarmetrics Hub
            </h2>
            <p className="mt-4 w-full">
              I ended up coming up with a design that could act as both a Hub or
              Node depending on firmware and the presence of a Swarm Module. The
              physical design requirements of the Hub are fairly straight
              forward, it needed:
            </p>
            <ul className="list-disc list-inside pl-4 mt-4">
              <li className="mt-2">
                Some sort of mounting system - I figured the easiest place to
                start was just mounting the whole system on a star picket.
              </li>
              <li className="mt-2">
                A battery and solar panel for long-term use.
              </li>
              <li className="mt-2">
                IP-67 rated connectors for reading multiple sensors (pressure,
                temperature, water level etc.) from one device.
              </li>
              <li className="mt-2">
                A custom PCB with a microcontroller to allow us to interact with
                the LoRa & Swarm M138 modules, any attached sensors, and a
                battery management/charge system.
              </li>
              <li className="mt-2">
                LoRa and satellite transmission antennas.
              </li>
              <li className="mt-2">An IP-67 rated housing.</li>
            </ul>
            <p className="mt-4 w-full">
              You can see examples of the housing I came up with below, whcih
              include 4x I2C or PWM inputs, 2 antenna ports, a power in port, a
              GPS module, indicator lights, and a TFT Screen.
            </p>
            <div className="mt-8 inline-flex w-full min-h-[430px] justify-center items-end gap-x-6">
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
              marginTop: 10,
              height: 1050,
            }}
          >
            <div className="flex flex-col w-full">
              <p className="mt-4 w-full">
                You can see a 3D model of my proposed design below.
                Unfortunately I never got the chance to physically build the
                latest version of the Hub since I moved to London shortly after
                designing it.
              </p>
            </div>

            <Canvas
              shadows
              dpr={[1, 2]}
              camera={{ fov: 40 }}
              style={{
                flex: 1,
                minHeight: "900px",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              {/* <CameraController /> */}
              <PerspectiveCamera zoom={0.8} />
              <Suspense fallback={null}>
                <Stage preset="soft" intensity={0.084} environment="apartment">
                  <Model />
                </Stage>
              </Suspense>
              <OrbitControls ref={ref} autoRotate={false} />
            </Canvas>
          </div>

          <p className="mt-8">
            I realise that having both antennas next to each other would never
            work in practice due to interference, but it certainly makes the
            model look cooler. The Swarm network provides an API interface which
            you can setup a webhook to listen for new incoming messages. I ended
            up building a simple backend to listen to changes in the webook, and
            save the data into a database.
          </p>
          <StellarmetricsWeb />
        </div>
      </div>
    </>
  );
}
