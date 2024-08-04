import { ChevronRightIcon } from "@heroicons/react/20/solid";
import SnapDash from "../../assets/Snappark/DashboardExample.png";
import SnapLogo from "../../assets/Snappark/App_Icon.png";
import SnapLogo2 from "../../assets/Snappark/SnapParkLogo-01.png";
import './Features.css'

const ProjectFeature1: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden bg-black">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#37ff00] to-[#53e546] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <img className="h-11 rounded-xl" src={SnapLogo2} alt="Your Company" />
          <div className="mt-24 sm:mt-32 lg:mt-16 overflow-x-scroll no-scrollbar ">
            <div className="inline-flex  space-x-1 min-w-[550px]">
              <span className="rounded-full max-h-[50px] flex items-center font-roboto bg-green-500/10 px-3 py-1 text-sm font-semibold leading-6 text-green-400 ring-1 ring-inset ring-green-500/20">
                Typescript
              </span>
              <span className="rounded-full max-h-[50px] flex items-center font-roboto bg-green-500/10 px-3 py-1 text-sm font-semibold leading-6 text-green-400 ring-1 ring-inset ring-green-500/20">
                React
              </span>
              <span className="rounded-full max-h-[50px] flex items-center font-roboto bg-green-500/10 px-3 py-1 text-sm font-semibold leading-6 text-green-400 ring-1 ring-inset ring-green-500/20">
                React Native
              </span>
              <span className="rounded-full max-h-[50px] flex items-center font-roboto bg-green-500/10 px-3 py-1 text-sm font-semibold leading-6 text-green-400 ring-1 ring-inset ring-green-500/20">
                NodeJS
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium pl-3 leading-6 text-gray-300">
                <span className="">Just shipped v1.0</span>
                <ChevronRightIcon
                  className="h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
              </span>
            </div>
          </div>
          <h1 className="mt-10 text-4xl font-roboto font-bold tracking-tight text-white sm:text-6xl">
            My latest project: Snap Park
          </h1>
          <p className="mt-6 text-lg font-roboto leading-8 text-gray-300">
            Have you ever arrived at work, driven up multiple levels of a
            parking garage, only to find that all your office's allocated spots
            have been taken? Me too, so I decided to build a tool to help
            companies keep track of their parking spaces, and to notify
            employees when the office is full.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="https://snappark.co"
              className="rounded-md font-roboto bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
            >
              Visit the website
            </a>
            <a
              href="#"
              className="text-sm font-roboto font-semibold leading-6 text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src={SnapDash}
              alt="Snap Park Dash screenshot"
              width={2432}
              height={1442}
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFeature1;
