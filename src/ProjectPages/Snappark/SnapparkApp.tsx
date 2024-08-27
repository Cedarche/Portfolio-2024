import { InformationCircleIcon } from "@heroicons/react/20/solid";

import SnapparkAppDemo from "./Assets/Snappark_App_Example.mov";

export default function SnapparkApp() {
  return (
    <div id="mobile-app">
      <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-50">
        The Snap Park mobile app
      </h2>
      <p className="mt-6">
        One of the main issues with the Snap Park system is the cost of text
        messages. Even the cheapest providers charge around $0.08 AUD/message,
        which doesn't sound like much, but when sending 3 texts per day, to 20
        individuals, adds up to quite a lot over a month. The simple solution is
        to have employees download a mobile application and link their account
        to their office. This would allow for notifications to be sent
        essentially for free, which would drastically lower both the application
        overhead, and the cost for the end user.
      </p>
      <p className="mt-6">
        The mobile app has essentially the exact same functionality for an
        employee as a webapp, but with a more streamlined UI/UX.
      </p>

      <figure className="mt-8">
        <div className="relative mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          {/* Video only for mobile */}
          <div className="sm:hidden flex items-center justify-center rounded-[45px] p-3  bg-gray-400/80">
            <video
              src={SnapparkAppDemo}
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
              <title>App demo</title>
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
                src={SnapparkAppDemo}
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
          A demo of the Mobile App scanning a QR code sticker.
        </figcaption>
      </figure>
      <p className="mt-8">
        I reused a lot of the same styling and functionality from the Ream and
        Cross Copy applications, mostly because it's a whole lot easier than
        starting from scratch, and I think it looks good. The application
        supports login and registration through Email & Password, Google, Apple,
        and Facebook to make it as accessible as possible for users.
      </p>
      <p className="mt-6">
        While the Snap Park web application is live and used by a handful of
        companies, I unfortunately haven't been able to get the native
        application across the line with the Apple App Store. Despite the fact
        that the mobile app is designed to be completely free to use by
        employees, Apple does not like the fact that the employee's account must
        be linked to a (paying) company, and that they don't get a cut.
      </p>
      <p className="mt-6">
        That being said I'm still hoping to get it across the line at some point
        in the future.
      </p>
    </div>
  );
}
