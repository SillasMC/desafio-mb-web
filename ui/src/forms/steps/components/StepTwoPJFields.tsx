import InputField from "../../components/InputField";

import formModel from '../../model/formModel'

const {
  name,
  cnpj,
  foundationDate,
  telephone,
} = formModel

interface IStepTwoPJFields {
  disabled?: boolean;
}

const StepTwoPJFields: React.FC<IStepTwoPJFields> = ({ disabled = false }) => {
  return (
    <>
      <InputField
        id={name.name}
        name={name.name}
        type="text"
        disabled={disabled}
        label={name.label2} />
      <InputField
        id={cnpj.name}
        name={cnpj.name}
        type="text"
        disabled={disabled}
        label={cnpj.label} />
      <InputField
        id={foundationDate.name}
        name={foundationDate.name}
        type="date"
        disabled={disabled}
        label={foundationDate.label} />
      <InputField
        id={telephone.name}
        name={telephone.name}
        type="tel"
        disabled={disabled}
        label={telephone.label} />
    </>
  )
};

export default StepTwoPJFields
