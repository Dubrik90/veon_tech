import Sinaradesign from "../../case/assets/sinaradesignCase.webp";
import Sodox from "../../case/assets/sodoxCase.webp";
import Art from "../../case/assets/artCase.webp";
import Rent from "../../case/assets/imgMagazine.png";

import LogoImg from "../assets/logoMagazine.png";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";




export const caseDataArray: CaseDataType = [
    {
        id: '1',
        type: 'magazines',
        title: 'Кейс по разработке маркетплейса для сервиса аренды вещей',
        screenImg: Sinaradesign,
        logoImg: LogoImg,
        service: 'Разработка сайта каталога',
        client: 'ООО "Sinaradesign"',
        projectUrl: 'https://sinaradesign.com/',
        aboutCompany: 'ООО "Sinaradesign" специализируется на продаже крафтовых изделий.',
        targets: 'Создание сайта-каталога для привлечения новых клиентов, адаптивное отображение сайта на всех устройствах и разрешениях, полнота информации о товарах, понятная структура сайта, соответствие дизайна корпоративному стилю.',

        tableData: [
            {name: 'Наименование компании', value: `ООО "Sinaradesign"`},
            {name: 'Сфера деятельности', value: `Сервис для продажи крафтовых вещей`},
            {name: 'Страна, на которую рассчитан сайт', value: `Российская Федерация`},
            {name: 'Основные товары и услуги', value: `Крафтовые вещи`},
            {name: 'Домен сайта', value: `ООО "https://sinaradesign.com/`},
            {name: 'Целевая аудитория', value: `Мужчины/женщины от 18 до 40 лет`},
            {name: 'Задачи сайта', value: `Увеличение конверсии и охватов. Ознакомление клиентов со всем ассортиментом компании. Увеличение числа потенциальных клиентов.`},
            {name: 'Тип сайта', value: `Сервис`},
            {name: 'Тариф', value: `-`},
            {name: 'CMS', value: `-`},
            {name: 'Языки разработки/Фреймовик', value: `C#, Angular, Wordpress`},
            {
                name: 'Пожелания заказчика',
                value: `Я желаю чтобы наш сайт пробился в первые строчки и чтобы он работал быстро и на всех устройствах.`
            },
        ],
        appealClient: 'Компания ООО "Sinaradesign" обратилась к нам за разработкой сайта-каталога для привлечения новых клиентов, адаптивное отображение сайта на всех устройствах и разрешениях, полнота информации о товарах, понятная структура сайта, соответствие дизайна корпоративному стилю.',
        process: 'Перед нами стояла масштабная задача по работе дизайнеров, программистов, копирайтеров и SEO-администратора. \n' +
            'Из за того что нам была поставлена задача увеличить конверсию продаж, а также продвигать сайты на первые строчки, наша команда занялась с анализом рынка и запросов пользователей. Мы заложили структу SEO на этапе проектирования сайта.\n' +
            'Заказчик полностью доверился нашему профессионализму, а мы в свою очередь постарались реализовать все его "хотелки". У клиента был свой лого, наша команда дизайнеров занялась его доработкой. \n' +
            'После доработки логотипа наши дизайнеры приступили к созданию адаптивного макета сайта в соответствии с техническим заданием.\n' +
            'В ходе сдачи этапа, заказчик положительно оценил дополнительные дизайнерские решения наших специалистов.\n' +
            'После подписания акта сдачи этапа, дело перешло в руки Front-end разработчиков.\n' +
            'Благодаря строгой системы контроля таймингов задач, нашим специалистам удалось реализовать весь ёмкий процесс всего за 2 недели! \n' +
            'После запуска сайта мы приступили к работе над наполнением интернет-каталога.\n' +
            'В админ панель мы добавили множество функций в том числе и отображения количества пользователей в разное время, а также автоматическую рассылку почты, тем пользователям, что сейчас онлайн.\n' +
            'Также мы добавили счетчики для Google и Яндекс метрик, настроили метатеги и другие сервисы поисковых систем.\n' +
            'Также был заложен функционал для превращения сайта в интернет-магазин и добавления других различных элементов для при дальнейшем развитии проекта.',
        result: 'Тестирование прошли успешно!\n' +
            'Заказчик остался невероятно доволен проектом, ведь мы сделали быстрее и больше чем он сразу планировал.\n' +
            'Выбирая нас клиент получил следующее:\n' +
            '- Максимально быстрая реализация проекта!\n' +
            '- Увеличил конверсию продаж, сайт выбился в верхнии строчки Google и Яндекс\n' +
            '- Высокую скорость и адаптивность на всех устройствах\n' +
            '- Поддержку сайта',
        portfolio: [
            {img: Image1, src: ''},
            {img: Image2, src: ''},
            {img: Image3, src: ''},
            // {img: Image2, src: ''},
            // {img: Image1, src: ''},
        ]
    },
    {
        id: '2',
        type: 'catalogs',
        title: 'Кейс по разработке интернет каталога',
        screenImg: Art,
        logoImg: LogoImg,
        service: 'Разработка онлайн сервиса',
        client: 'ArtDoc.media',
        projectUrl: 'https://artdoc.media/ru/',
        aboutCompany: 'Компания ArtDoc.media занимается предоставлением онлайн-сеансов документального кино на русском языке',
        targets: 'Реализовать личный кабинет пользователя, а также расширить и доработать готовый функционал сайта в соответствии с ТЗ',

        tableData: [
            {name: 'Наименование компании', value: `ArtDoc.media`},
            {name: 'Сфера деятельности', value: `развлечения`},
            {name: 'Страна, на которую рассчитан сайт', value: `Российская Федерация`},
            {name: 'Основные товары и услуги', value: `сервис по поиску развлечений`},
            {name: 'Домен сайта', value: `ООО "https://artdoc.media/`},
            {name: 'Целевая аудитория', value: `мужчины/женщины от 18 до 40 лет`},
            {name: 'Задачи сайта', value: `реализация бэк энд части (календарь и система бронирования, реализация платежей)`},
            {name: 'Тип сайта', value: `Сервис`},
            {name: 'Тариф', value: `-`},
            {name: 'CMS', value: `-`},
            {name: 'Языки разработки/Фреймовик', value: `PHP, Laravel`},
            {
                name: 'Пожелания заказчика',
                value: `Реализация сервиса в максимально сжатые сроки.`
            },
        ],
        appealClient: 'Компания Art.doc media обратилась к нам за разработкой личного кабинета и расширением возможностей сайта онлайн-сеансов документального кино на русском языке.',
        process: 'Мы разработали поле для регистрации, личный кабинет, и удобно структурирован сайт. Наша команда уже сталкивалась с такими проектами, поэтому сделать его быстро и качественно не составило проблем. Мы реализовали удобную систему подписки, как на популярных стриминговых платформах. Мы сделали удобную панель администратора с возможностью выгружать информацию о пользователе. Выгруженные файлы хранятся в форматах: csv, xml или json. Добавили возможность администратору блокировать пользователей, что нарушают правила сайта. Благодаря тесному сотрудничеству в процессе разработки, заказчик получил то, что хотел.',
        result: 'Проект успешно прошёл тестирование, хорошо оптимизирован и выполнен нашими сотрудниками точно в срок!\n' +
            'Выбирая нас клиент получил следующее:\n' +
            '- Реализована система регистрации\n' +
            '- Реализована удобная система подписки\n' +
            '- Реализована Панель Администратора\n' +
            '- Также наша команда разработала различные сценарии поведения Пользователя в кабинете сделки.',
        portfolio: [
            {img: Image1, src: ''},
            {img: Image2, src: ''},
            {img: Image3, src: ''},
            // {img: Image2, src: ''},
            // {img: Image1, src: ''},
        ]
    },
    {
        id: '3',
        type: 'sites',
        title: 'Кейс по разработке сайтов',
        screenImg: Sodox,
        logoImg: LogoImg,
        service: 'Создание сайта-каталога',
        client: 'ООО "Содокс Пром"',
        projectUrl: 'https://sodox.by',
        aboutCompany: 'Группа компаний SODOX — производитель промышленного оборудования',
        targets: 'Разработать интернет-каталог для представления компании в интернете с возможностью заказа товара или услуги.',

        tableData: [
            {name: 'Наименование компании', value: `ООО "Содокс Пром"`},
            {name: 'Сфера деятельности', value: `производство промышленного оборудования, инжиниринговые услугие, реализация станков`},
            {name: 'Страна, на которую рассчитан сайт', value: `Беларусь, РФ`},
            {name: 'Основные товары и услуги', value: `промышенное оборудование`},
            {name: 'Домен сайта', value: `ООО "https://sodox.by`},
            {name: 'Целевая аудитория', value: `B2B, мужчины 30-60 лет`},
            {name: 'Задачи сайта', value: `создать лояльность у клиента к продукции компании`},
            {name: 'Тип сайта', value: `Сайт-каталог`},
            {name: 'Тариф', value: `-`},
            {name: 'CMS', value: `-`},
            {name: 'Языки разработки/Фреймовик', value: `Phyton, Django`},
            {
                name: 'Пожелания заказчика',
                value: `Создать современный сайт, с которым заказчик выделится на фоне конкурентов. Оптимизировать структуру и интерфейс для комфортной навигации.`
            },
        ],
        appealClient: 'Клиент обратился к нам с просьбой реализовать интернет-каталог для  повышения узнаваемости бренда. ',
        process: 'После анализа основных конкурентов компании Sodox и сбора всей необходимой информации от заказчика, мы приступили к разработке интерактивного прототип-проекта. \n' +
            'После выбора концепции сайта, а также оценки ориентировочной сметы проекта заказчиком, наша команда приступила к реализации дизайна, а так же поэтапной разработке проекта. ',
        result: 'Выбирая нас клиент получил следующее:\n' +
            '\n' +
            '- Сайт с огромным количеством форм, обеспечивающие простоту и удобство в заказе необходимого оборудования клиентами нашего заказчика (в т.ч. по брендам), \n' +
            '- Разработан каталог с достаточно широким функционалом\n' +
            '- Реализована панель администратора и системой защиты/авторизации.\n' +
            '- Реализовано подробное описание каждого из категории товаров клиента \n' +
            '- Фото, общие характеристики группы, краткое описание, а также таблица ассортимента группы. \n' +
            '\n' +
            'Клиент имеет современный интернет-каталог, который не только представляет продукцию компании Sodox в интернете, но и обеспечивает высокую конверсию продаж ввиду активной посещаемости. \n' +
            'Сайт стал официальным представителем компании в сети. ',
        portfolio: [
            {img: Image1, src: ''},
            {img: Image2, src: ''},
            {img: Image3, src: ''},
            // {img: Image2, src: ''},
            // {img: Image1, src: ''},
        ]
    },
    {
        id: '4',
        type: 'sites',
        title: 'Создание маркетплейса',
        screenImg: Rent,
        logoImg: LogoImg,
        service: 'Создание сайта-каталога',
        client: 'ООО "Рент клаб" (под НДА)',
        projectUrl: 'https://rentclub.pro',
        aboutCompany: 'Группа компаний SODOX — производитель промышленного оборудования',
        targets: 'Реализация кабинета сделки, смены статусов и возможное поведение пользователей',

        tableData: [
            {name: 'Наименование компании', value: `ООО "Рент клаб" (под НДА)`},
            {name: 'Сфера деятельности', value: `стартап по созданию сервиса по аренде вещей`},
            {name: 'Страна, на которую рассчитан сайт', value: `РФ`},
            {name: 'Основные товары и услуги', value: `аренда вещей`},
            {name: 'Домен сайта', value: `ООО "https://rentclub.pro`},
            {name: 'Целевая аудитория', value: `мужчины/женщины от 18 до 40 лет`},
            {name: 'Задачи сайта', value: `реализация бэк энд части (кабинет сделки, поведение пользователей)`},
            {name: 'Тип сайта', value: `Маркетплейс`},
            {name: 'Тариф', value: `-`},
            {name: 'CMS', value: `-`},
            {name: 'Языки разработки/Фреймовик', value: `PHP, Laravel, Vue.js`},
            {
                name: 'Пожелания заказчика',
                value: `Реализация кабинет сделки, а также различные сценарии поведения арендодателя и арендатора в кабинете сделки `
            },
        ],
        appealClient: 'Заказчика очень беспокоил дизайн сайта, предыдущий сайт заказчик разрабатывал лично. Каждый шрифт, кнопку и тд. И задача сделать еще "круче". Для заказчика важно визуальное восприятие, чтобы глазу было приятно смотреть и удобный интерфейс.',
        process: 'Нашей команде не впервой пришлось столкнуться с доработкой проекта, соответственно каждый момент сотрудничества строго соответствовал регламенту.\n' +
            'С заказчиком были подробно обсуждены детали проекта, также была проработана структура кабинета.\n' +
            'Далее наши специалисты принялись за реализацию смены различных статусов пользователей.                                                                                                                         \n' +
            'Следующим этапом разработки было моделирование случайного поведения пользователей в рамках посещения сервиса и смена директории в соответствии с запросами пользователя ',
        result: 'Благодаря тесному сотруднечеству и отличной обратной связи с заказчиком получился отличный сайт-каталог, который повышает лояльность клиентов и отличается от конкурентных сайтов своим индивидуальным дизайном.\n' +
            'Выбирая нас клиент получил следующее: \n' +
            'Оперативное обслуживание и реализация проекта в соответствии с согласованными этапами. \n' +
            'Скидку на разработку в соответствии с бонусной системой нашей компании!',
        portfolio: [
            {img: Image1, src: ''},
            {img: Image2, src: ''},
            {img: Image3, src: ''},
            // {img: Image2, src: ''},
            // {img: Image1, src: ''},
        ]
    },
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
