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

## Tecnologias e stack

- [Next.js](https://nextjs.org/) `16.3.5`, com App Router;
- [React](https://react.dev/) `19.2.8`;
- TypeScript;
- CSS Modules;
- ESLint 9.

## Estrutura do projeto

```text
.
├── src/
│   └── app/
│       ├── globals.css
│       ├── favicon.ico
│       ├── layout.tsx
│       ├── page.module.css
│       └── page.tsx
├── public/              # arquivos estáticos acessíveis pela aplicação
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

## Pré-requisitos

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

## Como rodar o projeto

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

### 3. Variáveis de ambiente

O projeto não utiliza variáveis de ambiente neste momento. Caso novas
integrações sejam adicionadas, documente aqui o nome e a finalidade de cada
variável necessária, sem incluir valores sensíveis no repositório.

### 4. Iniciar o modo de desenvolvimento

```bash
npm run dev
```

Após iniciar o projeto, abra [http://localhost:3000](http://localhost:3000) no
navegador. Para encerrar o servidor, pressione `Ctrl+C`.

### 5. Validar o projeto

Execute o lint para verificar problemas de qualidade:

```bash
npm run lint
```

### 6. Gerar e executar a versão de produção

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

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | inicia o servidor de desenvolvimento; |
| `npm run build` | gera o bundle otimizado para produção; |
| `npm run start` | inicia a aplicação usando o build de produção; |
| `npm run lint` | executa o ESLint para verificar problemas no código. |

Não há um script automatizado de testes ou cobertura configurado no `package.json`
atualmente.

## Estrutura e responsabilidades

- `src/app/layout.tsx`: layout raiz e metadados compartilhados;
- `src/app/page.tsx`: página principal da landing page;
- `src/app/page.module.css`: estilos específicos da página principal;
- `src/app/globals.css`: estilos globais;
- `public/`: imagens e demais arquivos estáticos;
- `next.config.ts`: configuração do Next.js;
- `TESTS.md`: roteiro de testes manuais e checklist de QA.

## Padrões de código

- Utilize TypeScript e mantenha a tipagem explícita nas interfaces públicas.
- Prefira componentes e funções com nomes em `PascalCase` e variáveis/funções em
  `camelCase`.
- Mantenha estilos específicos em CSS Modules (`*.module.css`) e estilos
  globais em `globals.css`.
- Organize imports no início do arquivo e remova imports não utilizados.
- Execute `npm run lint` antes de abrir um pull request.

## Contribuição

1. Crie uma branch descritiva a partir da `main`, por exemplo:
   `feat/nova-secao` ou `fix/ajuste-responsividade`.
2. Faça alterações pequenas e focadas.
3. Use mensagens de commit no padrão Conventional Commits, como
   `feat: adiciona secao de impacto` ou `docs: atualiza instrucoes`.
4. Execute `npm run lint` e, quando aplicável, valide os cenários manuais.
5. Abra um pull request descrevendo o problema, a solução e os testes
   realizados.

## Testes e QA

O roteiro de testes manuais e checklist de qualidade está em
[TESTS.md](./TESTS.md). Ele inclui:

- testes de responsividade e UX/UI;
- testes funcionais e regras de negócio;
- testes de acessibilidade e performance;
- cenários para validar CTA, links e comportamento mobile.

Para a validação automatizada disponível, execute:

```bash
npm run lint
```

Não existe uma meta de cobertura automatizada definida para o projeto.

## Deploy

Não há uma configuração de deploy versionada neste repositório no momento.
Para publicar a aplicação, gere o build com `npm run build` e execute
`npm run start` em um ambiente compatível com Node.js 20.9.0 ou superior dentro
da série 20.x. A plataforma e o fluxo de publicação devem ser documentados aqui
quando forem definidos.

## Licença

Este projeto está licenciado sob a [MIT License](./LICENSE).
