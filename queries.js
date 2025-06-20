// Прочитане на всички книги
db.books.find();

// Филтриране на книги по жанр
db.books.find({ genres: "дистопия" });

// Обновяване на наличността на книга
db.books.updateOne({ title: "1984" }, { $set: { stock: 12 } });

// Изтриване на книга по заглавие
db.books.deleteOne({ title: "The Catcher in the Rye" });

// Агрегация: групиране по жанр и средна цена
db.books.aggregate([
  { $unwind: "$genres" },
  { $group: { _id: "$genres", avgPrice: { $avg: "$price" } } },
  { $sort: { avgPrice: -1 } }
]);
