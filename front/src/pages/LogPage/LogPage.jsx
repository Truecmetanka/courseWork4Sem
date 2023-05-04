import React from 'react'
import classes from './LogPage.module.css'
import { Link } from 'react-router-dom'

const LogPage = () => {
    const action = (event) => {
        event.preventDefault()
    }
  return (
    <div className={classes.wrap}>
        <div className={classes.reg}>
            <h1>Вход</h1>
            <form>
                <label htmlFor="usrname">ФИО:</label>
                <input type="text" name='usrname'/>
                <label htmlFor="pass">Пароль:</label>
                <input type="password" name='pass'/>
                <button onClick={(event) => {action(event)}}>Войти</button>
            </form>
        </div>
        <div className={classes.navs}>
            <Link to='/'>&laquo; Вернуться на главную</Link>
            <Link to='/register'>Желаете зарегестрироваться?&raquo;</Link>
        </div>
    </div>
  )
}

export default LogPage