import React from "react";

type Props = {};

const BuyMeCoffee = (props: Props) => {
  return (
    <div className="flex flex-row justify-center items-center mt-auto row">
      <a
        href="https://www.buymeacoffee.com/arghya04"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          style={{ height: "60px", width: "100%%" }}
        />
      </a>
    </div>
  );
};

export default BuyMeCoffee;
