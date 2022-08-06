import React from "react";

type Props = {
  Type: "text" | "password";
  Value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ Type, Value, onChange }: Props) => {
  return (
    <input
      className="bg-gray-100 rounded-lg w-[250px] p-2 md:w-[300px] md:self-center"
      type={Type}
      value={Value}
      onChange={onChange}
    />
  );
};

export default Input;
