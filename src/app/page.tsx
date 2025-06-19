"use client";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="w-full flex items-center justify-center p-8 ">
      <main
        className={`flex flex-col md:flex-row items-center justify-center w-full h-full gap-12 transition-opacity duration-1000 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <Card className="min-w-76 flex flex-col justify-around max-h-[800px] bg-[url('/background-card.png')] bg-no-repeat bg-cover bg-bottom border-0 shadow-xl color-background">
          <CardHeader className="flex flex-col items-center justify-center">
            <Image
              src="https://avatars.githubusercontent.com/u/123845800?v=4"
              alt={"Imagemd eperfil"}
              width={150}
              height={150}
              className="rounded-full"
            />
            <CardTitle className="flex flex-col items-center justify-center">
              <h1 className="text-background text-center text-3xl font-bold">
                Waldston Santana
              </h1>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <CardDescription className="text-background text-2xl text-center">
              Desenvolvedor Fullstack apaixonado por tecnologia e inovação.
            </CardDescription>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-center">
            <div className="flex gap-4">
              <a
                href="https://wa.me/5579988232693?text=Olá%2C+vim+pelo+seu+portfólio%21"
                className="text-background text-blue-300 hover:text-blue-500   transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={30} />
              </a>
              <a
                href="https://instagram.com/waldstonsantana"
                className="text-background text-blue-300 hover:text-blue-500   transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/waldston-santana/"
                className="text-background text-blue-300 hover:text-blue-500   transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://github.com/Waldst0n"
                className="text-background text-blue-300 hover:text-blue-500   transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </a>
            </div>
          </CardFooter>
        </Card>
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-2xl text-center md:text-start md:text-6xl lg:text-7xl font-extrabold leading-tight">
            DESENVOLVEDOR <span className="text-gray-500">FULLSTACK</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mt-4 text-justify">
            Sou um desenvolvedor FullStack apaixonado por criar soluções
            escaláveis e de alto desempenho. Tenho sólida experiência em React,
            React Native e Node.js, além de conhecimentos em bancos de dados.
            Trabalho com metodologias ágeis e possuo forte capacidade de
            colaborar de forma eficiente em equipes dinâmicas.
          </p>
          <div className="flex gap-8 mt-8">
            <div>
              <h3 className="text-4xl font-bold">+2</h3>
              <p>Anos de experiência</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">+40</h3>
              <p>Projetos no GitHub</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
