import React from "react";

interface Props {
  Text: string;
  onClick: React.MouseEventHandler<HTMLElement>;
  Type: "button" | "submit";
}

const Button = ({ Text, onClick, Type }: Props) => {
  return (
    <button
      className="bg-blue-100 rounded-full self-center px-8 py-2 mb-2 text-base"
      type={Type}
      onClick={onClick}
    >
      {Text}
    </button>
  );
};

export default Button;
