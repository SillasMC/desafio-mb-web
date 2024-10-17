import InputField from "../../components/InputField";

import formModel from '../../model/formModel'

const {
  name,
  cpf,
  birthDate,
  telephone,
} = formModel

interface IStepTwoPFFields {
  disabled?: boolean;
}

const StepTwoPFFields: React.FC<IStepTwoPFFields> = ({ disabled = false }) => {
  return (
    <>
      <InputField
        id={name.name}
        name={name.name}
        type="text"
        disabled={disabled}
        label={name.label} />
      <InputField
        id={cpf.name}
        name={cpf.name}
        type="text"
        disabled={disabled}
        label={cpf.label} />
      <InputField
        id={birthDate.name}
        name={birthDate.name}
        type="date"
        disabled={disabled}
        label={birthDate.label} />
      <InputField
        id={telephone.name}
        name={telephone.name}
        type="tel"
        disabled={disabled}
        label={telephone.label} />
    </>
  )
};

export default StepTwoPFFields
