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
        title: 'Создавая уникальные сайты, мы воплощаем в жизнь коммерческие цели наших клиентов',
        titleBtn: 'ПОЛУЧИТЬ САЙТ',
        //, который превращает посетителей в клиентов.
        text: '',
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
        title: 'SOFTWARE DEVELOPMENT',
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