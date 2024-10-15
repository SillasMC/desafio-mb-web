import InputField from "../../components/InputField";

const StepThreeFields = () => {
  return (
    <InputField
      id="password"
      name="password"
      type="password"
      autoComplete="current-password"
      label="Sua senha" />
  )
};

export default StepThreeFields
