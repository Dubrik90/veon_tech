import React from 'react';
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

export type CardWorkUsType = {
    img: string,
    title: string,
    text: string,
}

export const Services = () => {
    const {service} = useParams()
    const activeDataService = dataServices.filter(el => el.type === service)[0]

    const cardArray1: CardWorkUsType[] = [
        {
            img: Pencil1,
            title: 'Создание сайтов с увеличением конверсии на 37%',
            text: 'Мниверсальные веб-ресурсы, от одностраничных сайтов до сложных B2B систем. Создаем решения, которые привлекают клиентов, демонстрируют ваши продукты и используют все возможности онлайн-бизнеса.'
        },
        {
            img: Creative2,
            title: 'Составление технического задания',
            text: 'Позволит нам собрать все самые крутые “фишки” ваших конкурентов, применив их в разработке вашего сайта, и предупредить все “проколы”. Также при составлении ТЗ мы сформулируем для вас правильное уникальное торговое предложение, которое транслируется через сайт, и, конечно, предложим вам профессиональное видение удобства размещения кнопок, платежных окон, вкладок, выпадающих окон и многого другого, исходя из уже существующих на рынке образцов.'
        },
        {
            img: Proto3,
            title: 'Разработка рабочей версии сайта',
            text: 'Hаписание кода или техническая разработка шаблона на платформе — завершающий этап создания сайта. Здесь работает непосредственно наша команда разработчиков, которые информируют вас о процессе, советуются с вами при необходимости и учитывают все пожелания.'
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
                    <DeveloperWork/>
                    <WorkUs cardArray={cardArray2}
                            title={'Этапы разработки и создания сайта'}
                    />
                    <Portfolio/>
                    <CaseHelp/>
                </>
            }
            {service === 'support' &&
                <>
                    <WorkUs cardArray={cardArray1}
                            title={'Почему работать с нами удобно и выгодно?'}
                    />
                    <CaseHelp/>
                </>
            }
        </ServicesWrapper>
    );
};

