import InputField from "../../components/InputField";

const StepTwoPJFields = () => {
  return (
    <>
      <InputField
        id="name"
        name="name"
        type="text"
        label="Razão social" />
      <InputField
        id="cnpj"
        name="cnpj"
        type="text"
        label="CNPJ" />
      <InputField
        id="foundationDate"
        name="foundationDate"
        type="date"
        label="Data de abertura da empresa" />
      <InputField
        id="telephone"
        name="telephone"
        type="tel"
        label="Telefone" />
    </>
  )
};

export default StepTwoPJFields
