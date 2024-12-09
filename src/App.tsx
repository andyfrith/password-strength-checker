import PasswordCheckerProvider from "./passwordChecker/context";
import PasswordChecker from "./passwordChecker/passwordChecker";

function App() {
  return (
    <div className={"bg-[#242424] w-dvw h-dvh p-8 text-white"}>
      <h1 className={"text-2xl mb-5"}>Password Strength Checker</h1>
      <PasswordCheckerProvider>
        <PasswordChecker />
      </PasswordCheckerProvider>
    </div>
  );
}

export default App;
