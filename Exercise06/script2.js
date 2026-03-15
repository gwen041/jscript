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