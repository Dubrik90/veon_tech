import React, {useEffect} from 'react';
import {ServicesWrapper} from './style';
import {ServiceHeader} from "./serviceHeader";
import {useParams} from "react-router-dom";
import {dataServices} from "./app/dataService";
import {CaseHelp} from "../case/caseHelp";
import {ErrorDevs} from "./errorDevs";
import {WorkUs} from "./workUs";
import Pencil1 from "./assets/stateDev/pencil1.svg";
import Creative2 from "./assets/stateDev/creativity2.svg";
import Proto3 from "./assets/stateDev/prototype3.svg";
import Comp4 from "./assets/stateDev/computer4.svg";
import Check5 from "./assets/stateDev/quality-check5.svg";
import Up6 from "./assets/stateDev/start-up6.svg";
import {DeveloperWork} from './developerWork';
import {Portfolio} from "./portfolio";
import {Benefit} from "./benefit";
import {ContactUsServise} from "./contactUs";
import {animateText} from "../../common/animate/animateText";


export type CardWorkUsType = {
    img: string,
    title: string,
    text: string,
}

export const Services = () => {
    const {service} = useParams()
    const activeDataService = dataServices.filter(el => el.type === service)[0]

    useEffect(() => {
        animateText()
    }, [])

    const cardArray1: CardWorkUsType[] = [
        {
            img: Pencil1,
            title: 'ПРОЕКТИРОВАНИЕ ИНТЕРФЕЙСОВ',
            text: 'Делаем страницы удобными и понятными, подавая информацию о ваших товарах и услугах в максимально эффективном виде. Простота и удобство взаимодействия пользователя с сайтом – залог того, что он не закроет вкладку, отчаявшись найти нужную ему информацию в “простыне” плохо отформатированного текста и не обозначенных элементов навигации.'
        },
        {
            img: Creative2,
            title: 'АДАПТИВНАЯ ВЁРСТКА',
            text: 'Посетителям вашего сайта не придётся “подсовывать” мобильную версию сайта, опасаясь громоздкости полноэкранных страниц. Работа с медиазапросами позволяет одинаково хорошо отображаются всему тексту, изображениям и элементам интерфейса как на компьютере или ноутбуке, так и на планшете или телефоне, независимо от разрешения и диагонали экрана устройства.'
        },
        {
            img: Proto3,
            title: 'ПРОГРАММИРОВАНИЕ И ИНТЕГРАЦИЯ',
            text: 'Калькуляторы стоимости и фильтры по множественным параметрам дают посетителям сайта именно то, чего они ожидают – моментальное решение задач выбора. А интеграция платёжных систем, API сервисов и сайта несут за собой удобство расчётов и логистическую разгрузку. Программные решения позволяют делегировать “роботам” множество задач, тем самым разгрузить ваш персонал, позволяя сконцентрироваться на рабочем процессе.'
        },
        {
            img: Proto3,
            title: 'Поисковая оптимизация',
            text: 'Для достижения лидирующих позиций Вашего сайта в органической выдаче таких поисковых систем как Яндекс и Google уже давно недостаточно закупить тонну ссылок и радоваться топовым позициям. Сейчас очень важно качество самого сайта, его правильная оптимизация под требования и условия поисковиков, а так же качество и тематика ссылающихся на него сайтов.'
        },

    ]

    const cardArray2: CardWorkUsType[] = [
        {
            img: Pencil1,
            title: 'Разработка структуры и дизайна сайта',
            text: 'Это структура кода, если сайт с нуля, или концепция шаблона, если сайт на готовой платформе. Грамотная логика сайта очень важна, чтобы добиться высокой скорости, функциональности и удобства в использовании для вас и ваших клиентов. Внешний вид сайта мы создаём с учётом всех ваших пожеланий по дизайну и актуальных тенденций. Сайт должен выгодно отличаться от других и при этом содержать плюсы, исключая все минусы существующих проектов.'
        },
        {
            img: Creative2,
            title: 'Высококачественный дизайн',
            text: 'Подчеркивает уникальность вашего веб-сайта, программ и приложений вашей компании. Ваш веб-сайт будет узнаваемым среди ваших клиентов, партнеров и конкурентов.'
        },
        {
            img: Proto3,
            title: 'Клиентоориентированность',
            text: 'Индивидуальный подход и понимание ваших запросов, даже если у вас нет технических знаний о создании сайтов. Изучаем потребности бизнеса и ожидания клиентов. Конструируем удобную площадку для взаимодействия с целевой аудиторией в интернете.'
        },
        {
            img: Comp4,
            title: 'Тестирование работы сайта в различных браузерах',
            text: 'После завершения разработки проводится тщательное А/В тестирование версий, а также QA тестирование самого продукта. И лишь после нескольких идеальных повторений теста продукт выходит “в свет”.'
        },
        {
            img: Check5,
            title: 'Публикация готового продукта в сети Интернет на хостинге',
            text: 'Выбираем для вас хостинг и доменное имя и загружаем рабочую версию сайта.'
        },
        {
            img: Up6,
            title: 'Продвижение в Google и Яндекс',
            text: 'Продвигаем ваш сайт через диджитал-маркетинговые инструменты с целью привлечь в воронку продаж максимальное количество потенциальных покупателей. Осуществляем все настройки на вашу ЦА, а также на луклайк аудиторию продукта и контролируем каждый рекламный день, корректируя и дорабатывая настройки, чтобы сберечь ваш рекламный бюджет с максимальным результатом по конверсиям.'
        },
    ]

    return (
        <ServicesWrapper>
            <ServiceHeader img={activeDataService.img}
                           text={activeDataService.text}
                           title={activeDataService.title}
            />
            {service === 'webDev' &&
                <>
                    <ErrorDevs/>
                    <WorkUs cardArray={cardArray1}
                            title={'Почему работать с нами удобно и выгодно?'}
                    />
                    <Benefit/>
                    <ContactUsServise/>
                    {/*<DeveloperWork/>*/}
                    {/*<WorkUs cardArray={cardArray2}*/}
                    {/*        title={'Этапы разработки и создания сайта'}*/}
                    {/*/>*/}
                    {/*<Portfolio/>*/}
                    {/*<CaseHelp/>*/}
                </>
            }
            {service === 'support' &&
                <>
                    <WorkUs cardArray={cardArray1}
                            title={'Почему работать с нами удобно и выгодно?'}
                    />
                    <Benefit/>
                    <ContactUsServise/>
                </>
            }
            {service === 'ux' &&
                <>
                    <WorkUs cardArray={cardArray1}
                            title={'Почему работать с нами удобно и выгодно?'}
                    />
                    <Benefit/>
                    <ContactUsServise/>
                </>
            }
            {service === 'webPO' &&
                <>
                    <WorkUs cardArray={cardArray1}
                            title={'Почему работать с нами удобно и выгодно?'}
                    />
                    <Benefit/>
                    <ContactUsServise/>
                </>
            }
        </ServicesWrapper>
    );
};

