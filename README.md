# SouJunior Apoia.se Landing

Landing page do projeto do Hackathon SouJunior para captação de apoiadores via Apoia.se.

## Visão geral

Este projeto tem como objetivo criar uma página de apresentação para divulgar a iniciativa da SouJunior, apresentar o impacto social da comunidade e incentivar a doação por meio de links e chamadas para ação para o Apoia.se.

A estrutura atual foi iniciada com Next.js e utiliza o App Router do framework para servir a página principal e os estilos da interface.

## Objetivo do projeto

- divulgar o programa e a missão da SouJunior;
- apresentar o impacto da doação;
- criar uma narrativa clara para conversão de visitantes em apoiadores;
- direcionar os usuários para a plataforma oficial do Apoia.se;
- preparar a base para uma landing page responsiva e pronta para pré-lançamento.

## Stack

- Next.js 16
- React 19
- TypeScript
- CSS Modules
- ESLint

## Estrutura do projeto

```text
.
├── src/
│   └── app/
│       ├── globals.css
│       ├── layout.tsx
│       ├── page.module.css
│       └── page.tsx
├── public/
├── README.md
├── TESTS.md
├── .nvmrc
├── package.json
├── package-lock.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
├── .gitignore
├── LICENSE
└── AGENTS.md
```

## Requisitos

- Node.js 20.9.0 ou superior dentro da série 20.x
- npm 10 ou superior

As versões esperadas também estão declaradas no campo `engines` do
[`package.json`](./package.json), e o arquivo `.nvmrc` indica o uso do Node.js
20.9.0. Para quem utiliza o [nvm](https://github.com/nvm-sh/nvm), a versão pode ser
selecionada com:

```bash
nvm install
nvm use
```

Confirme as versões instaladas antes de continuar:

```bash
node --version
npm --version
```

O primeiro comando deve indicar uma versão `20.9.0` ou superior dentro da série
`20.x`, e o segundo, uma versão
`10.x` ou superior.

## Como executar localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/inovacao-squad/soujunior-apoiase-landing.git
cd soujunior-apoiase-landing
```

Se o repositório já estiver disponível localmente, basta entrar na pasta do
projeto.

### 2. Instalar as dependências

O projeto utiliza npm e inclui um `package-lock.json` para manter versões
reprodutíveis. Execute:

```bash
npm install
```

### 3. Iniciar o modo de desenvolvimento

```bash
npm run dev
```

Após iniciar o projeto, abra [http://localhost:3000](http://localhost:3000) no
navegador. Para encerrar o servidor, pressione `Ctrl+C`.

### 4. Validar o projeto

Execute o lint para verificar problemas de qualidade:

```bash
npm run lint
```

### 5. Gerar e executar a versão de produção

Gere o bundle otimizado e, depois, inicie o servidor de produção:

```bash
npm run build
npm run start
```

A aplicação ficará disponível em
[http://localhost:3000](http://localhost:3000). O comando `npm run build` deve
ser executado novamente sempre que o código for alterado antes de iniciar a
versão de produção.

## Scripts disponíveis

```bash
npm run dev    # inicia o ambiente de desenvolvimento
npm run build  # gera a versão de produção
npm run start  # inicia a aplicação em produção
npm run lint   # executa a validação com ESLint
```

## Documentação de QA

O roteiro de testes manuais e checklist de qualidade do projeto está em [TESTS.md](./TESTS.md).

Esse documento inclui:

- testes de responsividade e UX/UI;
- testes funcionais e regras de negócio;
- testes de acessibilidade e performance;
- cenários para validar CTA, links e comportamento mobile.


## Licença

Este projeto está licenciado sob a [MIT License](./LICENSE).
