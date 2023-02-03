import { useReducer } from "react";
import { TaxData } from "../../../types/taxcalculator.type";

const useTaxData = () => {
  const [taxData, setTaxData] = useReducer(
    (prev: TaxData, next: Partial<TaxData>) => {
      const newTaxData = { ...prev, ...next };
      return newTaxData;
    },
    {
      error: false,
      showTaxBreakup: false,
      taxBracketData: [],
      taxCalculationData: {
        totalTax: 0,
        taxBreakup: [{ max: 0, min: 0, rate: 0, taxRate: 0 }],
        effectiveRate: 0,
      },
    } as TaxData
  );

  return {taxData, setTaxData}
};

export default useTaxData;
