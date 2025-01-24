// Datos iniciales
const books = [
    { id: 1, title: "JavaScript: The Good Parts", author: "Douglas Crockford", genre: "Programming", available: true },
    { id: 2, title: "Eloquent JavaScript", author: "Marijn Haverbeke", genre: "Programming", available: true },
    { id: 3, title: "Clean Code", author: "Robert C. Martin", genre: "Programming", available: true },
];

const borrowedBooks = [];
const notifications = [];

// Mostrar lista de libros
function displayBooks() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = ''; // Limpiar contenido previo

    for (let i = 0; i < books.length; i++) {
        const book = books[i];

        const bookDiv = document.createElement("div");
        bookDiv.className = "book";

        const bookInfo = document.createElement("span");
        bookInfo.className = book.available ? "available" : "borrowed";
        bookInfo.textContent = `${book.title} - ${book.author} (${book.genre})`;

        const actionButton = document.createElement("button");
        actionButton.textContent = book.available ? "Reservar" : "Devolver";
        actionButton.onclick = function () {
            if (book.available) {
                reserveBook(book.id);
            } else {
                returnBook(book.id);
            }
        };

        bookDiv.appendChild(bookInfo);
        bookDiv.appendChild(actionButton);
        bookList.appendChild(bookDiv);
    }
}




