export interface Film {
  titel: string;
  director: string;
  plakatLink: string;
  erscheinungsdatum: Date;
  imdbLink: string;
  review: string[];
  quote: string[];
  rating: number;
}





export const FILME:Film[] = [];
