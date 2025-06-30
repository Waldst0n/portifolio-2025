"use client";

import React, { useEffect, useState } from "react";
import CardProjects from "../components/cardProjects";

const Projects = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="w-full flex items-center justify-center p-8 ">
      <main
        className={`flex flex-col  items-center justify-center  w-full h-full gap-12 transition-opacity duration-1000 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-[70px] text-center font-extrabold leading-none">
          PROJETOS EM <span className="text-gray-500">DESTAQUE</span>{" "}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-screen-xl">
          <CardProjects
            id="1"
            image="https://res.cloudinary.com/dkutgs8py/image/upload/v1751227934/smart-mini-mercado_aviaq3.png"
            title="Smart Minimercado"
            description="Projeto FullStack onde criei  do zero um app com React Native, um app web para o adminstrador com NextJs e uma Api com Express"
            technology={[
              "TypeScript",
              "Node",
              "Tailwind",
              "React",
              "Next.js",
              "Express",
              "PostgreSql",
            ]}
          />
          <CardProjects
            link=""
            id="2"
            image="https://res.cloudinary.com/dkutgs8py/image/upload/v1751227931/playnee_hruplb.png"
            title="Playnee - CRM"
            description="Trabalho atualmente com manutenção de um CRM onde desenvolvo diariamente novas features de um Sistema Web, e um App criado com React Native"
            technology={[
              "JavaScript",
              "TypeScript",
              "React",
              "Node",
              "PostgreSql",
              "Bootstrap",
              "AdonisJs",
            ]}
          />
          <CardProjects
            link=""
            id="3"
            image="https://res.cloudinary.com/dkutgs8py/image/upload/v1751227937/tinbolt_xh8vvy.png"
            title="Tinbolt - Plantaforma Educacional "
            description="Projeto FullStack onde criei  do zero um app com React Native, crio novas features diariamente em um aplicativo web e manutenção no back-end criado com AdonisJS"
            technology={[
              "JavaScript",
              "TypeScript",
              "React",
              "Node",
              "PostgreSql",
              "Bootstrap",
              "AdonisJs",
            ]}
          />
        </div>
      </main>
    </div>
  );
};

export default Projects;
