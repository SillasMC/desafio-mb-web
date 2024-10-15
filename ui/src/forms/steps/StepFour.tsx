import StepOneFields from './components/StepOneFields'
import StepTwoPFFields from './components/StepTwoPFFields'
import StepTwoPJFields from './components/StepTwoPJFields'
import StepThreeFields from './components/StepThreeFields'

interface IStepFour {
  isPerson: boolean;
}

const StepFour: React.FC<IStepFour> = ({ isPerson }) => {
  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">Revise suas informações</h2>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <StepOneFields disabled />
        {isPerson ? <StepTwoPFFields disabled /> : <StepTwoPJFields disabled />}
        <StepThreeFields disabled />
      </div>
    </>
  )
};

export default StepFour
