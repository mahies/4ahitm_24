export interface Film {
  titel: string;
  localization: boolean;
  titelOriginal?: string;
  directorNachname: string;
  directorVorname: string;
  plakatLink: string;
  erscheinungsdatum: Date;
  imdbLink: string;
  review: string[];
  quote: string[];
  rating: number;
}

export const FallenAngels: Film = {
  titel: "Fallen Angels",
  localization: true,
  titelOriginal: "墮落天使",
  directorNachname: "Wong",
  directorVorname: "Kar-wai",
  plakatLink: "assets/metzinger-bilder/Plakate/FallenAngels.jpg",
  erscheinungsdatum: new Date("1995-09-06"),
  imdbLink: "tt0112913",
  review: [
    "Das ist ein Film."
  ],
  quote: [
    "The night’s full of weirdos."
  ],
  rating: 5,
}

export const LaHaine: Film = {
  titel: "Hass",
  localization: true,
  titelOriginal: "La Haine",
  directorNachname: "Kassovitz",
  directorVorname: "Mathieu",
  plakatLink: "assets/metzinger-bilder/Plakate/LaHaine.jpg",
  erscheinungsdatum: new Date("1995-05-31"),
  imdbLink: "tt0113247",
  review: [
    "Das ist ein Film."
  ],
  quote: [
    "Le monde est à ꝟnous."
  ],
  rating: 5,
}

export const Trainspotting: Film = {
  titel: "Trainspotting",
  localization: false,
  directorNachname: "Boyle",
  directorVorname: "Danny",
  plakatLink: "assets/metzinger-bilder/Plakate/Trainspotting.jpg",
  erscheinungsdatum: new Date("1996-02-23"),
  imdbLink: "tt0117951",
  review: [
    "Das ist ein Film."
  ],
  quote: [
    "Choose Life. Choose a job. Choose a career. Choose a family. [...] Choose your future. Choose life... But why would I want to do a thing like that? I chose not to choose life. I chose somethin' else. And the reasons? There are no reasons.",
    "Who needs reasons when you've got heroin?"
  ],
  rating: 5,
}

export const EternalSunshine: Film = {
  titel: "Eternal Sunshine of the Spotless Mind",
  localization: false,
  directorNachname: "Gondry",
  directorVorname: "Michel",
  plakatLink: "assets/metzinger-bilder/Plakate/EternalSunshine.jpg",
  erscheinungsdatum: new Date("2004-03-19"),
  imdbLink: "tt0338013",
  review: [
    "Das ist ein Film."
  ],
  quote: [
    "What a loss to spend that much time with someone, only to find out that she's a stranger."
  ],
  rating: 4,
}

