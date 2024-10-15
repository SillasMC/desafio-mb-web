const yup = require('yup');

const registerUserSchema = (isPerson) => {
  return isPerson ? yup.object({
    email: yup.string().required('Campo email deve ser preenchido').email(),
    name: yup.string().required('Campo nome deve ser preenchido').trim(),
    cpf: yup.string().required('Campo cpf deve ser preenchido').trim(),
    birthDate: yup.string().required('Campo data de nascimento deve ser preenchido').trim(),
    telephone: yup.string().required('Campo telefone deve ser preenchido').trim(),
    password: yup.string().required('Campo senha deve ser preenchido').trim()
  }).required() : yup.object({
    email: yup.string().required('Campo email deve ser preenchido').email(),
    name: yup.string().required('Campo razao social deve ser preenchido').trim(),
    cnpj: yup.string().required('Campo cnpj deve ser preenchido').trim(),
    foundationDate: yup.string().required('Campo data de fundação deve ser preenchido').trim(),
    telephone: yup.string().required('Campo telefone deve ser preenchido').trim(),
    password: yup.string().required('Campo senha deve ser preenchido').trim()
  }).required();
};

module.exports = { registerUserSchema }