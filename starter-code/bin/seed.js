const mongoose = require("mongoose");
const Celebrity = require("./../models/Celebrity");
const Movie = require("./../models/Movie");

const dbName = "celebrity";

const collection = "Celebrity";
// const collection = "Movie";

const celebrities = [
  {
    name: "David Ortiz",
    occupation: "Baseball player",
    catchPhrase: "I will get to the bottom of this"
  },
  {
    name: "Aaron Boone",
    occupation: "Baseball manager",
    catchPhrase: "My guys are savages in the box!"
  },
  {
    name: "Rob Manfred",
    occupation: "MLB Commisioner",
    catchPhrase: "Derp Derp, pace of play"
  }
];

const movies = [
  {
    title: "Olsen",
    genre: "Shaw",
    plot: "VORATAK"
  },
  {
    title: "Hansen",
    genre: "Cohen",
    plot: "TALKALOT"
  },
  {
    title: "Alvarez",
    genre: "Alicia",
    plot: "NIMON"
  },
  {
    title: "Estes",
    genre: "Jefferson",
    plot: "CAPSCREEN"
  },
  {
    title: "Burgess",
    genre: "Rowena",
    plot: "SILODYNE"
  },
  {
    title: "Rice",
    genre: "Hancock",
    plot: "BISBA"
  },
  {
    title: "Hunter",
    genre: "Grant",
    plot: "AQUASSEUR"
  },
  {
    title: "Coleman",
    genre: "Bowman",
    plot: "LUMBREX"
  },
  {
    title: "Keller",
    genre: "Mcmahon",
    plot: "XPLOR"
  },
  {
    title: "Frank",
    genre: "Gonzalez",
    plot: "BITENDREX"
  },
  {
    title: "Ross",
    genre: "Pamela",
    plot: "COMVEY"
  },
  {
    title: "Delgado",
    genre: "Walls",
    plot: "BICOL"
  },
  {
    title: "Sullivan",
    genre: "Noelle",
    plot: "CUBIX"
  },
  {
    title: "Ware",
    genre: "Yvonne",
    plot: "PARCOE"
  },
  {
    title: "Cruz",
    genre: "Becker",
    plot: "ISOSURE"
  }
];

mongoose
  .connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  // .then(() => Celebrity.create(celebrities))
  .then(() => {
    // const collection = "Celebrity";

    const Model = collection === "Movie" ? Movie : Celebrity;
    const data = collection === "Movie" ? movies : celebrities;

    return Model.create(data);
  })
  .then(createdDocuments =>
    console.log(
      `Created ${createdDocuments.length} documents for ${collection}`
    )
  )
  .then(() => mongoose.connection.close())
  .then(() => console.log("Connection closed!"))
  .catch(err => console.log(err));
