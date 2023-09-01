// import { useEffect, useState } from 'react';
import useFetch from 'react-fetch-hook';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Catalog from './Pages/Catalotg/Catalog.jsx';
import Menu from './Pages/Menu/Menu.jsx'
import SinglePage from './Pages/SinglePage/SinglePage.jsx';
import NotFound from './component/PageNotFound/PageNotFound.jsx';
import Header from './component/Header/Header.jsx';
import Footer from './component/Footer/Footer.jsx';
import './global.css';


export default function App() {
   const { data } = useFetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
   const cocktails = data?.drinks || []


    const { data: randomCocktailsData1 } = useFetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const randomCocktail1 = randomCocktailsData1?.drinks[0];
    
    const { data: randomCocktailsData2 } = useFetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const randomCocktail2 = randomCocktailsData2?.drinks[0];
    
    const { data: randomCocktailsData3 } = useFetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const randomCocktail3 = randomCocktailsData3?.drinks[0];


   console.log(cocktails);
   console.log(randomCocktail1);

   return (
      <div className="wrapper">
         <div className='wrapper__container'>
            <Header />
                     <main>
                        <Routes>
                           <Route path='/' element={<Home />} />
                           <Route path='/catalog' element={<Catalog cocktails={cocktails} />} />
                           <Route path='/menu' element={<Menu cocktails={cocktails} randomCocktail1={randomCocktail1}  randomCocktail2={randomCocktail2} randomCocktail3={randomCocktail3}/>} />
                           {cocktails.map(item => (
                              <Route key={item.idDrink} path={`/post/${item.idDrink}`} element={<SinglePage item={item} />} />
                           ))}
                           <Route path='*' element={<NotFound />} />
                        </Routes>
                     </main>
                     <Footer />
                  </div>
         </div>
         
   );
}