import React from 'react'
import classes from './Header.module.css'
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className={classes.header}>
        <h2>PickTicket</h2>
        <div className={classes.acc}>
            <span>
                <FaUserAlt/>
            </span>
            <span>
                <div>Войти</div>
                <div>Регистрация</div>
            </span>
        </div>
    </header>
  )
}

export default Header