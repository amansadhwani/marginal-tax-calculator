import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

describe("Input component", () => {
  test("should renders input with label", () => {
    const labelText = "Name:";
    const { getByText } = render(<Input label={labelText} />);
    const labelElement = getByText(labelText);
    expect(labelElement).toBeInTheDocument();
  });

  test("should handle onChange event", () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter your name" onChange={onChangeMock} />
    );
    const inputElement = getByPlaceholderText("Enter your name");
    fireEvent.change(inputElement, { target: { value: "Aman" } });
    expect(onChangeMock).toHaveBeenCalledWith("Aman");
  });

  test("should render disabled input", () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter your name" disabled />
    );
    const inputElement = getByPlaceholderText("Enter your name");
    expect(inputElement).toBeDisabled();
  });

  test("should render input with default value", () => {
    const { getByDisplayValue } = render(<Input defaultValue="Aman" />);
    const inputElement = getByDisplayValue("Aman");
    expect(inputElement).toBeInTheDocument();
  });
});
