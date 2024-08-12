// Experience.tsx
import React, { useId, useState } from "react";
import { Intro, IntroFooter } from "./Intro";
import { StarField } from "./Starfield";
import Article from "./JobArticle";
import Navbar from "../Landing/Navbar/Navbar";
import Navbar2 from "../Navbar/Navbar2";
import ReactMarkdown from "react-markdown";

const articles = [
  {
    id: "article-1",
    date: "2024-06-04",
    company: "inGauge Energy",
    title: "Mechanical Project Engineer",
    location: "Brisbane, QLD",
    dates: "June 2019 - June 2024",
    content: `
As a project manager for an engineering consultancy, I oversaw the successful design and execution of a range of projects for multiple clients, from gas well completions, civil works, and surface facilities installations.
  - Assisted with the design, and then became the primary project manager for the installation of a new water processing facility at the Origin Darling Downs Gas Power Station. I was awarded a special commendation for my work navigating tough on-site conditions, environmental compliance, and contractor relationships.
  - Designed and installed a deep bore dewatering system for a production gas well in the Northern territory.
  - Executed the civil construction of a series of 5 well-pads for a multi-well drilling campaign, which included landholder access/payment negotiations and regulatory approvals.
  - Executed the construction of a deep water well (1550m), and pump installation as the primary water supply for a remote drilling campaign.

 I created a series of novel solutions for problems that arose at work, including:
  - A leak detection and water level monitoring system that utilized a satellite network to send data from remote locations in order to remain compliant with strict regulatory conditions.
  - A QR code asset-tracking mobile application that allowed a client to accurately record the location and installation conditions of a compressor station before it was decommissioned and moved to a new location.
    `,
  },
  {
    id: "article-2",
    date: "2019-05-01",
    company: "JPC Engineering",
    title: "Mechanical Engineer Intern",
    location: "Toowoomba, QLD",
    dates: "January 2018 - May 2019",
    content: `
While studying I completed two internships with a mechanical design firm that specialized in industrial machinery installations. My key responsibilities included:
  - On-site walkthroughs to record locations and dimensions of existing equipment.
  - Solidworks design of simple parts (brackets, hangers, plates, etc.), and drafting of more complex parts for fabrication to Australian standards.
  - Working with fabricators to have parts manufactured within specificied tolerances (laser cutting, CNC machining etc.)
  - Assisting contractors and the project manager with the installation of new machinery.
 `,
  },
  {
    id: "article-3",
    date: "2018-12-01",
    company: "Queensland Industrial Cladding",
    title: "Roofer/Laborer",
    location: "Toowoomba, QLD",
    dates: "December 2013 - December 2018",
    content: `
During university, I worked part-time within a team of roofers, cladding commercial buildings across Queensland. Including a wide variety of job sites: military barracks, mine sites, grain silos, apartment blocks, etc.
  - Working safetly within a team in dangerous conditions.
  - Unloading, carrying, and installing heavy tin roofsheets across perlons while wearing a safety harness.
  - Working out of elevated work platforms such as Boom lifts and Scissor lifts.
  - General workplace tidying.
 `,
  },
 
];

function Timeline() {
  const id = useId();

  // Example dates for the timeline

  return (
    <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-visible min-w-[500px]">
      <svg
        className="absolute left-[max(0px,calc(50%-18.125rem))] top-0 h-full w-1.5 lg:left-full lg:ml-1 xl:left-auto xl:right-1 xl:ml-0"
        aria-hidden="true"
      >
        <defs>
          <pattern id={id} width="6" height="8" patternUnits="userSpaceOnUse">
            <path
              d="M0 0H6M0 8H6"
              className="stroke-sky-900/10 xl:stroke-white/10 dark:stroke-white/10"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />

        {/* Render date labels */}
      </svg>
    </div>
  );
}

function Glow() {
  const id = useId();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-gray-950 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]">
      <svg
        className="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:-right-40 lg:bottom-auto lg:left-auto lg:top-[-40%] lg:h-[180%] lg:w-[80rem]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`${id}-desktop`} cx="100%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0.3)" />{" "}
            {/* Light green */}
            <stop offset="53.95%" stopColor="rgba(16, 185, 129, 0.09)" />{" "}
            {/* Mid green */}
            <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />{" "}
            {/* Transparent */}
          </radialGradient>
          <radialGradient id={`${id}-mobile`} cy="100%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0.3)" />{" "}
            {/* Light green */}
            <stop offset="53.95%" stopColor="rgba(16, 185, 129, 0.09)" />{" "}
            {/* Mid green */}
            <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />{" "}
            {/* Transparent */}
          </radialGradient>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#${id}-desktop)`}
          className="hidden lg:block"
        />
        <rect
          width="100%"
          height="100%"
          fill={`url(#${id}-mobile)`}
          className="lg:hidden"
        />
      </svg>
      <div className="absolute inset-x-0 bottom-0 right-0 h-px bg-white mix-blend-overlay lg:left-auto lg:top-0 lg:h-auto lg:w-px" />
    </div>
  );
}

type FixedSidebarProps = {
  main: React.ReactNode;
  footer: React.ReactNode;
};

function FixedSidebar({ main, footer }: FixedSidebarProps) {
  return (
    <div className="relative no-scrollbar flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
      <Glow />
      <div className="relative no-scrollbar flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[40rem] lg:overflow-y-auto lg:overflow-x-hidden lg:pl-[max(4rem,calc(50%-44rem))]">
        <div className="mx-auto max-w-xl lg:mx-0 lg:flex lg:w-[500px] lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6">
          <div className="pb-16 pt-20 sm:pb-20 sm:pt-32 lg:py-20">
            <div className="relative">
              <StarField className="-right-44 top-14" />
              {main}
            </div>
          </div>
          <div className="flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6">
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleContent({ company, title, location, dates, content }) {
  return (
    <>
      <div className="w-full  2xl:min-w-[800px] flex items-center justify-between mb-2">
        <div className="flex flex-col">
          <h2 className="text-white font-bold">{company}</h2>
          <h3 className="text-white italic">{title}</h3>
        </div>
        <div className="flex flex-col items-end">
          <h2 className="text-white font-bold">{dates}</h2>
          <h3 className="text-white italic">{location}</h3>
        </div>
      </div>
      <div className="min-h-40 border border-gray-500 2xl:min-w-[800px] bg-gray-800/60 rounded-md shadow-lg text-white p-4">
        <ReactMarkdown
          components={{
            ul: ({ node, ...props }) => (
              <ul {...props} className="list-disc pl-4" />
            ),
            li: ({ node, ...props }) => (
              <li
                {...props}
                className="ml-[1rem] pl-[0.5rem] py-[0.2rem] text-indent-[-1rem]"
              />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </>
  );
}

function Experience() {
  return (
    <Navbar2>
      <FixedSidebar main={<Intro />} footer={<IntroFooter />} />
      <div className="relative flex-auto no-scrollbar">
        <Timeline />
        <main className="space-y-20 py-20 sm:space-y-32 sm:py-32 bg-black">
          {articles.map((article) => (
            <Article key={article.id} id={article.id} date={article.date}>
              <ArticleContent
                company={article.company}
                location={article.location}
                title={article.title}
                dates={article.dates}
                content={article.content}
              />
            </Article>
          ))}
        </main>
      </div>
    </Navbar2>
  );
}

export default Experience;
