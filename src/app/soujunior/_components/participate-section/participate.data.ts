export type RoleIconKey = "rocket" | "shield" | "globe" | "chat";

export type Role = {
  id: string;
  num: string;
  title: string;
  description: string;
  tag: string;
  icon: RoleIconKey;
};

// TODO: trocar quando o link definitivo do formulário for definido
export const PARTICIPATE_FORM_URL = "https://forms.gle/seu-formulario-aqui";

export const ROLES: Role[] = [
  {
    id: "junior",
    num: "01",
    title: "Júnior",
    description:
      "Está começando na tecnologia e quer ganhar experiência real participando de projetos de verdade.",
    tag: "vagas abertas",
    icon: "rocket",
  },
  {
    id: "mentor",
    num: "02",
    title: "Mentor(a)",
    description:
      "Já atua no mercado e quer orientar, revisar código e desenvolver novos talentos.",
    tag: "vagas abertas",
    icon: "shield",
  },
  {
    id: "apoiador",
    num: "03",
    title: "Apoiador(a)",
    description:
      "Pode ajudar com divulgação, recrutamento, patrocínio ou conexões que abrem portas.",
    tag: "sempre aberto",
    icon: "globe",
  },
  {
    id: "head",
    num: "04",
    title: "Head",
    description:
      "Quer liderar squads, coordenar projetos e ajudar a construir a estratégia da comunidade.",
    tag: "vagas abertas",
    icon: "chat",
  },
];
