import {useLocation, Link } from "react-router-dom"
import React, { useState } from 'react'
import './style.css'

import Modal from "../Modal/Modal"


export default function Header() {
  const location = useLocation()
  const [showModal, setShowModal] = useState(false)
 
  
  const toggleModal = () => {
    setShowModal(!showModal)
  }



 return (
    <header className="header">
      <nav className="header__nav">
         <ul className="header__list">
          <li className={`header__link ${location.pathname === '/' ? 'active' : ''}`}>
            <Link className="header__text" to="/">
              Home
            </Link>
          </li>
          <li className={`header__link ${location.pathname === '/histoty' ? 'active' : ''}`}>
            <Link className="header__text" to="/histoty">
              Blog
            </Link>
          </li>
          <li className={`header__link ${location.pathname === '/menu' ? 'active' : ''}`}>
            <Link className="header__text" to="/menu">
              Menu
            </Link>
          </li>
          <li className="header__link">
            <button className="header__text" onClick={toggleModal}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
      {showModal && <Modal onClose={toggleModal} />}
    </header>
  );
}