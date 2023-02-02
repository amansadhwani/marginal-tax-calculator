import React, {
  useRef,
  useEffect,
  MutableRefObject,
  useReducer,
  useState,
} from "react";
import TaxInputForm from "../../views/tax/TaxInputForm";
import {
  API_ENDPOINT,
  DEFAULT_ASSESMENT_YEAR,
} from "../../constants/constants";
import { fetchTaxBrackets } from "../../services/getTaxData";
import { TaxBreakup } from "../../views/tax/TaxBreakup";
import { CalculateTaxButton } from "../../views/tax/CalculateTaxButton";
import { Error } from "../../components/ui/error/Error";
import "./TaxCalculator.css";
import { TaxBracket, TTaxDetails } from "../../types/taxcalculator.type";

export const TaxCalculator = () => {
  const salaryRef = useRef() as MutableRefObject<HTMLInputElement>;
  const assesmentYearRef = useRef<HTMLSelectElement>(null);
  const [disabledButton, setDisabledButton] = useState(true);

  type TaxData = {
    error: boolean;
    showTaxBreakup: boolean;
    taxBracketData: TaxBracket[];
    taxCalculationData: {
      totalTax: number;
      taxBreakup: TTaxDetails[];
      effectiveRate: number;
    };
  };

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
