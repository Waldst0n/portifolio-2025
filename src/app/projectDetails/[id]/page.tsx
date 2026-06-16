"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, X } from "lucide-react";
import { projetos } from "@/app/utils/projectsData";
import { isGif, isVideo } from "@/app/utils/common";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const projeto = projetos.find((p) => p.id === id);

  const [mounted, setMounted] = useState(false);
  const [lightbox, setLightbox] = useState<{ open: boolean; img: string | null }>(
    { open: false, img: null }
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!projeto) {
    return (
      <div className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="text-3xl font-extrabold">Projeto não encontrado</h1>
        <p className="text-muted-foreground">
          O projeto que você procura não existe ou foi removido.
        </p>
        <Link
          href="/projects"
          className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <ArrowLeft size={18} />
          Ver todos os projetos
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="w-full px-6 py-10 sm:py-14">
        <main
          className={`mx-auto max-w-4xl transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {/* Voltar */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            Voltar para projetos
          </Link>

          {/* Cabeçalho */}
          <header className="mt-6">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Projeto
            </p>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight md:text-5xl">
              {projeto.title}
            </h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              {projeto.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {projeto.technology.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </header>

          {/* Galeria */}
          <div className="mt-10">
            {projeto.images && projeto.images.length > 0 ? (
              <Carousel className="w-full">
                <CarouselContent>
                  {projeto.images.map((media, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted">
                        {isVideo(media) ? (
                          <video
                            src={media}
                            controls
                            className="absolute inset-0 h-full w-full object-contain"
                          />
                        ) : (
                          <Image
                            src={media}
                            alt={`Imagem do projeto ${projeto.title}`}
                            fill
                            unoptimized={isGif(media)}
                            sizes="(max-width: 768px) 100vw, 768px"
                            priority={index === 0}
                            onClick={() => setLightbox({ open: true, img: media })}
                            className="cursor-zoom-in object-contain"
                          />
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            ) : (
              <div className="flex h-[220px] w-full items-center justify-center rounded-xl border border-border bg-muted text-muted-foreground">
                Sem imagens disponíveis para este projeto.
              </div>
            )}
          </div>

          {/* Sobre o projeto */}
          <section className="mt-10 rounded-xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-bold md:text-2xl">Sobre o projeto</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
              {projeto.detailDescription.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Lightbox */}
      {lightbox.open && lightbox.img && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setLightbox({ open: false, img: null })}
        >
          <div className="relative flex max-h-[90vh] max-w-[90vw] items-center justify-center">
            <Image
              src={lightbox.img}
              alt="Imagem ampliada"
              width={1400}
              height={900}
              unoptimized={isGif(lightbox.img)}
              className="h-auto max-h-[90vh] w-auto rounded-lg object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground shadow-md transition-colors hover:text-primary"
              onClick={() => setLightbox({ open: false, img: null })}
              aria-label="Fechar imagem ampliada"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
