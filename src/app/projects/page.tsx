"use client";

import React, { useEffect, useState } from "react";
import CardProjects from "../components/cardProjects";
import { projetos } from "../utils/projectsData";

const Projects = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="w-full px-6 py-12 sm:py-16">
      <main
        className={`mx-auto max-w-6xl transition-all duration-700 ${
          show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        {/* Cabeçalho */}
        <header className="mb-12 text-center md:text-left">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Portfólio
          </p>
          <h1 className="mt-2 text-4xl font-extrabold leading-none md:text-6xl">
            PROJETOS EM{" "}
            <span className="text-muted-foreground">DESTAQUE</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:mx-0">
            Uma seleção de produtos que desenvolvi do back-end ao front-end,
            entre aplicações web e mobile em produção.
          </p>
        </header>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projetos.map((projeto) => (
            <CardProjects
              key={projeto.id}
              id={projeto.id}
              image={projeto.thumbnail}
              title={projeto.title}
              description={projeto.description}
              technology={projeto.technology}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
