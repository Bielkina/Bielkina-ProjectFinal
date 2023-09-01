import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

import MenuCocktailGinFizz from '../../Images/menuCocktailGinFizz.png'

export default function Menu({ cocktails, randomCocktail1, randomCocktail2, randomCocktail3}) {
    return (
        <div className='menu'>
            <div className="menu__container">
                <div className='top'>
                    <h1 className='top__title'>Our Top 3 picks</h1>
                    <ul className='top__list'>
                        <li className='top__item'>
                            <div className="top__content">
                                <div className='top__card'>
                                    <img className='top__img' src={randomCocktail1?.strDrinkThumb} alt="MenuImage" data-instructions={randomCocktail2?.strInstructions}/>
                                    <div className='top__front'>
                                        <p className='top__discription'>
                                            {randomCocktail1?.strInstructions}
                                        </p>
                                    </div>
                                </div>
                                <p className='top__text'>{randomCocktail1?.strDrink}</p>
                            </div>   
                        </li>
                        <li className='top__item'>
                            <div className="top__content">
                                <div className='top__card'>
                                    <img className='top__img' src={randomCocktail2?.strDrinkThumb} alt="MenuImage" data-instructions={randomCocktail2?.strInstructions}/>
                                    <div className='top__front'>
                                        <p className='top__discription'>
                                            {randomCocktail2?.strInstructions}
                                        </p>
                                    </div>
                                </div>
                                <p className='top__text'>{randomCocktail2?.strDrink}</p>
                            </div>   
                        </li>
                        <li className='top__item'>
                            <div className="top__content">
                                <div className='top__card'>
                                    <img className='top__img' src={randomCocktail3?.strDrinkThumb} alt="MenuImage" data-instructions={randomCocktail2?.strInstructions}/>
                                    <div className='top__front'>
                                        <p className='top__discription'>
                                            {randomCocktail3?.strInstructions}
                                        </p>
                                    </div>
                                </div>
                                <p className='top__text'>{randomCocktail3?.strDrink}</p>
                            </div>   
                        </li>
                    </ul>
                </div>
            
                <div className='cocktail'>
                   
                        <img className='cocktail__img' src={MenuCocktailGinFizz} alt="menuCocktail" />
                    <div className="cocktail__cocktailMenu">
                    <h3 className='cocktail__title'>Cocktail Menu</h3>

                    {cocktails.map(item => (
                        <Link className='cocktai__list' key={item.idDrink} to={`/post/${item.idDrink}`}>
                            <h3 className="cocktail__name">{item.strDrink}</h3>
                            <p className='cocktail__price'>{`$${Math.round(Number(item.idDrink) / 1000)}`}</p>
                        </Link> 
                    ))}
                        <Link className='cocktail__btn' to='/catalog'>
                            <p className='cocktail__btn-name'>Show more information</p> 
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}