import { FunctionComponent, ReactElement } from "react";
import { TButton } from "../../../types/forms.type";
import "./Button.css";

export const Button: FunctionComponent<TButton> = ({
  children,
  type = "button",
  onClickHandle,
  disabled = true,
}): ReactElement => {
  return (
    <button
      type={type}
      onClick={onClickHandle}
      className={`button button-primary ${disabled && 'button-disabled'}`}
      disabled={disabled}
      role="button"
    >
      {children}
    </button>
  );
};
