import { clsx } from "clsx";
import { GiCheckMark, GiCircle } from "react-icons/gi";
import { Verification } from "./types";

function Verifications({
  verifications,
}: {
  verifications: Array<Verification>;
}) {
  return (
    <ul data-testid="verifications-list" className={"mt-4"}>
      {verifications.map((verification) => {
        return (
          <li
            className={clsx("flex items-center space-x-1 text-gray-500", {
              "text-green-500": verification.isValid,
            })}
            key={verification.id}
          >
            {verification.isValid ? (
              <GiCheckMark data-testid="checkmark" size={8} className="mr-1" />
            ) : (
              <GiCircle data-testid="circle" size={8} className="mr-1" />
            )}
            {verification.label}
          </li>
        );
      })}
    </ul>
  );
}

export default Verifications;
