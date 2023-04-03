import ImgMagazine from "../assets/imgMagazine.png";
import LogoImg from "../assets/logoMagazine.png";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";



export const caseDataArray: CaseDataType = [
    {
        id: '1',
        type: 'magazines',
        title: 'Кейс по разработке маркетплейса для сервиса аренды вещей',
        screenImg: ImgMagazine,
        logoImg: LogoImg,
        service: 'Создание маркетплейса',
        client: 'NDA',
        projectUrl: 'https://rentclub.pro',
        aboutCompany: 'ООО "Рент клаб" (под НДА)',
        targets: 'Реализация кабинета сделки, смены статусов и возможное поведение пользователей',

        tableData: [
            {name: 'Наименование компании', value: `ООО "Рент клаб" (под НДА)`},
            {name: 'Сфера деятельности', value: `Аренда вещей`},
            {name: 'Страна, на которую рассчитан сайт', value: `Российская Федерация`},
            {name: 'Основные товары и услуги', value: `Аренда вещей`},
            {name: 'Домен сайта', value: `ООО "https://rentclub.pro`},
            {name: 'Целевая аудитория', value: `Мужчины/женщины от 18 до 40 лет`},
            {name: 'Задачи сайта', value: `Реализация Back-end части (кабинет сделки, поведение пользователей)`},
            {name: 'Тип сайта', value: `ООО "Маркетплейс`},
            {name: 'Тариф', value: `-`},
            {name: 'CMS', value: `-`},
            {name: 'Языки разработки/Фреймовик', value: `PHP, Laravel`},
            {
                name: 'Пожелания заказчика',
                value: `Реализация кабинет сделки, а также различные сценарии поведения арендодателя и арендатора в кабинете сделки`
            },
        ],
        appealClient: 'Заказчика очень беспокоил дизайн сайта . Предыдущий сайт Заказчик разрабатывал лично. Каждый цвет , шрифт , кнопку и тд . И задача стояла сделать ещё, так сказать, «круче». Для Заказчика важно восприятие визуальное, чтоб глазу было приятно смотреть и удобный интерфейс.',
        process: 'Мы начали работы следующим образом, у Заказчика было общее понимание по наполнению и дизайну! Была общая цветовая гамма ! Также полное понимание главной страницы! Заказчику было намного удобней просто на бумаге нарисовать расположение всех блоков, расписать чертеж, а мы уже на основании чертежа составили ТЗ. И работы все расписали по этапам. Совместно с заказчиком проработали структуру главной страницы и расположение элементов на сайте, создали уникальный дизайн, обработали изображения для каталога и наполнили сайт, проработали мобильную версию сайта и настроили корректное отображение элементов на всех устройствах.',
        result: 'Благодаря тесному сотрудничеству и отличной обратной связи с заказчиком получился качественный сайт-каталог, который повышает лояльность клиентов и отличается от конкурентных сайтов своим индивидуальным дизайном.',
        portfolio: [
            {img: Image1, src: ''},
            {img: Image2, src: ''},
            {img: Image3, src: ''},
            // {img: Image2, src: ''},
            // {img: Image1, src: ''},
        ]
    }

]


export type CaseDataType = CaseType[]

export type CaseType = {
    id: string,
    type: string
    title: string,
    screenImg: string,
    logoImg: string,
    service: string,
    client: string,
    projectUrl: string,
    aboutCompany: string,
    targets: string,
    tableData: Array<{name: string, value: string}>,
    appealClient: string,
    process: string,
    result: string,
    portfolio: Array<{img: string, src: string}>
}
