import { usePasswordChecker } from "./context";
import PasswordField from "./passwordField";
import StrengthIndicator from "./strengthIndicator";
import { Verification } from "./types";
import Verifications from "./verifications";
import { Strength } from "./types";

function verifyPassword(
  verifications: Array<Verification>,
  password: string
): Array<Verification> {
  verifications.map((verification) => {
    verification.isValid = verification.rule.test(password);
  });

  return verifications;
}

function determineStrength(verifications: Array<Verification>) {
  let isValidCount = 0;
  verifications.map((verification) => {
    if (verification.isValid) {
      isValidCount++;
    }
  });
  if (isValidCount === 4) return Strength.Strong;
  if (isValidCount === 3) return Strength.Medium;
  if (isValidCount === 2) return Strength.Weak;
  if (isValidCount === 1) return Strength.Weak;
  return Strength.None;
}

function PasswordChecker() {
  const [passwordChecker, setPasswordChecker] = usePasswordChecker();

  function onPasswordChange(value: string) {
    setPasswordChecker({
      ...passwordChecker,
      password: value,
      verifications: [...verifyPassword(passwordChecker.verifications, value)],
      strength: determineStrength(passwordChecker.verifications),
    });
  }

  return (
    <div className="w-full md:w-1/3 lg:w-1/4">
      <PasswordField
        password={passwordChecker.password}
        onPasswordChange={onPasswordChange}
      />
      <StrengthIndicator strength={passwordChecker.strength} />
      <Verifications verifications={passwordChecker.verifications} />
    </div>
  );
}

export default PasswordChecker;
