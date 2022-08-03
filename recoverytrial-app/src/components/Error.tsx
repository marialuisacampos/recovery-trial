import React from "react";

interface Props {
  Message?: string;
}

const Error = ({ Message }: Props) => {
  return (
    <span className="text-red-500 text-sm mt-2 text-center md:text-base">
      {Message}
    </span>
  );
};

export default Error;
