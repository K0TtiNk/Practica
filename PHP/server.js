const express = require('express');
const app = express();
const path = require('path');

// Middleware для обработки данных формы
app.use(express.urlencoded({ extended: true }));

// Отдача статического HTML-файла
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'PHP_index.html'));
});

// Обработка POST-запроса
app.post('/submit', (req, res) => {
  const name = req.body.name; // Получаем имя из формы
  const age = req.body.age;   // Получаем возраст из формы
  res.send(`Данные получены! Имя: ${name}, Возраст: ${age}`);
});

// Запуск сервера
app.listen(3000, () => {
  console.log('Сервер запущен на http://localhost:3000');
});