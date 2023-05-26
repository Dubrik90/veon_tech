
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
        title: 'WORDPRESS-DEVELOPER (JUNIOR)',
        descVacancy: [
            'Required work experience: at least 6 months',
            'Full-time position, 8 hours per day'
        ],
        resposibility: ['Developing websites and online stores using CMS WordPress.', 'Making modifications to the functionality of WordPress websites, enhancements.', 'Making modifications to WordPress website templates.', 'Script optimization.', 'Work reporting.'],
        requirements: ['Having participated in the development of at least 3 online projects.', 'Ability to effectively organize your own workflow.', 'Focus on self-improvement, quick learning of new materials, systematic thinking.', 'Completion of a minimal test assignment.'],
        knowledge: ['Knowledge of PHP, JS, CSS, HTML - Mandatory.', 'Ability to work with child themes.', 'Understanding the basics of caching.', 'Ability to properly connect scripts and styles (JS/CSS).', 'Commenting your code, striving to make it understandable for other developers.', 'When developing a website, you ensure that the code complies with WP Codex documentation.'],
        advantage: ['Knowledge of technical English language.', 'Ability to work with other CMS.', 'Distinguishing between page cache and object cache.', 'Understanding the difference between get_posts and query_posts.', 'Setting up a simple server without sophistication (PHP, Nginx, MySQL).'],
        terms: ['Cozy office 10 minutes away from the Borisovsky Trakt metro station.', 'Car/bike parking nearby.', 'Workday from 9:00 to 17:00 without overtime.', 'Tea/coffee/cookies/fruit/pure water (Protera) provided.', 'Timely payment (salary based on the interview results).', 'Personal equipped workplace with Wi-Fi.', 'Development and growth opportunities.', 'Clearly defined financial motivation with KPI.']
    },
    {
        title: 'SEO SPECIALIST',
        descVacancy: [
            'Required work experience: at least 6 months',
            'Full-time position, 8 hours per day'
        ],
        resposibility: ['Developing websites and online stores using CMS WordPress.', 'Making modifications to the functionality of WordPress websites, enhancements.', 'Making modifications to WordPress website templates.', 'Script optimization.', 'Work reporting.'],
        requirements: ['Having participated in the development of at least 3 online projects.', 'Ability to effectively organize your own workflow.', 'Focus on self-improvement, quick learning of new materials, systematic thinking.', 'Completion of a minimal test assignment.'],
        knowledge: ['Knowledge of PHP, JS, CSS, HTML - Mandatory.', 'Ability to work with child themes.', 'Understanding the basics of caching.', 'Ability to properly connect scripts and styles (JS/CSS).', 'Commenting your code, striving to make it understandable for other developers.', 'When developing a website, you ensure that the code complies with WP Codex documentation.'],
        advantage: ['Knowledge of technical English language.', 'Ability to work with other CMS.', 'Distinguishing between page cache and object cache.', 'Understanding the difference between get_posts and query_posts.', 'Setting up a simple server without sophistication (PHP, Nginx, MySQL).'],
        terms: ['Cozy office 10 minutes away from the Borisovsky Trakt metro station.', 'Car/bike parking nearby.', 'Workday from 9:00 to 17:00 without overtime.', 'Tea/coffee/cookies/fruit/pure water (Protera) provided.', 'Timely payment (salary based on the interview results).', 'Personal equipped workplace with Wi-Fi.', 'Development and growth opportunities.', 'Clearly defined financial motivation with KPI.']
    },
    {
        title: 'PPC SPECIALIST',
        descVacancy: [
            'Required work experience: at least 6 months',
            'Full-time position, 8 hours per day'
        ],
        resposibility: ['Developing websites and online stores using CMS WordPress.', 'Making modifications to the functionality of WordPress websites, enhancements.', 'Making modifications to WordPress website templates.', 'Script optimization.', 'Work reporting.'],
        requirements: ['Having participated in the development of at least 3 online projects.', 'Ability to effectively organize your own workflow.', 'Focus on self-improvement, quick learning of new materials, systematic thinking.', 'Completion of a minimal test assignment.'],
        knowledge: ['Knowledge of PHP, JS, CSS, HTML - Mandatory.', 'Ability to work with child themes.', 'Understanding the basics of caching.', 'Ability to properly connect scripts and styles (JS/CSS).', 'Commenting your code, striving to make it understandable for other developers.', 'When developing a website, you ensure that the code complies with WP Codex documentation.'],
        advantage: ['Knowledge of technical English language.', 'Ability to work with other CMS.', 'Distinguishing between page cache and object cache.', 'Understanding the difference between get_posts and query_posts.', 'Setting up a simple server without sophistication (PHP, Nginx, MySQL).'],
        terms: ['Cozy office 10 minutes away from the Borisovsky Trakt metro station.', 'Car/bike parking nearby.', 'Workday from 9:00 to 17:00 without overtime.', 'Tea/coffee/cookies/fruit/pure water (Protera) provided.', 'Timely payment (salary based on the interview results).', 'Personal equipped workplace with Wi-Fi.', 'Development and growth opportunities.', 'Clearly defined financial motivation with KPI.']
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
