import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookie from "universal-cookie"

const initialState = []

const cookie = new Cookie()


            // "origin": query.origin,
            // "destination": query.destination,
            // "departure_at": query.departure_at,
            // "return_at": query.return_at

export const fetchRoutes = createAsyncThunk('getRoutes',
    async (query) => {
        const data = await axios.post(`http://localhost:8080/${query.vehicle}`,
        {
            "origin": "Ставрополь",
            "destination": "Москва",
            "departure_at": "2023-06-03",
            "return_at": "2023-06-06"
        },
        {
            headers: {
                "Authorization" : `Bearer ${cookie.get("token")}`,
            }
        })

        return data
    }
)

const routesSlice = createSlice({
    name: "routesSlice",
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchRoutes.fulfilled]: (state, action) => {
            state = [...state, ...action.payload]
            console.log(state)
        }
    }
})

export const routesReducer = routesSlice.reducer
export const selectRoutes = (state) => state.routes