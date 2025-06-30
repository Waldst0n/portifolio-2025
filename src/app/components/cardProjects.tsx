"use client";

import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

import { CardProjectsProps } from "@/types/types";

import Image from "next/image";
import Link from "next/link";
import { DiPostgresql } from "react-icons/di";

const technologyIcons = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  Tailwind: SiTailwindcss,
  Express: SiExpress,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Node: FaNodeJs,
  PostgreSql: DiPostgresql,
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
    <div className="  flex  flex-col p-4 shadow-sm hover:shadow-md shadow-gray-500 border-gray-500  mt-9 items-start text-gray justify-center rounded-lg gap-2 w-full h-auto transition-all hover:bg-gray hover:text-white">
      <div className="flex w-full items-center justify-between gap-16">
        <div className="  flex flex-col  p-4 gap-2">
          <div>
            <h3 className="text-4xl text-gray-500 font-bold">
              {title?.toUpperCase()}
            </h3>
            <p className="text-lg my-4 ">{description}</p>
          </div>
          <Link
            className=" flex  items-center justify-center rounded-md bg-white text-gray-500 w-32 h-12 font-bold transition-all hover:text-blue-500"
            href={`/projectDetails/${id}`}
          >
            Acesse aqui
          </Link>
        </div>
        <div className="hidden lg:flex">
          <Image
            src={image ?? "/default-image.png"}
            width={150}
            className="rounded-lg min-w-[150px] min-h-[150px] object-cover"
            height={150}
            alt="Images from projects"
          />
        </div>
      </div>
      <div className="flex px-4 w-full flex-wrap gap-2 items-center ">
        {technology?.map((tech, index) => {
          const Icon = technologyIcons[tech as TechnologyKey];
          return Icon ? (
            <span key={index} className="text-2xl mr-2" title={tech}>
              <Icon size={30} className="cursor-pointer" />
            </span>
          ) : (
            <span key={index} className="text-sm text-gray-500">
              {tech}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default CardProjects;
