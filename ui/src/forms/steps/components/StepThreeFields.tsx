import InputField from "../../components/InputField";

interface ISteThreeFields {
  disabled?: boolean;
}

const StepThreeFields: React.FC<ISteThreeFields> = ({ disabled = false }) => {
  return (
    <InputField
      id="password"
      name="password"
      type="password"
      disabled={disabled}
      autoComplete="current-password"
      label={disabled ? 'Senha' : 'Sua senha'} />
  )
};

export default StepThreeFields
