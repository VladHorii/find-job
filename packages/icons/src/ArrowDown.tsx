import React, { FC, SVGProps } from "react";

export const ArrowDown: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" {...props}>
      <path
        d="M15 11.5L12 14.5L9 11.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
