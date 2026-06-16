"use client";

import React, { useEffect, useState } from "react";
import {
  Briefcase,
  Code2,
  GraduationCap,
  Server,
  Users,
  Wrench,
} from "lucide-react";

type TimelineEntry = {
  period: string;
  title: string;
  subtitle?: string;
  description?: string;
  current?: boolean;
};

const experiences: TimelineEntry[] = [
  {
    period: "2024 — Atual",
    title: "Desenvolvedor Fullstack",
    subtitle: "Growbit",
    description:
      "Desenvolvimento e manutenção de aplicações web e mobile com React, React Native e Node.js, atuando do back-end ao front-end.",
    current: true,
  },
  {
    period: "2018 — 2024",
    title: "Professor",
    subtitle: "Bom Jesus",
    description:
      "Ensino e formação de estudantes, aprimorando didática, comunicação e organização.",
  },
];

const education: TimelineEntry[] = [
  {
    period: "2026 — Atual",
    title: "Pós-graduação em Data Science",
    subtitle: "Faculdade Descomplica",
    description:
      "Aprofundamento em ciência de dados, análise estatística e machine learning.",
    current: true,
  },
  {
    period: "2023 — 2025",
    title: "Análise e Desenvolvimento de Sistemas",
    subtitle: "Faculdade Descomplica",
  },
  {
    period: "2020 — 2023",
    title: "Graduação em Pedagogia",
    subtitle: "Unopar",
  },
  {
    period: "Contínuo",
    title: "Cursos de Desenvolvimento",
    subtitle: "Alura, Udemy e outras plataformas",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    Icon: Code2,
    items: ["React.js", "React Native", "Next.js", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    Icon: Server,
    items: ["Node.js", "Express.js", "AdonisJs", "PostgreSQL"],
  },
  {
    title: "Ferramentas & Metodologias",
    Icon: Wrench,
    items: ["Git", "GitHub", "Scrum", "Kanban"],
  },
  {
    title: "Competências",
    Icon: Users,
    items: [
      "Comunicação",
      "Trabalho em equipe",
      "Resolução de problemas",
      "Pensamento crítico",
      "Aprendizado contínuo",
      "Adaptação a novas tecnologias",
    ],
  },
];

function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <ol>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <li key={index} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-primary ring-4 ring-card" />
              {!isLast && <span className="w-px flex-1 bg-border" />}
            </div>
            <div className={isLast ? "" : "pb-7"}>
              <span
                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                  item.current
                    ? "border-primary/30 bg-primary/10 text-primary"
                    : "border-border bg-muted text-muted-foreground"
                }`}
              >
                {item.period}
              </span>
              <h3 className="mt-2 font-semibold leading-snug">{item.title}</h3>
              {item.subtitle && (
                <p className="text-sm font-medium text-primary">
                  {item.subtitle}
                </p>
              )}
              {item.description && (
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

const Experience = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="w-full px-6 py-12 sm:py-16">
      <main
        className={`mx-auto max-w-5xl transition-all duration-700 ${
          show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        {/* Cabeçalho */}
        <header className="mb-12 text-center md:text-left">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Trajetória
          </p>
          <h1 className="mt-2 text-4xl font-extrabold leading-none md:text-6xl">
            MEU <span className="text-muted-foreground">PERCURSO</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:mx-0">
            Da sala de aula ao desenvolvimento de software — uma transição
            movida por curiosidade, disciplina e paixão por construir produtos.
          </p>
        </header>

        {/* Experiência + Formação */}
        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Briefcase size={20} />
              </span>
              <h2 className="text-xl font-bold">Experiência</h2>
            </div>
            <Timeline items={experiences} />
          </section>

          <section className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <GraduationCap size={20} />
              </span>
              <h2 className="text-xl font-bold">Formação</h2>
            </div>
            <Timeline items={education} />
            <a
              href="https://www.linkedin.com/in/waldston-santana/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex text-sm font-medium text-primary hover:underline"
            >
              Ver todas as certificações no LinkedIn →
            </a>
          </section>
        </div>

        {/* Habilidades */}
        <h2 className="mb-6 mt-14 text-2xl font-bold">Habilidades</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map(({ title, Icon, items }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon size={18} />
                </span>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-muted px-3 py-1 text-sm text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Experience;
