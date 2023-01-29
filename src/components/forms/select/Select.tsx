import React from "react";
import { TSelect } from "../../../types/forms.type";
import { Label } from "../../ui/label/Label";

export const Select: React.FC<TSelect> = ({
  refs,
  label,
  options,
  onChangeYear,
  defaultValue = "",
}) => {
  return (
    <>
      <Label>{label}</Label>
      <select
        ref={refs}
        onChange={(e) => onChangeYear(e)}
        defaultValue={defaultValue}
        className="select"
        data-testid="select"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};
