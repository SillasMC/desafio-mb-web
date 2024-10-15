import { useState } from "react";
import StepOneFields from "./components/StepOneFields";

interface IStepOne {
  isPerson: boolean;
  handlePerson: (bol: boolean) => void;
}

const StepOne: React.FC<IStepOne> = ({ isPerson, handlePerson }) => {
  const [personType, setPersonType] = useState(isPerson ? 'PF' : 'PJ')

  const handleRadio = (event) => {
    handlePerson(event.target.value === 'PF')
    setPersonType(event.target.value)
  }

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">Seja bem vindo(a)</h2>
      </div>
      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
        <StepOneFields />
        <div className="flex">
          <div className="flex items-center me-4">
            <input
              id="register-type-pf"
              type="radio"
              value="PF"
              name="register-type-group"
              checked={personType === 'PF'}
              onChange={handleRadio}
              className="w-4 h-4 text-[#ff9900] bg-gray-100 border-gray-300 focus:ring-[#f89d00b3] dark:focus:ring-[#ff9900] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-300 dark:border-gray-600" />
            <label
              htmlFor="register-type-pf"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                Pessoa física
            </label>
          </div>
          <div className="flex items-center me-4">
            <input
              id="register-type-pj"
              type="radio"
              value="PJ"
              name="register-type-group"
              checked={personType === 'PJ'}
              onChange={handleRadio}
              className="w-4 h-4 text-[#ff9900] bg-gray-100 border-gray-300 focus:ring-[#f89d00b3] dark:focus:ring-[#ff9900] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-300 dark:border-gray-600" />
            <label
              htmlFor="register-type-pj"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                Pessoa jurídica
            </label>
          </div>
        </div>
      </div>
    </>
  )
};

export default StepOne
