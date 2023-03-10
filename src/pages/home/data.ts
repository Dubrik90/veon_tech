
import Img01 from './descriptionWeb/assets/01.svg';
import Img02 from './descriptionWeb/assets/02.svg';
import Img03 from './descriptionWeb/assets/03.svg';
import Img04 from './descriptionWeb/assets/04.svg';
import Img05 from './descriptionWeb/assets/05.svg';

export type DevDataType = {
    header: string
    desc: string
    img: string
}

export const devData: DevDataType[] = [
    {
        header: 'Разработка сайтов',
        desc: 'Мы не просто создаем веб-сайты, мы создаем веб-сайты, которые ПРОДАЮТ',
        img: Img01
    },
    {
        header: 'Поддержка сайтов',
        desc: 'Мы не просто создаем веб-сайты, мы создаем веб-сайты, которые ПРОДАЮТ',
        img: Img02
    },
    {
        header: 'Разработка ПО',
        desc: 'Создаем сайты с нуля и на CMS любой сложности',
        img: Img03
    },
    {
        header: 'UX/UI дизайн',
        desc: 'Создаем уникальный дизайн и разрабатываем фирменный стиль.',
        img: Img04
    },
]
