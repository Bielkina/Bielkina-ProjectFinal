import React, { useState } from 'react'; 
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom';
import './style.css';

import FilterDropdown from '../../component/FilterDropdown.jsx';
import SearchInput from '../../component/SearchImput/SearchInput.jsx';


// Функція для отримання унікальних значень алкогольних опцій
function getUniqueAlcoholOptions(cocktails) {
  console.log(cocktails);
  const uniqueAlcohols = [...new Set(cocktails.map(item => item.strAlcoholic))]
  return uniqueAlcohols
}

// Функція для отримання унікальних інгредієнтів
function getUniqueIngredients(cocktails) {
  const uniqueIngredients = [...new Set(
    cocktails.reduce((ingredients, item) => {
      for (let i = 1; i <= 15; i++) {
        if (item[`strIngredient${i}`]) {
          ingredients.push(item[`strIngredient${i}`])
        }
      }
      return ingredients
    }, [])
  )];
  return uniqueIngredients.sort()
}

// Функція для отримання унікальних категорій
function getUniqueCategories(cocktails) {
  const uniqueCategories = [...new Set(cocktails.map(item => item.strCategory))]
  return uniqueCategories
}

export default function Catalog({ cocktails, onLoadMore, loading }) {
  window.scrollTo(0, 0);
  // Фільтрація за назвою напою
  const filterCocktailsName = (searchText) => {
    const filtered = cocktails.filter(item => {
      return item.strDrink.toLowerCase().startsWith(searchText.toLowerCase())
    })
    setFilteredCocktails(filtered)
  }

  // Обробник пошукового запиту
  const handleSearch = (searchText) => {
    console.log(searchText)
    filterCocktailsName(searchText)
  }
 
  // Отримання унікальних значень для фільтрів
  const uniqueAlcoholOptions = getUniqueAlcoholOptions(cocktails)
  const uniqueIngredientsOptions = getUniqueIngredients(cocktails)
  const uniqueCategoriesOptions = getUniqueCategories(cocktails)

  // Перетворення унікальних значень в опції для випадаючих списків
  const options = uniqueAlcoholOptions.map(option => ({ value: option, label: option }))
  const ingredientOptions = uniqueIngredientsOptions.map(option => ({ value: option, label: option }))
  const categoryOptions = uniqueCategoriesOptions.map(option => ({ value: option, label: option }))

  // Значення за замовчуванням для фільтрів
  const defaultAlcoholOption = { value: '', label: 'Select Alcohol' }
  const defaultIngredientOption = { value: '', label: 'Select Ingredient' }
  const defaultCategoryOption = { value: '', label: 'Select Category' }

  // Стейти для вибраних опцій та відфільтрованих напоїв
  const [selectedAlcohol, setSelectedAlcohol] = useState(defaultAlcoholOption)
  const [selectedIngredient, setSelectedIngredient] = useState(defaultIngredientOption)
  const [selectedCategory, setSelectedCategory] = useState(defaultCategoryOption)
  const [filteredCocktails, setFilteredCocktails] = useState(cocktails)

  // Обробники змін фільтрів
  const handleAlcoholFilterChange = selectedOption => {
    setSelectedAlcohol(selectedOption)
    filterCocktails(selectedOption.value, selectedIngredient.value, selectedCategory.value)
  }

  const handleIngredientFilterChange = selectedOption => {
    setSelectedIngredient(selectedOption)
    filterCocktails(selectedAlcohol.value, selectedOption.value, selectedCategory.value)
  }

  const handleCategoryFilterChange = selectedOption => {
    setSelectedCategory(selectedOption)
    filterCocktails(selectedAlcohol.value, selectedIngredient.value, selectedOption.value)
  }

  // Фільтрація напоїв за всіма вибраними параметрами
  const filterCocktails = (alcoholicValue, ingredientValue, categoryValue) => {
    const filtered = cocktails.filter(item => {
      const matchAlcoholic = alcoholicValue === '' || item.strAlcoholic === alcoholicValue
      let matchIngredient = false
      for (let i = 1; i <= 15; i++) {
        if (ingredientValue === '' || item[`strIngredient${i}`] === ingredientValue) {
          matchIngredient = true;
        }
      }
      const matchCategory = categoryValue === '' || item.strCategory === categoryValue
      return matchAlcoholic && matchIngredient && matchCategory
    });
    setFilteredCocktails(filtered)
  }

  // Рендер каталогу з відфільтрованими напоями
   return (
    <section className="catalog">
       <div className='catalog__filter'>
        <h1 className="catalog__title">Catalog drinks</h1>
        <div className="search-container">
          <SearchInput onSearch={handleSearch} />
        </div>
       </div> 
        
       <div className='catalog__dropMenu'>
        <FilterDropdown
          options={[defaultAlcoholOption, ...options]}
          value={selectedAlcohol}
          onSelectChange={handleAlcoholFilterChange}
          placeholder={defaultAlcoholOption.label}
        />
        <FilterDropdown
          options={[defaultIngredientOption, ...ingredientOptions]}
          value={selectedIngredient}
          onSelectChange={handleIngredientFilterChange}
          placeholder={defaultIngredientOption.label}
        />
        <FilterDropdown
          options={[defaultCategoryOption, ...categoryOptions]}
          value={selectedCategory}
          onSelectChange={handleCategoryFilterChange}
          placeholder={defaultCategoryOption.label}
        />
      </div>

      <div className="catalog__container">
       
        {filteredCocktails.map(item => (
          <Link className='catalog__link' key={item.idDrink} to={`/post/${item.idDrink}`}>
            <div className={`catalog__card ${selectedAlcohol.value === item.strAlcoholic ? 'selected' : ''}`}>
              <img className="catalog__img" src={item.strDrinkThumb} alt="cocktail" />
              <h3 className="catalog__name">{item.strDrink}</h3>
            </div>
          </Link>
        ))}
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <button onClick={onLoadMore} disabled={loading}>
          Load More
        </button>
      )}
    </section>
  )
}