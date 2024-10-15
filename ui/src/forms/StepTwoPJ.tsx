import InputField from './components/InputField'

const StepTwoPJ = () => {
  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">Pessoa Jurídica</h2>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm"><InputField
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
      </div>
    </>
  )
};

export default StepTwoPJ
