import React, { FC, SVGProps } from "react";

export const Hamburger: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5 17H19"
        stroke="#14181F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12H19"
        stroke="#14181F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 7H19"
        stroke="#14181F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
