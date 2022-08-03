import React from "react";

type Props = {
  Type: "text" | "password";
  Value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ Type, Value, onChange }: Props) => {
  return (
    <input
      className="bg-gray-100 rounded-lg p-1"
      type={Type}
      value={Value}
      onChange={onChange}
    />
  );
};

export default Input;
