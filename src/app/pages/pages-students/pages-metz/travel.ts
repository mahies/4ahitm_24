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
  datum: new Date("2023-07-04"),
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

export const Bayern: Travel = {
  pfad: "Bayern",
  ziel: "Bayern",
  datum: new Date("2023-12-28"),
  fotos: [
    {
      Link: "IMG_20240103_125945_1",
      Beschreibung: "Häuschen in der nürnberger Altstadt",
      isVertikal: false,
    },
    {
      Link: "IMG_20240106_122349",
      Beschreibung: "Befreiungshalle Kelheim",
      isVertikal: true,
    },
    {
      Link: "IMG_20240103_165427",
      Beschreibung: "Blick über die Dächer Nürnbergs",
      isVertikal: false,
    },
    {
      Link: "IMG_20240105_132223",
      Beschreibung: "Karlstor in München",
      isVertikal: false,
    },
    {
      Link: "IMG_20240105_154620",
      Beschreibung: "Marienplatz in München",
      isVertikal: false,
    },
    {
      Link: "IMG_20240106_161821",
      Beschreibung: "Regensburg ausgehend von der \"Steinernen Brücke\"",
      isVertikal: false,
    },
  ]
}

export const USAFL: Travel = {
  pfad: "USAFL",
  ziel: "Florida",
  datum: new Date("2024-03-22"),
  fotos: [
    {
      Link: "PXL_20240323_172203270",
      Beschreibung: "Schildkröte am St. Pete Beach",
      isVertikal: false,
    },
    {
      Link: "PXL_20240324_142846755",
      Beschreibung: "Kajaktour durch die Mangroven",
      isVertikal: false,
    },
    {
      Link: "PXL_20240326_145833898.PORTRAIT",
      Beschreibung: "Grüner Leguan im Hafen Miamis",
      isVertikal: false,
    },
    {
      Link: "PXL_20240326_230121054",
      Beschreibung: "Strandszene in Miami Beach",
      isVertikal: false,
    },
    {
      Link: "PXL_20240326_235941209.LONG_EXPOSURE-01.COVER",
      Beschreibung: "Art Deco Architektur in Miami Beach",
      isVertikal: false,
    },
    {
      Link: "PXL_20240328_161558136",
      Beschreibung: "Fahrt auf der berühmten \"Seven Mile Bridge\"",
      isVertikal: false,
    },
  ]
}


export const TRAVEL: Travel[] = [USASW, Bayern, USAFL];
