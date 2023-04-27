import ImgWebDev from "../assets/wedDevImages/logo.png";
import ImgSupport from "../assets/supportImages/hr-girl.jpg";


export type ServiceType = {
    id: string,
    type: string,
    title: string,
    text: string,
    img: string,
    titleBtn: string,
}

export const dataServices: Array<ServiceType> = [
    {
        id: '1',
        type: 'webDev',
        title: 'Мы создаем уникальные сайты',
        titleBtn: 'ПОЛУЧИТЬ САЙТ',
        //, который превращает посетителей в клиентов.
        text: 'Наймите разработчиков веб-сайтов у нас, чтобы создать сильное присутствие в Интернете, которое укрепит ваш путь к успеху.',
        img: ImgWebDev,
    },
    {
        id: '2',
        type: 'support',
        titleBtn: 'ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ',
        title: 'Сопровождение и поддержка сайтов',
        text: 'Текст сопровождения и поддержки сайтов',
        img: ImgSupport,
    },
    {
        id: '3',
        type: 'webPO',
        titleBtn: 'ЗАКАЗАТЬ РАЗРАБОТКУ',
        title: 'Разработка ПО',
        text: 'Текст по разработке ПО',
        img: ImgWebDev,
    },
    {
        id: '4',
        type: 'ux',
        titleBtn: 'ПОЛУЧИТЬ ДИЗАЙН',
        title: 'UX/UI',
        text: 'Текст по UX/UI',
        img: ImgSupport,
    }
]