import InputField from './components/InputField'

const StepTwoPF = () => {
  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">Pessoa Física</h2>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
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
          label="Número de telefone" />
      </div>
    </>
  )
};

export default StepTwoPF
