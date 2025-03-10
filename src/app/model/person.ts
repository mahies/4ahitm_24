8
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
  socialLink?: string;
  routerLink?: string;
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
  message: "\„Wenn du es dir vorstellen kannst, kannst du es auch machen.\" \n(Walt Disney)",
  routerLink: "/page_demo"
};
export  const WAGNER : Person = {
  surname: "Wagner".toUpperCase(),
  firstname: "Carina",
  urlImage: "/assets/assets-WAGN/CarinaBild.jpeg",
  birthday: new Date("2005-07-19"),
  department: "ITEL Medientechnik",
  email: "180469@studierende.htl-donaustadt.at",
  github_nickname: "CarinaWagn",
  zip_code: 1220,
  city: "Wien",
  message: "\„Life's simple. Take the shot or lose the chance.\" \n(Samira)",
  socialLink: "https://www.instagram.com/scalefeatherandfluff/",
  routerLink: "/page_wagner"

};

export  const CIZMIC : Person = {
  surname: "Cizmic",
  firstname: "Elvir",
  urlImage: "assets/cizmic_assets/PictureRef.png",
  birthday: new Date("2006-08-04"),
  department: "ITEL Medientechnik",
  email: "210474@studierende.htl-donaustadt.at",
  github_nickname: "ElvirC",
  zip_code: 1220,
  city: "Wien",
  message: "\„Murder's Great!\" \n(Thomas 'Tomska' Ridgewell)",
  socialLink: "https://www.youtube.com/@SiIvaGunner",
  routerLink: "/page_cizmic"
};

export  const HOBEL : Person = {
  surname: "Hobel",
  firstname: "Richard",
  urlImage: "assets/hobel-bilder/hobel_bild.jpeg",
  birthday: new Date("2005-06-10 16:05:00"),
  department: "ITEL Medientechnik",
  email: "200012@studierende.htl-donaustadt.at",
  github_nickname: "reji05",
  zip_code: 2231,
  city: "Strasshof a.d Nordbahn",
  socialLink: "https://www.instagram.com/rich_king1006?igsh=ajZ3YnF5b2cyNDNh&utm_source=qr",
  message: "\„„¡sɹǝpuɐ lɐɯ ǝƃuıp ǝıp ǝʇɥɔɐɹʇǝq“.\" \n(Irgendwas von Google lol)"
};

export  const KOVACS : Person = {
  surname: "Kovacs",
  firstname: "Philip",
  urlImage: "assets/Kovacs_Bilder/Portrait_Kovacs.jpg",
  birthday: new Date("2007-05-04 14:32:00"),
  department: "ITEL Medientechnik",
  email: "210015@studierende.htl-donaustadt.at",
  github_nickname: "PhilipKovacs",
  zip_code: 1220,
  city: "Wien",
  message: "\„Gib immer 100%, außer beim Blutspenden.\"",
  socialLink: "https://www.instagram.com/philip.kvc/",
  routerLink: "/page_kovacs"
};

export  const MAJZEL : Person = {
  surname: "Majzel",
  firstname: "David",
  urlImage: "assets/assets-majzel/majzel-bilder/mybilders.png",
  birthday: new Date("2004-05-22 02:00:00"),
  department: "ITEL Medientechnik",
  email: "190323@htl-donaustadt.at",
  github_nickname: "Dave 64",
  zip_code: 1220,
  city: "Wien",
  message: "\„Carne Assada: proof that some of life’s best moments come from a little heat and a lot of marinade.\" \n(Easy Peasy Quotes)",
  socialLink: "https://www.instagram.com/2dave64236?utm_source=qr&igsh=dTI1ZHNtNmVnbTZ5",
  routerLink: "/page_majzel"
};

export  const POJAR : Person = {
  surname: "POJAR ",
  firstname: "Markus ",
  urlImage: "assets/Pojar-Assets/Markus_Foto_Bort.png",
  birthday: new Date("2007-10-12 14:32:00"),
  department: "ITEL Medientechnik",
  email: "210178@studierende.htl-donaustadt.at",
  github_nickname: "KebabEsser_98",
  zip_code: 2301,
  city: "Groß-Enzersdorf",
  message: "\Wenn das Leben dir Zitronen gibt, dann gib sie zurück.\" \n   - Philip Kovacs",
  routerLink:"/page_pojar"
};

export  const GARCIA : Person = {
  surname: "GARCIA",
  firstname: "Riz",
  urlImage: "assets/garcia_bilder/Garcia.jpg",
  birthday: new Date("2006-07-14"),
  department: "ITEL Medientechnik",
  email: "200005@studierende.htl-donaustadt.at",
  github_nickname: "rizi06",
  zip_code: 1220,
  city: "Wien",
  message: "\" Yesterday is history, Tomorrow is mystery, Today is a gift. That's why it's called Present.\"",
  socialLink: "https://www.instagram.com/mahlxri_/",
  routerLink: "/page_garcia"
};

