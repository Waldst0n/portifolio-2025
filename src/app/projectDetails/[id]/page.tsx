"use client";

import { useState } from "react"; // <-- Não esqueça de importar
import { projetos } from "@/app/utils/projectsData";
import { use } from "react";
import { isVideo, isGif } from "@/app/utils/common"; // Certifique-se de que este utilitário exista

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const projeto = projetos.find((p) => p.id === id);

  // Estado do lightbox
  const [lightbox, setLightbox] = useState<{
    open: boolean;
    img: string | null;
  }>({ open: false, img: null });

  if (!projeto) {
    return <div>Projeto não encontrado!</div>;
  }

  return (
    <>
      <div className="w-full flex items-center justify-center p-4 md:p-8">
        <main className="flex flex-col items-center justify-center w-full h-full gap-8 md:gap-12 transition-opacity duration-1000">
          <h1 className="text-3xl md:text-[70px] text-center font-extrabold leading-none">
            {projeto.title.toUpperCase()}
          </h1>

          <div className="w-full flex justify-center">
            {projeto.images && projeto.images.length > 0 ? (
              <Carousel className="w-full max-w-[800px] md:max-w-2xl">
                <CarouselContent>
                  {projeto.images.map((media, index) => (
                    <CarouselItem
                      key={index}
                      className="relative w-full aspect-[2/1] flex items-center justify-center cursor-zoom-in"
                      onClick={() => setLightbox({ open: true, img: media })}
                      title="Clique para ampliar"
                    >
                      {isVideo(media) ? (
                        <video
                          src={media}
                          controls
                          className="object-cover rounded-lg"
                          style={{ width: 800, height: 400 }}
                          poster="/videos/thumb.jpg" // opcional, caso tenha thumbnail
                        />
                      ) : isGif(media) ? (
                        <img
                          src={media}
                          alt={`Imagem do projeto ${projeto.title}`}
                          className="object-cover rounded-lg"
                          style={{ width: 800, height: 400 }}
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      ) : (
                        <Image
                          src={media}
                          alt={`Imagem do projeto ${projeto.title}`}
                          width={800}
                          height={400}
                          className="object-cover rounded-lg"
                          sizes="(max-width: 768px) 100vw, 600px"
                          priority={index === 0}
                        />
                      )}
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            ) : (
              <div className="w-full h-[200px] md:h-[400px] flex items-center justify-center text-gray-500">
                Sem imagens disponíveis para este projeto.
              </div>
            )}
          </div>

          <section className="w-full max-w-2xl mt-4 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-primary">
              Sobre o projeto
            </h2>
            <p className="text-base md:text-lg text-justify leading-relaxed">
              {projeto.detailDescription}
            </p>
          </section>
        </main>
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setLightbox({ open: false, img: null })}
        >
          <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            {lightbox.img && isVideo(lightbox.img) ? (
              <video
                src={lightbox.img}
                controls
                autoPlay
                className="rounded-lg object-contain shadow-xl"
                style={{ maxWidth: "90vw", maxHeight: "90vh" }}
                onClick={(e) => e.stopPropagation()}
              />
            ) : lightbox.img && isGif(lightbox.img) ? (
              <img
                src={lightbox.img}
                alt="Imagem ampliada"
                className="rounded-lg object-contain shadow-xl"
                style={{ maxWidth: "90vw", maxHeight: "90vh" }}
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <Image
                src={lightbox.img ?? ""}
                alt="Imagem ampliada"
                width={1200}
                height={800}
                className="rounded-lg object-contain shadow-xl"
                style={{ maxWidth: "90vw", maxHeight: "90vh" }}
                onClick={(e) => e.stopPropagation()}
              />
            )}
            <button
              className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-2 text-white text-xl"
              onClick={() => setLightbox({ open: false, img: null })}
              aria-label="Fechar imagem ampliada"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
