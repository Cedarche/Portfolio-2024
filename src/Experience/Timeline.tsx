import React, { useId } from "react";

export function Timeline() {
  const id = useId();

  const dates = [
    { date: "Jan 2020", position: 0 }, 
    { date: "Jun 2020", position: 25 }, 
    { date: "Jan 2021", position: 50 }, 
    { date: "Jun 2021", position: 75 }, 
    { date: "Jan 2022", position: 100 }, 
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-60 overflow-hidden lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-visible">
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
        {dates.map((date, index) => (
          <text
            key={index}
            x="20" 
            y={`${date.position}%`}
            fill="white"
            className="text-xs"
            style={{ transform: `translateY(-50%)`, zIndex: 60 }}
          >
            {date.date}
          </text>
        ))}
      </svg>
    </div>
  );
}
