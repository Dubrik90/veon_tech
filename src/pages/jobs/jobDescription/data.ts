
export type ProfessionsDataType = ProfDataType[]

export type ProfDataType = {
    title: string,
    descVacancy: string[],
    resposibility: string[],
    requirements: string[],
    knowledge: string[],
    advantage: string[],
    terms: string[],
}


export const professionsData = [

    {
        title: 'Wordpress-разработчик (Junior)',
        descVacancy: [
            'Требуемый опыт работы: от 6 месяцев',
            'Полная занятость, полный день'
        ],
        resposibility: ['Разработка сайтов и интернет-магазинов на CMS WordPress.', 'Внесение правок в функционал сайтов на CMS WordPress, доработка.', 'Внесение правок в шаблоны сайтов на WordPress.', 'Оптимизация скриптов.', 'Отчётность по работе.'],
        requirements: ['Наличие не менее 3-х проектов в онлайне, в разработке которых вы принимали участие.', 'Умение эффективно выстраивать собственный рабочий процесс.', 'Фокус на саморазвитии, быстрое изучение нового материала, системное мышление.', 'Прохождение минимального тестового задания.'],
        knowledge: ['Знание PHP, js, css, html – Обязательно.', 'Вы умеете работать с дочерними темами.', 'Понимаете основы кэширования.', 'Вы умеете корректно подключать скрипты и стили (JS/CSS).', 'Вы комментируете свой код, стараясь сделать его понятным для других разработчиков.', 'При разработке сайта, Вы следите за тем чтобы код соответствовал документации WP Codex.'],
        advantage: ['Знание технического английского языка.', 'Умение работать с другими CMS.', 'Можете отличить страничный кеш от объектного и транзитного.', 'Вы понимаете разницу между get_posts и query_posts.', 'Установить и настроить простой сервер без изысков (php, nginx, MySQL).'],
        terms: ['Уютный офис в 10 минутах от станции метро Борисовский тракт', 'Рядом авто/вело парковка', 'Рабочий день с 9:00 до 17:00 без переработок', 'Чай / кофе / печеньки / фрукты / чистую водичку Protera', 'Своевременную оплату (зп по результатам собеседования)', 'Личное оборудованное рабочее место с wi-fi', 'Развитие и рост', 'Четко прописанную денежную мотивацию с KPI']
    },
    {
        title: 'SEO специалист',
        descVacancy: [
            'Требуемый опыт работы: от 6 месяцев',
            'Полная занятость, полный день'
        ],
        resposibility: ['Разработка сайтов и интернет-магазинов на CMS WordPress.', 'Внесение правок в функционал сайтов на CMS WordPress, доработка.', 'Внесение правок в шаблоны сайтов на WordPress.', 'Оптимизация скриптов.', 'Отчётность по работе.'],
        requirements: ['Наличие не менее 3-х проектов в онлайне, в разработке которых вы принимали участие.', 'Умение эффективно выстраивать собственный рабочий процесс.', 'Фокус на саморазвитии, быстрое изучение нового материала, системное мышление.', 'Прохождение минимального тестового задания.'],
        knowledge: ['Знание PHP, js, css, html – Обязательно.', 'Вы умеете работать с дочерними темами.', 'Понимаете основы кэширования.', 'Вы умеете корректно подключать скрипты и стили (JS/CSS).', 'Вы комментируете свой код, стараясь сделать его понятным для других разработчиков.', 'При разработке сайта, Вы следите за тем чтобы код соответствовал документации WP Codex.'],
        advantage: ['Знание технического английского языка.', 'Умение работать с другими CMS.', 'Можете отличить страничный кеш от объектного и транзитного.', 'Вы понимаете разницу между get_posts и query_posts.', 'Установить и настроить простой сервер без изысков (php, nginx, MySQL).'],
        terms: ['Уютный офис в 10 минутах от станции метро Борисовский тракт', 'Рядом авто/вело парковка', 'Рабочий день с 9:00 до 17:00 без переработок', 'Чай / кофе / печеньки / фрукты / чистую водичку Protera', 'Своевременную оплату (зп по результатам собеседования)', 'Личное оборудованное рабочее место с wi-fi', 'Развитие и рост', 'Четко прописанную денежную мотивацию с KPI']
    },
    {
        title: 'PPC специалист',
        descVacancy: [
            'Требуемый опыт работы: от 6 месяцев',
            'Полная занятость, полный день'
        ],
        resposibility: ['Разработка сайтов и интернет-магазинов на CMS WordPress.', 'Внесение правок в функционал сайтов на CMS WordPress, доработка.', 'Внесение правок в шаблоны сайтов на WordPress.', 'Оптимизация скриптов.', 'Отчётность по работе.'],
        requirements: ['Наличие не менее 3-х проектов в онлайне, в разработке которых вы принимали участие.', 'Умение эффективно выстраивать собственный рабочий процесс.', 'Фокус на саморазвитии, быстрое изучение нового материала, системное мышление.', 'Прохождение минимального тестового задания.'],
        knowledge: ['Знание PHP, js, css, html – Обязательно.', 'Вы умеете работать с дочерними темами.', 'Понимаете основы кэширования.', 'Вы умеете корректно подключать скрипты и стили (JS/CSS).', 'Вы комментируете свой код, стараясь сделать его понятным для других разработчиков.', 'При разработке сайта, Вы следите за тем чтобы код соответствовал документации WP Codex.'],
        advantage: ['Знание технического английского языка.', 'Умение работать с другими CMS.', 'Можете отличить страничный кеш от объектного и транзитного.', 'Вы понимаете разницу между get_posts и query_posts.', 'Установить и настроить простой сервер без изысков (php, nginx, MySQL).'],
        terms: ['Уютный офис в 10 минутах от станции метро Борисовский тракт', 'Рядом авто/вело парковка', 'Рабочий день с 9:00 до 17:00 без переработок', 'Чай / кофе / печеньки / фрукты / чистую водичку Protera', 'Своевременную оплату (зп по результатам собеседования)', 'Личное оборудованное рабочее место с wi-fi', 'Развитие и рост', 'Четко прописанную денежную мотивацию с KPI']
    },
    // {
    //     title: 'PHP разработчик (Middle +)',
    //     descVacancy: [
    //         'Требуемый опыт работы: от 6 месяцев',
    //         'Полная занятость, полный день'
    //     ],
    //     resposibility: ['Разработка сайтов и интернет-магазинов на CMS WordPress.', 'Внесение правок в функционал сайтов на CMS WordPress, доработка.', 'Внесение правок в шаблоны сайтов на WordPress.', 'Оптимизация скриптов.', 'Отчётность по работе.'],
    //     requirements: ['Наличие не менее 3-х проектов в онлайне, в разработке которых вы принимали участие.', 'Умение эффективно выстраивать собственный рабочий процесс.', 'Фокус на саморазвитии, быстрое изучение нового материала, системное мышление.', 'Прохождение минимального тестового задания.'],
    //     knowledge: ['Знание PHP, js, css, html – Обязательно.', 'Вы умеете работать с дочерними темами.', 'Понимаете основы кэширования.', 'Вы умеете корректно подключать скрипты и стили (JS/CSS).', 'Вы комментируете свой код, стараясь сделать его понятным для других разработчиков.', 'При разработке сайта, Вы следите за тем чтобы код соответствовал документации WP Codex.'],
    //     advantage: ['Знание технического английского языка.', 'Умение работать с другими CMS.', 'Можете отличить страничный кеш от объектного и транзитного.', 'Вы понимаете разницу между get_posts и query_posts.', 'Установить и настроить простой сервер без изысков (php, nginx, MySQL).'],
    //     terms: ['Уютный офис в 10 минутах от станции метро Борисовский тракт', 'Рядом авто/вело парковка', 'Рабочий день с 9:00 до 17:00 без переработок', 'Чай / кофе / печеньки / фрукты / чистую водичку Protera', 'Своевременную оплату (зп по результатам собеседования)', 'Личное оборудованное рабочее место с wi-fi', 'Развитие и рост', 'Четко прописанную денежную мотивацию с KPI']
    // },
    // {
    //     title: 'Python разработчик',
    //     descVacancy: [
    //         'Требуемый опыт работы: от 6 месяцев',
    //         'Полная занятость, полный день'
    //     ],
    //     resposibility: ['Разработка сайтов и интернет-магазинов на CMS WordPress.', 'Внесение правок в функционал сайтов на CMS WordPress, доработка.', 'Внесение правок в шаблоны сайтов на WordPress.', 'Оптимизация скриптов.', 'Отчётность по работе.'],
    //     requirements: ['Наличие не менее 3-х проектов в онлайне, в разработке которых вы принимали участие.', 'Умение эффективно выстраивать собственный рабочий процесс.', 'Фокус на саморазвитии, быстрое изучение нового материала, системное мышление.', 'Прохождение минимального тестового задания.'],
    //     knowledge: ['Знание PHP, js, css, html – Обязательно.', 'Вы умеете работать с дочерними темами.', 'Понимаете основы кэширования.', 'Вы умеете корректно подключать скрипты и стили (JS/CSS).', 'Вы комментируете свой код, стараясь сделать его понятным для других разработчиков.', 'При разработке сайта, Вы следите за тем чтобы код соответствовал документации WP Codex.'],
    //     advantage: ['Знание технического английского языка.', 'Умение работать с другими CMS.', 'Можете отличить страничный кеш от объектного и транзитного.', 'Вы понимаете разницу между get_posts и query_posts.', 'Установить и настроить простой сервер без изысков (php, nginx, MySQL).'],
    //     terms: ['Уютный офис в 10 минутах от станции метро Борисовский тракт', 'Рядом авто/вело парковка', 'Рабочий день с 9:00 до 17:00 без переработок', 'Чай / кофе / печеньки / фрукты / чистую водичку Protera', 'Своевременную оплату (зп по результатам собеседования)', 'Личное оборудованное рабочее место с wi-fi', 'Развитие и рост', 'Четко прописанную денежную мотивацию с KPI']
    // },
    // {
    //     title: '1C разработчик',
    //     descVacancy: [
    //         'Требуемый опыт работы: от 6 месяцев',
    //         'Полная занятость, полный день'
    //     ],
    //     resposibility: ['Разработка сайтов и интернет-магазинов на CMS WordPress.', 'Внесение правок в функционал сайтов на CMS WordPress, доработка.', 'Внесение правок в шаблоны сайтов на WordPress.', 'Оптимизация скриптов.', 'Отчётность по работе.'],
    //     requirements: ['Наличие не менее 3-х проектов в онлайне, в разработке которых вы принимали участие.', 'Умение эффективно выстраивать собственный рабочий процесс.', 'Фокус на саморазвитии, быстрое изучение нового материала, системное мышление.', 'Прохождение минимального тестового задания.'],
    //     knowledge: ['Знание PHP, js, css, html – Обязательно.', 'Вы умеете работать с дочерними темами.', 'Понимаете основы кэширования.', 'Вы умеете корректно подключать скрипты и стили (JS/CSS).', 'Вы комментируете свой код, стараясь сделать его понятным для других разработчиков.', 'При разработке сайта, Вы следите за тем чтобы код соответствовал документации WP Codex.'],
    //     advantage: ['Знание технического английского языка.', 'Умение работать с другими CMS.', 'Можете отличить страничный кеш от объектного и транзитного.', 'Вы понимаете разницу между get_posts и query_posts.', 'Установить и настроить простой сервер без изысков (php, nginx, MySQL).'],
    //     terms: ['Уютный офис в 10 минутах от станции метро Борисовский тракт', 'Рядом авто/вело парковка', 'Рабочий день с 9:00 до 17:00 без переработок', 'Чай / кофе / печеньки / фрукты / чистую водичку Protera', 'Своевременную оплату (зп по результатам собеседования)', 'Личное оборудованное рабочее место с wi-fi', 'Развитие и рост', 'Четко прописанную денежную мотивацию с KPI']
    // },
    // {
    //     title: 'Bitrix разработчик',
    //     descVacancy: [
    //         'Требуемый опыт работы: от 6 месяцев',
    //         'Полная занятость, полный день'
    //     ],
    //     resposibility: ['Разработка сайтов и интернет-магазинов на CMS WordPress.', 'Внесение правок в функционал сайтов на CMS WordPress, доработка.', 'Внесение правок в шаблоны сайтов на WordPress.', 'Оптимизация скриптов.', 'Отчётность по работе.'],
    //     requirements: ['Наличие не менее 3-х проектов в онлайне, в разработке которых вы принимали участие.', 'Умение эффективно выстраивать собственный рабочий процесс.', 'Фокус на саморазвитии, быстрое изучение нового материала, системное мышление.', 'Прохождение минимального тестового задания.'],
    //     knowledge: ['Знание PHP, js, css, html – Обязательно.', 'Вы умеете работать с дочерними темами.', 'Понимаете основы кэширования.', 'Вы умеете корректно подключать скрипты и стили (JS/CSS).', 'Вы комментируете свой код, стараясь сделать его понятным для других разработчиков.', 'При разработке сайта, Вы следите за тем чтобы код соответствовал документации WP Codex.'],
    //     advantage: ['Знание технического английского языка.', 'Умение работать с другими CMS.', 'Можете отличить страничный кеш от объектного и транзитного.', 'Вы понимаете разницу между get_posts и query_posts.', 'Установить и настроить простой сервер без изысков (php, nginx, MySQL).'],
    //     terms: ['Уютный офис в 10 минутах от станции метро Борисовский тракт', 'Рядом авто/вело парковка', 'Рабочий день с 9:00 до 17:00 без переработок', 'Чай / кофе / печеньки / фрукты / чистую водичку Protera', 'Своевременную оплату (зп по результатам собеседования)', 'Личное оборудованное рабочее место с wi-fi', 'Развитие и рост', 'Четко прописанную денежную мотивацию с KPI']
    // }
]
