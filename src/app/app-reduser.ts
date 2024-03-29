import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CaseType} from "../common/types/types";
import {ROUTS} from "../common/constans/routs";
import rent from "../pages/cases/assets/rent.webp";
import optics from "../pages/cases/assets/optics.webp";
import swiss from "../pages/cases/assets/wiss.webp";
import elephantVizit from "../pages/cases/assets/elephantVizit.webp";
import ural from "../pages/cases/assets/ural.webp";
import party from "../pages/cases/assets/party.webp";
import kentavr from "../pages/cases/assets/kentavr.webp";
import artMedia from "../pages/cases/assets/artMedia.webp";
import sodox from "../pages/cases/assets/sodox.webp";
import sinaradesign from "../pages/cases/assets/sinaradesign.webp";
import {CategoryFilterType, CountryFilterType, IndustryFilterType} from "../pages/cases/filterCase/FilterCase";

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
    isSelectThemBlocked: false,

    filterCountry: [],
    filterIndustry: [],
    filterCategory: [],

    cases: [
        {
            id: '1',
            type: 'visit',
            title: [CategoryFilterType.WEB_SERVICE, CategoryFilterType.MARKETPLACE],
            name: 'Счастливый слон',
            about: 'Разработка календаря бронирования',
            country: CountryFilterType.RUSSIA,
            industry: [IndustryFilterType.ENTERTAINMENT ],
            color: '',
            desk: 'Сайт для корректного отображения на всех устройствах!',
            route: ROUTS.CASE_PAPPY_ELEPHANT,
            img: elephantVizit
        },
        {
            id: '2',
            type: 'sites',
            title: [CategoryFilterType.CORPORATE_SITE],
            name: 'Коннектор Оптикс',
            about: 'Разработка корпоративного сайта',
            desk: '',
            country: CountryFilterType.RUSSIA,
            industry: [IndustryFilterType.TRADE],
            color: 'wight',
            route: ROUTS.CASE_OPTICS,
            img: optics
        },
        {
            id: '3',
            type: 'visit',
            title: [CategoryFilterType.INTERNET_CATALOG],
            name: ' B.Well Swiss',
            about: 'Редизайн интернет-каталога',
            desk: 'Простое и понятное решение, которое помогает!',
            country: CountryFilterType.EUROPE,
            industry: [IndustryFilterType.MEDICINE],
            route: ROUTS.CASE_SWISS,
            color: '',
            img: swiss
        },

        {
            id: '4',
            type: 'visit',
            title: [CategoryFilterType.WEB_SERVICE],
            name: 'LLC "PartyIntel"',
            about: 'Cервис поиска услуг',
            desk: '',
            country: CountryFilterType.USA,
            industry: [IndustryFilterType.ENTERTAINMENT],
            route: ROUTS.CASE_PARTY_INTEL,
            color: 'wight',
            img: party
        },
        {
            id: '5',
            type: 'magazines',
            title: [CategoryFilterType.INTERNET_CATALOG],
            name: 'Уральская гранитная компания',
            about: 'Создание сайта-каталога',
            desk: 'Тот самый дизайн, который отличает от других!',
            country: CountryFilterType.RUSSIA,
            industry: [IndustryFilterType.TRADE],
            route: ROUTS.CASE_GRANIT,
            color: 'wight',
            img: ural
        },
        {
            id: '6',
            type: 'catalogs',
            title: [CategoryFilterType.INTERNET_CATALOG],
            name: 'Centavras Kft',
            about: 'Разработка корпоративного сайта',
            desk: 'Делаем в кротчайшие срок и учитываем желания!',
            country: CountryFilterType.EUROPE,
            industry: [IndustryFilterType.TRADE],
            route: ROUTS.CASE_CENTAVRAS,
            color: '',
            img: kentavr
        },
        {
            id: '7',
            type: 'sites',
            title: [CategoryFilterType.WEB_SERVICE, CategoryFilterType.MARKETPLACE],
            name: 'ArtDoc.media',
            about: 'Разработка онлайн сервиса',
            desk: '',
            country: CountryFilterType.EUROPE,
            industry: [IndustryFilterType.ENTERTAINMENT],
            route: ROUTS.CASE_ART_MEDIA,
            color: '',
            img: artMedia
        },
        {
            id: '8',
            type: 'magazines',
            title: [CategoryFilterType.INTERNET_CATALOG],
            name: 'ООО "Содокс Пром"',
            about: 'Создание сайта-каталога',
            desk: 'Создание современного сайта, с которым можно выделиться!',
            country: CountryFilterType.BELARUS,
            industry: [IndustryFilterType.PRODUCTION, IndustryFilterType.TRADE],
            route: ROUTS.CASE_SODOX,
            color: '',
            img: sodox
        },
        {
            id: '9',
            type: 'catalogs',
            title: [CategoryFilterType.WEB_SERVICE],
            name: 'ООО "Рент клаб"',
            about: 'Создание маркетплейса',
            desk: '',
            country: CountryFilterType.RUSSIA,
            industry: [IndustryFilterType.RENTAL],
            route: ROUTS.CASE_RENT_CLUB,
            color: '',
            img: rent
        },
        {
            id: '10',
            type: 'catalogs',
            title: [CategoryFilterType.INTERNET_CATALOG],
            name: 'ООО "Sinaradesign"',
            about: 'Разработка сайта каталога',
            desk: 'Уникальный дизайн удовлетворяющий современные тенденции!',
            country: CountryFilterType.RUSSIA,
            industry: [IndustryFilterType.TRADE],
            route: ROUTS.CASE_SINARADESING,
            color: '',
            img: sinaradesign
        },
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

        setFilterCategoryAC(state, action: PayloadAction<{ filter: string[] }>) {
            state.filterCategory = [...action.payload.filter]
        },
        setFilterIndustryAC(state, action: PayloadAction<{ filter: string[] }>) {

            state.filterIndustry = [...action.payload.filter]
        },
        setFilterCountryAC(state, action: PayloadAction<{ filter: string[] }>) {
            state.filterCountry = [...action.payload.filter]
        },


        setIsSelectThemBlockedAC(state, action: PayloadAction<{ isBlock: boolean }>) {
            state.isSelectThemBlocked = action.payload.isBlock
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
    isSelectThemBlocked: boolean,
    theme: ThemeType,
    isModalWindowOpen: boolean,
    isConsultantModalOpen: boolean,
    filterCountry: string[],
    filterIndustry: string[],
    filterCategory: string[],
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
    setFilterCategoryAC,
    setFilterIndustryAC,
    setFilterCountryAC,
    setIsOpenBonuseFormAC,
    setWaterfallModalOpenAC,
    setIsSelectThemBlockedAC,
    setScramModalOpenAC
} = slice.actions
