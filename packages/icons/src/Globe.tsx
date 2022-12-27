import React, { FC, SVGProps } from "react";

export const Globe: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" {...props}>
      <g opacity="0.2">
        <path
          d="M13.2671 21.875C18.4448 21.875 22.6421 17.6777 22.6421 12.5C22.6421 7.32233 18.4448 3.125 13.2671 3.125C8.08944 3.125 3.89211 7.32233 3.89211 12.5C3.89211 17.6777 8.08944 21.875 13.2671 21.875Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.89211 12.5H22.6421"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.2671 21.875C14.993 21.875 16.3921 17.6777 16.3921 12.5C16.3921 7.32233 14.993 3.125 13.2671 3.125C11.5412 3.125 10.1421 7.32233 10.1421 12.5C10.1421 17.6777 11.5412 21.875 13.2671 21.875Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
