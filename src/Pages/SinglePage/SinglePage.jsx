import './style.css'
import { Link } from "react-router-dom"

export default function SinglePage({ item }) {
    window.scrollTo(0, 0);

    const ingredientKeys = Object.keys(item).filter(key => key.includes('strIngredient'))

 
    const ingredients = ingredientKeys.reduce((acc, ingredientKey) => {
        const ingredient = item[ingredientKey]
        if (ingredient) {
            return [...acc, ingredient]
        }
        return acc
    }, [])

    return (
        <div className='single'>
            <div className="single__card" key={item.idDrink}>
            
            <img className="single__img" src={item.strDrinkThumb} alt="img" />
                <div className='single__info'>
                    <h3 className="single__title">{item.strDrink}</h3>
                    <p className="single__text">{item.strInstructions}</p>
                    <p className='single__price'> Price: {`$${Math.round(Number(item.idDrink) / 1000)}`}</p>
                    <ul className='card__ingridients'>
                        <h3 className='single__name'>Ingredients</h3>
                        {ingredients.map((ingredient, index) => (
                            <li key={index} className='card__item'>{index + 1}. {ingredient}</li>
                        ))}
                    </ul>
                    <Link className='btn-back' to='/catalog'>
                        <p className='btn-back__name'>Back</p> 
                    </Link>
                </div>
            
            
            </div>
        </div>
        
   )
}