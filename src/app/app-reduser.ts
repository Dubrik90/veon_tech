import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: InitialStateStateType = {
    theme: 'light',
    isOpenBurger: false,
    isOpenForm: false,

    isMenuOpen: false,

    status: 'loading',
    error: null
}


const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setThemeAC(state, action: PayloadAction<{ theme: ThemeType }>) {
            state.theme = action.payload.theme;
        },
        setIsOpenBurgerAC(state, action: PayloadAction<{ isOpen: boolean }>) {
            state.isOpenBurger = action.payload.isOpen
        },
        setIsOpenFormAC(state, action: PayloadAction<{ isOpen: boolean }>) {
            state.isOpenForm = action.payload.isOpen
        },

        setIsMenuOpenAC(state, action: PayloadAction<{ value: boolean }>) {
            return {...state, isMenuOpen: action.payload.value}
        },
        setAppStatusAC(state, action: PayloadAction<{ status: RequestStatusType }>) {
            return {...state, status: action.payload.status}
        },
        setAppErrorAC(state, action: PayloadAction<{ error: string }>) {
            return {...state, error: action.payload.error}
        }
    }
})

type InitialStateStateType = {
    isMenuOpen: boolean,
    isOpenBurger: boolean,
    isOpenForm: boolean,
    status: RequestStatusType,
    error: string | null,
    theme: ThemeType

}
export type RequestStatusType = 'idle' | 'loading' | 'error'
export type ThemeType = 'light' | 'dark'


export const appReducer = slice.reducer
export const {setThemeAC, setIsOpenFormAC, setIsMenuOpenAC, setIsOpenBurgerAC, setAppStatusAC, setAppErrorAC} = slice.actions
