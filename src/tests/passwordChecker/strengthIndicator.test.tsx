import { render, screen } from "@testing-library/react";
import StrengthIndicator from "../../passwordChecker/strengthIndicator";
import { Strength } from "../../passwordChecker/types";

describe("StrengthIndicator", () => {
  it("should render a strength indicator bar for an empty password", () => {
    render(<StrengthIndicator strength={Strength.None} />);
    expect(screen.getByTestId("strength-indicator-bar")).toHaveClass(
      "bg-white"
    );
    expect(screen.getByTestId("strength-indicator-bar")).toHaveStyle({
      width: "0%",
    });
    expect(screen.queryByText(`${Strength.None} Password`)).toBeNull();
  });
  it("should render a strength indicator bar for a weak strength password", () => {
    render(<StrengthIndicator strength={Strength.Weak} />);
    expect(screen.getByTestId("strength-indicator-bar")).toHaveClass(
      "bg-red-600"
    );
    expect(screen.getByTestId("strength-indicator-bar")).toHaveStyle({
      width: "25%",
    });
    expect(screen.getByText(`${Strength.Weak} Password`)).toBeInTheDocument();
  });
  it("should render a strength indicator bar for a medium strength password", () => {
    render(<StrengthIndicator strength={Strength.Medium} />);
    expect(screen.getByTestId("strength-indicator-bar")).toHaveClass(
      "bg-yellow-600"
    );
    expect(screen.getByTestId("strength-indicator-bar")).toHaveStyle({
      width: "50%",
    });
    expect(screen.getByText(`${Strength.Medium} Password`)).toBeInTheDocument();
  });
  it("should render a strength indicator bar for a strong strength password", () => {
    render(<StrengthIndicator strength={Strength.Strong} />);
    expect(screen.getByTestId("strength-indicator-bar")).toHaveClass(
      "bg-green-600"
    );
    expect(screen.getByTestId("strength-indicator-bar")).toHaveStyle({
      width: "100%",
    });
    expect(screen.getByText(`${Strength.Strong} Password`)).toBeInTheDocument();
  });
});
