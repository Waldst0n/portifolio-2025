import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-20 flex items-center justify-center p-4 md:mb-16 ">
      <nav>
        <ul className="flex gap-4 sm:gap-16  ">
          <li className=" transform transition-transform duration-200 hover:scale-125">
            <Link
              href="/"
              className="text-lg sm:text-lg font-semibold hover:text-blue-300"
            >
              Início
            </Link>
          </li>
          <li className=" transform transition-transform duration-200 hover:scale-125">
            <Link
              href="/experience"
              className="text-lg sm:text-lg font-semibold hover:text-blue-300"
            >
              Experiência
            </Link>
          </li>
          <li className=" transform transition-transform duration-200 hover:scale-125">
            <Link
              href="/projects"
              className="text-lg sm:text-lg font-semibold hover:text-blue-300 "
            >
              Projetos
            </Link>
          </li>
          <li className=" transform transition-transform duration-200 hover:scale-125">
            <a
              href="https://drive.google.com/file/d/12JaTHGQEhzzewOr56MBFiTZuBjbMxB63/view?usp=sharing"
              className="text-lg sm:text-lg font-semibold hover:text-blue-300  "
              target="_blank"
              rel="noopener noreferrer"
            >
              Currículo
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
