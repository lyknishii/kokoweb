import { Group } from "@/types";

// ⚠️ Datos de ejemplo. Cuando conectes tu base de datos real (la misma que usa
// tu bot de Discord), reemplaza esta función por un fetch/consulta real.
export const mockGroups: Group[] = [
  { id: "1", name: "&TEAM", idolName: "YUMA", cardCount: 150, imageUrl: "/placeholder-card.svg" },
  { id: "2", name: "1VERSE", idolName: "AITO", cardCount: 15, imageUrl: "/placeholder-card.svg" },
  { id: "3", name: "2K MEMBERS", idolName: "Mizuki", cardCount: 1, imageUrl: "/placeholder-card.svg" },
  { id: "4", name: "2NE1", idolName: "MINZY", cardCount: 10, imageUrl: "/placeholder-card.svg" },
  { id: "5", name: "2PM", idolName: "JUNHO", cardCount: 18, imageUrl: "/placeholder-card.svg" },
  { id: "6", name: "4MINUTE", idolName: "HYUNA", cardCount: 15, imageUrl: "/placeholder-card.svg" },
];