export const Nosferatu: Film = {
  titel: "Nosferatu - Phantom der Nacht",
  localization: false,
  directorNachname: "Herzog",
  directorVorname: "Werner",
  plakatLink: "assets/metzinger-bilder/Plakate/Nosferatu.jpg",
  erscheinungsdatum: new Date("1979-02-25"),
  imdbLink: "tt0079641",
  review: [
    "Um die Entstehungsgeschichte dieses Films zu verstehen, muss ich ein wenig ausholen. Die Generation Werner Herzogs, welcher im Jahr 1942 geboren wurde, war, besonders in Deutschland, größtenteils vaterlos. Dafür hat der Krieg gesorgt. Aufgesehen hat man daher zur Großelterngeneration. Im deutschen Film waren das die weltweit hochangesehenen Regisseure des Expressionismus und der wohl bedeutsamste Film dieser Zeit war \"Nosferatu – Eine Symphonie des Grauens (1922)\". Als Hommage an diese Zeit der Pioniere und zum verdeutlichen der intergenerationalen Verbindung zwischen den Expressionisten und den Vertretern des Neuen Deutschen Films.",
    "In die Rolle des legendären Vampirs schlüpft der wohl kontroverseste Schauspieler seiner Zeit – Klaus Kinski. Die beiden Protagonisten Jonathan und Lucy Harker wurden vom deutschen Bruno Ganz und der Französin Isabelle Adjani verkörpert. Gedreht wurde in der südholländischen Stadt Delft und der damaligen Tschechoslowakei. Aufgrund dieser multikulturellen Hintergründe wurde der Film vor Ort in mehreren Sprachen gedreht und später im Studio nachvertont.",
    "Als ich den Film zum ersten Mal gesehen habe, war ich anfangs schockiert. Die Geschichte schien an Klischee und Kitsch nicht überbietbar zu sein, besonders die Rolle der Lucy. Das ändert sich jedoch parallel zu Jonathans Reise nach Transsylvanien. Als dieser Todkrank, gebissen vom Vampir, zurückkehrt, entpuppt sich Lucys Werdegang als Emanzipationsgeschichte. Zur Visualisierung einer pestkranken Stadt verwendet Werner Herzog weiße Ratten und da wir uns hier im Jahr 1979 befinden wurden dafür natürliche echte Tiere verwendet – und davon nicht wenig. Tausende, wenn nicht zehntausende Nager wurden beim Dreh in der Stadt laufen gelassen.",
    "Um die Kinogänger der späten siebziger auf die Probe zu stellen, die sich bereits an die immer populärer werdenden Actionblockbuster gewöhnt hatten, auf die Probe zu stellen, wurde die Geschichte extra langsam aufbereitet. Langsame Landschaftsaufnahmen saugen einen ein und lassen einen förmlich in den Film eintauchen. Es wundert mich nicht, dass Herzog später Dokumentarfilme gedreht hat. Bei langen Einstellungen mit vielen Schauspielern wird man stutzig zurückgelassen, wie man das den damals hinbekommen haben kann.",
    "Herzogs hypnotische Kameraarbeit gepaart mit einer zeitlosen und überraschend progressiven Geschichte, sorgen für einen Meilenstein des deutschen Films, welcher auch heute noch mit Cineasten auf dem ganzen Planeten resoniert."
  ],
  quote: [
    "Der Tod ist nicht alles.",
    "Es gibt viel Schlimmeres."
  ],
  rating: 4,
}

export const StraightStory: Film = {
  titel: "The Straight Story",
  localization: false,
  directorNachname: "Lynch",
  directorVorname: "David",
  plakatLink: "assets/metzinger-bilder/Plakate/StraightStory.jpg",
  erscheinungsdatum: new Date("1999-05-21"),
  imdbLink: "tt0166896",
  review: [
    "Das ist ein Film."
  ],
  quote: [
    "The worst part of being old is remembering when you was young."
  ],
  rating: 4,
}

export const BarryLyndon: Film = {
  titel: "Barry Lyndon",
  localization: false,
  directorNachname: "Kubrick",
  directorVorname: "Stanley",
  plakatLink: "assets/metzinger-bilder/Plakate/BarryLyndon.jpg",
  erscheinungsdatum: new Date("1975-12-11"),
  imdbLink: "tt0072684",
  review: [
    "Das ist ein Film."
  ],
  quote: [

  ],
  rating: 5,
}

export const WildAtHeart: Film = {
  titel: "Wild at Heart",
  localization: false,
  directorNachname: "Lynch",
  directorVorname: "David",
  plakatLink: "assets/metzinger-bilder/Plakate/WildAtHeart.jpg",
  erscheinungsdatum: new Date("1990-05-19"),
  imdbLink: "",
  review: [
    "Das ist ein Film."
  ],
  quote: [
    "I guess I started smoking when I was about... four."
  ],
  rating: 4,
}


export const HighLow: Film = {
  titel: "Zwischen Himmel und Hölle",
  localization: true,
  titelOriginal: "天国と地獄",
  directorNachname: "Kurosawa",
  directorVorname: "Akira",
  plakatLink: "assets/metzinger-bilder/Plakate/HighLow.jpg",
  erscheinungsdatum: new Date("1963-08-27"),
  imdbLink: "tt0057565",
  review: [
    "Das ist ein Film."
  ],
  quote: [
    "Glauben Sie bloß nicht, dass ich vor Angst zittere. Das ist eine rein physische Reaktion. Die Einzelhaft macht mich zitterig. Ich fürchte weder Tod noch Hölle. Mein Leben war von Anfang an die Hölle. Ich würde nur zittern, wenn ich in den Himmel müsste."
  ],
  rating: 4,
}



export const FILME:Film[] = [FallenAngels, LaHaine, Trainspotting, EternalSunshine, Nosferatu, StraightStory, HighLow, WildAtHeart];
