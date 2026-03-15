let books = [
  {
    title: 'Speaking JavaScript',
    author: 'Axel Rauschmayer',
    pages: 460
  },

  {
    title: 'Programming JavaScript Applications',
    author: 'Eric Elliot',
    pages: 254
  },
   
  {
    title: 'Understanding ECMAScript 6',
    author: 'Nicholas C. Zakas',
    pages: 352
  }
];

console.log(books[0]);
console.log(books[1]);
console.log(books[2]);

books.push(
  {
    title: 'JavaScript Design Patterns',
    author: 'Addy Osmani',
    pages: 254
  }
);

console.log(books.length);

function displayTitle() {
  for (let i = 0; i < books.length; i++) {
    console.log(`BOOK ${i+1} Title: ${books[i].title}`);
  }
};

displayTitle();

console.log(`Book 1 Title: ${books[0].title}`);
console.log(`Book 2 Title: ${books[1].title}`);
console.log(`Book 3 Title: ${books[2].title}`);
console.log(`Book 4 Title: ${books[3].title}`);

let last2Books = books.slice(-2);

console.log(last2Books);

let lostFirstBook = books.shift();

console.log(lostFirstBook);
console.log(books.length);

displayTitle();

let book1Pages = books[0].pages;
let book2Pages = books[1].pages;
let book3Pages = books[2].pages;

let sumPages = book1Pages + book2Pages + book3Pages;


console.log(`BOOK 1 Pages: ${book1Pages}`);
console.log(`BOOK 2 Pages: ${book2Pages}`);
console.log(`BOOK 3 Pages: ${book3Pages}`);
console.log(`TOTAL Pages: ${sumPages}`);