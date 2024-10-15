import StepTwoPFFields from './components/StepTwoPFFields'

const StepTwoPF = () => {
  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">Pessoa Física</h2>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <StepTwoPFFields />
      </div>
    </>
  )
};

export default StepTwoPF
