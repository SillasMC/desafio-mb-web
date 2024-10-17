import InputField from "../../components/InputField";

import formModel from '../../model/formModel'

const {
  email,
} = formModel

interface IStepOneFields {
  disabled?: boolean;
}

const StepOneFields: React.FC<IStepOneFields> = ({ disabled = false }) => {
  return (
    <InputField
      id={email.name}
      name={email.name}
      type="email"
      disabled={disabled}
      autoComplete="email"
      label={email.label} />
  )
};

export default StepOneFields
