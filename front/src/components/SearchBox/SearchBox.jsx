import React from 'react'
import classes from './SearchBox.module.css'

const SearchBox = () => {
  return (
    <div className={classes.searchbox}>
      <div className={classes.vehicles}>
        <button>Все билеты</button>
        <button>Самолеты</button>
        <button>Поезда</button>
        <button>Автобусы</button>
      </div>
      <form className={classes.moveinf}>
        <input type='text'/>
        <input type='text'/>
        <input type='date'/>
        <input type='date'/>

        <button>Найти билеты</button>
      </form>
    </div>
  )
}

export default SearchBox