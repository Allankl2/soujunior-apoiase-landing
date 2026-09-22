
'use client';
import styles from './problem-section.module.css';

import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
    type CSSProperties,
    type TouchEvent,
    type MouseEvent,
} from 'react';

type SlideIndex = 0 | 1;

type Stat = {
    label: string;
    value?: number;
    prefix?: string;
    text?: string;
    deco: keyof typeof I;
};

const STATS: Stat[] = [
    {
        label: 'Voluntários ativos na comunidade',
        value: 120,
        prefix: '+',
        deco: 'users',
    },
    {
        label: 'Gratuito para quem participa',
        text: '100%',
        deco: 'gift',
    },
    {
        label: 'Ano de fundação do instituto',
        text: '2022',
        deco: 'flag',
    },
    {
        label: 'Propósito: abrir caminhos',
        text: '1',
        deco: 'compass',
    },
];

function track(
    eventName: string,
    data: Record<string, unknown> = {},
): void {
    if (typeof window === 'undefined') return;

    const browserWindow = window as typeof window & {
        dataLayer?: Record<string, unknown>[];
    };

    browserWindow.dataLayer = browserWindow.dataLayer ?? [];

    browserWindow.dataLayer.push({
        event: eventName,
        ...data,
    });
}

const I = {
    arrowLeft: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
        </svg>
    ),

    arrowRight: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    ),

    users: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    ),

    gift: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <rect x="3" y="8" width="18" height="4" rx="1" />
            <path d="M12 8v13" />
            <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
            <path d="M7.5 8a2.5 2.5 0 1 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 1 1 4.5-5 2.5 2.5 0 0 1 0 5" />
        </svg>
    ),

    flag: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" y1="22" x2="4" y2="15" />
        </svg>
    ),

    compass: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
    ),
};

function Counter({
    value,
    prefix = '',
}: {
    value: number;
    prefix?: string;
}) {
    const [displayValue, setDisplayValue] = useState(0);
    const elementRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const element = elementRef.current;

        if (!element) return;

        if (
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
            setDisplayValue(value);
            return;
        }

        let animationFrame = 0;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;

                observer.disconnect();

                const start = performance.now();

                const animate = (now: number) => {
                    const progress = Math.min((now - start) / 1600, 1);
                    const easedProgress =
                        1 - Math.pow(1 - progress, 3);

                    setDisplayValue(Math.round(value * easedProgress));

                    if (progress < 1) {
                        animationFrame = requestAnimationFrame(animate);
                    }
                };

                animationFrame = requestAnimationFrame(animate);
            },
            { threshold: 0.4 },
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
            cancelAnimationFrame(animationFrame);
        };
    }, [value]);

    return (
        <span ref={elementRef}>
            {prefix && <span className="pre">{prefix}</span>}
            {displayValue}
        </span>
    );
}

function LabsSlide() {
    return (
        <>
            <div className={styles.slideHead}>
                <h3 className={styles['slide-title']}>
                    SouJunior <span className={styles['mark']}>Labs</span>

                    <span className={styles['slide-icon']} aria-hidden="true">
                        🚀
                    </span>
                </h3>

                <p className={styles['slide-sub']}>
                    Um projeto que visa <strong>acelerar a carreira</strong>{' '}
                    através de{' '}
                    <strong>
                        projetos voluntários de livre iniciativa e participação
                    </strong>{' '}
                    — feito por quem quer construir{' '}
                    <span className={styles['accent']}>repertório real</span> antes da
                    primeira oportunidade.
                </p>
            </div>

            <div className={styles['problem-block']}>
                <div className={styles['problem-content']}>
                    <p className={styles['problem-text']}>
                        Entrar na tecnologia não deveria depender de ter ou não
                        uma <span className={styles['em']}  >oportunidade</span>.
                    </p>

                    <p className={styles['problem-sub']}>
                        Muita gente estuda, faz cursos e constrói habilidades de
                        verdade — mas esbarra na mesma barreira: a falta de
                        experiência prática. Sem repertório, fica difícil dar o
                        primeiro passo.
                    </p>

                    <a
                        href="https://soujunior.tech/labs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles['problem-cta']}
                        onClick={() =>
                            track('cta_clicked', { location: 'labs' })
                        }
                    >
                        Quero fazer parte da Labs{' '}
                        <span aria-hidden="true">→</span>
                    </a>
                </div>

                <div className={styles['problem-visual']}>
                    <img
                        src="/images/problem_team.jpg"
                        alt="Pessoas trabalhando juntas em um projeto"
                        loading="lazy"
                    />

                    <span className={styles['tag']}>✦ A barreira</span>
                </div>
            </div>
        </>
    );
}

