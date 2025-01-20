
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
  coverLink: "./asdasdasd",
  erscheinungsdatum: new Date("1928-11-18"),
  rymLink: "string",
  reviewH: "string",
  reviewP: "string",
}

export const ALBEN:Album[] = [TEST];
