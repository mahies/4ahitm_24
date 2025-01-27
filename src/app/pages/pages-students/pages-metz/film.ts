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
  plakatLink: "",
  erscheinungsdatum: new Date("1995-09-06"),
  imdbLink: "tt0112913",
  review: [
    ""
  ],
  quote: [
    "The night’s full of weirdos."
  ],
  rating: 5,
}




export const FILME:Film[] = [FallenAngels];
