import { useState } from "react";
import emailjs from "emailjs-com";

import { EnvelopeIcon, PhoneIcon, HomeIcon } from "@heroicons/react/24/outline";
import Navbar from "../Navbar/Navbar";
const serviceID = import.meta.env.VITE_EMAIL_SERVICE;
const templateID = import.meta.env.VITE_EMAIL_TEMPLATE;
const emailID = import.meta.env.VITE_EMAIL_ID;

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    company_name: "",
    from_email: "",
    phone_number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(serviceID, templateID, formData).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setMessageSent(true);
        setTimeout(() => {
          setMessageSent(false);
          setFormData({
            from_name: "",
            company_name: "",
            from_email: "",
            phone_number: "",
            message: "",
          });
        }, 5000);
      },
      (err) => {
        console.log("FAILED...", err);
        setMessageError(true);
        setTimeout(() => {
          setMessageError(false);
        }, 5000);
      }
    );
  };

  return (
    <Navbar>
      <div className=" min-h-screen  isolate bg-gray-900">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full stroke-green-800 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                >
                  <defs>
                    <pattern
                      x="100%"
                      y={-1}
                      id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                      width={200}
                      height={200}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <svg
                    x="100%"
                    y={-1}
                    className="overflow-visible fill-gray-800/20"
                  >
                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                  </svg>
                  <rect
                    fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                  />
                </svg>
                <div
                  aria-hidden="true"
                  className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                >
                  <div
                    style={{
                      clipPath:
                        "polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)",
                    }}
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80ff8f] to-[#46e5c3] opacity-20"
                  />
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Get in touch
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                I'm actively looking for work as a frontend or full stack
                developer in London, UK. Specifically with React/React Native
                technology stacks. If you like the look of my portfoilio, or
                have any questions about my projects, please don't hesitate to
                get in touch.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <HomeIcon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    Islington, London, UK.
                    <br />
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a href="tel:+44 74592261328" className="hover:text-white">
                      +44 7459226132
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a
                      href="mailto:tomcarruthers96@gmail.com"
                      className="hover:text-white"
                    >
                      tomcarruthers96@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="from_name"
                      name="from_name"
                      type="text"
                      autoComplete="given-name"
                      value={formData.from_name}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Company
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="company_name"
                      name="company_name"
                      type="text"
                      autoComplete="organization"
                      value={formData.company_name}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="from_email"
                      name="from_email"
                      type="email"
                      autoComplete="email"
                      value={formData.from_email}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="phone_number"
                      name="phone_number"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone_number}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className={`rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    messageSent
                      ? "bg-green-500 hover:bg-green-400 focus-visible:outline-green-500"
                      : messageError
                      ? "bg-red-500 hover:bg-red-400 focus-visible:outline-red-500"
                      : "bg-indigo-500 hover:bg-indigo-400 focus-visible:outline-indigo-500"
                  }`}
                >
                  {messageSent
                    ? "Message Sent!"
                    : messageError
                    ? "Failed to Send"
                    : "Send Message"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Navbar>
  );
}
