import InputField from "../../components/InputField";

interface IStepTwoPFFields {
  disabled?: boolean;
}

const StepTwoPFFields: React.FC<IStepTwoPFFields> = ({ disabled = false }) => {
  return (
    <>
      <InputField
        id="name"
        name="name"
        type="text"
        disabled={disabled}
        label="Nome" />
      <InputField
        id="cpf"
        name="cpf"
        type="text"
        disabled={disabled}
        label="CPF" />
      <InputField
        id="birthDate"
        name="birthDate"
        type="date"
        disabled={disabled}
        label="Data de nascimento" />
      <InputField
        id="telephone"
        name="telephone"
        type="tel"
        disabled={disabled}
        label="Telefone" />
    </>
  )
};

export default StepTwoPFFields
