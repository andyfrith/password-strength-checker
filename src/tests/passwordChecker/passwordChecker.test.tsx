import { fireEvent, render, screen } from "@testing-library/react";
import PasswordCheckerProvider from "../../passwordChecker/context";
import PasswordChecker from "../../passwordChecker/passwordChecker";
import { Strength } from "../../passwordChecker/types";

describe("PasswordChecker", () => {
  it("should render a password checker", () => {
    render(
      <PasswordCheckerProvider>
        <PasswordChecker />
      </PasswordCheckerProvider>
    );
    expect(screen.getByTestId("password-field")).toBeInTheDocument();
    expect(screen.getByTestId("strength-indicator-bar")).toBeInTheDocument();
    expect(screen.getByTestId("verifications-list")).toBeInTheDocument();
  });
  it("should render a password checker with a no strength password", () => {
    render(
      <PasswordCheckerProvider>
        <PasswordChecker />
      </PasswordCheckerProvider>
    );
    const passwordField = screen.getByTestId("password-field");
    expect(passwordField).toBeInTheDocument();
    const strengthIndicatorBar = screen.getByTestId("strength-indicator-bar");
    expect(strengthIndicatorBar).toBeInTheDocument();
    const verificaitonsList = screen.getByTestId("verifications-list");
    expect(verificaitonsList).toBeInTheDocument();

    fireEvent.change(passwordField, { target: { value: "a" } });
    expect(passwordField).toHaveValue("a");
    expect(strengthIndicatorBar).toHaveClass("bg-white");
    expect(strengthIndicatorBar).toHaveStyle({
      width: "0%",
    });
    expect(screen.queryByText(`${Strength.None} Password`)).toBeNull();
  });

  it("should render a password checker with a weak strength password", () => {
    render(
      <PasswordCheckerProvider>
        <PasswordChecker />
      </PasswordCheckerProvider>
    );
    const passwordField = screen.getByTestId("password-field");
    expect(passwordField).toBeInTheDocument();
    const strengthIndicatorBar = screen.getByTestId("strength-indicator-bar");
    expect(strengthIndicatorBar).toBeInTheDocument();
    const verificaitonsList = screen.getByTestId("verifications-list");
    expect(verificaitonsList).toBeInTheDocument();

    fireEvent.change(passwordField, { target: { value: "12345678" } });
    expect(passwordField).toHaveValue("12345678");
    expect(strengthIndicatorBar).toHaveClass("bg-red-600");
    expect(strengthIndicatorBar).toHaveStyle({
      width: "25%",
    });
    expect(screen.queryByText(`${Strength.Weak} Password`)).toBeInTheDocument();
  });
  it("should render a password checker with a medium strength password", () => {
    render(
      <PasswordCheckerProvider>
        <PasswordChecker />
      </PasswordCheckerProvider>
    );
    const passwordField = screen.getByTestId("password-field");
    expect(passwordField).toBeInTheDocument();
    const strengthIndicatorBar = screen.getByTestId("strength-indicator-bar");
    expect(strengthIndicatorBar).toBeInTheDocument();
    const verificaitonsList = screen.getByTestId("verifications-list");
    expect(verificaitonsList).toBeInTheDocument();

    fireEvent.change(passwordField, { target: { value: "1234567aB" } });
    expect(passwordField).toHaveValue("1234567aB");
    expect(strengthIndicatorBar).toHaveClass("bg-yellow-600");
    expect(strengthIndicatorBar).toHaveStyle({
      width: "50%",
    });
    expect(
      screen.queryByText(`${Strength.Medium} Password`)
    ).toBeInTheDocument();
  });
  it("should render a password checker with a strong strength password", () => {
    render(
      <PasswordCheckerProvider>
        <PasswordChecker />
      </PasswordCheckerProvider>
    );
    const passwordField = screen.getByTestId("password-field");
    expect(passwordField).toBeInTheDocument();
    const strengthIndicatorBar = screen.getByTestId("strength-indicator-bar");
    expect(strengthIndicatorBar).toBeInTheDocument();
    const verificaitonsList = screen.getByTestId("verifications-list");
    expect(verificaitonsList).toBeInTheDocument();

    fireEvent.change(passwordField, { target: { value: "1234567aB#" } });
    expect(passwordField).toHaveValue("1234567aB#");
    expect(strengthIndicatorBar).toHaveClass("bg-green-600");
    expect(strengthIndicatorBar).toHaveStyle({
      width: "100%",
    });
    expect(
      screen.queryByText(`${Strength.Strong} Password`)
    ).toBeInTheDocument();
  });
});
