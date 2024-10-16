import PasswordField from "../../components/PasswordField";

interface ISteThreeFields {
  disabled?: boolean;
}

const StepThreeFields: React.FC<ISteThreeFields> = ({ disabled = false }) => {
  return (
    <PasswordField
      id="password"
      name="password"
      disabled={disabled}
      label={disabled ? 'Senha' : 'Sua senha'} />
  )
};

export default StepThreeFields
