import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const headings = [
  { headingName: "About", link: "/about" },
  { headingName: "Projects", link: "/projects" },
  { headingName: "Experience", link: "/experience" },
  { headingName: "Contact", link: "/contact" },
];

export default function Navbar({ open, setOpen }) {
  return (
    <Transition show={open}>
      <Dialog className="md:hidden relative z-40" onClose={setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0  flex max-w-full pl-20 top-14 ">
              <TransitionChild
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-[#1c1c1ced]  shadow-xl rounded-xl p-4">
                    <div className=" relative flex flex-1 h-full p-4 px-8 text-white">
                      <div className="absolute top-0 right-0 flex p-4 flex-col items-end space-y-2">
                        {headings.map((item, index) => (
                          <a
                            key={index}
                            href={item.link}
                            className="font-playfair text-xl"
                          >
                            {item.headingName}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Your content */}
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
