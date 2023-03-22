import thunkMiddleware from 'redux-thunk';
import {AnyAction, combineReducers, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {appReducer} from "./app-reduser";



const rootReducer = combineReducers({
    app: appReducer,
   // books: booksReducer,
   // card: cardReducer,
   // user: userReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
>
// @ts-ignore
window.store = store;




