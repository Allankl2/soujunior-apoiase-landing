# soujunior-apoiase-landing
Projeto do Hackathon SouJunior: landing page de captação de apoiadores via Apoia.se

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
