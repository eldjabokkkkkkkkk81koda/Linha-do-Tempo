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
    date: "05 de Março",
    title: "A Cor da Força",
    description: "Definição do vinho como a cor oficial da nossa identidade visual.",
    icon: "flame",
    details: "Escolhemos a cor vinho para representar a profundidade, a força, o sangue quente e a vitalidade da nossa luta. Um tom marcante que simboliza a coragem necessária para defender a igualdade étnico-racial."
  },
  {
    id: 2,
    date: "15 de Março",
    title: "A Fagulha Inicial",
    description: "Nossa primeira reunião onde definimos o mascote da equipe: A Fênix.",
    icon: "sparkles",
    details: "Inspirados pelo ODS 18 (Igualdade Étnico-Racial), percebemos que o renascimento e a resistência deveriam ser o nosso símbolo. A Fênix foi escolhida para representar essa jornada contínua por igualdade."
  },
  {
    id: 3,
    date: "29 de Abril",
    title: "Identidade Forjada",
    description: "Definição oficial do nome da nossa equipe: Os Vingadores.",
    icon: "bird",
    details: "Diferente do sentido literal da palavra, não buscamos vingança, mas sim a vindicação de direitos. 'Os Vingadores' nasce como um nome forte para proteger e lutar ativamente pelas causas do ODS 18 de forma inabalável."
  }
];
