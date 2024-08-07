import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { FaReact, FaNodeJs, FaPython, FaAws } from "react-icons/fa";
import { SiTypescript, SiGooglecloud } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { CgCPlusPlus } from "react-icons/cg";

const features = [
  {
    name: "Javascript/Typescript",
    description:
      "Like most people I started off learning the basics of Javascript, before diving into React/React Native, then switched to Typescript for most projects.",
    icon: SiTypescript,
    experience: "4+",
  },
  {
    name: "Python",
    description:
      "Python was the first language I learnt during university, and I have used it extensively at my previous workplace for manipulating large datasets with pandas and numpy. It's my go to when I need to manipulate files/images within my OS. However, it has been a few years since I have used it for any major projects.",
    icon: FaPython,
    experience: "2",
  },
  {
    name: "C++",
    description:
      "I have a basic understanding of C++ programming structures, and primarily use it for IoT programming using STM32, ESP32, and Arduino microcrontrollers.",
    icon: CgCPlusPlus,
    experience: "1",
  },
  {
    name: "Node.js",
    description: "Node.js, and specifically Express.js, was the first backend framework I learnt along side React. I have experience with MongoDB, node-postgres (PostgreSQL). I have recently been teaching myself how to use GraphQL to interact with APIs more efficiently.  ",
    icon: FaNodeJs,
    experience: "4+",
  },
  {
    name: "React/React Native",
    description:
      "I first started learning React in 2019, right before Covid and the 16.8.0 Hooks update. Then I built my first React Native application in early 2021. I've also gained a solid knowledge of HTML/CSS at the same time.",
    icon: FaReact,
    experience: "4+",
  },


  {
    name: "Firebase",
    description:
      "Firebase is my go-to BaaS for small or personal projects. I've got extensive experience with it's use cases, specifically with Authentication, Firestore, and Hosting.",
    icon: IoLogoFirebase,
    experience: "4+",
  },
  {
    name: "AWS",
    description:
      "For larger projects, I tend to use serverless containerized functions as the backend with Docker and AWS Lambda. I have experience using EC2, S3, Elastic Beanstalk, CloudWatch, IoT Core, and CodePipeline.",
    icon: FaAws,
    experience: "4+",
  },
  {
    name: "GCP",
    description:
      "I have some experience using the Google Cloud Platform directly outside of the Firebase framework, including Cloud Run, Cloud Functions, Compute Engine, and Cloud Storage.",
    icon: SiGooglecloud,
    experience: "1",
  },
];

export default function Skills() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base  font-semibold leading-7 text-green-400">
            Skills
          </h2>
          <p className="mt-2 text-3xl  font-bold tracking-tight text-white sm:text-4xl">
            Languages, Tools, & Frameworks
          </p>
          <p className="mt-6 text-lg  leading-8 text-gray-300">
            I've used a variety of tools and frameworks over the years for both
            personal and commercial use.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          {features.map(
            (feature) =>
              feature.name !== "NULL" && (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline  font-semibold text-white">
                    <feature.icon
                      aria-hidden="true"
                      className="absolute left-1 top-1 h-5 w-5 text-green-500"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline font">{feature.description}</dd>
                  <span className="inline-flex ml-2 items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                    {feature.experience} Years
                  </span>
                </div>
              )
          )}
        </dl>
      </div>
    </div>
  );
}
