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

// Buscar libros
function searchBooks() {
    const query = document.getElementById("search").value.toLowerCase();
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.genre.toLowerCase().includes(query)
    );

    const bookList = document.getElementById("book-list");
    bookList.innerHTML = ''; // Limpiar contenido previo

    for (let i = 0; i < filteredBooks.length; i++) {
        const book = filteredBooks[i];

        const bookDiv = document.createElement("div");
        bookDiv.className = "book";

        const bookInfo = document.createElement("span");
        bookInfo.className = book.available ? "available" : "borrowed";
        bookInfo.textContent = `${book.title} - ${book.author} (${book.genre})`;

        bookDiv.appendChild(bookInfo);
        bookList.appendChild(bookDiv);
    }
}

// Reservar libro
function reserveBook(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book) {
        book.available = false;
        borrowedBooks.push(book);
        addNotification(`${book.title} reservado con éxito.`);
        setTimeout(() => addNotification(`Recordatorio: Devuelve el libro ${book.title}.`), 5000); // Recordatorio a los 5 segundos
        displayBooks();
    }
}

// Devolver libro
function returnBook(bookId) {
    const bookIndex = borrowedBooks.findIndex(b => b.id === bookId);
    if (bookIndex !== -1) {
        const book = borrowedBooks.splice(bookIndex, 1)[0];
        book.available = true;
        addNotification(`${book.title} devuelto con éxito.`);
        displayBooks();
    }
}




