import rentMarket from "../cases/assets/rentMarket.png";
import couchingVisit from "../cases/assets/couchingVisit.png";
import partyCorporat from "../cases/assets/partyCorporat.png";
import prosnowVisit from "../cases/assets/prosnowVisit.png";
import elephantVizit from "../cases/assets/elephantVizit.png";
import granitCatalog from "../cases/assets/granitCatalog.png";
import mediaCorporat from "../cases/assets/mediaCorporat.png";
import noomblistMarket from "../cases/assets/noomblistMarket.png";
import sdCatalog from "../cases/assets/sdCatalog.png";
import sodoxCatalog from "../cases/assets/sodoxCatalog.png";
import wellCatalog from "../cases/assets/wellCatalog.png";
import {CasesType} from "../../common/types/types";
import {ROUTS} from "../../common/constans/routs";


export const casesData: CasesType = {
    ['magazines']: [
        {id: '1', type: 'magazines', title: 'ИНТЕРНЕТ-МАГАЗИН', route: ROUTS.CASE, img: rentMarket},
        {id: '8', type: 'magazines', title: 'ИНТЕРНЕТ-МАГАЗИН', route: ROUTS.CASE, img: noomblistMarket}
    ],
    ['visit']: [
        {id: '2', type: 'visit', title: 'САЙТ-ВИЗИТКА', route: ROUTS.CASE, img: couchingVisit},
        {id: '4', type: 'visit', title: 'САЙТ-ВИЗИТКА', route: ROUTS.CASE_PARTY_INTEL, img: prosnowVisit},
        {id: '5', type: 'visit', title: 'САЙТ-ВИЗИТКА', route: ROUTS.CASE_PAPPY_ELEPHANT, img: elephantVizit},
    ],
    ['sites']: [
        {id: '3', type: 'sites', title: 'КОРПОРАТИВНЫЙ САЙТ', route: ROUTS.CASE, img: partyCorporat},
        {id: '7', type: 'sites', title: 'КОРПОРАТИВНЫЙ САЙТ', route: ROUTS.CASE, img: mediaCorporat}
    ],
    ['catalogs']: [
        {id: '6', type: 'catalogs', title: 'ИНТЕРНЕТ-КАТАЛОГ', route: ROUTS.CASE_GRANIT, img: granitCatalog},
        {id: '9', type: 'catalogs', title: 'ИНТЕРНЕТ-КАТАЛОГ', route: ROUTS.CASE, img: sdCatalog},
        {id: '10', type: 'catalogs', title: 'ИНТЕРНЕТ-КАТАЛОГ', route: ROUTS.CASE, img: sodoxCatalog},
        {id: '11', type: 'catalogs', title: 'ИНТЕРНЕТ-КАТАЛОГ', route: ROUTS.CASE_SWISS, img: wellCatalog},
    ],
    ['all']: [
        {id: '1', type: 'magazines', title: 'ИНТЕРНЕТ-МАГАЗИН', route: ROUTS.CASE, img: rentMarket},
        {id: '2', type: 'visit', title: 'САЙТ-ВИЗИТКА', route: ROUTS.CASE, img: couchingVisit},
        {id: '3', type: 'sites', title: 'КОРПОРАТИВНЫЙ САЙТ', route: ROUTS.CASE, img: partyCorporat},
        {id: '4', type: 'visit', title: 'САЙТ-ВИЗИТКА', route: ROUTS.CASE_PARTY_INTEL, img: prosnowVisit},
        {id: '5', type: 'visit', title: 'САЙТ-ВИЗИТКА', route: ROUTS.CASE_PAPPY_ELEPHANT, img: elephantVizit},
        {id: '6', type: 'catalogs', title: 'ИНТЕРНЕТ-КАТАЛОГ', route: ROUTS.CASE_GRANIT, img: granitCatalog},
        {id: '7', type: 'sites', title: 'КОРПОРАТИВНЫЙ САЙТ', route: ROUTS.CASE, img: mediaCorporat},
        {id: '8', type: 'magazines', title: 'ИНТЕРНЕТ-МАГАЗИН', route: ROUTS.CASE, img: noomblistMarket},
        {id: '9', type: 'catalogs', title: 'ИНТЕРНЕТ-КАТАЛОГ', route: ROUTS.CASE, img: sdCatalog},
        {id: '10', type: 'catalogs', title: 'ИНТЕРНЕТ-КАТАЛОГ', route: ROUTS.CASE, img: sodoxCatalog},
        {id: '11', type: 'catalogs', title: 'ИНТЕРНЕТ-КАТАЛОГ', route: ROUTS.CASE_SWISS, img: wellCatalog},
    ]
}
