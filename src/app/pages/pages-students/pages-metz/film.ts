export interface Film {
  titel: string;
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
  titel: "La Haine",
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
  directorNachname: "Herzog",
  directorVorname: "Werner",
  plakatLink: "assets/metzinger-bilder/Plakate/Nosferatu.jpg",
  erscheinungsdatum: new Date("1979-02-25"),
  imdbLink: "tt0079641",
  review: [
    "Das ist ein Film."
  ],
  quote: [
    "Der Tod ist nicht alles.",
    "Es gibt viel Schlimmeres."
  ],
  rating: 4,
}

export const StraightStory: Film = {
  titel: "The Straight Story",
  directorNachname: "Lynch",
  directorVorname: "David",
  plakatLink: "assets/metzinger-bilder/Plakate/StraightStory.jpg",
  erscheinungsdatum: new Date("1999-05-21"),
  imdbLink: "tt0166896",
  review: [
    "Das ist ein Film."
  ],
  quote: [

  ],
  rating: 4,
}

export const BarryLyndon: Film = {
  titel: "Barry Lyndon",
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
  directorNachname: "Lynch",
  directorVorname: "David",
  plakatLink: "assets/metzinger-bilder/Plakate/WildAtHeart.jpg",
  erscheinungsdatum: new Date("1990-05-19"),
  imdbLink: "",
  review: [
    "Das ist ein Film."
  ],
  quote: [
    ""
  ],
  rating: 4,
}


export const HighLow: Film = {
  titel: "Zwischen Himmel und Hölle",
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



export const FILME:Film[] = [FallenAngels, LaHaine, Trainspotting, EternalSunshine, Nosferatu, StraightStory, HighLow];
