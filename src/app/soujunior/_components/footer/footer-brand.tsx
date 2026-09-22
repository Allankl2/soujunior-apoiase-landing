import Image from "next/image";

import styles from "./footer-brand.module.css";

/**
 * Logo branca da SouJunior, exibida no bloco esquerdo do Footer.
 * A logo já é branca por padrão (arquivo `logobranco.png`), então
 * não precisa de filtro CSS.
 */
export function FooterBrand() {
  return (
    <div className={styles.brand}>
      <Image
        src="/logobranco.png"
        alt="SouJunior Instituto"
        width={160}
        height={30}
        className={styles.logo}
      />
    </div>
  );
}
