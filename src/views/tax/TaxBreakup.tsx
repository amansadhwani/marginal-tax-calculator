import { Label } from "../../components/ui/label/Label";
import { TTaxBreakup, TTaxDetails } from "../../types/taxcalculator.type";
import React, { memo } from "react";

export const TaxBreakup = memo(
  ({ totalTax, effectiveRate, taxBreakup, showTaxBreakup }: TTaxBreakup) => {
    return (
      <>
        {showTaxBreakup ? (
          <fieldset>
            <legend className="legend">
              <span className="number">2</span>Tax Breakup
            </legend>
            <div className="border-bottom">
              <Label>Total tax</Label>
              <Label className="label-bold">${totalTax?.toFixed(2)}</Label>
            </div>
            <div className="border-bottom">
              <Label>Effective rate</Label>
              <Label className="label-bold">
                {Number(effectiveRate).toFixed(2)} %
              </Label>
            </div>
            <div className="border-bottom">
              {taxBreakup?.map((item: TTaxDetails, index) => {
                return (
                  <p key={index}>
                    Tax Rate:{" "}
                    <span className="label-bold">
                      ${Number(item?.taxRate).toFixed(2)}{" "}
                    </span>
                    Max:
                    <span className="label-bold">
                      {" "}
                      {item.max ? item.max : "Infinity"}{" "}
                    </span>
                    Rate: <span className="label-bold">{item.rate}</span>
                  </p>
                );
              })}
            </div>
          </fieldset>
        ) : null}
      </>
    );
  }
);
