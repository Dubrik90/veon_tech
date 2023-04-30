import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CasesType, CaseType, FilterCaseType} from "../common/types/types";
import {ROUTS} from "../common/constans/routs";
import rentMarket from "../pages/cases/assets/rentMarket.png";
import couchingVisit from "../pages/cases/assets/couchingVisit.png";
import partyCorporat from "../pages/cases/assets/partyCorporat.png";
import prosnowVisit from "../pages/cases/assets/prosnowVisit.png";
import elephantVizit from "../pages/cases/assets/elephantVizit.png";
import granitCatalog from "../pages/cases/assets/granitCatalog.png";
import mediaCorporat from "../pages/cases/assets/mediaCorporat.png";
import noomblistMarket from "../pages/cases/assets/noomblistMarket.png";
import sdCatalog from "../pages/cases/assets/sdCatalog.png";
import sodoxCatalog from "../pages/cases/assets/sodoxCatalog.png";
import wellCatalog from "../pages/cases/assets/wellCatalog.png";

const initialState: InitialStateStateType = {
    theme: 'light',
    isOpenBurger: false,
    isOpenForm: false,
    isModalWindowOpen: false,
    isWaterfallModalOpen: false,
    isScramModalOpen: false,
    isOpenBonuseForm: false,
    isMenuOpen: false,
    isConsultantModalOpen: false,
    filterCase: [],
    cases: [
        {id: '1', type: 'magazines', title: 'Интернет-магазины', route: ROUTS.CASE_RENT_CLUB, img: rentMarket},
        {id: '2', type: 'visit', title: 'Сайт-визитки', route: ROUTS.CASE_CENTAVRAS, img: couchingVisit},
        {id: '3', type: 'sites', title: 'Корпоративные сайты', route: ROUTS.CASE_PARTY_INTEL, img: partyCorporat},
        {id: '4', type: 'visit', title: 'Сайт-визитки', route: ROUTS.CASE_OPTICS, img: prosnowVisit},
        {id: '5', type: 'visit', title: 'Сайт-визитки', route: ROUTS.CASE_PAPPY_ELEPHANT, img: elephantVizit},
        {id: '6', type: 'catalogs', title: 'Интеренет-каталоги', route: ROUTS.CASE_GRANIT, img: granitCatalog},
        {id: '7', type: 'sites', title: 'Корпоративные сайты', route: ROUTS.CASE_RENT_CLUB, img: mediaCorporat},
        {id: '8', type: 'magazines', title: 'Интернет-магазины', route: ROUTS.CASE_RENT_CLUB, img: noomblistMarket},
        {id: '9', type: 'catalogs', title: 'Интеренет-каталоги', route: ROUTS.CASE_RENT_CLUB, img: sdCatalog},
        {id: '10', type: 'catalogs', title: 'Интеренет-каталоги', route: ROUTS.CASE_RENT_CLUB, img: sodoxCatalog},
        {id: '11', type: 'catalogs', title: 'Интеренет-каталоги', route: ROUTS.CASE_SWISS, img: wellCatalog},
    ],

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
        setFilterCaseAC(state, action: PayloadAction<{ filter: string[] }>) {
         //   console.log(action.payload.filter)
            state.filterCase = action.payload.filter
        },
        setIsOpenBonuseFormAC(state, action: PayloadAction<{ isOpen: boolean }>) {
            state.isOpenBonuseForm = action.payload.isOpen
        },
        setWaterfallModalOpenAC(state, action: PayloadAction<{ isOpen: boolean }>) {
            state.isWaterfallModalOpen = action.payload.isOpen
        },
        setScramModalOpenAC(state, action: PayloadAction<{ isOpen: boolean }>) {
            state.isScramModalOpen = action.payload.isOpen
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
    isWaterfallModalOpen: boolean,
    isScramModalOpen: boolean,
    status: RequestStatusType,
    error: string | null,
    theme: ThemeType,
    isModalWindowOpen: boolean,
    isConsultantModalOpen: boolean,
    filterCase: string[],
    cases: CaseType[]
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
    setIsOpenBonuseFormAC,
    setWaterfallModalOpenAC,
    setScramModalOpenAC
} = slice.actions
