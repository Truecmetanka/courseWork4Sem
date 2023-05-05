import axios from 'axios'
import React, { useEffect } from 'react'
import classes from './TicketList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectQuery } from '../../redux/slices/query'
import { fetchRoutes, selectRoutes } from '../../redux/slices/routes'

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
        }, [query])
    })

  return (
    <div>
        {/* {data.map((ticket, index) => <div className={classes.card}>
            aaa
        </div>)} */}
    </div>
  )
}

export default TicketList