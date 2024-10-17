import PasswordField from "../../components/PasswordField";
import formModel from '../../model/formModel'

const {
  password
} = formModel

interface ISteThreeFields {
  disabled?: boolean;
}

const StepThreeFields: React.FC<ISteThreeFields> = ({ disabled = false }) => {
  return (
    <PasswordField
      id={password.name}
      name={password.name}
      disabled={disabled}
      label={disabled ? password.label2 : password.label} />
  )
};

export default StepThreeFields
