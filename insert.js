// Вмъкване на документи в колекцията books
db.books.insertMany([
  { title: "Майстора и Маргарита", author: "Михаил Булгаков", year: 1967, genres: ["роман", "фантастика"], price: 15.99, stock: 5 },
  { title: "1984", author: "Джордж Оруел", year: 1949, genres: ["дистопия"], price: 12.5, stock: 10 },
  { title: "Престъпление и наказание", author: "Фьодор Достоевски", year: 1866, genres: ["роман", "класика"], price: 18.0, stock: 3 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genres: ["драма"], price: 14.0, stock: 7 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genres: ["роман"], price: 13.0, stock: 8 },
  { title: "Война и мир", author: "Лев Толстой", year: 1869, genres: ["исторически", "класика"], price: 20.0, stock: 2 },
  { title: "Brave New World", author: "Aldous Huxley", year: 1932, genres: ["дистопия", "фантастика"], price: 11.5, stock: 6 },
  { title: "Animal Farm", author: "Джордж Оруел", year: 1945, genres: ["сатира"], price: 10.0, stock: 9 },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866, genres: ["роман"], price: 17.0, stock: 4 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, genres: ["роман"], price: 13.5, stock: 5 }
]);

// Вмъкване на клиенти
db.customers.insertMany([
  { name: "Иван Иванов", email: "ivan@gmail.com", address: { city: "София", street: "ул. Витоша 1" }, phone: "0888123456" },
  { name: "Мария Петрова", email: "maria@gmail.com", address: { city: "Пловдив", street: "бул. България 5" }, phone: "0888345678" },
  { name: "Димитър Георгиев", email: "mitko@gmail.com", address: { city: "Варна", street: "ул. Морска 10" }, phone: "0899123456" },
  { name: "Елена Тодорова", email: "elena@gmail.com", address: { city: "Бургас", street: "ул. Централна 3" }, phone: "0888567890" },
  { name: "Николай Николов", email: "niko@gmail.com", address: { city: "Русе", street: "ул. Дунав 7" }, phone: "0877123456" },
  { name: "Гергана Илиева", email: "gergana@gmail.com", address: { city: "София", street: "бул. Цариградско шосе 99" }, phone: "0899456123" },
  { name: "Стефан Костов", email: "stefan@gmail.com", address: { city: "Варна", street: "ул. Черно море 8" }, phone: "0889988776" },
  { name: "Радостина Димова", email: "rado@gmail.com", address: { city: "Пловдив", street: "ул. Тракия 21" }, phone: "0888111222" },
  { name: "Галина Георгиева", email: "galina@gmail.com", address: { city: "София", street: "ул. Искър 17" }, phone: "0877123455" },
  { name: "Кирил Кирилов", email: "kiril@gmail.com", address: { city: "Шумен", street: "ул. Панайот Волов 33" }, phone: "0888999000" }
]);

// Вмъкване на поръчки
db.orders.insertMany([
  { customer_id: 1, book_title: "1984", quantity: 2, date: new Date("2024-06-10") },
  { customer_id: 2, book_title: "Майстора и Маргарита", quantity: 1, date: new Date("2024-06-11") },
  { customer_id: 3, book_title: "Animal Farm", quantity: 3, date: new Date("2024-06-12") },
  { customer_id: 4, book_title: "The Great Gatsby", quantity: 1, date: new Date("2024-06-12") },
  { customer_id: 5, book_title: "1984", quantity: 1, date: new Date("2024-06-13") },
  { customer_id: 6, book_title: "Brave New World", quantity: 2, date: new Date("2024-06-14") },
  { customer_id: 7, book_title: "Престъпление и наказание", quantity: 1, date: new Date("2024-06-15") },
  { customer_id: 8, book_title: "Война и мир", quantity: 1, date: new Date("2024-06-15") },
  { customer_id: 9, book_title: "To Kill a Mockingbird", quantity: 1, date: new Date("2024-06-16") },
  { customer_id: 10, book_title: "The Catcher in the Rye", quantity: 1, date: new Date("2024-06-16") }
]);

// Вмъкване на служители
db.employees.insertMany([
  { name: "Георги Георгиев", position: "мениджър", salary: 2500, hire_date: new Date("2022-01-10") },
  { name: "Анна Ангелова", position: "касиер", salary: 1500, hire_date: new Date("2023-03-15") },
  { name: "Михаил Петров", position: "логистика", salary: 1700, hire_date: new Date("2021-11-20") },
  { name: "Силвия Стоянова", position: "касиер", salary: 1500, hire_date: new Date("2023-06-05") },
  { name: "Тодор Иванов", position: "мениджър", salary: 2600, hire_date: new Date("2020-09-01") },
  { name: "Росица Димитрова", position: "счетоводител", salary: 2300, hire_date: new Date("2021-12-12") },
  { name: "Николета Георгиева", position: "логистика", salary: 1600, hire_date: new Date("2024-01-08") },
  { name: "Петър Йорданов", position: "касиер", salary: 1500, hire_date: new Date("2022-08-20") },
  { name: "Ивелина Станчева", position: "счетоводител", salary: 2200, hire_date: new Date("2023-02-28") },
  { name: "Борислав Кръстев", position: "логистика", salary: 1700, hire_date: new Date("2023-04-15") }
]);

// Вмъкване на издателства
db.publishers.insertMany([
  { name: "Colibri", country: "България", founded: 1990, genres: ["класика", "фантастика"] },
  { name: "SoftPress", country: "България", founded: 2001, genres: ["съвременна литература"] },
  { name: "Penguin Books", country: "UK", founded: 1935, genres: ["роман", "класика"] },
  { name: "HarperCollins", country: "USA", founded: 1989, genres: ["фантастика", "трилър"] },
  { name: "Faber & Faber", country: "UK", founded: 1929, genres: ["поезия", "драма"] },
  { name: "Altera", country: "България", founded: 2008, genres: ["съвременна литература"] },
  { name: "Random House", country: "USA", founded: 1927, genres: ["класика", "роман"] },
  { name: "Siela", country: "България", founded: 1995, genres: ["право", "бизнес"] },
  { name: "Prosveta", country: "България", founded: 1945, genres: ["учебници"] },
  { name: "Egmont", country: "Дания", founded: 1878, genres: ["детска литература"] }
]);
