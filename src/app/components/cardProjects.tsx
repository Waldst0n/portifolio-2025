"use client";

import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiBootstrap,
  SiAdonisjs,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { ArrowRight } from "lucide-react";

import { CardProjectsProps } from "@/types/types";

import Image from "next/image";
import Link from "next/link";

const technologyIcons = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  Tailwind: SiTailwindcss,
  Express: SiExpress,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Node: FaNodeJs,
  PostgreSql: DiPostgresql,
  Bootstrap: SiBootstrap,
  AdonisJs: SiAdonisjs,
} as const;

type TechnologyKey = keyof typeof technologyIcons;

const CardProjects = ({
  image,
  title,
  description,
  technology,
  id,
}: CardProjectsProps) => {
  return (
    <Link
      href={`/projectDetails/${id}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        {/* Fundo ambiente desfocado, gerado do próprio logo */}
        <Image
          src={image ?? "/default-image.png"}
          alt=""
          aria-hidden
          fill
          className="scale-110 object-cover opacity-40 blur-2xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Logo do projeto, inteiro e centralizado */}
        <Image
          src={image ?? "/default-image.png"}
          alt={`Logo do projeto ${title}`}
          fill
          className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {technology?.map((tech, index) => {
            const Icon = technologyIcons[tech as TechnologyKey];
            return (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {Icon && <Icon size={13} />}
                {tech}
              </span>
            );
          })}
        </div>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-primary">
          Ver detalhes
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
};

export default CardProjects;
