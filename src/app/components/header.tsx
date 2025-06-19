import React from "react";

const Header = () => {
  return (
    <div className="w-full flex  h-20 flex items-center justify-center p-4 ">
      <nav>
        <ul className="flex gap-4 sm:gap-16  ">
          <li className=" transform transition-transform duration-200 hover:scale-125">
            <a
              href="/"
              className="text-lg sm:text-lg font-semibold hover:text-blue-300"
            >
              Início
            </a>
          </li>
          <li className=" transform transition-transform duration-200 hover:scale-125">
            <a
              href="/about"
              className="text-lg sm:text-lg font-semibold hover:text-blue-300 "
            >
              Projetos
            </a>
          </li>
          <li className=" transform transition-transform duration-200 hover:scale-125">
            <a
              href="/contact"
              className="text-lg sm:text-lg font-semibold hover:text-blue-300  "
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
