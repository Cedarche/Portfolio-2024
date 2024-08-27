import React from "react";
import { Link } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";
import Headshot from "/Headshot.jpg";

import { IconLink } from "./IconLink"; // Adjust the path as needed

function BookIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M7 3.41a1 1 0 0 0-.668-.943L2.275 1.039a.987.987 0 0 0-.877.166c-.25.192-.398.493-.398.812V12.2c0 .454.296.853.725.977l3.948 1.365A1 1 0 0 0 7 13.596V3.41ZM9 13.596a1 1 0 0 0 1.327.946l3.948-1.365c.429-.124.725-.523.725-.977V2.017c0-.32-.147-.62-.398-.812a.987.987 0 0 0-.877-.166L9.668 2.467A1 1 0 0 0 9 3.41v10.186Z" />
    </svg>
  );
}

function GitHubIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M8 .198a8 8 0 0 0-8 8 7.999 7.999 0 0 0 5.47 7.59c.4.076.547-.172.547-.384 0-.19-.007-.694-.01-1.36-2.226.482-2.695-1.074-2.695-1.074-.364-.923-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.224 1.873.87 2.33.666.072-.518.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.586.823-2.146-.09-.202-.36-1.016.07-2.118 0 0 .67-.214 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.034 2.19-.82 2.19-.82.43 1.102.16 1.916.08 2.118.51.56.82 1.273.82 2.146 0 3.074-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8.199a8 8 0 0 0-8-8Z" />
    </svg>
  );
}

export function Intro() {
  return (
    <div className="no-scrollbar">
      <div className="mt-6">
        <img
          src={Headshot}
          className="rounded-full border-2 border-green-300 max-w-[200px] h-[200px] lg:max-w-[250px] lg:h-[250px] object-cover"
        />
      </div>
      <div id="about">
        <h1 className="mt-8  font-display text-2xl/tight font-light text-white">
          About Me
        </h1>
        <p className="mt-4 text-sm/6 text-gray-300">
          I'm a hardworking mechanical engineer with 5+ years of experience in
          the Natural Gas industry as a project manager, and 6+ years of
          part-time experience in the construction industry. I've recently moved
          to London and I'm looking to change careers into software engineering
          as that's where my passion really lies.
          <br />
          <br />
          Over the past 4 years I've spent much of my spare time learning and
          building out various ideas and software projects. While I realize that
          most of my experience lends itself to more mechanical roles, I'm
          hoping my portfolio of React/React-Native projects might be enough to
          convince you.
        </p>
      </div>
      <div id="Education" className="w-full border-t border-gray-50/40 mt-10">
        <h1 className="mt-4 font-display text-2xl/tight font-light text-white">
          Education
        </h1>
        <div className="w-full mt-4 text-sm sm:text-base  flex items-center justify-between mb-2">
          <div className="flex flex-col">
            <h3 className="text-white font-bold">
              The University of Queensland
            </h3>
            <h4 className="text-white italic">
              Bachelor of Mechanical Engineering (Honors)
            </h4>
          </div>
          <div className="flex flex-col items-end justify-end">
            <h3 className="text-white font-bold">June, 2019</h3>
            <h4 className="text-white italic text-right">Brisbane, QLD</h4>
          </div>
        </div>
        <p className="mt-4 text-sm/6 text-gray-300">
          I attended St John’s College and played rugby union & tennis for the
          first two years of my university education. I was part of the
          Mechanical Engineering Student Society (MESS) for the duration of my
          degree.
        </p>
      </div>
      <div
        id="References"
        className="w-full text-sm sm:text-base border-t border-gray-50/40 mt-10"
      >
        <h1 className="mt-4 font-display text-2xl/tight font-light text-white">
          References
        </h1>
        <div>
          <div className="w-full mt-4  flex items-center justify-between mb-2">
            <h3 className="text-white font-bold">Simon Hann</h3>
            <h3 className="text-white">Director - inGauge Energy</h3>
          </div>
          <div className="w-full mt-2  flex items-center justify-between mb-2">
            <h3 className="text-white">simon.hann@ingauge.com.au</h3>
            <h3 className="text-white">+61 400 656 886</h3>
          </div>
        </div>
        <div>
          <div className="w-full mt-4  flex items-center justify-between mb-2">
            <h3 className="text-white font-bold">Justin Clark</h3>
            <h3 className="text-white">Director - JPC Engineering</h3>
          </div>
          <div className="w-full mt-2  flex items-center justify-between mb-2">
            <h3 className="text-white">justin@jpceng.com.au</h3>
            <h3 className="text-white">+61 410 510 734</h3>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-gray-50/40 mt-10">
        <h1 className="mt-4 font-display text-2xl/tight font-light text-white">
          Interests
        </h1>
        <p className="mt-4 text-sm/6 text-gray-300">
          In Australia I participated as part of a competitive yacht racing
          team; competing in races such as the Brisbane to Gladstone, Brisbane
          to Hamilton, and the 2019 Sydney to Hobart, etc. I’m a keen
          snowboarder in the winter, and I enjoy hiking and mountain biking in
          the summer.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
        <IconLink
          to="/TomCarruthers_Resume_2024.pdf"
          target="_blank"
          icon={BookIcon}
          className="flex-none"
        >
          Resume
        </IconLink>
        <IconLink
          to="https://github.com/Cedarche"
          icon={GitHubIcon}
          className="flex-none"
        >
          GitHub
        </IconLink>
        <IconLink
          to="https://www.linkedin.com/in/tom-carruthers-1b8709184/"
          icon={CiLinkedin}
          className="flex-none"
        >
          Linkedin
        </IconLink>
      </div>
    </div>
  );
}

export function IntroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
      Tom Carruthers
    </p>
  );
}
