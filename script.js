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

function displayBooks() {
    const container = document.getElementById("book-container");
    container.innerHTML = "";

    myLibrary.forEach((book) => {
        const bookElement = document.createElement("div")
        bookElement.classList.add("book-card")
        bookElement.dataset.id = book.id

    bookElement.innerHTML = `
    <h3>${book.title}</h3>
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pages}</p>
    <p>Read: ${book.isRead ? "Yes" : "No"}</p>
    <button class="remove-button" data-id="${book.id}">Remove</button>
    <button class="toggle-read-button" data-id="${book.id}">Toggle Read</button>
    ` 
    container.appendChild(bookElement)
    })
    const removeButtons = document.querySelectorAll(".remove-button");
removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const id = button.dataset.id;
        removeBookById(id);
    })
})

const toggleReadButtons = document.querySelectorAll(".toggle-read-button");
toggleReadButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const id = button.dataset.id;
        const book = myLibrary.find(book => book.id === id);
        if(book) {
            book.toggleReadStatus();
            displayBooks();
        }
    })
})

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

displayBooks();


const dialog = document.getElementById("book-dialog");
const form = document.getElementById("book-form");
const newBookBtn = document.getElementById("new-book-btn");
const cancelBtn = document.getElementById("cancel-btn");

newBookBtn.addEventListener("click", () => dialog.showModal());
cancelBtn.addEventListener("click", () => dialog.close());

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const title = formData.get("title");
    const author = formData.get("author");
    const pages = formData.get("pages");
    const isRead = formData.get("isRead") === "on"

    addBookToLibrary(title, author, pages, isRead);
    displayBooks();
    form.reset();        // (optionnel) pour réinitialiser le formulaire
    dialog.close()
} )

function removeBookById (id) {
    const index = myLibrary.findIndex(book => book.id === id);
    if(index !== -1) {
        myLibrary.splice(index, 1);
        displayBooks()
    }
}

Book.prototype.toggleReadStatus = function () {
    this.isRead = !this.isRead;
}