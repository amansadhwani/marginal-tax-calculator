import {
  render,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TaxCalculator } from "./TaxCalculator";


jest.mock('react', () => {
  const original = jest.requireActual('react');
  return {
    ...original,
    useReducer: (reducer, initialState) => [mockState, jest.fn()],
  };
});

const mockState = {
  error: false,
  showTaxBreakup: false,
  taxBracketData: [],
  taxCalculationData: [{ totalTax: 0, taxBreakup: [], effectiveRate: 0 }],
};


describe("TaxCalculator", () => {
  it("should render the component correctly", () => {
    const { getByTestId } = render(<TaxCalculator />);
    expect(getByTestId("tax-calculator")).toBeInTheDocument();
  });

  test("should update value for salary and button to be enabled", () => {
    const { getByPlaceholderText } = render(<TaxCalculator />);
    const salaryInput = getByPlaceholderText("Enter salary");
    fireEvent.change(salaryInput, { target: { value: "90000" } });
    expect(salaryInput).toHaveValue(90000);
  });

  test("should update value for salary for negative values", () => {
    const { getByPlaceholderText } = render(<TaxCalculator />);
    const salaryInput = getByPlaceholderText("Enter salary");
    fireEvent.change(salaryInput, { target: { value: "-5000" } });
    expect(salaryInput).toHaveValue(-5000);
  });

  test("should show taxBreakp component", () => {
    mockState.showTaxBreakup=true;
    const { getByText } = render(<TaxCalculator />);
    const taxBreakUpText = getByText("Tax Breakup");
    expect(taxBreakUpText).toBeInTheDocument()
  });

  test("should show error when state is true", () => {
    mockState.error=true;
    const { getByText } = render(<TaxCalculator />);
    const errorText = getByText("We are down right now please comeback later");
    expect(errorText).toBeInTheDocument()
  });
});
