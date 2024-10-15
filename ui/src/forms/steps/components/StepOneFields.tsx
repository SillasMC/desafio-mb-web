import InputField from "../../components/InputField";

interface IStepOneFields {
  disabled?: boolean;
}

const StepOneFields: React.FC<IStepOneFields> = ({ disabled = false }) => {
  return (
    <InputField
      id="email"
      name="email"
      type="email"
      disabled={disabled}
      autoComplete="email"
      label="Endereço de e-mail" />
  )
};

export default StepOneFields
