import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaAws } from "react-icons/fa";
import { SiTypescript, SiJavascript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { CgCPlusPlus } from "react-icons/cg";
import { DiPostgresql } from "react-icons/di";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";

const START_INDEX = 0;
const DRAG_THRESHOLD = 150;
const FALLBACK_WIDTH = 1300; // Set to 1200px
const CURSOR_SIZE = 80;

interface Article {
  title: string;
  url: string;
  description: string;
  stack: { name: string; icon: React.ComponentType }[];
}

const articles: Article[] = [
  {
    title: "Ream",
    url: "/",
    description:
      "Ream is an end-to-end digital receipt system aimed at both enterprises and consumers. It consists of Web & Native Mobile applications, and a hardware component, the Ream Tile, for which I designed the PCB and housing from the ground up.",
    stack: [
      { name: "Typescript", icon: SiTypescript },
      { name: "React", icon: FaReact },
      { name: "React Native", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "C++", icon: CgCPlusPlus },
      { name: "AWS", icon: FaAws },
      { name: "Firebase", icon: IoLogoFirebase },
    ],
  },
  {
    title: "Cross Copy",
    url: "/",
    description:
      "Cross Copy is a simply cross-platform application I built to quickly transfer text and files without the hassel or complexity of Dropbox or Google Drive. You can share photos, videos, and files natively on your mobile device - then instantly access them on any of your other devices.",
    stack: [
      { name: "Javascript", icon: SiJavascript },
      { name: "React", icon: FaReact },
      { name: "React Native", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Firebase", icon: IoLogoFirebase },
    ],
  },
  {
    title: "Assetrix",
    url: "/",
    description:
      "Assetrix is an internal asset tracking system that uses QR Codes to track the location, P&ID, ISO number for industrial equipment. It was built specifically for a client at my previous job in order to keep track of the decomissioning of a complex gas compressor station and is still in use today.",

    stack: [
      { name: "Typescript", icon: SiTypescript },
      { name: "React", icon: FaReact },
      { name: "React Native", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "PostgreSQL", icon: DiPostgresql },
      { name: "Firebase", icon: IoLogoFirebase },
    ],
  },
  {
    title: "Stellarmetrics",
    url: "/",
    description:
      "Stellarmetrics is a remote monitoring solution for assets in rural areas, it utilises the SWARM satellite network to send small packets of data (tank water levels, pressure readings, etc.) for a fraction of the cost of traditional systems.",
    stack: [
      { name: "Typescript", icon: SiTypescript },
      { name: "React", icon: FaReact },
      { name: "React Native", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "PostgreSQL", icon: DiPostgresql },
      { name: "Firebase", icon: IoLogoFirebase },
    ],
  },
];

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLUListElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const [activeSlide, setActiveSlide] = useState(START_INDEX);
  const canScrollPrev = activeSlide > 0;
  const canScrollNext = activeSlide < articles.length - 1;
  const offsetX = useMotionValue(0);
  const animatedX = useSpring(offsetX, {
    damping: 20,
    stiffness: 150,
  });

  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (containerRef.current && itemsRef.current[activeSlide]) {
      const containerWidth = containerRef.current.clientWidth;
      const itemWidth = itemsRef.current[activeSlide]?.clientWidth || 0;
      const newOffsetX =
        (containerWidth - itemWidth) / 2 - activeSlide * itemWidth;
      offsetX.set(newOffsetX);
    }
  }, [activeSlide, offsetX]);

  function handleDragSnap(
    _: MouseEvent | TouchEvent | PointerEvent,
    { offset: { x: dragOffset } }: { offset: { x: number } }
  ) {
    // Reset drag state
    setIsDragging(false);
    containerRef.current?.removeAttribute("data-dragging");

    // Stop drag animation (rest velocity)
    animatedX.stop();

    const currentOffset = offsetX.get();

    // Snap back if not dragged far enough or if at the start/end of the list
    if (
      Math.abs(dragOffset) < DRAG_THRESHOLD ||
      (!canScrollPrev && dragOffset > 0) ||
      (!canScrollNext && dragOffset < 0)
    ) {
      animatedX.set(currentOffset);
      return;
    }

    let offsetWidth = 0;

    // Start searching from currently active slide in the direction of the drag
    for (
      let i = activeSlide;
      dragOffset > 0 ? i >= 0 : i < itemsRef.current.length;
      dragOffset > 0 ? i-- : i++
    ) {
      const item = itemsRef.current[i];
      if (item === null) continue;
      const itemOffset = item.offsetWidth;

      const prevItemWidth =
        itemsRef.current[i - 1]?.offsetWidth ?? FALLBACK_WIDTH;
      const nextItemWidth =
        itemsRef.current[i + 1]?.offsetWidth ?? FALLBACK_WIDTH;

      if (
        (dragOffset > 0 && // Dragging left
          dragOffset > offsetWidth + itemOffset && // Dragged past item
          i > 1) || // Not the first/second item
        (dragOffset < 0 && // Dragging right
          dragOffset < offsetWidth + -itemOffset && // Dragged past item
          i < itemsRef.current.length - 2) // Not the last/second to last item
      ) {
        dragOffset > 0
          ? (offsetWidth += prevItemWidth)
          : (offsetWidth -= nextItemWidth);
        continue;
      }

      if (dragOffset > 0) {
        // Prev
        offsetX.set(currentOffset + offsetWidth + prevItemWidth);
        setActiveSlide(i - 1);
      } else {
        // Next
        offsetX.set(currentOffset + offsetWidth - nextItemWidth);
        setActiveSlide(i + 1);
      }
      break;
    }
  }


  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);



  function disableDragClick(e: React.MouseEvent) {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  function handleTitleClick(index: number) {
    const containerWidth = containerRef.current?.clientWidth || 0;
    const itemWidth = itemsRef.current[index]?.clientWidth || 0;
    const newOffsetX = (containerWidth - itemWidth) / 2 - index * itemWidth;
    offsetX.set(newOffsetX);
    setActiveSlide(index);
  }

  return (
    <div className="relative isolate flex items-center flex-col py-24 sm:py-32 justify-center overflow-hidden bg-black">
      <div className="w-full max-w-7xl px-6 lg:px-4">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-roboto font-semibold leading-7 text-green-400">
            Other Projects
          </h2>
          <p className="mt-2 text-3xl font-roboto font-bold tracking-tight text-white sm:text-4xl">
            My other projects
          </p>
          <p className="mt-6 text-lg font-roboto leading-8 text-gray-300">
            I've used a variety of tools and frameworks over the years for both
            personal and commercial use.
          </p>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-4 gap-4 p-4 w-full mx-auto max-w-7xl">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            variants={hoverVariants}
            initial="initial"
            animate="initial"
            whileHover="hover"
            className={`text-center flex-col flex p-4 border border-gray-700 rounded-lg cursor-pointer ${
              activeSlide === index
                ? "bg-gray-800 text-white border-green-400"
                : "bg-gray-800 text-gray-300"
            }`}
            onClick={() => handleTitleClick(index)}
          >
            <div className="w-full flex-col flex" style={{ flex: 1 }}>
              <h3 className="text-2xl 2xl:text-3xl font-roboto font-bold text-left">
                {article.title}
              </h3>
              <p className="text-sm 2xl:text-base font-roboto text-left mt-4">
                {article.description}
              </p>
            </div>
            <div className="inline-flex align-middle mt-3 justify-start w-full">
              <button
                type="button"
                className="rounded inline-flex items-center gap-x-2 bg-green-500 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
              >
                Open
                <FiExternalLink />
              </button>
              <p className="ml-3 text-center inline-flex gap-x-1 items-center text-sm">
                Learn more <FiArrowRight />
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="group container mt-10">
        <div className="relative">
          <motion.ul
            ref={containerRef}
            className="flex cursor-none items-start"
            style={{
              x: animatedX,
            }}
            drag="x"
            dragConstraints={{
              left: -(FALLBACK_WIDTH * (articles.length - 1)),
              right: FALLBACK_WIDTH,
            }}
            onMouseMove={({ currentTarget, clientX, clientY }) => {
              const parent = currentTarget.offsetParent as HTMLElement;
              if (!parent) return;
              const { left, top } = parent.getBoundingClientRect();
              mouseX.set(clientX - left - CURSOR_SIZE / 2);
              mouseY.set(clientY - top - CURSOR_SIZE / 2);
            }}
            onDragStart={() => {
              containerRef.current?.setAttribute("data-dragging", "true");
              setIsDragging(true);
            }}
            onDragEnd={handleDragSnap}
          >
            {articles.map((article, index) => {
              const active = index === activeSlide;
              return (
                <motion.li
                  layout
                  key={article.title}
                  ref={(el) => (itemsRef.current[index] = el)}
                  className={`group relative shrink-0 select-none px-3 min-w-[1280px] max-h-[800px] transition-opacity duration-300 ${
                    !active ? "opacity-90" : ""
                  }`}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.4,
                  }}
                  style={{
                    flexBasis: active ? "40%" : "40%",
                  }}
                >
                  <a
                    href={article.url}
                    className={`grid overflow-hidden rounded-xl bg-gray-900 ${
                      active ? "aspect-[5.2/3]" : "aspect-[5.2/3]"
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                    draggable={false}
                    onClick={disableDragClick}
                  >
                    <div className="text-xl font-bold text-blue-200 relative max-h-full inset-0">
                      <div className="text-xl font-bold rounded-xl text-blue-200 border absolute inset-6 aspect-[5/3] max-h-[85%]">
                        Web
                      </div>
                      <div className="border border-gray-200 bg-gray-900 rounded-xl absolute top-20 right-6 h-[85%] aspect-[9/19.5]">
                        Mobile
                      </div>
                      <div className="border-gray-200 rounded-xl flex items-center gap-x-2 absolute bottom-6 left-6 h-[50px]">
                        {article.stack.map((item, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center rounded-md gap-x-1 bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20"
                          >
                            <item.icon aria-hidden="true"  />
                            {item.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

const hoverVariants = {
  initial: {
    scale: 1,
    boxShadow: "none",
  },
  hover: {
    boxShadow: "inset 0 0 5px rgba(0, 255, 0, 0.8)",
    transition: {
      duration: 0.3,
    },
  },
};

export default Projects;
