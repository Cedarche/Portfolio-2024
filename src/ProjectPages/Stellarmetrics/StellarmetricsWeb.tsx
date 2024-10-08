import React from "react";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import HomepageImage from "./Assets/Stellarmetrics_homepage_2.png";

export default function StellarmetricsWeb() {
  return (
    <div className="mt-16  max-w-3xl 2xl:max-w-4xl ">
      <h2 className="text-2xl font-bold tracking-tight text-gray-50">
        The Stellarmetrics Dashboard
      </h2>
      <p className="mt-6">
        The dashboard reads the data transmitted via the sensors to the API then
        displays it through maps, plots, and tables. In theory the user would be
        able to directly control each individual sensor i.e. turning them off or
        on, entering sleep mode, or troubleshooting - completely remotely. The
        website is still very much unfinished, and is currently using example
        data sets that I made as a proof of concept.
      </p>
      <figure className="mt-8">
        <img
          alt=""
          src={HomepageImage}
          className=" rounded-xl bg-gray-50 object-cover"
        />
        <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-300">
          <InformationCircleIcon
            aria-hidden="true"
            className="mt-0.5 h-5 w-5 flex-none text-gray-300"
          />
          The Stellarmetrics homepage.
        </figcaption>
      </figure>
      <p className="mt-8">
        I think if I was ever going to pursue the project properly I'd make the
        interface not so flashy, less gradients/bright colours. It is a tool
        after all.
      </p>
    </div>
  );
}
