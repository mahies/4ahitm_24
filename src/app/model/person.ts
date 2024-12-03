
export interface Person {
  surname: string;
  firstname: string;
  urlImage: string;
  birthday: Date;
  department: string;
  email: string;
  github_nickname: string;
  zip_code: number; //aequivalent to integer in java
  city: string;
  message: string;
}

export  const MINNIE : Person = {
  surname: "Mouse",
  firstname: "Minni",
  urlImage: "assets/demo/Minnie_Mouse.webp",
  birthday: new Date("1928-11-18"),
  department: "ITEL Netzwerktechnik",
  email: "minni.mouse@htl-donaustadt.at",
  github_nickname: "minnie",
  zip_code: 1010,
  city: "Entenhausen",
  message: "\„Wenn du es dir vorstellen kannst, kannst du es auch machen.\" \n(Walt Disney)"
};

export  const HOBEL : Person = {
  surname: "Hobel",
  firstname: "Richard",
  urlImage: "assets/hobel-bilder/hobel_bild.jpeg",
  birthday: new Date("2005-06-10"),
  department: "ITEL Medientechnik",
  email: "200012@studierende.htl-donaustadt.at",
  github_nickname: "reji05",
  zip_code: 2231,
  city: "Strasshof a.d Nordbahn",
  message: "\„„¡sɹǝpuɐ lɐɯ ǝƃuıp ǝıp ǝʇɥɔɐɹʇǝq“.\" \n(Irgendwas von Google lol)"
};
export  const KOVACS : Person = {
  surname: "Kovacs",
  firstname: "Philip",
  urlImage: "assets/Kovacs_Bilder/Portrait_Kovacs.jpg",
  birthday: new Date("2007-05-04"),
  department: "ITEL Netzwerktechnik",
  email: "210015@studierende.htl-donaustadt.at",
  github_nickname: "PhilipKovacs",
  zip_code: 1220,
  city: "Wien",
  message: "\„Gib immer 100%, außer beim Blutspenden.\""
};




export  const ADRIAN : Person = {
  surname: "Pontasch",
  firstname: "Adrian",
  urlImage: "",
  birthday: new Date("2004-10-02"),
  department: "ITEL Medientechnick",
  email: "190280@studierende.htl-donaustadt.at",
  github_nickname: "ponti123",
  zip_code: 1220,
  city: "Wien",
  message: "\"Betrunkene und Kinder soll man nicht wecken.\"",
};



