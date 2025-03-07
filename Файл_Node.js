const http = require('http');

// Создаем HTTP-сервер
const server = http.createServer((req, res) => {
  // Устанавливаем заголовок Content-Type
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // Обрабатываем запросы в зависимости от пути (URL)
  if (req.url === '/') {
    // Корневой путь
    res.statusCode = 200;
    res.end(`
      <!DOCTYPE html>
      <html lang="ru">
      <head>
        <meta charset="UTF-8">
        <title>Главная страница</title>
      </head>
      <body>
        <h1>Добро пожаловать!</h1>
        <p>Это главная страница.</p>
      </body>
      </html>
    `);
  } else if (req.url === '/about') {
    // Путь /about
    res.statusCode = 200;
    res.end(`
      <!DOCTYPE html>
      <html lang="ru">
      <head>
        <meta charset="UTF-8">
        <title>О нас</title>
      </head>
      <body>
        <h1>О нас</h1>
        <p>Это страница о нас.</p>
      </body>
      </html>
    `);
  } else {
    // Любой другой путь
    res.statusCode = 404;
    res.end(`
      <!DOCTYPE html>
      <html lang="ru">
      <head>
        <meta charset="UTF-8">
        <title>404 - Страница не найдена</title>
      </head>
      <body>
        <h1>404 - Страница не найдена</h1>
        <p>Извините, запрашиваемая страница не существует.</p>
      </body>
      </html>
    `);
  }
});

// Сервер слушает порт 3000
server.listen(3000, () => {
  console.log('Сервер запущен на http://localhost:3000');
});