

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

export const AmerikanischSamoa : flaggen = {
  country: "Amerikanisch Samoa",
  capital: "Pago Pago",
  imagelink: "/assets/Kovacs_Bilder/flags/American_Samoa.jpg",
  population: "43.914",
  datum: new Date("1960-05-24"),
  review: "",
  verhaeltnis: "1:2"

}

export const Bhutan : flaggen = {
  country: "Bhutan",
  capital: "Thimphu",
  imagelink: "/assets/Kovacs_Bilder/flags/Bhutan.jpg",
  population: "787.424 ",
  datum: new Date("1949-00-00"),
  review: "",
  verhaeltnis: "2:3"

}

export const Estonia : flaggen = {
  country: "Estland",
  capital: "Tallinn",
  imagelink: "/assets/Kovacs_Bilder/flags/Estonia.jpg",
  population: "1.366.000 ",
  datum: new Date("1884-07-4"),
  review: "",
  verhaeltnis: "7:11"

}

export const Finland : flaggen = {
  country: "Finnland",
  capital: "Helsinki",
  imagelink: "/assets/Kovacs_Bilder/flags/Finland.jpg",
  population: "5.584.000 ",
  datum: new Date("1918-06-28"),
  review: "",
  verhaeltnis: "7:11"

}

export const Nepal : flaggen = {
  country: "Nepal",
  capital: "Kathmandu",
  imagelink: "/assets/Kovacs_Bilder/flags/Nepal.jpg",
  population: "30.900.000 ",
  datum: new Date("1962-12-16"),
  review: "",
  verhaeltnis: "1:1.21901033…"

}

export const Turkmenistan : flaggen = {
  country: "Turkmenistan",
  capital: "Ashgabat",
  imagelink: "/assets/Kovacs_Bilder/flags/Turkmenistan.jpg",
  population: "6.516.000",
  datum: new Date("1992-10-27"),
  review: "",
  verhaeltnis: "2:3"

}


export const FLAGGEN:flaggen[] = [Antigua_und_Barbuda,Kiribati,BritischesTerr,AmerikanischSamoa,Bhutan,Estonia,Finland,Nepal,Turkmenistan];
