export interface PasswordChecker {
  password: string;
  verifications: Array<Verification>;
  strength: Strength;
}

export enum Strength {
  None = "None",
  Weak = "Weak",
  Medium = "Medium",
  Strong = "Strong",
}

export type Verification = {
  id: string;
  isValid: boolean;
  label: string;
  rule: RegExp;
};
