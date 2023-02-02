import React, { useRef, useEffect, MutableRefObject, useState } from "react";
import TaxInputForm from "../../views/taxcalculator/TaxInputForm";
import {
  API_ENDPOINT,
  DEFAULT_ASSESMENT_YEAR,
} from "../../constants/constants";
import { fetchTaxBrackets } from "../../services/getTaxData";
import { TaxBreakup } from "../../views/taxcalculator/TaxBreakup";
import { CalculateTaxButton } from "../../views/taxcalculator/CalculateTaxButton";
import { Error } from "../../components/ui/error/Error";
import useTaxData from "./context/useTaxData";
import "./TaxCalculator.css";

export const TaxCalculator = () => {
  const salaryRef = useRef() as MutableRefObject<HTMLInputElement>;
  const assesmentYearRef = useRef<HTMLSelectElement>(null);
  const [disabledButton, setDisabledButton] = useState(true);
  const { taxData, setTaxData } = useTaxData();

  const fetchTaxes = async (url: string) => {
    setDisabledButton(true);
    try {
      const response = await fetchTaxBrackets(url);
      setTaxData({
        taxBracketData: response.data.tax_brackets,
        error: false,
      });
      validateSalary();
    } catch (err) {
      setTaxData({ error: true });
    }
  };

  const validateSalary = () => {
    let salary = salaryRef.current.value;
    if (Number(salary) <= 0 || salary === "") {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  };

  const onChangeAssesmentYear = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    let year = event.target.value;
    fetchTaxes(`${API_ENDPOINT}/${year}`);
  };

  const onClickCalculate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let salary = salaryRef.current.valueAsNumber;
    let year = assesmentYearRef.current
      ? assesmentYearRef.current.value
      : DEFAULT_ASSESMENT_YEAR;

    {
      import("../../utils/helpers").then((module) => {
        let { totalTax, taxBreakup, effectiveRate } = module.calculateTax(
          salary,
          taxData.taxBracketData,
          year
        );
        setTaxData({
          showTaxBreakup: true,
          taxCalculationData: { totalTax, taxBreakup, effectiveRate },
        });
      });
    }
  };

  useEffect(() => {
    fetchTaxes(API_ENDPOINT);
  }, []);

  return (
    <>
      <div className="container" data-testid="tax-calculator">
        <form onSubmit={onClickCalculate}>
          <h1 className="heading">Tax Calculator</h1>
          <Error
            show={taxData.error}
            errorMessage="We are down right now please comeback later"
          />
          <TaxInputForm
            assesmentYearRef={assesmentYearRef}
            onChangeAssesmentYear={onChangeAssesmentYear}
            salaryRef={salaryRef}
            handleSalaryChange={validateSalary}
          />
          <CalculateTaxButton disabled={disabledButton || taxData.error} />

          <TaxBreakup
            totalTax={taxData.taxCalculationData.totalTax}
            taxBreakup={taxData.taxCalculationData.taxBreakup}
            effectiveRate={taxData.taxCalculationData.effectiveRate}
            showTaxBreakup={taxData.showTaxBreakup}
          />
        </form>
      </div>
    </>
  );
};
