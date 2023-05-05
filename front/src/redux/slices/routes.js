import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookie from "universal-cookie"

const initialState = []

const cookie = new Cookie()

export const fetchRoutes = createAsyncThunk('getRoutes',
    async (query) => {
        const data = await axios.post(`http://localhost:8080/${query.vehicle}`,
        {
            "origin": query.origin,
            "destination": query.destination,
            "departure_at": query.departure_at,
            "return_at": query.return_at
        },
        {
            headers: {
                "Authorization" : `Bearer ${cookie.get("token")}`,
            }
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
        [fetchRoutes.fulfilled]: (state, action) => {
            return [...action.payload]
        }
    }
})

export const routesReducer = routesSlice.reducer
export const selectRoutes = (state) => {
    return state.routes
}