import React from "react";
import { render } from "@testing-library/react";
import { TaxBreakup } from "../TaxBreakup";

const totalTax = 15800;
const effectiveRate = 0.22;
const taxBreakup = [
  { taxRate: 5000, max: 1000000, rate: 0.44 },
  { taxRate: 400, max: 8555, rate: 0.22 },
  { taxRate: 800,  rate: 0.8 },
];

describe("TaxBreakup Component", () => {
  it("should render TaxBreakup component", () => {
    const { getByText } = render(
      <TaxBreakup
        showTaxBreakup={true}
        totalTax={totalTax}
        effectiveRate={effectiveRate}
        taxBreakup={taxBreakup}
      />
    );

    expect(getByText(`Total tax`)).toBeInTheDocument();
    expect(getByText(`$${totalTax.toFixed(2)}`)).toBeInTheDocument();
    expect(getByText(`Effective rate`)).toBeInTheDocument();
    expect(
      getByText(`${Number(effectiveRate).toFixed(2)} %`)
    ).toBeInTheDocument();
  });
});
