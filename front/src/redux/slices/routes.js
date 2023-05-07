import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookie from "universal-cookie"

const initialState = {
    flights:[],
    trains: []
}

const cookie = new Cookie()

export const fetchFlights = createAsyncThunk('getFlights',
    async (query) => {
        const data = await axios.post(`http://localhost:8080/getFlights`,
        {
            "origin": query.origin,
            "destination": query.destination,
            "departure_at": query.departure_at,
            "return_at": query.return_at
        })

        return data.data
    }
)

export const fetchTrains = createAsyncThunk('getTrains',
    async (query) => {
        const data = await axios.post(`http://localhost:8080/getTrains`,
        {
            "from": query.origin,
            "to": query.destination,
            "departure_at": query.departure_at
        })

        return data.data
    }
)


export const fetchBuses = createAsyncThunk('getFlights',
    async (query) => {
        const data = await axios.post(`http://localhost:8080/getBuses`,
        {
            "origin": query.origin,
            "destination": query.destination,
            "departure_at": query.departure_at,
            "return_at": query.return_at
        })

        return data.data
    }
)

const routesSlice = createSlice({
    name: "routesSlice",
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchFlights.fulfilled]: (state, action) => {
            return {...state, flights: [...action.payload]}
        },
        [fetchTrains.fulfilled]: (state, action) => {
            return {...state, trains: [...action.payload]}
        }
    }
})

export const routesReducer = routesSlice.reducer
export const selectRoutes = (state) => state.routes