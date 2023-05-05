import axios from 'axios'
import React, { useEffect } from 'react'
import classes from './TicketList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectQuery } from '../../redux/slices/query'
import { fetchRoutes, selectRoutes } from '../../redux/slices/routes'
import TicketCard from '../TicketCard/TicketCard'

const TicketList = () => {

    const query = useSelector(selectQuery)

    const data = useSelector(selectRoutes)

    const dispatch = useDispatch()

    useEffect(() => {
        query.vehicles.forEach((vehicle) => {
            dispatch(fetchRoutes({
                origin: query.origin,
                destination: query.destination,
                departure_at: query.departure_at,
                return_at: query.return_at,
                vehicle: vehicle
            }))
        })
    }, [query])
  return (
    <div className={classes.tickets}>
        {data.map((ticket, index) =>
            <TicketCard key={index} 
                origin_airport={ticket.origin_airport}
                destination_airport={ticket.destination_airport}
                price={ticket.price} 
                airline={ticket.airline}
                flight_number={ticket.flight_number} 
                departure_at={ticket.departure_at}
                return_at={ticket.return_at} 
                transfers={ticket.transfers}
                return_transfers={ticket.return_transfers} 
                duration={ticket.duration}
                duration_to={ticket.duration_to} 
                duration_back={ticket.duration_back}
                link={ticket.link} 
                IATA={ticket.IATA} 
                origin={query.origin}
                destination={query.destination}/>)}
    </div>
  )
}

export default TicketList