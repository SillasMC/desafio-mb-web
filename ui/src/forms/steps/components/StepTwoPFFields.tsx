import InputField from "../../components/InputField";

const StepTwoPFFields = () => {
  return (
    <>
      <InputField
        id="name"
        name="name"
        type="text"
        label="Nome" />
      <InputField
        id="cpf"
        name="cpf"
        type="text"
        label="CPF" />
      <InputField
        id="birthDate"
        name="birthDate"
        type="date"
        label="Data de nascimento" />
      <InputField
        id="telephone"
        name="telephone"
        type="tel"
        label="Telefone" />
    </>
  )
};

export default StepTwoPFFields
