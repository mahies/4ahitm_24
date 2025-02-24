export interface Travel {
  ziel: string;
  datum: Date;
  fotos: {
    Link: string;
    Beschreibung: string;
    isVertikal: boolean;
  }[];
}

export const USASW: Travel = {
  ziel: "USA Südwesten",
  datum:  new Date("2023-07-04"),
  fotos: [
    {
      Link: "",
      Beschreibung: "",
      isVertikal: true,
    }
  ]
}

export const TRAVEL:Travel[] = [];
