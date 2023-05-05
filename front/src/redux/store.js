import { configureStore } from "@reduxjs/toolkit";
import { queryReducer } from "./slices/query";
import { routesReducer } from "./slices/routes";

export default configureStore({
    reducer: {
        query: queryReducer,
        routes: routesReducer
    }
})