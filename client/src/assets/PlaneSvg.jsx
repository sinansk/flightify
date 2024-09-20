import React from "react";
import { twMerge } from "tailwind-merge";

const PlaneSvg = ({ className }) => {
  return (
    <svg
      className={twMerge("h-8 w-8 rotate-90 text-violet-900", className)}
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 512 512"
      height="64px"
      width="64px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M448 336v-40L288 192V79.2c0-17.7-14.8-31.2-32-31.2s-32 13.5-32 31.2V192L64 296v40l160-48v113.6l-48 31.2V464l80-16 80 16v-31.2l-48-31.2V288l160 48z"></path>
    </svg>
  );
};

export default PlaneSvg;
