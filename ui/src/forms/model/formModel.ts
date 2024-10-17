const formModel = {
    email: {
        name: 'email',
        label: 'Endereço de e-mail',
        requiredErrorMsg: 'Campo email deve ser preenchido',
        invalidErrorMsg: 'Email inválido'
    },
    name: {
        name: 'name',
        label: 'Nome',
        label2: 'Razão social',
        requiredErrorMsg: 'Campo nome deve ser preenchido',
        requiredErrorMsg2: 'Campo razão social deve ser preenchido'
    },
    cpf: {
        name: 'cpf',
        label: 'CPF',
        requiredErrorMsg: 'Campo CPF deve ser preenchido',
        invalidErrorMsg: 'Campo CPF inválido'
    },
    birthDate: {
        name: 'birthDate',
        label: 'Data de nascimento',
        requiredErrorMsg: 'Campo data de nascimento deve ser preenchido',
        invalidErrorMsg: 'Data de nascimento inválida'
    },
    cnpj: {
        name: 'cnpj',
        label: 'CNPJ',
        requiredErrorMsg: 'Campo CNPJ deve ser preenchido',
        invalidErrorMsg: 'Campo CNPJ inválido'
    },
    foundationDate: {
        name: 'foundationDate',
        label: 'Data de abertura da empresa',
        requiredErrorMsg: 'Campo data de abertura deve ser preenchido',
        invalidErrorMsg: 'Data de abertura inválida'
    },
    telephone: {
        name: 'telephone',
        label: 'Telefone',
        requiredErrorMsg: 'Campo telefone deve ser preenchido'
    },
    password: {
        name: 'password',
        label: 'Sua senha',
        label2: 'Senha',
        requiredErrorMsg: 'Campo senha deve ser preenchido'
    },
};

export default formModel