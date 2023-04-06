import ImgWebDev from "../assets/wedDevImages/logo.png";
import ImgSupport from "../assets/supportImages/hr-girl.jpg";


export type ServiceType = {
    id: string,
    type: string,
    title: string,
    text: string,
    img: string,
}

export const dataServices: Array<ServiceType> = [
    {
        id: '1',
        type: 'webDev',
        title: 'Мы создаем уникальный сайт, который превращает посетителей в клиентов.',
        text: 'Наймите разработчиков веб-сайтов у нас, чтобы создать сильное присутствие в Интернете, которое укрепит ваш путь к успеху.',
        img: ImgWebDev,
    },
    {
        id: '2',
        type: 'support',
        title: 'Сопровождение и поддержка сайтов',
        text: 'Текст сопровождения и поддержки сайтов',
        img: ImgSupport,
    },
    {
        id: '3',
        type: 'webPO',
        title: 'Разработка ПО',
        text: 'Текст по разработке ПО',
        img: ImgWebDev,
    },
    {
        id: '4',
        type: 'ux',
        title: 'UX/UI',
        text: 'Текст по UX/UI',
        img: ImgSupport,
    }
]