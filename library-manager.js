// ============================================
// Практичне завдання 2: Менеджер Бібліотеки Книг
// ============================================

// 1. Початковий масив бібліотеки (щонайменше 5 книг)
let library = [
    {
        title: "1984",
        author: "Джордж Орвелл",
        year: 1949,
        genre: "Дистопія",
        available: true
    },
    {
        title: "Гаррі Поттер і філософський камінь",
        author: "Дж. К. Ролінг",
        year: 1997,
        genre: "Фентезі",
        available: false
    },
    {
        title: "Володар перснів",
        author: "Дж. Р. Р. Толкін",
        year: 1954,
        genre: "Фентезі",
        available: true
    },
    {
        title: "Код да Вінчі",
        author: "Ден Браун",
        year: 2003,
        genre: "Детектив",
        available: true
    },
    {
        title: "Маленький принц",
        author: "Антуан де Сент-Екзюпері",
        year: 1943,
        genre: "Філософія",
        available: false
    }
];

// ============================================
// 2. Функції
// ============================================

/**
 * Додає нову книгу до бібліотеки
 * @param {Array} library - масив книг
 * @param {Object} newBook - об'єкт нової книги
 */
function addBook(library, newBook) {
    library.push(newBook);
    console.log(`Книга "${newBook.title}" додана до бібліотеки.`);
}

/**
 * Видаляє книгу за назвою
 * @param {Array} library - масив книг
 * @param {string} title - назва книги
 */
const removeBook = (library, title) => {
    const index = library.findIndex(book => book.title === title);

    if (index === -1) {
        console.log("Книга не знайдена.");
        return;
    }

    library.splice(index, 1);
    console.log(`Книга "${title}" видалена.`);
};

/**
 * Шукає книги за автором
 * @param {Array} library - масив книг
 * @param {string} author - ім'я автора
 * @returns {Array} - масив знайдених книг
 */
function findBooksByAuthor(library, author) {
    const foundBooks = library.filter(book => book.author === author);

    if (foundBooks.length === 0) {
        console.log(`Книги автора "${author}" не знайдено.`);
        return [];
    }

    console.log(`Книги автора "${author}":`);
    foundBooks.forEach(book => {
        const status = book.available ? "Доступна" : "Видана";
        console.log(`- ${book.title} (${book.year}, ${book.genre}, ${status})`);
    });

    return foundBooks;
}

/**
 * Повертає загальну кількість книг у бібліотеці
 * @param {Array} library - масив книг
 * @returns {number}
 */
const getTotalBooks = (library) => {
    const total = library.length;
    console.log(`Загальна кількість книг: ${total}`);
    return total;
};

/**
 * Змінює статус доступності книги (доступна ↔ видана)
 * @param {Array} library - масив книг
 * @param {string} title - назва книги
 */
function toggleAvailability(library, title) {
    const book = library.find(book => book.title === title);

    if (!book) {
        console.log("Книга не знайдена.");
        return;
    }

    book.available = !book.available;
    const newStatus = book.available ? "доступна" : "видана";
    console.log(`Статус книги "${title}" змінено на: ${newStatus}.`);
}

// ============================================
// 3. Демонстрація роботи всіх функцій
// ============================================

console.log("=== Початковий стан бібліотеки ===");
getTotalBooks(library);
console.log("");

// Додаємо нову книгу
const newBook = {
    title: "Шерлок Холмс",
    author: "Артур Конан Дойл",
    year: 1887,
    genre: "Детектив",
    available: true
};
addBook(library, newBook);
console.log("");

// Шукаємо книги за автором
findBooksByAuthor(library, "Дж. К. Ролінг");
console.log("");

// Загальна кількість книг після додавання
getTotalBooks(library);
console.log("");

// Змінюємо статус книги
toggleAvailability(library, "1984");
console.log("");

// Видаляємо книгу
removeBook(library, "1984");
console.log("");

// Спроба видалити неіснуючу книгу
removeBook(library, "Неіснуюча книга");
console.log("");

// Фінальна кількість книг
getTotalBooks(library);
