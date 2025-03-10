

export interface flaggen{
  country: string;
  capital: string;
  imagelink: string;
  population: string;
  datum: Date;
  review: string;
  verhaeltnis: string;

}

export interface country{
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
  review: "Meine absolute Lieblingsflagge. Wir haben wieder eine wunderbare Szenerie die vom abgebildeten Vogel getoppt wird. Komposition ist einfach idyllisch und repräsentiert die Inselnation ideal.",
  verhaeltnis: "1:2"

}
export const Antigua_und_Barbuda : flaggen = {
  country: "Antigua und Barbuda",
  capital: "Saint John's",
  imagelink: "/assets/Kovacs_Bilder/flags/Antigua_and_Barbuda.jpg",
  population: "94.298",
  datum: new Date("1967-03-27"),
  review: "Ich liebe ja prinzipiell Flaggen, die Landschaften darstellen, wie auch hier die Strand Szenerie bei Sonnenuntergang gezeigt wird. Farben funktionieren super. Einzige Frage: Warum ist der Himmer schwarz?",
  verhaeltnis: "2:3"

}
export const BritischesTerr : flaggen = {
  country: "Britisches Territorium im indischen Ozean",
  capital: "keine",
  imagelink: "/assets/Kovacs_Bilder/flags/Britisches_Indi.jpg",
  population: "ca. 3500",
  datum: new Date("1990-12-8"),
  review: "\n" +
    "Ist eine sehr besondere Flagge aufgrund der durchgehenden Wellenlinien. der Union Jack macht sie leider um einiges schlechter. Wappen sitzt aber top.",
  verhaeltnis: "1:2"

}

export const AmerikanischSamoa : flaggen = {
  country: "Amerikanisch Samoa",
  capital: "Pago Pago",
  imagelink: "/assets/Kovacs_Bilder/flags/American_Samoa.jpg",
  population: "43.914",
  datum: new Date("1960-05-24"),
  review: "Epische Flagge aufgrund des auffallenden Adlers. Ist leider etwas zu detailliert für eine Flagge meiner Meinung nach, hat aber einen Platz in meiner Topliste verdient.",
  verhaeltnis: "1:2"

}

export const Bhutan : flaggen = {
  country: "Bhutan",
  capital: "Thimphu",
  imagelink: "/assets/Kovacs_Bilder/flags/Bhutan.jpg",
  population: "787.424 ",
  datum: new Date("1949-00-00"),
  review: "Bhutan ist natürlich was super besonderes, eine der wenigen Flaggen mit orange, eine der wenigen, die man sich gleich merkt & auffällt. Besonders ist, dass nicht definiert ist, wie genau der Drache auf der Flagge auszusehen hat. Es gibt also 100te Versionen.",
  verhaeltnis: "2:3"

}

export const Estonia : flaggen = {
  country: "Estland",
  capital: "Tallinn",
  imagelink: "/assets/Kovacs_Bilder/flags/Estonia.jpg",
  population: "1.366.000 ",
  datum: new Date("1884-07-4"),
  review: "Manchmal ist weniger einfach mehr. Estland hat hier abgeräumt. Die Farben sind markant & funktionieren super miteinander. Ich liebe abgesehen davon auch das Auftreten von Schwarz prinzipiell.",
  verhaeltnis: "7:11"

}

export const Finland : flaggen = {
  country: "Finnland",
  capital: "Helsinki",
  imagelink: "/assets/Kovacs_Bilder/flags/Finland.jpg",
  population: "5.584.000 ",
  datum: new Date("1918-06-28"),
  review: "Ähnlich wie Estland. Sieht einfach mächtig aus aufgrund des simplen, aber wirkvollen Designs. Blau/Weiß überbietet alles.",
  verhaeltnis: "7:11"

}

export const Nepal : flaggen = {
  country: "Nepal",
  capital: "Kathmandu",
  imagelink: "/assets/Kovacs_Bilder/flags/Nepal.jpg",
  population: "30.900.000 ",
  datum: new Date("1962-12-16"),
  review: "\n" +
    "Nepal ist die einzige Flagge die nicht 4eckig ist. Das ist so ziemlich die einzige Besonderheit. Farben wirken sehr gut. Mehr ist leider aber auch nicht dabei.",
  verhaeltnis: "1:1.21901033…"

}

export const Turkmenistan : flaggen = {
  country: "Turkmenistan",
  capital: "Ashgabat",
  imagelink: "/assets/Kovacs_Bilder/flags/Turkmenistan.jpg",
  population: "6.516.000",
  datum: new Date("1992-10-27"),
  review: "\n" +
    "Meine Lieblingsflagge mit hauptsächlich grünem Untergrund. Der Teppichstreifen passt zu dem, was man mit der Kultur in Verbindung bringt. Daher Top Flagge.",
  verhaeltnis: "2:3"

}
export const Oesterreich : country = {
  country: "Österreich",
  capital: "Wien",
  imagelink: "/assets/Kovacs_Bilder/flags/Austria.jpg",
  population: " 9.158.750",
  datum: new Date("1945-05-01"),
  review: "",
  verhaeltnis: "2:3"

}


export const FLAGGEN:flaggen[] = [Antigua_und_Barbuda,Kiribati,BritischesTerr,AmerikanischSamoa,Bhutan,Estonia,Finland,Nepal,Turkmenistan];
export const COUNTRY:country[] = [Oesterreich];
