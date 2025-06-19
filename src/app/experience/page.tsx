"use client";

import React, { useEffect, useState } from "react";

const Experience = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="w-full flex  items-center justify-center p-8 ">
      <main
        className={`flex flex-col items-center justify-center w-full h-full gap-12 transition-opacity duration-1000 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className=" text-4xl md:text-[70px] text-center mb-2 font-extrabold leading-none">
          MEU <span className="text-gray-500">PERCURSO </span>{" "}
        </h1>

        <div className="flex flex-col md:text-justify gap-8">
          {/* Experiência Profissional */}
          <section>
            <h2 className="text-2xl font-bold mb-3">
              Experiência Profissional
            </h2>
            <ul className="text-lg list-disc list-inside space-y-2 pl-2">
              <li>
                Desenvolvedor Fullstack na Empresa Growbit{" "}
                <span className="text-gray-500">(2025 - Presente)</span>
              </li>
              <li>
                Professor na Empresa Bom Jesus{" "}
                <span className="text-gray-500">(2018 - 2024)</span>
              </li>
            </ul>
          </section>

          {/* Educação */}
          <section>
            <h2 className="text-2xl font-bold mb-3">Educação</h2>
            <ul className="text-lg list-disc list-inside space-y-2 pl-2">
              <li>
                Graduação em Pedagogia – Unopar
                <span className="text-gray-500">(2023 - 2025)</span>
              </li>
              <li>
                Graduação em Análise e Desenvolvimento de Sistemas – Faculdade
                Descomplica <span className="text-gray-500">(2020 - 2023)</span>
              </li>
              <li>
                Curso de Desenvolvimento nas Plataformas Alura, Udemy, entre
                outras.
              </li>
              <li>
                Mais detalhes sobre cursos em meu{" "}
                <a
                  href="https://www.linkedin.com/in/waldston-santana/details/certifications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </section>

          {/* Habilidades */}
          <section>
            <h2 className="text-2xl font-bold mb-3">Habilidades</h2>
            <ul className="text-lg list-disc list-inside space-y-2 pl-2">
              <li>
                <span className="font-semibold">Desenvolvimento Frontend:</span>{" "}
                <span className="text-gray-500">
                  React.js, React Native, Next.js, Html5, CSS3
                </span>
              </li>
              <li>
                <span className="font-semibold">Desenvolvimento Backend:</span>{" "}
                <span className="text-gray-500">
                  Node.js, Express.js, AdonisJs, PostgreSql
                </span>
              </li>
              <li>
                <span className="font-semibold">Controle de Versão: </span>
                <span className="text-gray-500">Git, GitHub</span>
              </li>
              <li>
                <span className="font-semibold">Metodologias Ágeis:</span>{" "}
                <span className="text-gray-500"> Scrum, Kanban</span>
              </li>
              <li>Comunicação e Trabalho em Equipe</li>
              <li>Resolução de Problemas e Pensamento Crítico</li>
              <li>Aprendizado Contínuo e Adaptação a Novas Tecnologias</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Experience;
