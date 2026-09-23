import { SITE } from "@/lib/site-config";

import { ArrowIcon, RocketIcon } from "./icons";
import styles from "./iniciativas-section.module.css";

/**
 * Props do slide.
 * O componente é "burro" de propósito: não conhece analytics, não
 * navega, não guarda estado. Toda a lógica de tracking vive no
 * componente pai (`IniciativasSection`), que passa o `onCtaClick`.
 */
type LabsSlideProps = {
  onCtaClick?: () => void;
};

/**
 * Slide "SouJunior Labs" do carrossel de iniciativas.
 *
 * Estrutura visual em dois blocos empilhados verticalmente:
 *  - `slideHead`   → título + subtítulo (topo, centralizado)
 *  - `problemBlock` → grid de 2 colunas (conteúdo + imagem) no desktop,
 *                     empilhado no mobile
 *
 * Não renderiza wrapper próprio (fragment `<>…</>`): quem cuida de
 * posicionamento 3D, `is-active` e `aria-hidden` é o `deckCard` do pai.
 */
export function LabsSlide({ onCtaClick }: LabsSlideProps) {
  return (
    <>
      <div className={styles.slideHead}>
        {/*
          Duas classes: `slideTitle` (estilo base comum aos dois slides)
          + `slideTitleLabs` (variante que só muda a cor do "marca-texto"
          em `.mark::after` — amarelo aqui, rosa no Talk).
        */}
        <h3 className={`${styles.slideTitle} ${styles.slideTitleLabs}`}>
          SouJunior <span className={styles.mark}>Labs</span>
          {/*
            Ícone decorativo (foguete). `aria-hidden` porque o texto
            "Labs" já carrega o significado — o ícone é enfeite.
          */}
          <span className={styles.slideIcon} aria-hidden="true">
            <RocketIcon />
          </span>
        </h3>
        <p className={styles.slideSub}>
          {/*
            `{" "}` no final de cada linha é necessário porque o JSX
            colapsa espaços em branco entre tags.
          */}
          Um projeto que visa <strong>acelerar a carreira</strong> através de{" "}
          <strong>projetos voluntários de livre iniciativa e participação</strong> —
          feito por quem quer construir{" "}
          {/*
            `accent` aplica o sublinhado colorido característico.
            No Talk, o mesmo estilo existe como `accent + accentPurple`.
          */}
          <span className={styles.accent}>repertório real</span> antes da primeira
          oportunidade.
        </p>
      </div>

      <div className={styles.problemBlock}>
        <div className={styles.problemContent}>
          <p className={styles.problemText}>
            Entrar na tecnologia não deveria depender de ter ou não uma{" "}
            {/*
              `em` = "emphasis" — palavra-chave com fundo amarelo via
              `::after` (efeito marca-texto). O z-index negativo do
              `::after` faz o highlight ficar atrás do texto.
            */}
            <span className={styles.em}>oportunidade</span>.
          </p>
          <p className={styles.problemSub}>
            Muita gente estuda, faz cursos e constrói habilidades de verdade — mas
            esbarra na mesma barreira: a falta de experiência prática. Sem repertório,
            fica difícil dar o primeiro passo.
          </p>
          {/*
            CTA como `<a>` (navega pra fora do site). Precisa de:
              - `target="_blank"`  → abre em nova aba
              - `rel="noopener noreferrer"` → mitigação de tabnabbing +
                evita vazar Referer
              - `onClick={onCtaClick}` → callback do pai (tracking).
                Não previne default — a navegação acontece normalmente.

            URL vem de `SITE.labsUrl` (lib/site-config.ts), não é
            hardcoded aqui. Trocar o destino = mudar 1 linha na config.
          */}
          <a
            href={SITE.labsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.problemCta}
            onClick={onCtaClick}
          >
            Quero fazer parte da Labs <ArrowIcon />
          </a>
        </div>
        <div className={styles.problemVisual}>
          {/*
            Imagem ilustrativa. `alt` descreve o que aparece (não "imagem
            de…"), `loading="lazy"` adia o download até chegar perto.
            Dívida: hoje é hot-link do Unsplash — migrar para /public
            ou CMS em produção.
          */}
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.1.1&auto=format&fit=crop&w=900&q=80"
            alt="Pessoa refletindo sobre carreira"
            loading="lazy"
          />
          <span className={styles.tag}>✦ a barreira</span>
        </div>
      </div>
    </>
  );
}