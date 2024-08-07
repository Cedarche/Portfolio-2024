import {
  InformationCircleIcon,
} from '@heroicons/react/20/solid';

import ReamAppDemo from './Assets/Ream_app_demo.mov';

export default function ReamApp() {
  return (
    <div id="mobile-app">
      <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-50">
        The Ream mobile app
      </h2>
      <p className="mt-6">
        Again this was the first mobile application I built with React Native,
        so a lot of the code is very average. It was quite a challenge to build
        as a beginner, and required the use of some complicated native libraries
        such as <code>react-native-ble-plx</code> and{' '}
        <code>react-native-nfc-manager</code> as well learning the ins and outs
        of React Navigation's deep linking schemes in order to fetch then render
        a digital receipt from a URL that would also work without the
        application installed.
      </p>

      <figure className="mt-16">
        <div className="relative mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          {/* Video only for mobile */}
          <div className="block sm:hidden rounded-[45px] p-2  bg-gray-400/80">
            <video
              src={ReamAppDemo}
              className="w-full h-full max-w-[316px] max-h-[684px] rounded-[35px] shadow-xl"
              loop
              autoPlay
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
              <title>Ream App demo</title>
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
                src={ReamAppDemo}
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
          A demo of the Mobile App scanning a Tile to receive a digital receipt.
        </figcaption>
      </figure>
      <p className="mt-10">
        The application supports login and registration through Email &
        Password, Google, Apple, and Facebook to make it as accessible as
        possible for users. When a customer that has the App installed taps
        their phone to a Ream Tile, they're redirected to the app where the receipt
        is automatically stored for future use.
      </p>
    </div>
  );
}
