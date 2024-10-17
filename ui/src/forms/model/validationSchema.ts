import * as yup from 'yup'
import { parse, isValid, isBefore } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import formModel from './formModel'

const {
  email,
  name,
  cpf,
  birthDate,
  cnpj,
  foundationDate,
  telephone,
  password
} = formModel

const cpfRegEx = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
const cnpjRegEx = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/

const validateDate = val => {
  if (val) {
    const parsedDate = parse(val, 'yyyy-MM-dd', new Date(), { locale: ptBR });
    const isValidDate = isValid(parsedDate);
    if (isValidDate) {
      return isBefore(parsedDate, new Date())
    }
    return false;
  }
  return false;
}

export const validationSchema = (step: number, isPerson: boolean) => {
  switch (step) {
    case 0:
      return yup.object().shape({
        [email.name]: yup.string()
          .required(email.requiredErrorMsg)
          .email(email.invalidErrorMsg),
      })
    case 1:
      return isPerson ? yup.object().shape({
        [name.name]: yup.string().required(name.requiredErrorMsg),
        [cpf.name]: yup.string()
          .required(cpf.requiredErrorMsg)
          .matches(cpfRegEx, cpf.invalidErrorMsg),
        [birthDate.name]: yup.string()
          .nullable()
          .required(birthDate.requiredErrorMsg)
          .test('expDate', birthDate.invalidErrorMsg, validateDate),
        [telephone.name]: yup.string().required(telephone.requiredErrorMsg),
      }) : yup.object().shape({
        [name.name]: yup.string().required(name.requiredErrorMsg2),
        [cnpj.name]: yup.string()
          .required(cnpj.requiredErrorMsg)
          .matches(cnpjRegEx, cnpj.invalidErrorMsg),
        [foundationDate.name]: yup.string()
          .nullable()
          .required(foundationDate.requiredErrorMsg)
          .test('expDate', foundationDate.invalidErrorMsg, validateDate),
        [telephone.name]: yup.string().required(telephone.requiredErrorMsg)
      })
    case 2:
      return yup.object().shape({
        [password.name]: yup.string().required(password.requiredErrorMsg)
      })
    default:
      return null
  }
}