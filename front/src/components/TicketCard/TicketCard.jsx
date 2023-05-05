import React from 'react'
import classes from './TicketCard.module.css'
import moment from 'moment'
import { MdFlightTakeoff, MdFlightLand } from 'react-icons/md';

const TicketCard = ({origin_airport, destination_airport, price, airline,
    flight_number, departure_at, return_at, transfers, return_transfers,
    duration, duration_to, duration_back, link, IATA, origin, destination
}) => {

    const dep = new Date(departure_at)
    const arr_to = moment(dep).add(duration_to, 'm').toDate()
    const ret = new Date(return_at)
    const arr_from = moment(ret).add(duration_back, 'm').toDate()

    const weekdays = ["Вск", "Пн", "Вт", "Ср", "Чт","Пт", "Сб"]

    const leadZeroes = (num) => {
        console.log(("0" + num).slice(-2))
        return ("0" + num).slice(-2)
    }

    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]

  return (
    <div className={classes.card}>
        <div className={classes.info}>
            <div><img src={`http://pics.avs.io/200/30/${IATA}.png`}/></div>
            <div><h3>Стоимость: {price} &#8381;</h3></div>
            <a href={`https://aviasales.ru${link}`} target='_blank'>Оформить</a>
        </div>
        <div className={classes.trip}>
            <div className={classes.date_time}>
                <h3>{leadZeroes(dep.getHours())}:{leadZeroes(dep.getMinutes())}</h3>
                <p>{origin}</p>
                <p>{dep.getDate()} {months[dep.getMonth()]}, {weekdays[dep.getDay()]}</p>
            </div>
            <div className={classes.flight}>
                <MdFlightTakeoff/>
                <span>{Math.trunc(duration_to/60)}ч. {duration_to%60}мин.</span>
                <MdFlightLand/>
                <div className={classes.flight_line}></div>
                <span>{origin_airport}</span>
                <span>{destination_airport}</span>
            </div>
            <div className={classes.date_time}>
                <h3>{(leadZeroes((dep.getHours() + Math.trunc(duration_to/60))%24))}:{leadZeroes((dep.getMinutes() + duration_to)%60)}</h3>
                <p>{destination}</p>
                <p>{arr_to.getDate()} {months[arr_to.getMonth()]}, {weekdays[arr_to.getDay()]}</p>
            </div>
        </div>
    </div>
  )
}

export default TicketCard