import React from 'react';
import { Link } from "react-router-dom"

import Logo from '../../Images/logoText.png'
import BarmanImg from '../../Images/serviceBarMan.jpg'
import CoctailImg from '../../Images/serviceCoctail.jpg'
import CompanyImg from '../../Images/serviceCompany.jpg'
import HotCoctailImg from '../../Images/serviceHotCocktail.jpg'
import './style.css';

export default function Home() {
    return (
        <main>
            <section className="hero">
                <div className='hero__container'>
                    <div className='hero__content'>
                        <img className='hero__img' src={Logo} alt="logo" width={700}/>
                        <p className='hero__text'>Enjoy our finest delicioous lemon flavoured beverages</p>  
                    </div>
                    
                    <Link className='hero__btn' to='/menu'>
                        <p className='hero__btn-name'>To cocktails</p> 
                    </Link>
                </div>

            </section>
            
            <section className='history'>
                <div className='history__container'>
                    <h2 className='history__title'>History</h2>
                    <p className='history__text'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla aspernatur libero similique quis et animi doloremque eos, consectetur soluta provident facilis harum, molestias asperiores. Excepturi voluptas at temporibus iure praesentium, incidunt ipsam molestiae distinctio, optio sequi nihil odit pariatur officia est repudiandae magni laudantium dolores quos cupiditate earum. Doloremque fuga ipsum quibusdam repellat unde veniam cum.
                    </p>
                </div>
            </section>

            <section className='service'>

                 <div className='service__container'>
                    <div className='service__bg-img'>
                        <img className='service__img' src={CoctailImg} alt="barman" width={750} />
                    </div>
                    <div className='service__bg-color'>
                        <p className='service__text'>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </div>
                </div>
                    <div className='service__container service__container-reverse'>
                    <div className='service__bg-img'>
                        <img className='service__img' src={BarmanImg} alt="barman" width={750} />
                    </div>
                    <div className='service__bg-color'>
                        <p className='service__text'>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </div>
                </div>
                 <div className='service__container'>
                    <div className='service__bg-img'>
                        <img className='service__img' src={CompanyImg} alt="company" width={750} />
                    </div>
                    <div className='service__bg-color'>
                        <p className='service__text'>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </div>
                </div>
                 <div className='service__container service__container-reverse'>
                    <div className='service__bg-img'>
                        <img className='service__img' src={HotCoctailImg} alt="hotCoctail" width={750} />
                    </div>
                    <div className='service__bg-color'>
                        <p className='service__text'>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </div>
                </div>
            </section>

            
        

        </main>
            

    )     
}