"use client";

import React, { useEffect, useState } from "react";

const Projects = () => {
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
        <h1 className="text-[70px] text-center font-extrabold leading-none">
          MEUS <span className="text-gray-500">PROJETOS</span>{" "}
        </h1>
      </main>
    </div>
  );
};

export default Projects;
