import React from 'react'
import classes from './MainPage.module.css'
import Header from '../../components/Header/Header'
import SearchBox from '../../components/SearchBox/SearchBox'

const MainPage = () => {
  return (
    <>
        <Header/>
        <main className={classes.main}>
            <h1>Подбор билетов для путешествий</h1>
            <p>Подбирайте и сравнивайте нужные билеты в один клик!</p>
            <SearchBox/>
        </main>
    </>
  )
}

export default MainPage