import React from "react";

export enum ButtonTypes {
  Button = "button",
  Submit = "submit",
  Reset = "reset",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  id?: string;
  class: unknown;
  handleClick?: { (): React.ChangeEvent<HTMLButtonElement> };
  type: ButtonTypes | undefined;
}

const Button: React.FC<ButtonProps> = ({ ...props }: ButtonProps) => {
  return (
    <button
      type={props.type}
      id={props.id}
      onClick={() => props.handleClick && props.handleClick()}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;
