
export interface Album {
  titel: string;
  interpret: string;
  coverLink: string;
  erscheinungsdatum: Date;
  rymLink: string;
  reviewH: string;
  reviewP: string;
}

export const TEST : Album = {
  titel: "Musteralbum",
  interpret: "Mustermusiker",
  coverLink: "assets/metzinger-bilder/Portrait_Metzinger.jpg",
  erscheinungsdatum: new Date("1928-11-18"),
  rymLink: "string",
  reviewH: "string",
  reviewP: "string",
}

export const TwinFantasy : Album = {
  titel: "Twin Fantasy",
  interpret: "CarSeatHeadrest",
  coverLink: "assets/metzinger-bilder/Covers/TwinFantasy.jpg",
  erscheinungsdatum: new Date("2018-02-16"),
  rymLink: "string",
  reviewH: "string",
  reviewP: "string",
}

export const TexasJerusalem : Album = {
  titel: "Twin Fantasy",
  interpret: "Mustermusiker",
  coverLink: "assets/metzinger-bilder/Covers/TexasJerusalem.jpg",
  erscheinungsdatum: new Date("2001-05-15"),
  rymLink: "string",
  reviewH: "string",
  reviewP: "string",
}


export const ALBEN:Album[] = [TwinFantasy, TexasJerusalem];
