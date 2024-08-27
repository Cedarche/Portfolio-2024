import React from "react";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import WebsiteExample from "./Assets/DashboardExample.png";
import BillingExample from "./Assets/Snappark_billing_example.png";
import SettingsExample from "./Assets/Snappark_settings_example.png";

export default function SnapparkWebsite() {
  return (
    <div className="mt-16 ">
      <h2 className="text-2xl font-bold tracking-tight text-gray-50">
        The Snap Park Web Application
      </h2>
      <p className="mt-6">
        I built an initial proof of concept for the system in my own time, then
        deployed it at my previous workplace. At first I didn't think much of
        the idea, but it was simple and effective. It was of course costing my a
        decent amount to send out hundreds of texts per week though, even with
        the cheapest available cloud messaging provider.
      </p>
      <p className="mt-8">
        After about 6 months I went to the company directors to try and gauge
        their response to the system, and whether it was worthwhile paying for.
        The answer from the company directors was a resounding yes, and the
        general response from all the employees in the office was a that they
        genuinely provided value. So I decided to build out the prototype into a
        B2B service, with a dashboard, analytics, and billing/subscriptions
        methods.
      </p>
      <p className="mt-8">
        It turns out that building such a system is easy for one company, but
        quite difficult when trying to handle multiple companies, and support
        multiple offices for each company. I essentially had to start from
        scratch, integrating authentication, usage based billing via Stripe, and
        re-structuring my database to correctly protect the sensitive
        information of each company and their employees.
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
          An example of the Snap Park Dashboard.
        </figcaption>
      </figure>
      <p className="mt-8">
        The main Dashboard allows a company to add/adjust their parking spots,
        generate new QR Code stickers, add to or edit the notification list, and
        view the activity for each parking spot. A common concern I had is that
        there is theoretically nothing stopping someone from marking a parking
        spot as taken before arriving at work. I alleviated this by saving an
        employee's name and mobile number in their devices local storage, then
        sending it along side the request to mark the spot taken. This allows
        the company to see who took which spot and at which time.
      </p>
      <p className="mt-8">
        One of the bigger challenges I faced was consistently generating PDFs
        with dynamic QR codes that also looked good. Specifically the
        positioning of the stickers on an A4 page so they could be reliably
        printed, I didn't know this at the time but almost all printers have
        different margins that are built in and can't be changed. You can see an
        example of what I eventually came up with <a href="/QRStickersExample.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 cursor-pointer">here</a>.
      </p>
      <figure className="mt-16">
        <img
          alt=""
          src={BillingExample}
          className=" rounded-xl bg-gray-50 object-cover"
        />
        <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-300">
          <InformationCircleIcon
            aria-hidden="true"
            className="mt-0.5 h-5 w-5 flex-none text-gray-300"
          />
          An example of the Snap Park Billing page.
        </figcaption>
      </figure>
      <p className="mt-8">
        The system also allows for fine tuning an office's notifications. It
        allows a company to send out text messages based on certain conditions.
        For example, a company can choose to send an notification out when their
        is only one spot remain, or when certain spots (e.g. visitors) have been
        taken.
      </p>

      <figure className="mt-8">
        <img
          alt=""
          src={SettingsExample}
          className=" rounded-xl bg-gray-50 object-cover"
        />
        <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-300">
          <InformationCircleIcon
            aria-hidden="true"
            className="mt-0.5 h-5 w-5 flex-none text-gray-300"
          />
          An example of the Snap Park Settings page.
        </figcaption>
      </figure>
      <p className="mt-8">
        Some might say that the features are overkill for what is essentially a
        simple notification system, but I wanted to build them early as I've got
        plans for a more broad QR tracking system in the future.
      </p>
    </div>
  );
}
