import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CasesType, CaseType, FilterCaseType} from "../common/types/types";
import {ROUTS} from "../common/constans/routs";
import rent from "../pages/cases/assets/rent.webp";
import couchingVisit from "../pages/cases/assets/couchingVisit.png";
import optics from "../pages/cases/assets/optics.webp";
import swiss from "../pages/cases/assets/wiss.webp";
import elephantVizit from "../pages/cases/assets/elephantVizit.webp";
import ural from "../pages/cases/assets/ural.webp";
import party from "../pages/cases/assets/party.webp";
import kentavr from "../pages/cases/assets/kentavr.webp";
import artMedia from "../pages/cases/assets/artMedia.webp";
import sodox from "../pages/cases/assets/sodox.webp";
import sinaradesign from "../pages/cases/assets/sinaradesign.webp";

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
            title: 'Интеренет-каталоги',
            name: 'Счастливый слон',
            about: 'Разработка календаря бронирования',
            country: 'Россия',
            industry: 'Развлечения',
            color: '',
            desk: 'Сайт для корректного отображения на всех устройствах!',
            route: ROUTS.CASE_PAPPY_ELEPHANT,
            img: elephantVizit
        },
        {
            id: '2',
            type: 'sites',
            title: 'Корпоративные сайты',
            name: 'Коннектор Оптикс',
            about: 'Разработка корпоративного сайта',
            desk: '',
            country: 'Россия',
            industry: 'Медицина',
            color: 'wight',
            route: ROUTS.CASE_OPTICS,
            img: optics
        },
        {
            id: '3',
            type: 'visit',
            title: 'Интеренет-каталоги',
            name: ' B.Well Swiss',
            about: 'Редизайн интернет-каталога',
            desk: 'Простое и понятное решение, которое помогает!',
            country: 'Россия',
            industry: '',
            route: ROUTS.CASE_SWISS,
            color: '',
            img: swiss
        },

        {
            id: '4',
            type: 'visit',
            title: 'Веб-сервисы',
            name: 'LLC "PartyIntel"',
            about: 'Cервис поиска услуг',
            desk: '',
            country: 'США',
            industry: 'Развлечения',
            route: ROUTS.CASE_PARTY_INTEL,
            color: 'wight',
            img: party
        },
        {
            id: '5',
            type: 'magazines',
            title: 'Интеренет-каталоги',
            name: 'Уральская гранитная компания',
            about: 'Создание сайта-каталога',
            desk: 'Тот самый дизайн, который отличает от других!',
            country: 'Россия',
            industry: 'Интеренет торговля',
            route: ROUTS.CASE_GRANIT,
            color: 'wight',
            img: ural
        },
        {
            id: '6',
            type: 'catalogs',
            title: 'Корпоративные сайты',
            name: 'Centavras Kft',
            about: 'Разработка корпоративного сайта',
            desk: 'Делаем в кротчайшие срок и учитываем желания!',
            country: 'Европа',
            industry: 'Логистика',
            route: ROUTS.CASE_CENTAVRAS,
            color: '',
            img: kentavr
        },
        {
            id: '7',
            type: 'sites',
            title: 'Веб-сервисы',
            name: 'ArtDoc.media',
            about: 'Разработка онлайн сервиса',
            desk: '',
            country: 'Россия',
            industry: 'Развлечения',
            route: ROUTS.CASE_ART_MEDIA,
            color: '',
            img: artMedia
        },
        {
            id: '8',
            type: 'magazines',
            title: 'Интеренет-каталоги',
            name: 'ООО "Содокс Пром"',
            about: 'Создание сайта-каталога',
            desk: 'Создание современного сайта, с которым можно выделиться!',
            country: 'Беларусь',
            industry: 'Интеренет торговля',
            route: ROUTS.CASE_SODOX,
            color: '',
            img: sodox
        },
        {
            id: '9',
            type: 'catalogs',
            title: 'Интеренет-каталоги',
            name: 'ООО "Рент клаб"',
            about: 'Создание маркетплейса',
            desk: '',
            country: 'Россия',
            industry: 'Интеренет торговля',
            route: ROUTS.CASE_RENT_CLUB,
            color: '',
            img: rent
        },
        {
            id: '10',
            type: 'catalogs',
            title: 'Интеренет-каталоги',
            name: 'ООО "Sinaradesign"',
            about: 'Разработка сайта каталога',
            desk: 'Уникальный дизайн удовлетворяющий современные тенденции!',
            country: 'Россия',
            industry: 'Интеренет торговля',
            route: ROUTS.CASE_SINARADESING,
            color: '',
            img: sinaradesign
        },
        // {
        //     id: '11',
        //     type: 'catalogs',
        //     title: 'Интеренет-каталоги',
        //     name: '',
        //     about: '',
        //     desk: '',
        //     country: 'США',
        //     route: ROUTS.CASE_SWISS,
        //     color: '',
        //     img: ''
        // },

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
