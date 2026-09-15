# Planilha de Testes Manuais & Checklist de QA

**Projeto:** Landing Page Apoia.se — SouJunior  
**Versão:** 1.0 (Planejamento de Pré-Lançamento)[cite: 1]  
**Status do Projeto:** Aguardando ambiente de Staging / Preview

---

## 1. Testes de Responsividade & UX/UI (Mobile-First)

| ID        | Seção / Componente | Cenário de Teste                     | Passos de Execução                                                                                          | Resultado Esperado                                                                        | Status               |
| :-------- | :----------------- | :----------------------------------- | :---------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------- | :------------------- |
| **TC-01** | Hero Section       | Exibição _Above the Fold_[cite: 1]   | 1. Carregar a página em mobile (360px/375px)[cite: 1].<br>2. Verificar elementos sem rolar a tela[cite: 1]. | O título principal e o botão "Doar agora" ficam visíveis sem rolar a página[cite: 1].     | [ ] Pass<br>[ ] Fail |
| **TC-02** | Layout Geral       | Ausência de Rolagem Lateral[cite: 1] | 1. Redimensionar o navegador para 320px, 375px e 768px.<br>2. Fazer rolagem vertical.                       | Não existe barra de rolagem horizontal; elementos ajustam a largura sem quebrar[cite: 1]. | [ ] Pass<br>[ ] Fail |
| **TC-03** | Menu / Header      | Navegação Mobile                     | 1. Abrir a página em celular.<br>2. Clicar no menu hambúrguer.                                              | O menu expande suavemente com opções visíveis e botões fáceis de tocar.                   | [ ] Pass<br>[ ] Fail |

---

## 2. Testes Funcionais & Regras de Negócio

| ID        | Seção / Componente | Cenário de Teste                      | Passos de Execução                                                                                               | Resultado Esperado                                                                               | Status               |
| :-------- | :----------------- | :------------------------------------ | :--------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- | :------------------- |
| **TC-04** | CTAs Principais    | Redirecionamento do Apoia.se[cite: 1] | 1. Clicar nos botões "Doar agora" (Hero, Meio e Rodapé)[cite: 1].                                                | Todos os CTAs abrem a página oficial do Apoia.se da SouJunior em nova aba (`target="_blank"`).   | [ ] Pass<br>[ ] Fail |
| **TC-05** | CTA Secundário     | Captura de Contato[cite: 1]           | 1. Rolar até a opção "Conhecer o programa"[cite: 1].<br>2. Clicar no botão[cite: 1].                             | Direciona para o formulário de captura ou área institucional sem erro[cite: 1].                  | [ ] Pass<br>[ ] Fail |
| **TC-06** | Form de Doação     | Opções de Pagamento[cite: 1]          | 1. Selecionar os valores (R$ 50, valor livre)[cite: 1].<br>2. Verificar botões de Pix, Cartão e Débito[cite: 1]. | Os seletores alternam os valores e exibem as opções de Pix, Cartão e Débito Recorrente[cite: 1]. | [ ] Pass<br>[ ] Fail |
| **TC-07** | Transparência      | Card de Impacto Social[cite: 1]       | 1. Rolar até a seção "Como a doação é usada"[cite: 1].                                                           | Exibe claramente o comparativo "R$ 50 = 1 mês de curso para 1 jovem"[cite: 1].                   | [ ] Pass<br>[ ] Fail |
| **TC-08** | Rodapé             | Validação de Links Sociais[cite: 1]   | 1. Rolar até o rodapé.<br>2. Clicar nos links de Discord, WhatsApp e GitHub.                                     | Todos os links abrem os canais oficiais corretos da comunidade SouJunior[cite: 1].               | [ ] Pass<br>[ ] Fail |

---

## 3. Testes Não-Funcionais (Acessibilidade & Performance)

| ID        | Seção / Componente | Cenário de Teste                  | Passos de Execução                                                                  | Resultado Esperado                                                           | Status               |
| :-------- | :----------------- | :-------------------------------- | :---------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- | :------------------- |
| **TC-09** | Acessibilidade     | Navegação por Teclado (WCAG)      | 1. Carregar a página.<br>2. Navegar usando apenas a tecla `Tab`.                    | O foco caminha ordenadamente por botões e links, mantendo contorno visível.  | [ ] Pass<br>[ ] Fail |
| **TC-10** | Acessibilidade     | Descrição de Imagens (`alt`)      | 1. Inspecionar as fotos e mídias da página.<br>2. Checar atributo `alt`.            | Todas as imagens institucionais possuem texto alternativo descritivo.        | [ ] Pass<br>[ ] Fail |
| **TC-11** | Performance        | Tempo de Carregamento 4G[cite: 1] | 1. Abrir Chrome DevTools (Aba _Network_).<br>2. Emular rede 4G e carregar[cite: 1]. | A página finaliza o carregamento completo em menos de 3,0 segundos[cite: 1]. | [ ] Pass<br>[ ] Fail |
