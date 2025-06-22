import { projetos } from "@/app/utils/projectsData";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const projeto = projetos.find((p) => p.id === params.id);

  if (!projeto) {
    return <div>Projeto não encontrado!</div>;
  }

  return (
    <div className="w-full flex items-center justify-center p-8 ">
      <main className="flex flex-col items-center justify-center w-full h-full gap-12 transition-opacity duration-1000">
        <h1 className="text-4xl md:text-[70px] text-center font-extrabold leading-none">
          {projeto.title.toUpperCase()}
        </h1>
        <p className="text-lg text-center max-w-2xl">{projeto.description}</p>
      </main>
    </div>
  );
}
