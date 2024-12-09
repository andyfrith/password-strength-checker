function PasswordField({
  password,
  onPasswordChange,
}: {
  password: string;
  onPasswordChange: (value: string) => void;
}) {
  return (
    <div className={"w-full"}>
      <form>
        <input
          data-testid="password-field"
          className={
            "w-full text-gray-100 bg-gray-600 border-[1px] p-2 border-white rounded-md"
          }
          type="password"
          placeholder="Enter password"
          onChange={(e) => onPasswordChange(e.target.value)}
          value={password}
        ></input>
      </form>
    </div>
  );
}

export default PasswordField;
