import { configureStore } from "@reduxjs/toolkit"
import { todoAPI } from "./services/todoApi"
import { setupListeners } from "@reduxjs/toolkit/query"


export const makeStore = () => configureStore({
    reducer: {
        [todoAPI.reducerPath]: todoAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoAPI.middleware)
})


export type AppStore = ReturnType<typeof makeStore>

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
