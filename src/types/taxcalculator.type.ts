import React, { RefObject } from "react";
export interface TaxBracket {
  max: number;
  min: number;
  rate: number;
}

export interface TTaxBreakup {
  totalTax: number;
  taxBreakup:[];
  effectiveRate:number
}

export interface TTaxDetails extends TaxBracket{
  taxRate:number
}


export interface TaxInputProps {
  assesmentYearRef: RefObject<HTMLSelectElement>
  onChangeAssesmentYear:(event: React.ChangeEvent<HTMLSelectElement>) => void;
  salaryRef:RefObject<HTMLInputElement>;
  handleSalaryChange:(value: string) => void;
  disabledYear?:boolean
}
