export type Rarity = "Common" | "Rare" | "Epic" | "Legendary";

export interface Group {
  id: string;
  name: string;
  idolName: string;
  cardCount: number;
  imageUrl: string;
  accent?: string;
}
