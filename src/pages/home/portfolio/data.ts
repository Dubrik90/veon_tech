import Img01 from "./assets/1.webp";
import Img02 from "./assets/2.webp";
import Img03 from "./assets/3.webp";
import Img04 from "./assets/4.webp";
import Img05 from "./assets/5.webp";
import Img06 from "./assets/6.webp";
import Img07 from "./assets/7.webp";
import Img08 from "./assets/8.webp";
import Img09 from "./assets/9.webp";
import Img10 from "./assets/10.webp";

import {DevDataType} from "../data";
import {ROUTS} from "../../../common/constans/routs";

export const portfolioData: DevDataType[] = [
    {
        header: 'Разработка сайта каталога',
        desc: 'UX, UI, Graphic Design',
        img: Img07,
        link: ROUTS.CASE_SINARADESING
    },
    {
        header: 'Разработка онлайн сервиса',
        desc: 'UX, UI, Graphic Design',
        img: Img08,
        link: ROUTS.CASE_ART_MEDIA
    },
    {
        header: 'Разработка корпоративного сайта',
        desc: 'UX, UI, Graphic Design',
        img: Img03,
        link: ROUTS.CASE_OPTICS
    },
    {
        header: 'Разработка календаря бронирования',
        desc: 'UX, UI, Graphic Design',
        img: Img04,
        link: ROUTS.CASE_PAPPY_ELEPHANT
    },
    {
        header: 'Редизайн интернет-каталога',
        desc: 'UX, UI, Graphic Design',
        img: Img05,
        link: ROUTS.CASE_SWISS
    },
    {
        header: 'Создание сайта-каталога',
        desc: 'UX, UI, Graphic Design',
        img: Img06,
        link: ROUTS.CASE_SODOX
    },
    {
        header: 'Создание сайта-каталога',
        desc: 'UX, UI, Graphic Design',
        img: Img01,
        link: ROUTS.CASE_GRANIT
    },
    {
        header: 'Cервис поиска услуг',
        desc: 'UX, UI, Graphic Design',
        img: Img02,
        link: ROUTS.CASE_PARTY_INTEL
    },
    {
        header: 'Creative business card',
        desc: 'UX, UI, Graphic Design',
        img: Img09,
        link: ROUTS.CASE_CENTAVRAS
    },
    {
        header: 'Creative business card',
        desc: 'UX, UI, Graphic Design',
        img: Img10,
        link: ROUTS.CASE_RENT_CLUB
    },
]