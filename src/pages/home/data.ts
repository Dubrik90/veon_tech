
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
        desc: 'Мы создаем уникальные сайты, которые поднимают конверсию продаж...',
        img: Img01,
        link: 'services/webDev'
    },
    {
        header: 'Поддержка сайтов',
        desc: 'После того, как сайт был создан, необходимо позаботиться о его дальнейшей работе..',
        img: Img02,
        link: 'services/support'
    },
    {
        header: 'Разработка ПО',
        desc: 'VEON-TECH поможет вам оптимизировать рутинные бизнес-задачи..',
        img: Img03,
        link: 'services/webPO'
    },
    {
        header: 'UX/UI дизайн',
        desc: 'Мы построим правильную логику взаимодействия пользователя с сайтом..',
        img: Img04,
        link: 'services/ux'
    },

]
