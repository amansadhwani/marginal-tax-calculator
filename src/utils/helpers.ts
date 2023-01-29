import { TaxBracket, TTaxDetails } from "../types/taxcalculator.type";

// since this is expensive operation we will store old results and return without re-calculating.
const cachedResults: {
  [key: string]: {
    [key: number]: {
      totalTax: number;
      taxBreakup: TTaxDetails[];
      effectiveRate: number;
    };
  };
} = {};

export const calculateTax = (
  income: number,
  taxBrackets: TaxBracket[],
  year: string
) => {
  if (cachedResults[year] && cachedResults[year][income]) {
    return cachedResults[year][income];
  }

  let totalTax = 0;
  let taxBreakup: TTaxDetails[] = [];
  let effectiveRate = 0;
  let i = 0;
  while (i < taxBrackets.length) {
    let bracket = taxBrackets[i];
    if (income > bracket.min) {
      let max = bracket.max || income;
      let rate = bracket.rate;
      let bracketIncome = Math.min(income, max) - bracket.min;
      let taxCharged = bracketIncome * rate;
      totalTax += taxCharged;
      taxBreakup.push({ ...taxBrackets[i], taxRate: taxCharged });
      if (income <= max) break;
    }
    i++;
  }
  effectiveRate = totalTax / income;

  if (!cachedResults[year]) {
    cachedResults[year] = {};
  }
  cachedResults[year][income] = { totalTax, taxBreakup, effectiveRate };

  return { totalTax, taxBreakup, effectiveRate };
};
