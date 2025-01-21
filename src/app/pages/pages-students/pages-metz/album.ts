
export interface Album {
  titel: string;
  interpret: string;
  coverLink: string;
  erscheinungsdatum: Date;
  rymLink: string;
  review1: string;
  review2: string;
  review3: string;
  quote: string;
}

export const TwinFantasy : Album = {
  titel: "Twin Fantasy",
  interpret: "Car Seat Headrest",
  coverLink: "assets/metzinger-bilder/Covers/TwinFantasy.jpg",
  erscheinungsdatum: new Date("2018-02-16"),
  rymLink: "https://rateyourmusic.com/release/album/car-seat-headrest/twin-fantasy-2/",
  review1: "Von diesem Album gibt es zwei Versionen: Mirror to Mirror (2011) und Face to Face (2018). Der größte Unterschied ist die Produktion – das Original klingt wie auf einem Toaster aufgenommen, während das Remake sauberer und professioneller ist. Inhaltlich bleibt das Album gleich, es sei denn, du gehst tiefer in die Lore der Band ein, was Twin Fantasy zu einem echten Kunstwerk macht.",
  review2: "Will Toledo, das kreative Genie hinter Car Seat Headrest, mixt Lo-Fi-Indie-Rock mit Einflüssen von Bands wie The Strokes und unkonventionellen Texten über Beziehungen, Identität und queere Themen. Highlights wie Beach Life-In-Death, ein 13-Minuten-Track, der wie im Flug vergeht, zeigen Toledos Fähigkeit, emotionale Geschichten zu erzählen. Auch Bodys und Sober to Death sind absolute Indie-Banger, die das Album abrunden.",
  review3: "Es gibt jedoch ein, zwei Schwachstellen: High to Death und Stop Smoking (We Love You) sind nicht so stark wie der Rest des Albums. Trotzdem bleibt Twin Fantasy (Face to Face) eines der besten Alben der letzten zehn Jahre. Wer tiefgründige Lyrics und kreative Songstrukturen mag, sollte dieses Werk unbedingt hören.",
  quote: "We said we hated humans," +
    "We wanted to be humans",
}

export const TexasJerusalem : Album = {
  titel: "The Texas-Jerusalem Crossroads",
  interpret: "Lift to Experience ",
  coverLink: "assets/metzinger-bilder/Covers/TexasJerusalem.jpg",
  erscheinungsdatum: new Date("2001-05-15"),
  rymLink: "https://rateyourmusic.com/release/album/lift-to-experience/the-texas-jerusalem-crossroads/",
  review1: "Das Album ist der Beweis, warum man durch das Cover keine Schlüsse ziehen sollte. Es erzählt von Christi Wiedergeburt – in Texas. Klingt absurd? Vielleicht, aber die Band, die aus einer kleinen Stadt in der Nähe von Dallas stammt, macht daraus ein unvergleichliches Werk. Frontmann Josh T. Pearson gelingt es, die transzendentale Erfahrung von Religion zu vermitteln, ohne preachy zu wirken. Die musikalische Grundlage? Eine Mischung aus Shoegaze, Post-Rock und der Space-Rock-Szene der Jahrtausendwende.",
  review2: "Das Doppelalbum ist in zwei Teile aufgeteilt: Texas und Jerusalem. Während Songs wie Just as Was Told und Falling From Cloud 9 die Stärke der ersten Hälfte zeigen, gibt es auf der zweiten Hälfte ein besonderes Highlight: Into the Storm. Nach zehn Minuten Song folgt fast 15 Minuten Stille – nur um dann mit einem versteckten Track zu überraschen. Dieser kreative Einsatz von Stille und Struktur ist typisch für die Band.",
  review3: "Ein paar Songs sind weniger stark, etwa Down Came the Angels oder Down with the Prophets. Doch insgesamt bietet das Album eine einzigartige Reise durch Klang und Konzept, die in der Musikwelt ihresgleichen sucht. Es mag als „Christian Rock Opera“ beschrieben werden, aber diese Begriffe fangen nicht ein, wie einzigartig und faszinierend dieses Album ist.",
  quote: "Cause we're simply the best band in the whole damn land," +
    "And 'Texas Is The Reason.",
}


export const ALBEN:Album[] = [TwinFantasy, TexasJerusalem];
