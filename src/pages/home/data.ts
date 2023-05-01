
import Img01 from './descriptionWeb/assets/0111.png';
import Img02 from './descriptionWeb/assets/0222.png';
import Img03 from './descriptionWeb/assets/0333.png';
import Img04 from './descriptionWeb/assets/0444.png';
import Img05 from './descriptionWeb/assets/05.svg';
import {ROUTS} from "../../common/constans/routs";

export type DevDataType = {
    header: string
    desc: string
    img: string
    link: string
}

export const devData: DevDataType[] = [
    {
        header: 'Разработка сайтов',
        desc: 'Мы не просто создаем веб-сайты, мы создаем веб-сайты, которые ПРОДАЮТ',
        img: Img01,
        link: 'services/webDev'
    },
    {
        header: 'Поддержка сайтов',
        desc: 'Vы создаем веб-сайты, которые ПРОДАЮТ',
        img: Img02,
        link: 'services/support'
    },
    {
        header: 'Разработка ПО',
        desc: 'Создаем сайты с нуля и на CMS любой сложности',
        img: Img03,
        link: 'services/webPO'
    },
    {
        header: 'UX/UI дизайн',
        desc: 'Создаем уникальный дизайн и разрабатываем фирменный стиль.',
        img: Img04,
        link: 'services/ux'
    },

]