function TalkSlide() {
    return (
        <>
            <div className={styles.slideHead}>
                <h3 className={styles['slide-title']}>
                    SouJunior <span className={styles['mark']}>Talk</span>

                    <span className={styles['slide-icon']} aria-hidden="true">
                        💬
                    </span>
                </h3>

                <p className={styles['slide-sub']}>
                    Se você está procurando uma maneira de{' '}
                    <strong>aprimorar seu inglês com pessoas reais</strong>,
                    temos uma excelente notícia! A SouJunior Talk é um{' '}
                    <span className={styles['accent']}>
                        ambiente de treino
                    </span>{' '}
                    que oferece uma plataforma interativa para você praticar
                    suas habilidades linguísticas.
                </p>
            </div>

            <div className={styles['talk-block']}>
                <span className={styles['talk-stamp']} aria-hidden="true">
                    EN
                </span>

                <div className={styles['talk-content']}>
                    <p className={styles['talk-title']}>
                        Falar inglês não deveria ser um{' '}
                        <span className={styles['em']}>privilégio</span>.
                    </p>

                    <p className={styles['talk-sub']}>
                        Muita gente entende gramática, mas trava na hora de falar.
                        A SouJunior Talk oferece um{' '}
                        <strong>ambiente seguro e interativo</strong> para
                        treinar conversação com pessoas reais, no seu ritmo e sem
                        julgamentos.
                    </p>

                    <a
                        href="https://talk.soujunior.tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles['talk-cta']}
                        onClick={() =>
                            track('cta_clicked', { location: 'talk' })
                        }
                    >
                        Quero praticar no Talk{' '}
                        <span aria-hidden="true">→</span>
                    </a>
                </div>

                <div className={styles['talk-cards']}>
                    <div className={styles['talk-card']}>
                        <span className={styles['talk-card-icon']}>💬</span>

                        <div className={styles['talk-card-body']}>
                            <div className={styles['talk-card-title']}>
                                Conversação real
                            </div>

                            <p className={styles['talk-card-desc']}>
                                Pratique com pessoas de verdade em encontros ao vivo,
                                sem pressão e no seu ritmo.
                            </p>
                        </div>
                    </div>

                    <div className={styles['talk-card']}>
                        <span className={styles['talk-card-icon']}>🎙</span>

                        <div className={styles['talk-card-body']}>
                            <div className={styles['talk-card-title']}>
                                Sem julgamentos
                            </div>

                            <p className={styles['talk-card-desc']}>
                                Ambiente acolhedor para errar, tentar de novo e ganhar
                                confiança para falar.
                            </p>
                        </div>
                    </div>

                    <div className={styles['talk-card']}>
                        <span className={styles['talk-card-icon']}>🌍</span>

                        <div className={styles['talk-card-body']}>
                            <div className={styles['talk-card-title']}>
                                Portas que se abrem
                            </div>

                            <p className={styles['talk-card-desc']}>
                                Inglês fluente amplia seu alcance no mercado de
                                tecnologia e no mundo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function ProblemSection() {
    const [current, setCurrent] = useState<SlideIndex>(0);
    const [paused, setPaused] = useState(false);
    const [dragging, setDragging] = useState(false);
    const [dragX, setDragX] = useState(0);

    const dragStart = useRef<number | null>(null);

    const total = 2;

    const goTo = useCallback((index: SlideIndex) => {
        setCurrent(index);
        setDragX(0);
        track('carousel_change', { slide: index });
    }, []);

    const next = useCallback(() => {
        setCurrent((value) => {
            const nextIndex: SlideIndex = value === 0 ? 1 : 0;

            track('carousel_change', { slide: nextIndex });

            return nextIndex;
        });

        setDragX(0);
    }, []);

    const previous = useCallback(() => {
        setCurrent((value) => {
            const previousIndex: SlideIndex = value === 0 ? 1 : 0;

            track('carousel_change', { slide: previousIndex });

            return previousIndex;
        });

        setDragX(0);
    }, []);

    useEffect(() => {
        if (paused || dragging) return;

        const timer = window.setInterval(() => {
            setCurrent((value) => (value === 0 ? 1 : 0));
        }, 7000);

        return () => window.clearInterval(timer);
    }, [paused, dragging]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') previous();
            if (event.key === 'ArrowRight') next();
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [next, previous]);

    const onDragStart = (clientX: number) => {
        dragStart.current = clientX;
        setDragging(true);
    };

    const onDragMove = (clientX: number) => {
        if (dragStart.current === null) return;
        setDragX(clientX - dragStart.current);
    };

    const onDragEnd = () => {
        if (dragStart.current === null) {
            setDragging(false);
            return;
        }

        if (Math.abs(dragX) > 50) {
            if (dragX < 0) {
                next();
            } else {
                previous();
            }
        }

        setDragX(0);
        setDragging(false);
        dragStart.current = null;
    };

    const getCardStyle = (index: SlideIndex): CSSProperties => {
        const difference = index - current;

        if (difference === 0) {
            return {
                position: 'relative',
                transform: `translateX(${dragX}px) translateZ(0) rotateY(0deg) rotateZ(0deg) scale(1)`,
                opacity: 1,
                visibility: 'visible',
                pointerEvents: 'auto',
                filter: 'blur(0)',
                zIndex: 10,
                transition: dragging ? 'none' : undefined,
            };
        }

        return {
            position: 'absolute',
            transform:
                difference < 0
                    ? 'translateX(-38%) translateZ(-280px) rotateY(20deg) rotateZ(-3deg) scale(.85)'
                    : 'translateX(38%) translateZ(-280px) rotateY(-20deg) rotateZ(3deg) scale(.85)',
            opacity: 0,
            visibility: 'hidden',
            pointerEvents: 'none',
            filter: 'blur(3px)',
            zIndex: 1,
            transition: dragging ? 'none' : undefined,
        };
    };

    const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
        onDragStart(event.clientX);
    };

    const handleMouseMove = (
        event: MouseEvent<HTMLDivElement>,
    ) => {
        if (dragging) onDragMove(event.clientX);
    };

    const handleTouchStart = (
        event: TouchEvent<HTMLDivElement>,
    ) => {
        onDragStart(event.touches[0].clientX);
    };

    const handleTouchMove = (
        event: TouchEvent<HTMLDivElement>,
    ) => {
        onDragMove(event.touches[0].clientX);
    };

    return (
        <section id="iniciativas" className={styles.sec}>
            <div className={styles.wrap}>
                <div className={styles['sec-head']}>
                    <span className={styles['label']}>O problema</span>
                </div>

                <p className={styles['problem-statement']}>
                    Não é só sobre aprender tecnologia.{' '}
                    <span className={styles['hl']}>
                        É sobre estar preparado para a próxima oportunidade.
                    </span>
                </p>

                <div className={styles['labs-block']}>
                    <span
                        className={`${styles.labsDoodle} ${styles.doodleStar} ${styles.s1}`}
                        aria-hidden="true"
                    >
                        ✦
                    </span>

                    <span
                        className={`${styles.labsDoodle} ${styles.doodleStar} ${styles.s2}`}
                        aria-hidden="true"
                    >
                        ✦
                    </span>

                    <span
                        className={`${styles.labsDoodle} ${styles.doodleStar} ${styles.s3}`}
                        aria-hidden="true"
                    >
                        ✦
                    </span>

                    <span
                        className={`${styles.labsDoodle} ${styles.doodleStar} ${styles.s4}`}
                        aria-hidden="true"
                    >
                        ✦
                    </span>

                    <div className={styles['labs-response']}>
                        <span className={styles['sticker']}>
                            <span className={styles['dot']} />
                            Nossa resposta
                        </span>
                    </div>

                    <div
                        className={styles['carousel-wrapper']}
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => {
                            setPaused(false);
                            onDragEnd();
                        }}
                    >
                        <button
                            type="button"
                            className={`${styles.carouselArrow} ${styles.next}`}
                            onClick={next}
                            aria-label="Próximo slide"
                        >
                            <I.arrowRight suppressHydrationWarning />
                        </button>

                        <div
                            className={styles['deck-stage']}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={onDragEnd}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={onDragEnd}
                        >
                            <div
                                className={`${styles['deck-card']} ${current === 0 ? styles['is-active'] : ''}`}
                                style={getCardStyle(0)}
                                aria-hidden={current !== 0}
                            >
                                <LabsSlide />
                            </div>

                            <div
                                className={`${styles['deck-card']} ${current === 1 ? styles['is-active'] : ''}`}
                                style={getCardStyle(1)}
                                aria-hidden={current !== 1}
                            >
                                <TalkSlide />
                            </div>
                        </div>

                        <button
                            type="button"
                            className={`${styles.carouselArrow} ${styles.prev}`}
                            onClick={previous}
                            aria-label="Slide anterior"
                        >
                            <I.arrowLeft suppressHydrationWarning />
                        </button>
                    </div>

                    <div
                        className={styles['carousel-dots']}
                        role="tablist"
                        aria-label="Navegação do carrossel"
                    >
                        <button
                            type="button"
                            className={`${styles['carousel-dot']} ${current === 0 ? styles['active'] : ''} ${paused ? styles['paused'] : ''}`}
                            onClick={() => goTo(0)}
                            aria-label="Ir para SouJunior Labs"
                            aria-selected={current === 0}
                            role="tab"
                        />

                        <button
                            type="button"
                            className={`${styles['carousel-dot']} ${current === 1 ? styles['active'] : ''} ${paused ? styles['paused'] : ''}`}
                            onClick={() => goTo(1)}
                            aria-label="Ir para SouJunior Talk"
                            aria-selected={current === 1}
                            role="tab"
                        />
                    </div>
                </div>

                <div className={styles.statsInline}>
                    <div className={styles.statsGrid}>
                        {STATS.map((stat, index) => (
                            <article className={styles.statCard} key={stat.label}>
                                <div className={styles.statCardTop}>
                                    <span className={styles.statKicker}>
                                        0{index + 1} / 04
                                    </span>

                                    <span className={styles.statDeco} aria-hidden="true">
                                        {React.createElement(I[stat.deco])}
                                    </span>
                                </div>

                                <div className={styles.statCardNum}>
                                    {stat.value !== undefined ? (
                                        <Counter
                                            value={stat.value}
                                            prefix={stat.prefix}
                                        />
                                    ) : (
                                        stat.text
                                    )}
                                </div>

                                <p className="stat-card-label">{stat.label}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );

}

