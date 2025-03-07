// ClickCounter.js
import React, { useState } from 'react'; // Импортируем useState

const ClickCounter = () => {
  // Используем хук useState для управления состоянием счетчика
  const [count, setCount] = useState(0);

  // Обработчик для увеличения счетчика на 1
  const handleClick = () => {
    setCount(count + 1);
  };

  // Обработчик для уменьшения счетчика на 1
  const handleClick1 = () => {
    setCount(count - 1);
  };

  // Обработчик для сброса счетчика
  const handleClick2 = () => {
    setCount(0);
  };

  return (
    <div>
      <button key="1" onClick={handleClick}>Кнопка +1</button>
      <button key="2" onClick={handleClick1}>Кнопка -1</button>
      <button key="3" onClick={handleClick2}>Сброс</button>
      <span key="4">{count}</span>
    </div>
  );
};

export default ClickCounter; // Экспорт по умолчанию