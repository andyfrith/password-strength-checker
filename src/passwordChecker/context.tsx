import { createContext, useContext, useState } from "react";
import { initialVerifications } from "./data";
import { PasswordChecker, Strength } from "./types";

const usePasswordCheckerState = () =>
  useState<PasswordChecker>({
    password: "",
    verifications: initialVerifications,
    strength: Strength.None,
  });

const PasswordCheckerContext = createContext<ReturnType<
  typeof usePasswordCheckerState
> | null>(null);

export const usePasswordChecker = () => {
  const passwordChecker = useContext(PasswordCheckerContext);
  if (!passwordChecker) {
    throw new Error(
      "usePasswordChecker must be used within a PasswordCheckerContext provider"
    );
  }
  return passwordChecker;
};

const PasswordCheckerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [passwordChecker, setPasswordChecker] = usePasswordCheckerState();

  return (
    <PasswordCheckerContext.Provider
      value={[passwordChecker, setPasswordChecker]}
    >
      {children}
    </PasswordCheckerContext.Provider>
  );
};

export default PasswordCheckerProvider;
