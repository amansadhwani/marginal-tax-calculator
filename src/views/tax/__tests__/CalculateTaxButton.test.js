import React from "react";
import { render } from "@testing-library/react";
import { CalculateTaxButton } from "../CalculateTaxButton";

const onClickHandle = jest.fn();

describe("CalculateTaxButton Component", () => {
  it("should renders button with calculate text and is not disabled", () => {
    const { getByText } = render(
      <CalculateTaxButton onClickHandle={onClickHandle} disabled={false} />
    );
    const button = getByText("Calculate");
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });
});
