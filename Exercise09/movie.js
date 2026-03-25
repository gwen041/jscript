let movies = [{
    title: 'Lost in Translation',
    imdb: 7.7
}, {
    title: 'The Proposal',
    imdb: 6.8
}, {
    title: 'Venom',
    imdb: 9.1
}];

let movieName;
let movieImdb;

while(true) {
  movieName = prompt('Enter the Movie Name');
  movieImdb = Number(prompt('Enter the Movie Rating (imdb)'))

  if (movieName == null || movieImdb == null) {
    break;
  }
  else {
    movies.push ({
      title: movieName,
      imdb: movieImdb
    });
  }
}

console.log(movies);

lowRate();
highRate();


function lowRate() {
  console.log('Movie rating < 7:');
  for (let movie of movies) {
    if (movie.imdb < 7) {
      console.log(`${movie.title} (${movie.imdb})`);
    }
  }
}

function highRate() {
  console.log('Movie rating >= 7:');
  for (let movie of movies) {
    if (movie.imdb >= 7) {
      console.log(`${movie.title} (${movie.imdb})`);
    }
  }
}