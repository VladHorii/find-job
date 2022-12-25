import { FC, SVGProps } from "react";

export const Logo: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="71"
      height="24"
      viewBox="0 0 71 24"
      fill="none"
      cursor="pointer"
      {...props}
    >
      <path
        d="M1.2642 19V4.45455H4.33949V10.456H10.5824V4.45455H13.6506V19H10.5824V12.9915H4.33949V19H1.2642ZM24.0767 8.63778C24.0199 8.06487 23.776 7.61979 23.3452 7.30256C22.9143 6.98532 22.3295 6.8267 21.5909 6.8267C21.089 6.8267 20.6652 6.89773 20.3196 7.03977C19.974 7.17708 19.7088 7.36884 19.5241 7.61506C19.3442 7.86127 19.2543 8.14062 19.2543 8.45312C19.2448 8.71354 19.2992 8.94081 19.4176 9.13494C19.5407 9.32907 19.7088 9.49716 19.9219 9.6392C20.1349 9.77651 20.3812 9.89725 20.6605 10.0014C20.9399 10.1009 21.2382 10.1861 21.5554 10.2571L22.8622 10.5696C23.4967 10.7116 24.0791 10.901 24.6094 11.1378C25.1397 11.3745 25.599 11.6657 25.9872 12.0114C26.3755 12.357 26.6761 12.7642 26.8892 13.233C27.107 13.7017 27.2183 14.2391 27.223 14.8452C27.2183 15.7353 26.991 16.5071 26.5412 17.1605C26.0961 17.8092 25.4522 18.3134 24.6094 18.6733C23.7713 19.0284 22.7604 19.206 21.5767 19.206C20.4025 19.206 19.3797 19.026 18.5085 18.6662C17.642 18.3063 16.965 17.7737 16.4773 17.0682C15.9943 16.358 15.741 15.4796 15.7173 14.4332H18.6932C18.7263 14.9209 18.866 15.3281 19.1122 15.6548C19.3632 15.9768 19.697 16.2206 20.1136 16.3864C20.535 16.5473 21.0109 16.6278 21.5412 16.6278C22.062 16.6278 22.5142 16.5521 22.8977 16.4006C23.286 16.2491 23.5866 16.0384 23.7997 15.7685C24.0128 15.4986 24.1193 15.1884 24.1193 14.8381C24.1193 14.5114 24.0223 14.2367 23.8281 14.0142C23.6387 13.7917 23.3594 13.6023 22.9901 13.446C22.6255 13.2898 22.178 13.1477 21.6477 13.0199L20.0639 12.6222C18.8376 12.3239 17.8693 11.8575 17.1591 11.223C16.4489 10.5885 16.0961 9.7339 16.1009 8.65909C16.0961 7.77841 16.3305 7.009 16.804 6.35085C17.2822 5.69271 17.938 5.17898 18.7713 4.80966C19.6046 4.44034 20.5516 4.25568 21.6122 4.25568C22.6918 4.25568 23.634 4.44034 24.4389 4.80966C25.2486 5.17898 25.8783 5.69271 26.3281 6.35085C26.7779 7.009 27.0099 7.77131 27.0241 8.63778H24.0767Z"
        fill="#42307D"
      />
      <path
        d="M41.0881 4.45455H44.1278V14.5966C44.1278 15.5341 43.9171 16.3485 43.4957 17.0398C43.0791 17.7311 42.4991 18.2637 41.7557 18.6378C41.0123 19.0118 40.1482 19.1989 39.1634 19.1989C38.2874 19.1989 37.492 19.045 36.777 18.7372C36.0668 18.4247 35.5033 17.9512 35.0866 17.3168C34.67 16.6776 34.464 15.875 34.4688 14.9091H37.5298C37.5393 15.2926 37.6174 15.6217 37.7642 15.8963C37.9157 16.1662 38.1217 16.3745 38.3821 16.5213C38.6473 16.6634 38.9598 16.7344 39.3196 16.7344C39.6984 16.7344 40.018 16.6539 40.2784 16.4929C40.5436 16.3272 40.7448 16.0857 40.8821 15.7685C41.0194 15.4512 41.0881 15.0606 41.0881 14.5966V4.45455ZM51.5426 19.2131C50.4394 19.2131 49.4853 18.9787 48.6804 18.5099C47.8802 18.0365 47.2623 17.3783 46.8267 16.5355C46.3911 15.688 46.1733 14.7055 46.1733 13.5881C46.1733 12.4612 46.3911 11.4763 46.8267 10.6335C47.2623 9.78598 47.8802 9.12784 48.6804 8.65909C49.4853 8.18561 50.4394 7.94886 51.5426 7.94886C52.6458 7.94886 53.5975 8.18561 54.3977 8.65909C55.2027 9.12784 55.8229 9.78598 56.2585 10.6335C56.6941 11.4763 56.9119 12.4612 56.9119 13.5881C56.9119 14.7055 56.6941 15.688 56.2585 16.5355C55.8229 17.3783 55.2027 18.0365 54.3977 18.5099C53.5975 18.9787 52.6458 19.2131 51.5426 19.2131ZM51.5568 16.8693C52.0587 16.8693 52.4777 16.7273 52.8139 16.4432C53.1501 16.1544 53.4034 15.7614 53.5739 15.2642C53.7491 14.767 53.8366 14.2012 53.8366 13.5668C53.8366 12.9323 53.7491 12.3665 53.5739 11.8693C53.4034 11.3722 53.1501 10.9792 52.8139 10.6903C52.4777 10.4015 52.0587 10.2571 51.5568 10.2571C51.0502 10.2571 50.6241 10.4015 50.2784 10.6903C49.9375 10.9792 49.6795 11.3722 49.5043 11.8693C49.3338 12.3665 49.2486 12.9323 49.2486 13.5668C49.2486 14.2012 49.3338 14.767 49.5043 15.2642C49.6795 15.7614 49.9375 16.1544 50.2784 16.4432C50.6241 16.7273 51.0502 16.8693 51.5568 16.8693ZM58.9361 19V4.45455H61.9616V9.9233H62.054C62.1866 9.62973 62.3783 9.33144 62.6293 9.02841C62.8849 8.72064 63.2164 8.46496 63.6236 8.26136C64.0355 8.05303 64.5469 7.94886 65.1577 7.94886C65.9531 7.94886 66.687 8.1572 67.3594 8.57386C68.0317 8.9858 68.5691 9.60843 68.9716 10.4418C69.3741 11.2704 69.5753 12.3097 69.5753 13.5597C69.5753 14.7765 69.3788 15.804 68.9858 16.642C68.5975 17.4754 68.0672 18.1075 67.3949 18.5384C66.7273 18.9645 65.9792 19.1776 65.1506 19.1776C64.5634 19.1776 64.0639 19.0805 63.652 18.8864C63.2448 18.6922 62.911 18.4484 62.6506 18.1548C62.3902 17.8565 62.1913 17.5559 62.054 17.2528H61.919V19H58.9361ZM61.8977 13.5455C61.8977 14.1941 61.9877 14.7599 62.1676 15.2429C62.3475 15.7259 62.608 16.1023 62.9489 16.3722C63.2898 16.6373 63.7041 16.7699 64.1918 16.7699C64.6842 16.7699 65.1009 16.6349 65.4418 16.3651C65.7827 16.0904 66.0407 15.7116 66.2159 15.2287C66.3958 14.741 66.4858 14.1799 66.4858 13.5455C66.4858 12.9157 66.3982 12.3617 66.223 11.8835C66.0478 11.4053 65.7898 11.0312 65.4489 10.7614C65.108 10.4915 64.6889 10.3565 64.1918 10.3565C63.6993 10.3565 63.2827 10.4867 62.9418 10.7472C62.6056 11.0076 62.3475 11.3769 62.1676 11.8551C61.9877 12.3333 61.8977 12.8968 61.8977 13.5455Z"
        fill="#039855"
      />
    </svg>
  );
};
