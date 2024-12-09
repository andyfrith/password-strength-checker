import { Strength } from "./types";

function getColor(strength: Strength): string {
  switch (strength) {
    case Strength.Weak:
      return "bg-red-600";
    case Strength.Medium:
      return "bg-yellow-600";
    case Strength.Strong:
      return "bg-green-600";
    default:
      return "bg-white";
  }
}

function getWidth(strength: Strength): string {
  switch (strength) {
    case Strength.Weak:
      return "25%";
    case Strength.Medium:
      return "50%";
    case Strength.Strong:
      return "100%";
    default:
      return "0%";
  }
}

function StrengthIndicator({ strength }: { strength: Strength }) {
  return (
    <div className="">
      <div className={"mt-3 mb-2 w-full h-5 relative"}>
        <div className={`bg-white w-full absolute h-5 rounded-lg`}></div>
        <div
          data-testid="strength-indicator-bar"
          className={`w-full absolute h-5 rounded-lg  ${getColor(strength)}`}
          style={{
            width: getWidth(strength),
          }}
        ></div>
      </div>
      <p className={"text-l"}>
        {strength !== "None" && `${strength} Password`}
      </p>
    </div>
  );
}

export default StrengthIndicator;
