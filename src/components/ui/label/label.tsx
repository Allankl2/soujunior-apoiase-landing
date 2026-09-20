import type { ReactNode } from "react";

import styles from "./label.module.css";

type LabelProps = {
  children: ReactNode;
  className?: string;
};

export function Label({ children, className }: LabelProps) {
  const classes = [styles.label, className].filter(Boolean).join(" ");
  return <span className={classes}>{children}</span>;
}
