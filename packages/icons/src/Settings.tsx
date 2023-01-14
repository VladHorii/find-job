import React, { FC, SVGProps } from "react";

export const Settings: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
      <path
        opacity="0.4"
        d="M8 14.5H1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 14.5C17 15.8807 15.8807 17 14.5 17C13.1193 17 12 15.8807 12 14.5C12 13.1183 13.1193 12 14.5 12C15.8807 12 17 13.1183 17 14.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M10 3.5H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 3.5C1 4.88174 2.11928 6 3.5 6C4.88072 6 6 4.88174 6 3.5C6 2.11928 4.88072 1 3.5 1C2.11928 1 1 2.11928 1 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
