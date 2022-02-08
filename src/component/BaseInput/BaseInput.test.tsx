import { render, screen } from "@testing-library/react";
import { BaseInput } from "./BaseInput";
describe("<BaseInput />", () => {
  it("should render title", () => {
    render(<BaseInput title="Test" />);

    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("should render error text", () => {
    render(<BaseInput errorText="Test" />);

    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("should render textarea", () => {
    render(<BaseInput errorText="Test" type="textArea" />);

    expect(document.querySelector("textarea")).toBeInTheDocument();
  });

  it("should render placeholder", () => {
    render(<BaseInput title="test" />);

    expect(screen.getByText("Type test")).toBeInTheDocument();
  });


});
