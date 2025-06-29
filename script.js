const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook)
}

addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("Atomic Habits", "James Clear", 214, false);
addBookToLibrary("The Alchemist", "Paulo Coelho", 208, true);
addBookToLibrary("The Power of Now", "Eckhart Tolle", 272, false);
addBookToLibrary("The Art of War", "Sun Tzu", 36, true);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 224, false);
addBookToLibrary("The Little Prince", "Antoine de Saint-Exupéry", 96, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);
addBookToLibrary("The Da Vinci Code", "Dan Brown", 489, true);

console.log(myLibrary);


