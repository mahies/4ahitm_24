
export interface Person {
  surname: string;
  firstname: string;
  urlImage: string;
  birthday: Date;
  department: string;
  email: string;
  github_nickname: string;
  zip_code: number; //equivalent to integer in java
  city: string;
  message: string;
}

export  const MINNIE : Person = {
  surname: "Mouse",
  firstname: "Minnie",
  urlImage: "assets/demo/Minnie_Mouse.webp",
  birthday: new Date("1928-11-18"),
  department: "ITEL Netzwerktechnik",
  email: "minni.mouse@htl-donaustadt.at",
  github_nickname: "minnie",
  zip_code: 1010,
  city: "Entenhausen",
  message: "\„Wenn du es dir vorstellen kannst, kannst du es auch machen.\" \n(Walt Disney)"

};
export  const Carina : Person = {
  surname: "Wagner".toUpperCase(),
  firstname: "Carina",
  urlImage: "assets-WAGN/DEMOBild.jpg",
  birthday: new Date("2005-07-19"),
  department: "ITEL Medientechnik",
  email: "180469@studierende.htl-donaustadt.at",
  github_nickname: "CarinaWagn",
  zip_code: 1220,
  city: "Wien",
  message: "\„Life's simple. Take the shot or lose the chance.\" \n(Samira)"

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
  birthday: new Date("2006-05-04 14:32:00"),
  department: "ITEL Netzwerktechnik",
  email: "210015@studierende.htl-donaustadt.at",
  github_nickname: "PhilipKovacs",
  zip_code: 1220,
  city: "Wien",
  message: "\„Gib immer 100%, außer beim Blutspenden.\""
};

export  const MAJZEL : Person = {
  surname: "David",
  firstname: "Majzel",
  urlImage: "assets-majzel/majzel-bilder/mybilders.png",
  birthday: new Date("2004-05-22"),
  department: "ITEL Medientechnik",
  email: "190323@htl-donaustadt.at",
  github_nickname: "Dave 64",
  zip_code: 1220,
  city: "Wien",
  message: "\„Carne Assada: proof that some of life’s best moments come from a little heat and a lot of marinade.\" \n(Easy Peasy Quotes)"
};

export  const POJAR : Person = {
  surname: "POJAR ",
  firstname: "Markus ",
  urlImage: "assets/Pojar-Assets/Ente.png",
  birthday: new Date("2007-05-09"),
  department: "ITEL Medientechnik",
  email: "210178@studierende.htl-donaustadt.at",
  github_nickname: "KebabEsser_98",
  zip_code: 2301,
  city: "Groß-Enzersdorf",
  message: "\„Wenn das Leben dir Zitronen gibt, dann gib sie zurück.\" \n(Philip Kovacs)"
};

export  const GARCIA : Person = {
  surname: "Garcia",
  firstname: "Riz",
  urlImage: "assets/garcia_bilder/Garcia.jpg",
  birthday: new Date("1928-11-18"),
  department: "ITEL Medientechnick",
  email: "200005@studierende.htl-donaustadt.at",
  github_nickname: "rizi06",
  zip_code: 1220,
  city: "Wien",
  message: "\" Yesterday was history, Tomorrow is mystery, Today is a gift. That's why it's called Present.\""

};
export  const HAUER : Person = {
  surname: "Hauer",
  firstname: "Erik",
  urlImage: "assets/Hauer_bilder/Hauer_Katze.jpg",
  birthday: new Date("2006-07-18"),
  department: "ITEL Medientechnick",
  email: "200019@studierende.htl-donaustadt.at",
  github_nickname: "Nova1807",
  zip_code: 1140,
  city: "Wien",
  message: "\" ich bin müüüüüüde\""

};

export  const PONT : Person = {
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

export  const MORITZ : Person = {
  surname: "Metzinger",
  firstname: "Moritz",
  urlImage: "assets/metzinger-bilder/Portrait_Metzinger.JPG",
  birthday: new Date("2006-10-06 08:37:00"),
  department: "ITEL Medientechnick",
  email: "210032@studierende.htl-donaustadt.at",
  github_nickname: "Moritz-Schule",
  zip_code: 1220,
  city: "Wien",
  message: "\"Denk mal drüber nach... 😛\"",
};

export  const KOVACIC : Person = {
  surname: "Kovacic",
  firstname: "Victoria",
  urlImage: "assets/kovacic_bilder/katze.jpeg",
  birthday: new Date("2006-11-22"),
  department: "ITEL Medientechnick",
  email: "210042@studierende.htl-donaustadt.at",
  github_nickname: "sevvicc",
  zip_code: 1210,
  city: "Wien",
  message: "\"Im Glashaus mit Steinen werfen!.\"",
};

export  const COCO : Person = {
  surname: "Secrieri",
  firstname: "Corneliu",
  urlImage: "",
  birthday: new Date("2004-08-03"),
  department: "ITEL Medientechnick",
  email: "190284@studierende.htl-donaustadt.at",
  github_nickname: "coocoolinoo",
  zip_code: 2434,
  city: "Goetzendorf",
  message: "\"Nachts ist es kälter als draußen.\"",
};

export  const SCHOENGRUNDNER : Person = {
  surname: "Schöngrundner",
  firstname: "Ines",
  urlImage: "assets/schoen-bilder/hondacbr600rr.jpeg",
  birthday: new Date("2007-02-16"),
  department: "ITEL Medientechnick",
  email: "210179@studierende.htl-donaustadt.at",
  github_nickname: "inesschoen",
  zip_code: 1220,
  city: "Wien",
  message: "\"Blöd gelaufen!.\"",
};
export  const MUTISEVIC : Person = {
  surname: "Mutisevic",
  firstname: "Adin",
  urlImage: "assets/mutisevic-assets/adin.jpg",
  birthday: new Date("2006-05-30"),
  department: "ITEL Medientechnick",
  email: "200224@studierende.htl-donaustadt.at",
  github_nickname: "adino",
  zip_code: 1210,
  city: "Wien",
  message: "\" I AM MUSIC\""
};
export  const FRIEDL : Person = {
  surname: "Friedl",
  firstname: "Stefan",
  urlImage: "assets/friedl-assets/stefan.jpg",
  birthday: new Date("2004-10-04"),
  department: "ITEL Medientechnick",
  email: "200006@studierende.htl-donaustadt.at",
  github_nickname: "rapidler11",
  zip_code: 1220,
  city: "Wien",
  message: "\"Rapid über Alles\""
};
