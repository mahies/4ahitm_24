export interface flaggen{
  country: string;
  capital: string;
  imagelink: string;
  population: string;
  datum: Date;
  review: string;
  verhaeltnis: string;

}

export const Kiribati : flaggen = {
  country: "Kiribati",
  capital: "Tarawa",
  imagelink: "/assets/Kovacs_Bilder/flags/Kiribati.jpg",
  population: "133.515",
  datum: new Date("1979-08-12"),
  review: "",
  verhaeltnis: "1:2"

}
export const Antigua_und_Barbuda : flaggen = {
  country: "Antigua und Barbuda",
  capital: "Saint John's",
  imagelink: "/assets/Kovacs_Bilder/flags/Antigua_and_Barbuda.jpg",
  population: "94.298",
  datum: new Date("1967-03-27"),
  review: "",
  verhaeltnis: "2:3"

}
export const BritischesTerr : flaggen = {
  country: "Britisches Territorium im indischen Ozean",
  capital: "keine",
  imagelink: "/assets/Kovacs_Bilder/flags/Britisches_Indi.jpg",
  population: "ca. 3500",
  datum: new Date("1990-12-8"),
  review: "",
  verhaeltnis: "1:2"

}

export const FLAGGEN:flaggen[] = [Antigua_und_Barbuda,Kiribati,BritischesTerr];
