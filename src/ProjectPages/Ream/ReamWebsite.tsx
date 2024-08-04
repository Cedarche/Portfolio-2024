import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import HomepageImage from "./Assets/Ream_homepage_1.png";
import ReamExampleReceipt from "./Assets/Ream_example_receipt.png";
import ReamDynamicReceipt from "./Assets/Ream_dynamic_receipt.png";
import useMediaQuery from "../../Hooks/MediaQuery";

const images = [
  {
    src: ReamExampleReceipt,
    alt: "Example of a digital receipt",
    caption: "An example of a digital receipt.",
  },
  {
    src: ReamDynamicReceipt,
    alt: "Example of a dynamic digital receipt",
    caption: "An example of a dynamic digital receipt.",
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

function ReamWebsite() {
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
    <div id="website">
      <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-50">
        The main Ream Website
      </h2>
      <p className="mt-6">
        This was the first website I ever built, so you'll have to excuse some
        of the styling. I have refactored it over the years to use typescript,
        however much of the original code is fairly low-quality.
      </p>
    
      <figure className="mt-16">
        <img
          alt=""
          src={HomepageImage}
          className="rounded-xl bg-gray-50 object-cover"
        />
        <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-300">
          <InformationCircleIcon
            aria-hidden="true"
            className="mt-0.5 h-5 w-5 flex-none text-gray-300"
          />
          The main ream-receipts.com homepage.
        </figcaption>
      </figure>
      <p className="mt-10">
        The website is primarily designed to be viewed on mobile, as the
        majority of the customers would access it via their digital receipt in
        order to learn more about the system. I also built a simple notification
        system that would let takeaway venues notify their customers when their
        order was ready for collection by updating the receipt, which I called
        dynamic receipts. An example of standard, and dynamic digital receipts
        can be seen below.
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
      <p className="mt-10">
        More than a cursory view of the main website will tell you that it
        definitely needs a lot of work. However it does the job as a proof of
        concept.
      </p>
      <p className="mt-6">
        You can view an example receipt{" "}
        <a
          href="https://ream-1.web.app/receipt/74iUwpl0pjTt9uvva8bH"
          target="_blank"
          className="text-blue-500"
        >
          here
        </a>
        .
      </p>
    </div>
  );
}

export default ReamWebsite;

