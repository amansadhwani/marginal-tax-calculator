import React, { RefObject } from "react";
import { TChildren } from "./common.type";

export interface TInput {
  label: string;
  type?: string;
  refs: RefObject<HTMLInputElement>;
  onChange: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  defaultValue?: string;
  disabled?: boolean;
}

export interface TSelect {
  label: string;
  options: { value: string; label: string }[];
  value?: string;
  onChangeYear: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue?: string;
  refs: RefObject<HTMLSelectElement>;
}

export interface TButton extends TChildren {
  type?: "submit" | "reset" | "button";
  onClickHandle?: () => React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

export interface TLabel extends TChildren {
  className?: string;
}

export interface TError{
  errorMessage:string;
}
