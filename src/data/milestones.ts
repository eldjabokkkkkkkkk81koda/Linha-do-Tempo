// Enum com os ícones disponíveis para garantir que só sejam usados os que existem.
// Para adicionar novos ícones, adicione aqui e atualize o arquivo Icons.tsx.
export type MilestoneIcon = "sparkles" | "flame" | "bird" | "feather" | "sun" | "crown";

// Definição da estrutura de cada marco da linha do tempo.
export interface Milestone {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: MilestoneIcon;
  details: string;
}

/**
 * DADOS DA LINHA DO TEMPO
 * -----------------------
 * Para adicionar um novo marco, basta copiar o último bloco `{...}` abaixo,
 * colar logo depois dele (dentro dos colchetes `]`), colocar uma vírgula entre eles,
 * e alterar os dados. O layout irá se adaptar automaticamente!
 * 
 * Ícones atuais disponíveis: "sparkles", "flame", "bird", "feather", "sun", "crown"
 */
export const milestones: Milestone[] = [
  {
    id: 1,
    date: "10 de Abril",
    title: "A Fagulha Inicial",
    description: "Formação da equipe e escolha da Fênix como mascote. Definimos nosso propósito: ser agentes de paz e justiça.",
    icon: "sparkles",
    details: "Foi numa tarde de discussões que percebemos que nossa união seria a chama para transformar realidades. Inspirados pelo ODS 16, decidimos que cada ação seria guiada pela coragem e pela empatia."
  },
  {
    id: 2,
    date: "15 de Abril",
    title: "Primeiro Voo Solidário",
    description: "Arrecadação de alimentos no bairro. Superamos a meta inicial em 30%.",
    icon: "flame",
    details: "Com sorrisos e cartazes, batemos de porta em porta. A comunidade abraçou nossa causa, e o fogo da solidariedade se acendeu mais forte."
  },
  {
    id: 3,
    date: "22 de Maio",
    title: "Superando as Cinzas",
    description: "Enfrentamos nosso primeiro grande desafio logístico durante a primeira ação de inverno.",
    icon: "bird",
    details: "A chuva forte ameaçou cancelar o evento, mas a equipe se reorganizou em tempo recorde, improvisando lonas e transportes. Renascemos da dificuldade e transformamos o caos em sorrisos."
  },
  {
    id: 4,
    date: "10 de Agosto",
    title: "Asas da Justiça",
    description: "Realizamos uma roda de conversa e ação social numa comunidade sobre direitos e cidadania.",
    icon: "feather",
    details: "Levamos informação, escuta ativa e apoio para mais de 100 famílias. Mostramos que a fênix não apenas voa alto, mas estende suas asas para abrigar quem precisa."
  },
  {
    id: 5,
    date: "12 de Outubro",
    title: "O Canto da Esperança",
    description: "Festival do Dia das Crianças com oficinas de arte, leitura e recreação livre.",
    icon: "sun",
    details: "Transformamos um espaço degradado num verdadeiro festival de cores. As crianças pintaram suas próprias fênix, perpetuando o ciclo de esperança para a próxima geração."
  },
  {
    id: 6,
    date: "Hoje & Futuro",
    title: "O Voo Contínuo",
    description: "Nossa jornada está apenas ganhando altitude. Planejamento estratégico das próximas missões.",
    icon: "crown",
    details: "Fortalecidos pelas lições do passado e guiados pelo nosso propósito original, nosso time agora voa em perfeita sincronia. A chama da paz e da justiça jamais se apagará."
  }
];
