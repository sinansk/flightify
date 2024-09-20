import { twMerge } from "tailwind-merge";
function PlaneLandingSvg(props) {
  return (
    <svg
      className={twMerge(`h-8 w-8 text-violet-900`, props.className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M18.842 15.296a1.61 1.61 0 001.892-1.189v-.001a1.609 1.609 0 00-1.177-1.949l-4.576-1.133L9.825 4.21l-2.224-.225 2.931 6.589-4.449-.449-2.312-3.829-1.38.31 1.24 5.52 15.211 3.17zM3 18h18v2H3z" />
    </svg>
  );
}

export default PlaneLandingSvg;