export  const HAUER : Person = {
  surname: "Hauer",
  firstname: "Erik",
  urlImage: "/assets/Hauer_bilder/Erik.jpg",
  birthday: new Date("2006-07-18"),
  department: "ITEL Medientechnick",
  email: "200019@studierende.htl-donaustadt.at",
  github_nickname: "Nova1807",
  zip_code: 1140,
  city: "Wien",
  message: "\" ich bin müüüüüüde\"",
  socialLink: "https://www.instagram.com/nova_18072/",
  routerLink: "/page_hauer"

};
export  const PONT : Person = {
  surname: "Pontasch",
  firstname: "Adrian",
  urlImage: "assets/Pontasch-Assets/Imgs/Portrait.jpg",
  birthday: new Date("2004-10-02"),
  department: "ITEL Medientechnick",
  email: "190280@studierende.htl-donaustadt.at",
  github_nickname: "ponti123",
  zip_code: 1220,
  city: "Wien",
  message: "\"Betrunkene und Kinder soll man nicht wecken.\"",
    socialLink: "https://linktr.ee/pontasch",
  routerLink: "/page_pont",
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
  message: "\"Keep your eye on the donut, not on the hole\" - David Lynch",
  socialLink:"https://www.instagram.com/lkrm123456789/",
  routerLink:"/page_metz",
};
export  const KOVACIC : Person = {
  surname: "Kovacic",
  firstname: "Victoria",
  urlImage: "assets/kovacic_bilder/vic.jpeg",
  birthday: new Date("2006-11-22"),
  department: "ITEL Medientechnik",
  email: "210042@studierende.htl-donaustadt.at",
  github_nickname: "sevvicc",
  zip_code: 1210,
  city: "Wien",
  message: "\"Im Glashaus mit Steinen werfen!\"",
  socialLink:"https://www.instagram.com/vicitori__/",
  routerLink:"/page_kovacic",
};
export  const COCO : Person = {
  surname: "Secrieri",
  firstname: "Corneliu",
  urlImage: "/assets/assets-coco/kamerad.png",
  birthday: new Date("2004-08-03"),
  department: "ITEL Medientechnick",
  email: "190284@studierende.htl-donaustadt.at",
  github_nickname: "coocoolinoo",
  zip_code: 2434,
  city: "Goetzendorf",
  message: "\"Nachts ist es kälter als draußen.\"",
  socialLink: "https://www.linkedin.com/in/corneliu-secrieri-b488a22b6/",
  routerLink:"/page_coco"
};
export  const FRIEDL : Person = {
  surname: "Friedl",
  firstname: "Stefan",
  urlImage: "assets/Friedl-bilder/Friedl_bild.PNG",
  birthday: new Date("2004-10-04"),
  department: "ITEL Medientechnik",
  email: "200006@studierende.htl-donaustadt.at",
  github_nickname: "rapidler11",
  zip_code: 1220,
  city: "Wien",
  message: "\"„Rapid über Alles!“.\"",
  socialLink: "https://www.instagram.com/s.friedl2/",
  routerLink:"/page_friedl",
};
export  const SCHOENGRUNDNER : Person = {
  surname: "Schöngrundner",
  firstname: "Ines",
  urlImage: "assets/schoen-bilder/Porträbild.jpg",
  birthday: new Date("2007-02-16"),
  department: "ITEL Medientechnick",
  email: "210179@studierende.htl-donaustadt.at",
  github_nickname: "inesschoen",
  zip_code: 1220,
  city: "Wien",
  message: "\"Blöd gelaufen!.\"",
  socialLink:"https://www.instagram.com/ines._.schoen/",
  routerLink:"/page_schoen",
};
export  const MUTISEVIC : Person = {
  surname: "Mutisevic",
  firstname: "Adin",
  urlImage: "assets/mutisevic-assets/adin.jpg",
  birthday: new Date("2006-5-30"),
  department: "ITEL Medientechnick",
  email: "200224@studierende.htl-donaustadt.at",
  github_nickname: "adino",
  zip_code: 1210,
  city: "Wien",
  message: "\"I AM MUSIC\"",
  socialLink: "https://www.instagram.com/adin.mtsvc/",
  routerLink: "/page_mutisevic"

};
export  const NOVO : Person = {
  surname: "Novomesky",
  firstname: "Philipp",
  urlImage: "assets/novo_bilder/image_novo.jpg",
  birthday: new Date("2007-07-11 03:32:00"),
  department: "ITEL Medientechnik",
  email: "210053@studierende.htl-donaustadt.at",
  github_nickname: "PhilippNovo",
  zip_code: 2291,
  city: "Lassee",
  message: "\"You vs You\"",
  socialLink: "https://www.instagram.com/p.novomesky/",
  routerLink: "/page_novo"
};
export  const ZHOU : Person = {
  surname: "ZHOU",
  firstname: "Kevin",
  urlImage: "assets/zhou-bilder/cool-kid.jpg",
  birthday: new Date("2005-12-25"),
  department: "ITEL Medientechnik",
  email: "210013@studierende.htl-donaustadt.at",
  github_nickname: "FaithfulMeow",
  zip_code: 1220,
  city: "Wien",
  message: "\"Mach ein Backflip\"",
  socialLink: "instagram.com/pikapoozero",
  routerLink: "/page_zhou"
};

export  const RADDA : Person = {
  surname: "RADDA",
  firstname: "Daniel",
  urlImage: "assets/radda-bilder/radda-bild.jpg",
  birthday: new Date("2005-04-21"),
  department: "ITEL Medientechnik",
  email: "200009@studierende.htl-donaustadt.at",
  github_nickname: "Wingenn",
  zip_code: 1220,
  city: "Wien",
  message: "\"It aint a think if it aint got that fling -the Professor\"",
  socialLink: "instagram.com/wingenn2005",
  routerLink: "/page_radda"
};

//list all students
export const STUDENTS:Person[] = [RADDA,ZHOU,NOVO,MUTISEVIC,FRIEDL,COCO,SCHOENGRUNDNER,KOVACIC,MORITZ,POJAR,PONT,HAUER,HOBEL,MAJZEL,WAGNER,GARCIA,CIZMIC,KOVACS];
