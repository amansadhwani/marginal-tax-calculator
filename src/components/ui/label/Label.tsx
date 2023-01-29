import React from "react";
import { TLabel } from "../../../types/forms.type";

export const Label: React.FC<TLabel> = ({ children, className }) => {
  return <label className={className}>{children}</label>;
};
