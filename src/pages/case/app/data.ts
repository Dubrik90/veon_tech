import ImgMagazine from "../assets/imgMagazine.png";
import LogoImg from "../assets/logoMagazine.png";
import {CaseType, FilterCaseType} from "../../../common/types/types";


export const caseDataArray: CaseDataType = {
    ['magazines']: [
        {
            id: '1',
            title: 'Кейс по разработке маркетплейса для сервиса аренды вещей',
            screenImg: ImgMagazine,
            logoImg: LogoImg,
            service: 'Создание маркетплейса',
            client: 'NDA',
            projectUrl: 'https://rentclub.pro',
            aboutCompany: 'ООО "Рент клаб" (под НДА)',
            targets: 'Реализация кабинета сделки, смены статусов и возможное поведение пользователей',
            tableData: {
                brief: 'КРАТКИЙ БРИФ НА РАЗРАБОТКУ САЙТА',
                sphere: 'Аренда вещей',
                country: 'Российская Федерация',
                products: 'Аренда вещей',
                audience: 'Мужчины/женщины от 18 до 40 лет',
                tasksProject: 'Реализация Back-end части (кабинет сделки, поведение пользователей)',
                type: 'Маркетплейс',
                rate: '-',
                cms: '-',
                frameWork: 'PHP, Laravel',
                tasksClient: 'Реализация кабинет сделки, а также различные сценарии поведения арендодателя и арендатора в кабинете сделки'
            },
            appealClient: 'Заказчика очень беспокоил дизайн сайта . Предыдущий сайт Заказчик разрабатывал лично. Каждый цвет , шрифт , кнопку и тд . И задача стояла сделать ещё, так сказать, «круче». Для Заказчика важно восприятие визуальное, чтоб глазу было приятно смотреть и удобный интерфейс.',
            process: 'Мы начали работы следующим образом, у Заказчика было общее понимание по наполнению и дизайну! Была общая цветовая гамма ! Также полное понимание главной страницы! Заказчику было намного удобней просто на бумаге нарисовать расположение всех блоков, расписать чертеж, а мы уже на основании чертежа составили ТЗ. И работы все расписали по этапам. Совместно с заказчиком проработали структуру главной страницы и расположение элементов на сайте, создали уникальный дизайн, обработали изображения для каталога и наполнили сайт, проработали мобильную версию сайта и настроили корректное отображение элементов на всех устройствах.',
            result: 'Благодаря тесному сотрудничеству и отличной обратной связи с заказчиком получился качественный сайт-каталог, который повышает лояльность клиентов и отличается от конкурентных сайтов своим индивидуальным дизайном.',
        }
    ],
}
export type CaseDataType = {
    ['magazines']: CaseType[],
    ['catalogs']: CaseType[],
    ['sites']: CaseType[],
    ['visit']: CaseType[]
}
export type CaseType = {
    id: string,
    title: string,
    screenImg: string,
    logoImg: string,
    service: string,
    client: string,
    projectUrl: string,
    aboutCompany: string,
    targets: string,
    tableData: {
        brief: string,
        sphere: string,
        country: string,
        products: string,
        audience: string,
        tasksProject: string,
        type: string,
        rate: string,
        cms: string,
        frameWork: string,
        tasksClient: string
    },
    appealClient: string,
    process: string,
    result: string,
}
