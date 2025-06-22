import { projetos } from "@/app/utils/projectsData";

function getProjetoById(id: string) {
  return projetos.find((p) => p.id === id);
}

export default async function Page({ params }: { params: { id: string } }) {
  const projeto = getProjetoById(params.id);

  if (!projeto) return <div>Projeto não encontrado!</div>;

  return (
    <div className="w-full flex items-center justify-center p-8 ">
      <main className="flex flex-col items-center justify-center w-full h-full gap-12 transition-opacity duration-1000">
        <h1 className="text-4xl md:text-[70px] text-center font-extrabold leading-none">
          {projeto.title.toUpperCase()}
        </h1>
      </main>
    </div>
  );
}
