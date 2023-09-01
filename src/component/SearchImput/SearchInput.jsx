import React, { useState } from 'react'; 
import './style.css';

// Функціональний компонент для поля введення пошукового запиту
export default function SearchInput({ onSearch }) {
  const [searchText, setSearchText] = useState('') // Стан для збереження тексту пошукового запиту

  // Обробник зміни тексту в полі введення
  const handleSearchChange = (event) => {
    const newSearchText = event.target.value // Отримуємо новий текст з події
    setSearchText(newSearchText) // Змінюємо стан з текстом пошукового запиту
    onSearch(newSearchText) // Викликаємо передану функцію для обробки пошукового запиту
  }

  // Відображення компонента поля введення пошукового запиту
  return (
    <div className="search">
      {/* Поле введення для пошукового запиту */}
      <input
        className="search__inp"
        type="text"
        placeholder="Search..."
        value={searchText} // Призначаємо значення зі стану для відображення
        onChange={handleSearchChange} // При зміні введення викликаємо обробник зміни
      />
      {/* Додатковий елемент для стилізації */}
      <div className="search__div"></div>
    </div>
  );
}