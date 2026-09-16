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

## Escopo funcional

A landing page deve comunicar o propósito da iniciativa rapidamente, gerar
confiança e incentivar a doação. A estrutura prevista no escopo inclui:

- hero com mensagem de impacto e CTA principal **"Doar agora"**;
- seção sobre o problema do acesso de jovens à tecnologia;
- explicação de como a iniciativa transforma a doação em impacto;
- prova social com números, depoimentos e parceiros;
- explicação tangível de como a doação é utilizada;
- rodapé institucional com CNPJ, contatos e redes sociais.

O CTA principal deve aparecer no hero e ser repetido ao longo da página. Para
visitantes que ainda não estão prontos para doar, também está previsto um CTA
secundário, como **"Conhecer o programa"** ou **"Receber novidades"**.

## Métrica de sucesso [ATUALIZAR PÓS-DESENVOLVIMENTO]

A métrica principal do projeto é a taxa de conversão de visitante em doador.
Visualizações e acessos são métricas auxiliares e não substituem a conversão
real. A meta numérica de novos doadores por mês ainda deve ser definida com o
time responsável antes do lançamento. Após a definição, registrar aqui a meta
adotada e, quando disponível, o resultado medido.

## Tecnologias e stack

- [Next.js](https://nextjs.org/) `16.3.5`, com App Router;
- [React](https://react.dev/) `19.2.8`;
- TypeScript;
- CSS Modules;
- ESLint 9;
- [Prettier](https://prettier.io/) para formatação automática de código.

## Estrutura do projeto

As pastas `components/`, `hooks/`, `services/`, `utils/` e `types/` só devem ser
criadas quando houver código que pertença a elas. **Não criar pastas vazias.**

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
`20.x`, e o segundo, uma versão `10.x` ou superior.

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

Execute o lint e verifique se o código está formatado:

```bash
npm run lint
npm run format:check
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

| Comando                | Finalidade                                                 |
| ---------------------- | ---------------------------------------------------------- |
| `npm run dev`          | inicia o servidor de desenvolvimento;                      |
| `npm run build`        | gera o bundle otimizado para produção;                     |
| `npm run start`        | inicia a aplicação usando o build de produção;             |
| `npm run lint`         | executa o ESLint para verificar problemas no código;       |
| `npm run format`       | formata o código com Prettier, reescrevendo arquivos;      |
| `npm run format:check` | verifica se o código está formatado, sem alterar arquivos. |

Não há um script automatizado de testes ou cobertura configurado no `package.json`
atualmente.

## Estrutura e responsabilidades

- `src/app/layout.tsx`: layout raiz e metadados compartilhados;
- `src/app/page.tsx`: página principal da landing page;
- `src/app/page.module.css`: estilos específicos da página principal;
- `src/app/globals.css`: estilos globais;
- `src/components/`: componentes compartilhados entre rotas;
- `public/`: imagens e demais arquivos estáticos;
- `next.config.ts`: configuração do Next.js;
- `TESTS.md`: roteiro de testes manuais e checklist de QA.

## Padrões de código

> **Nota:** Este padrão foi aplicado ao projeto atual como prova de conceito. Como o `page.tsx` é boilerplate do `create-next-app` e será removido pela Issue #6, nenhum componente foi extraído nesta issue para evitar conflito. A formatação (Prettier) foi aplicada a todo o código.

### Colocation: onde colocar cada componente

Para pagina, Exemplo; 

```
app/
  soujunior/
    page.tsx
    page.module.css
```

Para  componente, Exemplo; 

```
components/
  Button/
    Button.tsx
    Button.module.css
```

### Nomenclatura

| Tipo                  | Convenção    | Exemplo                               |
| --------------------- | ------------ | ------------------------------------- |
| Arquivos e diretórios | `kebab-case` | `user-card.tsx`, `format-currency.ts` |
| Componentes React     | `PascalCase` | `export function DonationForm() {}`   |
| Funções e variáveis   | `camelCase`  | `const userName = "Michael"`          |
| Constantes            | `camelCase`  | `const maxDonationAmount = 1000`      |
| Tipos e interfaces    | `PascalCase` | `type Donation = { amount: number }`  |

**Exemplo real:**

```tsx
// Arquivo: donation-card.tsx
export function DonationCard() {
  return <article>...</article>;
}
```

> Arquivo em `kebab-case`, componente em `PascalCase`.

Evite nomes como `UserCard.tsx`, `user_card.tsx` ou `userCard.tsx`.

### Imports

Ordem consistente:

1. Módulos nativos (`react`, `next`)
2. Bibliotecas externas
3. Imports internos com `@/`
4. Imports relativos
5. Estilos

**Exemplo:**

```tsx
import { useState } from "react";
import Image from "next/image";

import { Header } from "@/components/header";
import { formatCurrency } from "@/utils/format-currency";

import styles from "./page.module.css";
```

**Sempre use o alias `@/`** em vez de caminhos relativos longos
(`../../../components/header`). Ele está configurado em `tsconfig.json`:

```json
"paths": { "@/*": ["./src/*"] }
```

### Estilização

O projeto usa **CSS Modules**:

- Cada componente tem seu próprio `*.module.css` ao lado;
- Classes em `camelCase`: `.header`, `.navigationItem`;
- `globals.css` contém apenas estilos globais (reset, variáveis, `body`).

## Boas práticas

Princípios gerais que orientam o desenvolvimento do projeto:

- **Evitar duplicação.** Se o mesmo código aparece em dois lugares, extraia para um utilitário ou componente compartilhado.
- **Evitar componentes gigantes.** Se um componente passa de ~150 linhas ou acumula responsabilidades demais, divida em partes menores.
- **Evitar abstrações prematuras.** Só crie um componente, hook ou utilitário quando houver **necessidade real** — não porque "pode ser útil algum dia".
- **Reutilizar quando houver necessidade real.** Componentes compartilhados ficam em `src/components/`. Componentes específicos de uma rota ficam próximos dela em `_components/`.
- **Manter responsabilidades claras.** Cada arquivo deve ter um propósito único e bem definido.
- **Utilizar TypeScript adequadamente.** Prefira tipos explícitos nas interfaces públicas. Evite `any` sem justificativa.
- **Preferir imports absolutos com `@/`.** Evita caminhos relativos longos e facilita mover arquivos de lugar.

## Formatação de código

O projeto usa [Prettier](https://prettier.io/) para padronizar a formatação.

Antes de abrir um pull request, execute:

```bash
npm run format
```

Para verificar sem alterar arquivos:

```bash
npm run format:check
```

O Prettier ignora automaticamente as pastas listadas em `.prettierignore`
(`node_modules`, `.next`, `out`, `build`, `coverage`).

## Contribuição

1. Crie uma branch descritiva a partir da `main`, por exemplo:
   `feat/nova-secao` ou `fix/ajuste-responsividade`.
2. Faça alterações pequenas e focadas.
3. Use mensagens de commit no padrão Conventional Commits, como
   `feat: adiciona secao de impacto` ou `docs: atualiza instrucoes`.
4. Execute `npm run lint` e `npm run format:check` antes de abrir o PR.
5. Abra um pull request descrevendo o problema, a solução e os testes
   realizados.

## Atenção — Next.js 16

O projeto usa Next.js 16.3.5. Há mudanças importantes em relação às versões
anteriores:

- `params`, `searchParams`, `cookies()` e `headers()` agora são **assíncronos**.
  Sempre use `await`;
- `middleware.ts` foi **depreciado** em favor de `proxy.ts`;
- Rotas paralelas exigem `default.tsx` explícito.

**Não é necessário migrar nada agora.** O time só precisa estar ciente dessas
mudanças ao escrever código novo.

## Testes e QA [ATUALIZAR PÓS-DESENVOLVIMENTO]

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
Após a execução dos testes, atualizar esta seção com o status dos cenários
manuais e os resultados relevantes de acessibilidade, performance e conversão.

## Critérios de aceite do escopo [ATUALIZAR PÓS-DESENVOLVIMENTO]

A página será considerada pronta quando:

- o visitante entender o propósito da iniciativa em até 5 segundos no hero;
- o CTA de doação estiver visível sem exigir a rolagem completa da página;
- o redirecionamento para a página da SouJunior no Apoia.se funcionar;
- o carregamento ficar abaixo de 3 segundos em uma conexão 4G;
- o tracking de conversão estiver ativo e testado antes do lançamento.

O tracking deve medir a conversão de visitante em doador. A ferramenta e os
identificadores utilizados devem ser documentados quando forem definidos.
Após a validação, registrar aqui o status de cada critério e a data da
verificação.

## Deploy [ATUALIZAR PÓS-DESENVOLVIMENTO]

A hospedagem prevista no escopo é a [Vercel](https://vercel.com/), utilizando o
preset de [Next.js](https://nextjs.org/). O domínio inicial será o endereço
automático gerado pela Vercel; um domínio próprio poderá ser configurado
posteriormente.


# 🧪 Testes de Garantia de Qualidade (QA) — Landing Page SouJunior APOIA.se

Este repositório contém o planejamento, a documentação e a execução do plano de testes de QA para a **Landing Page do SouJunior APOIA.se**. 

O objetivo principal é garantir a qualidade da experiência do usuário, a responsividade móvel, a acessibilidade e a integridade funcional do fluxo de apoio/doação.

---

## 📌 Organização do Trabalho (3 Tasks do Projeto)

Para garantir uma cobertura completa de QA, o projeto foi dividido em 3 tarefas principais (*Tasks*):

### **Task 1: Planejamento & Mapeamento de Casos de Teste Manuais**
- Elaboração do checklist de testes cobrindo **Responsividade (Mobile-First)**, **Regras de Negócio/CTAs** e **Testes Não-Funcionais** (Acessibilidade WCAG e Performance em 4G).
- Criação e estruturação da planilha detalhada de casos de teste (`TC-01` ao `TC-11`).

### **Task 2: Execução Manual, Evidências e Reporte de Defeitos**
- Execução dos cenários em ambiente móvel e desktop.
- Coleta de evidências visuais dos testes aprovados e reprovados.
- Documentação e registro dos defeitos (*Bug Reports*) encontrados durante a homologação.

### **Task 3: Estruturação para Automação com Robot Framework (Futuro/Em andamento)**
- Mapeamento dos seletores (CSS/XPath) dos elementos da página.
- Escrita dos cenários de fumaça (*Smoke Tests*) e regressão utilizando sintaxe **BDD / Gherkin** com **Robot Framework + Browser Library**.

---

## 📊 Documentação e Planilha de Testes

Os testes manuais detalhados (com Passos de Execução, Resultados Esperados e Status) estão disponíveis na planilha do projeto:

- 📄 **Planilha de Testes Manuais:** [Acessar a Planilha / Documento de Testes](./docs/Plano_de_Testes_SouJunior.xlsx)
- 🐛 **Relatório de Bugs:** [Ver Relatório de Defeitos](./docs/BUGS.md)

---

## 🛠️ Ferramentas & Tecnologias Utilizadas

- **Testes Manuais & UX/UI:** Chrome DevTools (Emulação Mobile/Rede 4G)
- **Documentação de QA:** Planilhas (Excel) e Markdown
- **Acessibilidade & Performance:** WCAG e Google Lighthouse
- **Automação Web (Planejada):** Python 3.x + Robot Framework (Browser Library / Playwright)

---

## ⚙️ Como Executar os Testes Automatizados (Robot Framework)

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/inovacao-squad/soujunior-apoiase-landing
   cd soujunior-apoiase-landing

## Licença

Este projeto está licenciado sob a [MIT License](./LICENSE).
# soujunior-apoiase-landing
Projeto do Hackathon SouJunior: landing page de captação de apoiadores via Apoia.se
