import React from "react";

export enum InputType {
  TEXT = "text",
  PASSWORD = "password",
  NUMBER = "number",
  EMAIL = "email",
}

interface inputProps {
  labelClass?: string;
  labelText?: string;
  inputType?: InputType | null;
  placeholder: string;
  id: string;
  class: string | null;
  change?: { (value: string): React.ChangeEvent<HTMLInputElement> };
}

const Input: React.FC<inputProps> = ({
  labelClass,
  labelText,
  inputType,
  placeholder,
  id,
  change,
}: inputProps) => {
  return (
    <>
      <label className={labelClass}>{labelText}</label>
      <input
        type={inputType}
        placeholder={placeholder}
        id={id}
        onChange={(e) => change(e.target.value)}
      />
    </>
  );
};

export default Input;
