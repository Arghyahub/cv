import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <svg
        version="1.1"
        id="L4"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="-24 0 100 100"
        enableBackground="new 0 0 0 0"
        width={"200px"}
        height={"200px"}
        xmlSpace="preserve"
      >
        <circle fill="black" cx="6" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.1"
          />
        </circle>
        <circle fill="black" cx="26" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.2"
          />
        </circle>
        <circle fill="black" cx="46" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.3"
          />
        </circle>
      </svg>
      <p className="relative -top-12 text-lg">Loading..</p>
    </div>
  );
};

export default Loading;
