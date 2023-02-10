import React, { RefObject } from "react";
export interface TaxBracket {
  max: number;
  min: number;
  rate: number;
}

export interface TaxBreakup {
  totalTax: number;
  taxBreakup:TaxDetails[];
  effectiveRate:number
  showTaxBreakup:boolean
}

export interface TaxDetails extends TaxBracket{
  taxRate:number
}


export interface TaxInputProps {
  assesmentYearRef: RefObject<HTMLSelectElement>
  onChangeAssesmentYear:(event: React.ChangeEvent<HTMLSelectElement>) => void;
  salaryRef:RefObject<HTMLInputElement>;
  handleSalaryChange:(value: string) => void;
  disabledYear?:boolean
}

export type TaxData = {
  error: boolean;
  showTaxBreakup: boolean;
  taxBracketData: TaxBracket[];
  taxCalculationData: {
    totalTax: number;
    taxBreakup: TaxDetails[];
    effectiveRate: number;
  };
};

