import { Bird, Crown, Feather, Flame, Sparkles, Sun } from "lucide-react";

export const getMilestoneIcon = (iconName: string) => {
  const props = { className: "w-5 h-5 md:w-6 md:h-6 text-gold drop-shadow-[0_0_5px_rgba(218,175,55,0.8)]" };
  
  switch (iconName) {
    case "sparkles":
      return <Sparkles {...props} />;
    case "flame":
      return <Flame {...props} />;
    case "bird":
      return <Bird {...props} />;
    case "feather":
      return <Feather {...props} />;
    case "sun":
      return <Sun {...props} />;
    case "crown":
      return <Crown {...props} />;
    default:
      return <Sparkles {...props} />;
  }
};
