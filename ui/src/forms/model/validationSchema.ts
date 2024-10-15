import * as yup from 'yup'
import { parse, isValid, isBefore } from 'date-fns'
import { ptBR } from 'date-fns/locale'

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
        email: yup.string().required('Campo email deve ser preenchido').email('Email inválido'),
      })
    case 1:
      return isPerson ? yup.object().shape({
        name: yup.string().required('Campo nome deve ser preenchido'),
        cpf: yup.string()
          .required('Campo CPF deve ser preenchido')
          .matches(cpfRegEx, 'Campo CPF inválido'),
        birthDate: yup.string()
          .nullable()
          .required('Campo data de nascimento deve ser preenchido')
          .test('expDate', 'Data de nascimento inválida', validateDate),
        telephone: yup.string().required('Campo telefone deve ser preenchido'),
      }) : yup.object().shape({
        name: yup.string().required('Campo razão social deve ser preenchido'),
        cnpj: yup.string()
          .required('Campo CNPJ deve ser preenchido')
          .matches(cnpjRegEx, 'Campo CNPJ inválido'),
        foundationDate: yup.string()
          .nullable()
          .required('Campo data de abertura deve ser preenchido')
          .test('expDate', 'Data de abertura inválida', validateDate),
        telephone: yup.string().required('Campo telefone deve ser preenchido')
      })
    case 2:
      return yup.object().shape({
        password: yup.string().required('Campo senha deve ser preenchido')
      })
    default:
      return null
  }
}