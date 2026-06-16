<div align="center">

# Portfólio · Waldston Santana

**Desenvolvedor Fullstack** — React · React Native · Next.js · Node.js

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

[**🔗 Acessar demo ao vivo**](https://portifolio-2025.vercel.app)

</div>

<!-- Dica: adicione um screenshot da home em docs/preview.png e descomente a linha abaixo.
![Preview do portfólio](docs/preview.png)
-->

## ✨ Sobre o projeto

Portfólio pessoal desenvolvido para apresentar minha trajetória, habilidades e
projetos como desenvolvedor Fullstack. Construído com **Next.js (App Router)** e
**Tailwind CSS v4**, com foco em performance, design clean e acessibilidade.

## 🚀 Funcionalidades

- 🏠 **Home** com apresentação e atalhos de contato (WhatsApp, LinkedIn, GitHub, Instagram)
- 🧭 **Experiência** — trajetória profissional, formação e habilidades
- 💼 **Projetos** — vitrine dos principais trabalhos com as tecnologias usadas
- 🔍 **Detalhes do projeto** — carrossel de imagens/vídeos com _lightbox_ para ampliar
- 🌗 **Tema claro/escuro** com alternância persistente (sem _flash_ ao carregar)
- 📱 **Layout responsivo** para mobile, tablet e desktop

## 🛠️ Tecnologias

| Categoria      | Stack                                                        |
| -------------- | ----------------------------------------------------------- |
| Framework      | [Next.js 15](https://nextjs.org/) (App Router)              |
| Linguagem      | [TypeScript](https://www.typescriptlang.org/)               |
| UI             | [React 18](https://react.dev/)                              |
| Estilização    | [Tailwind CSS v4](https://tailwindcss.com/)                 |
| Componentes    | [shadcn/ui](https://ui.shadcn.com/) · [Radix UI](https://www.radix-ui.com/) |
| Ícones         | [lucide-react](https://lucide.dev/) · [react-icons](https://react-icons.github.io/react-icons/) |
| Tema           | [next-themes](https://github.com/pacocoursey/next-themes)   |
| Carrossel      | [Embla Carousel](https://www.embla-carousel.com/)          |

## 📦 Como rodar localmente

> Pré-requisitos: **Node.js 18+** e **npm**.

```bash
# 1. Clone o repositório
git clone https://github.com/Waldst0n/portifolio-2025.git
cd portifolio-2025

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Scripts disponíveis

| Comando         | Descrição                              |
| --------------- | -------------------------------------- |
| `npm run dev`   | Inicia o servidor de desenvolvimento   |
| `npm run build` | Gera a build de produção               |
| `npm run start` | Executa a build de produção            |
| `npm run lint`  | Verifica o código com o ESLint         |

## 🗂️ Estrutura do projeto

```
src/
├── app/
│   ├── components/        # Header, ThemeProvider, ThemeToggle, CardProjects
│   ├── experience/        # Página de experiência
│   ├── projects/          # Vitrine de projetos
│   ├── projectDetails/    # Detalhes de um projeto ([id])
│   ├── utils/             # Dados dos projetos e helpers
│   ├── globals.css        # Tokens de tema (light/dark) e estilos base
│   └── layout.tsx         # Layout raiz + metadados + provider de tema
├── components/ui/         # Componentes shadcn/ui (card, button, carousel...)
├── lib/                   # Utilitários (cn)
└── types/                 # Tipagens compartilhadas
```

## 📬 Contato

- 💼 [LinkedIn](https://www.linkedin.com/in/waldston-santana/)
- 🐙 [GitHub](https://github.com/Waldst0n)
- 💬 [WhatsApp](https://wa.me/5579988232693)
- 📸 [Instagram](https://instagram.com/waldstonsantana)

---

<div align="center">
Feito com 💙 por <a href="https://github.com/Waldst0n">Waldston Santana</a>
</div>
