import React from "react";
import { LabelProps } from "../../../types/forms.type";

export const Label: React.FC<LabelProps> = ({ children, className }) => {
  return <label className={className}>{children}</label>;
};
