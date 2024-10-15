import InputField from "../../components/InputField";

const StepOneFields = () => {
  return (
    <InputField
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        label="Endereço de e-mail" />
  )
};

export default StepOneFields
