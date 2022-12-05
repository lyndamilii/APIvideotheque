const movies = [
    {
      "_id" : ,
      "titre" : "Forrest Gump",
      "realisateur" : "Robert Zemeckis",
      "description" : "L'histoire de Forrest Gump: un jeune garçon en situation de handicap qui va réussir sa vie.",
      "dureeTotale" : 130,
      "dureeVisionneeMinutes" : 130,
      "imageUrl" : "forrestGump.jpeg"
    },
    {
      "titre" : "La Ligne Verte",
      "realisateur" : "Franck Darabont",
      "description" : "la rencontre entre Paul Edgecomb et John Coffey dans le couloir de la mort",
      "dureeTotale" : 189,
      "dureeVisionneeMinutes" : 130,
      "imageUrl" : "laLigneVerte.jpeg"
    },
    {
      "titre" : "Your Name",
      "realisateur" : "Makoto Shinkai",
      "description" : "l'histoire de Mitsuha qui se teleporte dans le corp d'un jeune homme qui habite à tokyo",
      "dureeTotale" : 110,
      "dureeVisionneeMinutes" : 10,
      "imageUrl" : "yourName.jpeg"
    },
    {
      "titre" : "Les Affranchis",
      "realisateur" : "Martin Scorsese",
      "description" : "l'histoire d'un mec qui veut devenir un gangster et du coup devient gangster",
      "dureeTotale" : 145,
      "dureeVisionneeMinutes" : 130,
      "imageUrl" : "lesAffranchis.jpeg"
    },
    {
      "titre" : "Joker",
      "realisateur" : "Todd Phillips",
      "description" : "Joker: le criminel à la tête de clown",
      "dureeTotale" : 122,
      "dureeVisionneeMinutes" : 0,
      "imageUrl" : "joker.jpeg"
    },
    {
      "titre" : "Wall-E",
      "realisateur" : "Andrew Stanton",
      "description" : "l'histoire d'un robot qui cherche l'amour sur terre et dans l'espace",
      "dureeTotale" : 97,
      "dureeVisionneeMinutes" : 97,
      "imageUrl" : "wallE.jpeg"
    }
];

exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(movies))));
}

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(movies)).find(movie =>
      movie._id == id)
    )
  );
}




