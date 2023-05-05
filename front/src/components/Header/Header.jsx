import React from 'react'
import classes from './Header.module.css'
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={classes.header}>
        <Link to='/'><h2>PickTicket</h2></Link>
        <div className={classes.acc}>
            <span>
                <FaUserAlt/>
            </span>
            <span>
                <Link to='/login'>Войти</Link>
                <Link to='/register'>Регистрация</Link>
            </span>
        </div>
    </header>
  )
}

export default Header