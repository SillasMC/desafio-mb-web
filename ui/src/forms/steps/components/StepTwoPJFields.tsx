import InputField from "../../components/InputField";

interface IStepTwoPJFields {
  disabled?: boolean;
}

const StepTwoPJFields: React.FC<IStepTwoPJFields> = ({ disabled = false }) => {
  return (
    <>
      <InputField
        id="name"
        name="name"
        type="text"
        disabled={disabled}
        label="Razão social" />
      <InputField
        id="cnpj"
        name="cnpj"
        type="text"
        disabled={disabled}
        label="CNPJ" />
      <InputField
        id="foundationDate"
        name="foundationDate"
        type="date"
        disabled={disabled}
        label="Data de abertura da empresa" />
      <InputField
        id="telephone"
        name="telephone"
        type="tel"
        disabled={disabled}
        label="Telefone" />
    </>
  )
};

export default StepTwoPJFields
