export interface Owner {
  name: string;
  role: string;
  photo: string;
  details: { label: string; value: string }[];
}

export const owners: Owner[] = [
  {
    name: "LEVI",
    role: "Owner & main designer",
    photo: "/owners/levi.jpg",
    details: [
      { label: "Speaks", value: "English, Spanish, Valencian, French" },
      { label: "Pronouns", value: "She/her" },
      { label: "Birthday", value: "March 14th" },
      { label: "Likes", value: "Tyler the Creator, Laufey, The Neighbourhood, Clairo, Chase Atlantic" },
      { label: "Ults", value: "ENHYPEN (Jay), ILLIT (Yunah), izna (Jeemin), LE SSERAFIM (Yunjin), Kep1er (Youngeun), LNGSHOT (Ohyul)" },
      { label: "Fun facts", value: "Loves to play electric guitar and to watch movies and series/animes" },
    ],
  },
  {
    name: "NISHI",
    role: "Developer and designer",
    photo: "/owners/nishi.jpg",
    details: [
      { label: "Speaks", value: "English, Spanish, Basque" },
      { label: "Pronouns", value: "He/him" },
      { label: "Birthday", value: "March 6th" },
      { label: "Likes", value: "Morat, En Tol Sarmiento, Billie Eilish, Adele, Ariana Grande, FLO" },
      { label: "Ults", value: "AMPERS&ONE (Kamden), AHOF (Chihen, Jeongwoo, Han), LNGSHOT (Woojin), CORTIS (Juhoon)" },
      { label: "Fun facts", value: "Is colorblind, loves watching Thai BL series, and ABSOLUTELY LOVES LAPONE Ent. boygroups (INI, DXTEEN, JO1)" },
    ],
  },
];
