//Creacion libros
const books = [
    { id: 1, title: "JavaScript: The Good Parts", author: "Douglas Crockford", genre: "Programming", available: true },
    { id: 2, title: "Eloquent JavaScript", author: "Marijn Haverbeke", genre: "Programming", available: true },
    { id: 3, title: "Clean Code", author: "Robert C. Martin", genre: "Programming", available: true },
];

const borrowedBooks = [];
const notifications = [];

// Mostrar lista de libros
function mostrarLibros() {
    let text = '';
    for (const book of books) {
        text += `ID: ${book.id} <br> Title: ${book.title} <br> Author: ${book.author} <br> Genre: ${book.genre} <br> Available: ${book.available} <br><br>`;
    }
    document.getElementById('book-list').innerHTML = text;
}

