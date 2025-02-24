export interface Travel {
  pfad: string;
  ziel: string;
  datum: Date;
  fotos: {
    Link: string;
    Beschreibung: string;
    isVertikal: boolean;
  }[];
}

export const USASW: Travel = {
  pfad: "USASW",
  ziel: "USA Südwesten",
  datum:  new Date("2023-07-04"),
  fotos: [
    {
      Link: "IMG_20230706_194722_1",
      Beschreibung: "Motel an der Route 66",
      isVertikal: false,
    },
    {
      Link: "IMG_20230708_144253_1",
      Beschreibung: "Monutment Valley Nationalpark",
      isVertikal: true,
    },
    {
      Link: "IMG_20230714_072634",
      Beschreibung: "El Capitan im Yosemite Nationalpark",
      isVertikal: false,
    },
    {
      Link: "IMG_20230717_193514",
      Beschreibung: "\"Keep Out\" Schild am Strand in Malibu",
      isVertikal: false,
    },
    {
      Link: "IMG_20230724_220353",
      Beschreibung: "\"New York-New York\" in Las Vegas",
      isVertikal: false,
    },
  ]
}

export const TRAVEL:Travel[] = [USASW];
