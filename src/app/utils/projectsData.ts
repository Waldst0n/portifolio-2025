// src/utils/projectsData.ts
export type Projeto = {
  id: string;
  title: string;
  description: string;
  detailDescription: string;
  thumbnail: string;
  technology: string[];
  images: string[];
};

export const projetos: Projeto[] = [
  {
    id: "1",
    title: "Smart Minimercado",
    description:
      "Projeto FullStack onde criei do zero um app com React Native, um app web para o administrador com Next.js e uma API com Express.",
    detailDescription:
      "O Smart Minimercado é um minimercado inteligente pensado para facilitar a vida do cliente e modernizar a gestão de pequenos comércios. O cliente pode se cadastrar pelo aplicativo e, a partir desse acesso, navegar pelo catálogo de produtos atualizado, adicionar itens ao carrinho e realizar suas compras de forma totalmente automática, rápida e segura.\n\nA proposta é tornar o processo de compra prático, sem filas e sem complicações, enquanto o gestor do minimercado acompanha tudo em tempo real por meio de um painel administrativo intuitivo. O sistema também permite um controle eficiente de estoque, acompanhamento de vendas e histórico de compras, promovendo uma experiência digital completa para todos os envolvidos.",
    thumbnail:
      "https://res.cloudinary.com/dkutgs8py/image/upload/v1751227934/smart-mini-mercado_aviaq3.png",
    technology: [
      "TypeScript",
      "Node",
      "Tailwind",
      "React",
      "Next.js",
      "Express",
      "PostgreSql",
    ],
    images: [
      "https://res.cloudinary.com/dkutgs8py/video/upload/v1751227940/smart-minimercado3_fnwmo1.mp4",
      "https://res.cloudinary.com/dkutgs8py/image/upload/v1751227935/smart-minimercado1_pmwqzx.png",
      "https://res.cloudinary.com/dkutgs8py/image/upload/v1751227935/smart-minimercado2_mza64s.png",
      "https://res.cloudinary.com/dkutgs8py/image/upload/v1751227937/smart-minimercado4_jaklpw.png",
    ],
  },
  {
    id: "2",
    title: "Playnee - CRM",
    description:
      "Manutenção e evolução de um CRM de vendas: desenvolvo diariamente novas features de um sistema web e de um app criado com React Native.",
    detailDescription:
      "Atuo como desenvolvedor fullstack no Playnee, uma plataforma de CRM de vendas focada em automação, integração com WhatsApp e inteligência comercial. Sou responsável pela manutenção, evolução e implementação de novas funcionalidades tanto no backend quanto no frontend da solução.",
    thumbnail:
      "https://res.cloudinary.com/dkutgs8py/image/upload/v1751227931/playnee_hruplb.png",
    technology: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node",
      "PostgreSql",
      "Bootstrap",
      "AdonisJs",
    ],
    images: [
      "https://res.cloudinary.com/dkutgs8py/image/upload/v1751227932/playnee3_aiywjl.png",
      "https://res.cloudinary.com/dkutgs8py/image/upload/v1751227933/playnee4_wysrrq.png",
      "https://res.cloudinary.com/dkutgs8py/image/upload/v1751227932/playnee2_dqyii6.png",
      "https://res.cloudinary.com/dkutgs8py/image/upload/v1751227931/playnee1_sswbbg.png",
    ],
  },
  {
    id: "3",
    title: "Tinbolt - Plataforma Educacional",
    description:
      "Projeto FullStack onde criei do zero um app com React Native, crio novas features diariamente em um aplicativo web e faço manutenção no back-end com AdonisJS.",
    detailDescription:
      "O Tinbolt é uma plataforma educacional inovadora que visa transformar a experiência de aprendizado. Desenvolvi do zero um aplicativo móvel com React Native, um site para administradores utilizando Next.js e uma API robusta com Express.js. A plataforma permite que os usuários acessem cursos, interajam com conteúdos multimídia e participem de avaliações, tudo em um ambiente intuitivo e responsivo.",
    thumbnail:
      "https://res.cloudinary.com/dkutgs8py/image/upload/v1751227937/tinbolt_xh8vvy.png",
    technology: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node",
      "PostgreSql",
      "Bootstrap",
      "AdonisJs",
    ],
    images: [
      "https://res.cloudinary.com/dkutgs8py/video/upload/v1751227940/tinbolt3_prjn1d.mp4",
      "https://res.cloudinary.com/dkutgs8py/image/upload/v1751227938/tinbolt1_fbwn38.png",
      "https://res.cloudinary.com/dkutgs8py/image/upload/v1751227939/tinbolt2_cjrfzq.png",
    ],
  },
];
