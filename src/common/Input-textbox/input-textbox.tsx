import React from "react";

interface InputTextAreaProps {
  labelClass?: string;
  placeholder: string;
  id: string;
  textAreaclass: string | null;
  textChange?: { (value: string): React.ChangeEvent<HTMLInputElement> };
}

export const InputTextbox = ({ ...props }: InputTextAreaProps) => {
  return (
    <>
      <textarea
        placeholder={props.placeholder}
        className={props.textAreaclass}
        onChange={(e) => {
          props.textChange(e.target.value);
        }}
      ></textarea>
    </>
  );
};

export default InputTextbox;
