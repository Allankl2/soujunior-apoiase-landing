"use client";

import { useEffect, useState, type KeyboardEvent } from "react";

import styles from "./cookie-consent.module.css";

const COOKIE_CONSENT_KEY = "soujunior-cookie-consent";

type CookieConsentValue = "accepted" | "rejected";

const saveConsent = (value: CookieConsentValue): void => {
  localStorage.setItem(COOKIE_CONSENT_KEY, value);
};

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (storedConsent) return;

    const id = setTimeout(() => setIsVisible(true), 0);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  const handleConsent = (value: CookieConsentValue): void => {
    saveConsent(value);
    setIsVisible(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "Escape") {
      handleConsent("rejected");
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      onKeyDown={handleKeyDown}
    >
      <div className={styles.backdrop} />

      <section className={styles.modal}>
        <div className={styles.icon} aria-hidden="true">
          <svg
            className={styles.iconSvg}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.5 25.2C37.2 25.8 35.7 26.1 34.2 26.1C28.3 26.1 23.5 21.3 23.5 15.4C23.5 13.9 23.8 12.4 24.4 11.1C23.6 10.9 22.8 10.8 22 10.8C13.5 10.8 6.6 17.7 6.6 26.2C6.6 34.7 13.5 41.6 22 41.6C30.5 41.6 37.4 34.7 37.4 26.2C37.4 25.9 37.4 25.5 37.4 25.2H38.5Z"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="16" cy="27" r="2" fill="currentColor" />
            <circle cx="23" cy="34" r="2" fill="currentColor" />
            <circle cx="13" cy="34" r="1.5" fill="currentColor" />
            <circle cx="18" cy="20" r="1.5" fill="currentColor" />
            <circle cx="31" cy="17" r="1.5" fill="currentColor" />
          </svg>
        </div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>Sua privacidade importa</span>

          <h2 className={styles.title} id="cookie-consent-title">
            Podemos usar cookies?
          </h2>

          <p className={styles.description} id="cookie-consent-description">
            Utilizamos cookies para melhorar sua experiência, entender como
            nosso site é utilizado e tornar a navegação mais eficiente. Você
            pode aceitar ou recusar os cookies não essenciais.
          </p>

          <div className={styles.actions}>
            <button
              className={`${styles.button} ${styles.buttonSecondary}`}
              type="button"
              onClick={() => handleConsent("rejected")}
            >
              Recusar
            </button>

            <button
              className={`${styles.button} ${styles.buttonPrimary}`}
              type="button"
              onClick={() => handleConsent("accepted")}
            >
              Aceitar cookies
              <span className={styles.buttonArrow} aria-hidden="true">
                →
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
