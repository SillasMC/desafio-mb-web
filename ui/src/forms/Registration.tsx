import { useState } from 'react'
import { Form, Formik  } from 'formik'

import StepOne from './steps/StepOne'
import StepTwoPF from './steps/StepTwoPF'
import StepTwoPJ from './steps/StepTwoPJ'
import StepThree from './steps/StepThree'
import StepFour from './steps/StepFour'

import { initialValues } from './model/initialValues';
import { validationSchema } from './model/validationSchema';
import formModel from './model/formModel'

import { ENDPOINTS } from '../service/endpoints';
import axiosApi from '../service/axiosConfig';

interface IRegistration {
  handleResult: (str: string) => void
}

const {
  name,
  cpf,
  birthDate,
  cnpj,
  foundationDate,
  telephone,
  password
} = formModel

const Registration: React.FC<IRegistration> = ({ handleResult }) => {
  const [step, setStep] = useState(0)
  const [isPerson, setIsPerson] = useState(true)
  const [apiError, setApiError] = useState('')
  const currentValidationSchema = validationSchema(step, isPerson);
  
  const increaseStep = () => {
    setStep(prev => prev + 1)
  }

  const decreaseStep = (setFieldValue, setTouched) => {
    switch (step) {
      case 1:
        setFieldValue(name.name,'')
        setFieldValue(cpf.name,'')
        setFieldValue(birthDate.name,'')
        setFieldValue(cnpj.name,'')
        setFieldValue(foundationDate.name,'')
        setFieldValue(telephone.name,'')
        break;
      case 2:
        setFieldValue(password.name,'')
        break;
      default:
        break;
    }
    setTouched({})
    setStep(prev => prev - 1)
  }

  const submitForm = (values, actions) => {
    const payload = { ...values };
    if (isPerson) {
      delete payload.cnpj
      delete payload.foundationDate
    } else {
      delete payload.cpf
      delete payload.birthDate
    }
    axiosApi.post(ENDPOINTS.SAVE_REGISTER, payload)
      .then((response) => {
        handleResult(JSON.stringify(response.data));
        setApiError('')
      })
      .catch((error) => {
        setApiError(`${error.message} ${JSON.stringify(error.response.data.errors)}`);
        console.log('Error', error);
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
  }

  const handleSubmit = (values, actions) => {
    if (step === 3) {
      submitForm(values, actions);
    } else {
      increaseStep()
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  const getStep = (step: number) => {
    switch (step) {
      case 0:
        return <StepOne isPerson={isPerson} handlePerson={val => setIsPerson(val)} />
      case 1:
        return isPerson ? <StepTwoPF /> : <StepTwoPJ />
      case 2:
        return <StepThree />
      case 3:
        return <StepFour isPerson={isPerson} />
      default:
        return <div>Sucesso!</div>
    }
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h4 className="mt-10 text-left text-sm leading-9 tracking-tight text-gray-900">
          Etapa <span className='text-[#ff9900]'>{step + 1}</span> de 4
        </h4>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={currentValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue, setTouched }) => (
          <Form>
            {getStep(step)}
            <div className="flex mt-6 sm:mx-auto sm:w-full sm:max-w-sm gap-2">
              {!isSubmitting ? (
                <>
                  {step !== 0 && (
                    <button
                      onClick={() => decreaseStep(setFieldValue, setTouched)}
                      type="button"
                      className="w-1/2 justify-center rounded-md border border-[#ff9900] px-3 py-1.5 text-sm font-semibold leading-6 text-[#ff9900] shadow-sm hover:border-[#f89d00b3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff9900]"
                      >
                        Voltar
                    </button>
                  )}
                  <button
                    type="submit"
                    className={`${step !== 0 ? 'w-1/2' : 'w-full'} justify-center rounded-md bg-[#ff9900] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#f89d00b3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff9900]`}
                    >
                      {step === 3 ? 'Cadastrar' : 'Continuar'}
                  </button>
                </>
              ) : (
                <div role="status" className='w-screen flex items-center justify-center'>
                  <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              )}
            </div>
            {apiError && (
              <>
                <p className="mt-4 text-center text-sm leading-9 tracking-tight text-red-500">
                  Erro: ${apiError}
                </p>
                <p className="text-center text-sm leading-9 tracking-tight text-red-500">
                  Tente novamente!
                </p>
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Registration
