"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaNodeJs, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const socialLinks = [
  {
    href: "https://wa.me/5579988232693?text=Olá%2C+vim+pelo+seu+portfólio%21",
    label: "WhatsApp",
    Icon: FaWhatsapp,
  },
  {
    href: "https://www.linkedin.com/in/waldston-santana/",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  {
    href: "https://github.com/Waldst0n",
    label: "GitHub",
    Icon: FaGithub,
  },
  {
    href: "https://instagram.com/waldstonsantana",
    label: "Instagram",
    Icon: FaInstagram,
  },
];

const techStack = [
  { label: "React", Icon: SiReact },
  { label: "React Native", Icon: SiReact },
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "TypeScript", Icon: SiTypescript },
  { label: "Node.js", Icon: FaNodeJs },
  { label: "PostgreSQL", Icon: SiPostgresql },
  { label: "Tailwind", Icon: SiTailwindcss },
];

const stats = [
  { value: "+2", label: "Anos de experiência", href: "/experience" },
  {
    value: "+40",
    label: "Projetos no GitHub",
    href: "https://github.com/Waldst0n",
  },
  { value: "3", label: "Produtos em produção", href: "/projects" },
];

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="relative w-full overflow-x-clip px-6">
      {/* Brilho decorativo de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
      />

      <main
        className={`mx-auto max-w-3xl transition-all duration-700 ${
          show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        {/* HERO — ocupa a altura da viewport */}
        <section className="flex min-h-[calc(100svh-7rem)] flex-col">
          <div className="flex flex-1 flex-col items-center justify-center pt-8 text-center">
            {/* Badge de disponibilidade */}
            <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm font-medium text-muted-foreground">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              Disponível para novos projetos
            </span>

            {/* Avatar com anel gradiente */}
            <div className="mb-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-800 p-1 shadow-lg">
              <Image
                src="https://avatars.githubusercontent.com/u/123845800?v=4"
                alt="Foto de Waldston Santana"
                width={140}
                height={140}
                className="rounded-full border-4 border-background"
                priority
              />
            </div>

            {/* Headline */}
            <p className="text-lg text-muted-foreground">Olá, eu sou</p>
            <h1 className="mt-1 text-5xl font-extrabold tracking-tight sm:text-6xl">
              Waldston Santana
            </h1>
            <h2 className="mt-3 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
              Desenvolvedor Fullstack
            </h2>

            {/* Tagline */}
            <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
              Apaixonado por criar soluções escaláveis e de alto desempenho.
              Tenho sólida experiência em{" "}
              <strong className="text-foreground">React</strong>,{" "}
              <strong className="text-foreground">React Native</strong> e{" "}
              <strong className="text-foreground">Node.js</strong>,
              transformando ideias em produtos reais com metodologias ágeis.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
              >
                Ver projetos
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://drive.google.com/file/d/1cuz8ZDQ0ncwpHHWALx5WXy6uFgOQPd-6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border px-6 font-semibold text-foreground transition-colors hover:bg-muted"
              >
                <Download size={18} />
                Currículo
              </a>
            </div>

            {/* Redes sociais */}
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:scale-110 hover:border-primary/40 hover:text-primary"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Indicador de rolagem */}
          <a
            href="#mais"
            aria-label="Ver mais conteúdo"
            className="mb-6 flex flex-col items-center gap-2 self-center text-muted-foreground transition-colors hover:text-primary"
          >
            <span className="text-xs font-medium uppercase tracking-widest">
              Role para ver mais
            </span>
            <ChevronDown size={20} className="animate-bounce" />
          </a>
        </section>

        {/* MAIS — stack e estatísticas */}
        <section id="mais" className="scroll-mt-24 pb-20 pt-4">
          {/* Stack tecnológica */}
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Stack principal
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
              {techStack.map(({ label, Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-card-foreground"
                >
                  <Icon className="text-primary" size={16} />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Estatísticas */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map(({ value, label, href }) => {
              const isExternal = href.startsWith("http");
              const content = (
                <>
                  <h3 className="text-4xl font-extrabold text-foreground">
                    {value}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                </>
              );
              const className =
                "flex flex-col items-center rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-md";
              return isExternal ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {content}
                </a>
              ) : (
                <Link key={label} href={href} className={className}>
                  {content}
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
