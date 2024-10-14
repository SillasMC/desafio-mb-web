const yup = require('yup');

const registerUserSchema = yup
  .object({
    email: yup.string().required('Campo email deve ser preenchido').email(),
    name: yup.string().required('Campo nome deve ser preenchido').trim(),
    cpf: yup.string().required('Campo cpf deve ser preenchido').trim(),
    birthDate: yup.string().required('Campo data de nascimento deve ser preenchido').trim(),
    telephone: yup.string().required('Campo telefone deve ser preenchido').trim(),
    password: yup.string().required('Campo senha deve ser preenchido').trim()
  })
  .required();

  module.exports = { registerUserSchema }