import { Link } from "react-router-dom";
import SnapparkIcon from "./Snappark/App_Icon.png";
import CrosscopyIcon from "./Crosscopy/CC_ICON.png";
import ReamIcon from "./Ream/Ream_icon_dark.png";
import AssetrixIcon from "./Assetrix/ATMS_logo_small.png";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Ream",
    id: 1,
    internal_url: "/projects/ream",
    external_url: "https://ream-1.web.app/",
    icon: ReamIcon,
  },
  {
    name: "Snap Park",
    id: 0,
    internal_url: "/projects/snappark",
    external_url: "snappark.co",
    icon: SnapparkIcon,
  },

  {
    name: "Cross Copy",
    id: 2,
    internal_url: "/projects/crosscopy",
    external_url: "crosscopy.dev",
    icon: CrosscopyIcon,
  },
  {
    name: "Assetrix",
    id: 3,
    internal_url: "/projects/assetrix",
    external_url: "/",
    icon: AssetrixIcon,
  },
  {
    name: "Stellarmetrics",
    id: 4,
    internal_url: "/projects/stellarmetrics",
    external_url: "/",
    icon: AssetrixIcon,
  },
];

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

function Sidebar() {
  return (
    <div className="hidden md:flex text-white fixed top-16 bottom-6 left-6  rounded-xl ring-1 ring-gray-400/40 bg-gray-900/10 shadow-lg z-10">
      <ul className="p-4 text-gray-100">
        {projects.map((project, index) => (
          <motion.li
            className="mb-2 overflow-hidden  rounded-lg 2xl:rounded-xl"
            key={project.id}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={fadeIn}
            custom={index}
          >
            <Link
              to={project.internal_url}
              className=" ring-gray-400/40 w-full 2xl:p-3 2xl:rounded-xl bg-[#1d1d1da0] backdrop-blur flex-row flex align-center"
            >
              <img
                alt={project.name}
                src={project.icon}
                className={`max-w-[35px] rounded-lg bg-gray-900  ring-gray-400/10 
                  ${project.name === "Assetrix" ? "p-1.5" : "p-0"}`}
              />
              <span className="font-bold hidden text-lg 2xl:flex align-bottom mt-1 ml-3">
                {project.name}
              </span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
