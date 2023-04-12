import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FilterCaseType} from "../common/types/types";

const initialState: InitialStateStateType = {
    theme: 'light',
    isOpenBurger: false,
    isOpenForm: false,
    isModalWindowOpen: false,
    isOpenBonuseForm: false,
    isMenuOpen: false,
    isConsultantModalOpen: false,
    filterCase: 'all',

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
        setIsModalWindowOpenAC(state, action: PayloadAction<{ isOpen: boolean }>) {
            state.isModalWindowOpen = action.payload.isOpen
        },
        setIsConsultantModalOpenAC(state, action: PayloadAction<{ isOpen: boolean }>) {
            state.isConsultantModalOpen = action.payload.isOpen
        },
        setFilterCaseAC(state, action: PayloadAction<{ filter: FilterCaseType }>) {
            state.filterCase = action.payload.filter
        },
        setIsOpenBonuseFormAC(state, action: PayloadAction<{ isOpen: boolean }>) {
            state.isOpenBonuseForm = action.payload.isOpen
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
    isOpenBonuseForm: boolean,
    status: RequestStatusType,
    error: string | null,
    theme: ThemeType,
    isModalWindowOpen: boolean,
    isConsultantModalOpen: boolean,
    filterCase: FilterCaseType


}
export type RequestStatusType = 'idle' | 'loading' | 'error'
export type ThemeType = 'light' | 'dark'


export const appReducer = slice.reducer
export const {
    setThemeAC,
    setIsOpenFormAC,
    setIsModalWindowOpenAC,
    setIsConsultantModalOpenAC,
    setIsMenuOpenAC,
    setIsOpenBurgerAC,
    setAppStatusAC,
    setAppErrorAC,
    setFilterCaseAC,
    setIsOpenBonuseFormAC
} = slice.actions
