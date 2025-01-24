//Creacion libros
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
    bookList.innerHTML = books.map(book => `
        <div class="book">
            <span class="${book.available ? 'available' : 'borrowed'}">
                ${book.title} - ${book.author} (${book.genre})
            </span>
            <button onclick="${book.available ? `reserveBook(${book.id})` : `returnBook(${book.id})`}">
                ${book.available ? 'Reservar' : 'Devolver'}
            </button>
        </div>
    `).join('');
}

