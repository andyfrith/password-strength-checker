import { Verification } from "./types";

export const initialVerifications: Array<Verification> = [
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
    isValid: false,
  },
  {
    id: String(Math.random()),
    label: "Contains special characters",
    rule: /[!@#$%^&*(),.?":{}|<>]/,
    isValid: false,
  },
  {
    id: String(Math.random()),
    label: "Contains uppercase & lowercase",
    rule: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
    isValid: false,
  },
];
