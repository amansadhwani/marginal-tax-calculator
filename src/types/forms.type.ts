import React, { RefObject } from "react";
import { ChildrenNode } from "./common.type";

export interface InputProps {
  label: string;
  type?: string;
  refs: RefObject<HTMLInputElement>;
  onChange: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  defaultValue?: string;
  disabled?: boolean;
}

export interface SelectProps {
  label: string;
  options: { value: string; label: string }[];
  value?: string;
  onChangeYear: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue?: string;
  refs: RefObject<HTMLSelectElement>;
  disabled?: boolean;
}

export interface ButtonProps extends ChildrenNode {
  type?: "submit" | "reset" | "button";
  onClickHandle?: () => React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

export interface LabelProps extends ChildrenNode {
  className?: string;
}

export interface ErrorProps {
  errorMessage: string;
  show:boolean
}

