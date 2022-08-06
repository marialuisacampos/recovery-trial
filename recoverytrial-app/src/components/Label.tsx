import React from "react";

interface Props {
  Children: string;
}

const Label = ({ Children }: Props) => {
  return <label className="text-base">{Children}</label>;
};

export default Label;
