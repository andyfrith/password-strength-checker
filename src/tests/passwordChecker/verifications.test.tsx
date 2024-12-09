import { render, screen, within } from "@testing-library/react";
import Verifications from "../../passwordChecker/verifications";
import { Verification } from "../../passwordChecker/types";

const verifications: Array<Verification> = [
  {
    id: String(Math.random()),
    label: "At least 8 characters",
    rule: /.{8,}/,
    isValid: false,
  },
  {
    id: String(Math.random()),
    label: "Contains numbers",
    rule: /\d/,
    isValid: true,
  },
];
describe("Verifications", () => {
  it("should render the list of verifications when provided an array of verifications", () => {
    render(<Verifications verifications={verifications} />);
    expect(screen.getByText(verifications[0].label)).toBeInTheDocument();
    expect(screen.getByText(verifications[1].label)).toBeInTheDocument();
  });
  it("should render an unmet verification in gray text along with a circle icon", () => {
    render(<Verifications verifications={verifications} />);
    expect(screen.getByText(verifications[0].label)).toBeInTheDocument();
    expect(screen.getByText(verifications[0].label)).toHaveClass(
      "text-gray-500"
    );
    expect(
      within(screen.getByText(verifications[0].label)).getByTestId("circle")
    ).toBeInTheDocument();
  });
  it("should render an met verification in green text along with a checkmark icon", () => {
    render(<Verifications verifications={verifications} />);
    expect(screen.getByText(verifications[1].label)).toHaveClass(
      "text-green-500"
    );

    expect(
      within(screen.getByText(verifications[1].label)).getByTestId("checkmark")
    ).toBeInTheDocument();
  });
});
