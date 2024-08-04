import {
  CheckCircleIcon,
  InformationCircleIcon,
  CloudIcon,
  LockClosedIcon,
  ServerIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
} from "@heroicons/react/20/solid";
import { IoIosGlobe } from "react-icons/io";

import { useState } from "react";

import ReamIconDark from "./Assets/Ream_icon_dark.png";
import HomepageImage from "./Ream_homepage_1.png";
import Spline from "@splinetool/react-spline";
import ReamStatic from "./Assets/Ream_hero_static.png";

import ReamWebsite from "./ReamWebsite";
import ReamApp from "./Ream-App";
import ReamTile from "./Ream-Tile";
import ReamAPI from "./ReamAPI";

// https://ream-1.web.app/receipt/74iUwpl0pjTt9uvva8bH -- Bettys Burger dynamic

export default function Ream2() {
  return (
    <>
      <div className="relative isolate overflow-hidden px-8  py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-200">
          <div className="flex  items-center">
            <img
              alt=""
              src={ReamIconDark}
              className=" max-w-[50px]  max-h-[50px] rounded-lg bg-gray-900 shadow-xl ring-1 ring-gray-400/10 "
            />
            <h1 className=" ml-3 text-2xl  font-bold tracking-tight text-gray-50 sm:text-4xl">
              Ream Digital Receipts{" "}
            </h1>
          </div>
          <p className="mt-6 text-xl leading-8">
            This is the very first project I started back in 2019, and through
            it I've learnt to use React, React Native, Node.js, PCB design, and
            a range of accessory frameworks.
          </p>
          <figure className="">
            <img
              alt=""
              src={ReamStatic}
              className=" rounded-xl aspect-auto min-h-[400px] bg-transparent object-cover"
            />
            {/* <Spline
            scene="https://prod.spline.design/usylHkgXFIvP9nBC/scene.splinecode"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zoom: 0.7,
              }}
              /> */}
            <figcaption className="mt-0 flex gap-x-2 text-sm leading-6 text-gray-300">
              <InformationCircleIcon
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 flex-none text-gray-300"
              />
              A render of the Ream Tile with an example receipt.
            </figcaption>
          </figure>
          <div className="mt-10 max-w-3xl">
            <p>
              The concept of Ream is simple, nobody likes paper receipts. While
              most people don't give receipts a second thought, I, like many
              others, was required to keep a record of all purchases made
              through work so they could be expensed back. Simple bank
              transaction statements were not enough. I found it astounding that
              in 2019, there was no direct interface between the Point of Sale
              (POS) systems and the payment processing providers for receipt
              data that wasnt just the sales total.
              <br />
              <br />
              So I decided I would try and build a solution. My initial idea was
              some kind of middleware that would integrate with existing POS
              software and the customer's banking app to provide an interface
              for the receipt data mentioned above (I still think this is the
              best solution). However, I quickly realised that I wasn't equipped
              to handle a project with that sort of complexity, especially since
              I didn't yet know how to code.
              <br />
              <br />
              My next solution was a physical device (think Square Card Reader)
              that would sit on a businesses countertop and emulate a standard
              bluetooth receipt printer. When a customer made a purchase, their
              receipt would be 'printed' to the device which I named the Ream
              Tile, which would then make a request to my backend, storing all
              necessariy information, and returning with a URL. The customer
              then taps the Tile with an NFC enabled mobilephone, opens the URL,
              and can view/store the digital receipt.
              <br />
              <br />
              The system I ended up building consists of 4 components:
            </p>
            <ul role="list" className="mt-8 space-y-8 text-gray-300">
              <li className="flex gap-x-3">
                <GlobeAltIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    The Main Web App
                  </strong>{" "}
                  This would be the starting point for users, when they first
                  tap a Ream Tile, the received URL would render their receipt
                  in the browser as shown below. There is a simple interface
                  where users can register an account, then store/retrieve their
                  receipts.
                </span>
              </li>
              <li className="flex gap-x-3">
                <DevicePhoneMobileIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    The Mobile Application
                  </strong>{" "}
                  Using deep linking, the same URL can instead open up the
                  receipt in a native mobile application, which provides a more
                  fluid experience for the user.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    The Backend
                  </strong>{" "}
                  All of the receipt data received from the POS system is sent
                  from the Tile to the server via MQTT. A series of serverless
                  AWS lambda functions then store/process the data before
                  returning a URL to the Tile.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CpuChipIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    The Hardware
                  </strong>{" "}
                  The Tile itself is something I'm quite proud of. It's
                  completely built from scratch, and uses a custom PCB that uses
                  an ESP32-C3 microcontroller at it's core. It has built in
                  battery management/charging, and a custom housing that can be
                  3D printed (or injection moulded).
                </span>
              </li>
            </ul>
            <ReamWebsite />
            <ReamApp />
            <ReamTile />
            <ReamAPI />
          </div>
        </div>
      </div>
    </>
  );
}
