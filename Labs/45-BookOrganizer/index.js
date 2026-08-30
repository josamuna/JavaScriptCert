/*
    This lab is about building a Book Organizer by fulfilling the user stories.
*/

const books = [
  {
    title: "C++ Without Fair",
    authorName: "Pascal Hatzakortzian",
    releaseYear: 2000,
  },
  {
    title: "One love",
    authorName: "Juvenal Munobo Jacques",
    releaseYear: 2000,
  },
  {
    title: "Dr House",
    authorName: "Yan Thimpaka",
    releaseYear: 1990,
  },
  {
    title: "he new era",
    authorName: "Josephine Anita",
    releaseYear: 1991,
  },
  {
    title: "Under the dom",
    authorName: "Steven Spielberg",
    releaseYear: 2025,
  },
  {
    title: "Javascript Defiitive Guide",
    authorName: "Eston Yum",
    releaseYear: 2020,
  },
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

const filteredBooks = books.filter((book) => book.releaseYear <= 2000);

filteredBooks.sort(sortByYear);
console.log(filteredBooks);
