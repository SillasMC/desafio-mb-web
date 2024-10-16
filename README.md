# Desafio React + Node 

Visa concluir desafio da MB: https://github.com/wuzuio/desafio-mb-web?tab=readme-ov-file

## Projeto

Está divido em duas partes, na pasta **server** temos o projeto em Node para servir conteúdo e as APIs requisitadas. Já na pasta **ui** temos o projeto React/Typescript e Vite implementando a tela de formulário pedida.

As versões do node utilizadas pelo projeto são as seguintes:

> node: v22.9.0

> npm: 10.8.3


## Rodando o projeto

### Frontend

Inicialmente devemos ir para a pasta **ui** e rodar o seguinte comando para instalar os pacotes do npm:

```bash
npm i
```

Após, instalados os pacotes, deve-se rodar o seguinte comando para buildar a aplicação:

```bash
npm run build
```

Caso queira testar o projeto de frontend localmente, deve-se usar o seguinte comando:

```bash
npm run dev
```

A aplicação frontend será rodada na porta **5173**.

### Backend

Após buildar o projeto do frontend, deve-se ir para a pasta **server** rodar o seguinte comando para instalar os pacotes do npm:

```bash
npm i
```

Após, instalados os pacotes, deve-se rodar o seguinte comando para rodar a aplicação:

```bash
npm start
```

A aplicação será rodada na porta **8080**.