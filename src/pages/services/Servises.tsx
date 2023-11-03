import React, {useEffect} from 'react';
import {
    ColumnBlockWrap,
    ContentBlock,
    LinkBlock,
    ServicesWrapper,
    Text,
    TextCursive,
    Title,
    WebPOWrapper
} from './style';
import {ServiceHeader} from "./serviceHeader";
import {useParams} from "react-router-dom";
import {ErrorDevs} from "./errorDevs";
import {WorkUs} from "./workUs";
import {Benefit} from "./benefit";
import {ContactUsServise} from "./contactUs";
import {animateText} from "../../common/animate/animateText";
import {PortfolioSlider} from "../home/portfolioSlider/PortfolioSlider";
import {Li, Ul} from "../home/methodology/style";
import Star from "../home/methodology/assets/star.svg";


export const Services = () => {
    const {service} = useParams()

    useEffect(() => {
        if (service === 'webDev') {
            document.title = 'Разработка сайтов — RIZOFT'
        } else if (service === 'support') {
            document.title = 'Поддержка сайтов — RIZOFT'
        } else if (service === 'ux') {
            document.title = 'UX/UI Дизайн — RIZOFT'
        } else if (service === 'webPO') {
            document.title = 'Разработка ПО — RIZOFT'
        }

        //  document.title = 'Кейсы — VEON-TECH'
        animateText()
    }, [service])


    return (
        <ServicesWrapper>
            {service === 'webDev' &&
                <>
                    <ServiceHeader/>
                    <ErrorDevs/>
                    <WorkUs/>
                    <Benefit/>
                    <ContactUsServise/>
                    <PortfolioSlider/>
                </>
            }
            {service === 'support' &&
                <>
                    <WebPOWrapper>
                        <div className="entry-content">
                            <Title>Поддержка сайтов</Title>
                            <Text>
                                После того, как сайт был создан, необходимо позаботиться о его дальнейшей работе –
                                технической поддержке сайта.
                            </Text>
                            <LinkBlock>
                                <div>Системное тестирование</div>
                                <div>Обнавление контента сайта</div>
                                <div>Редактирование страниц, модулей и блоков</div>
                                <div>Обеспечение бесперебойной работы сайта</div>
                            </LinkBlock>
                            <Text>
                                Сопровождение сайта – это не только его обновление, но также внедрение графических
                                изменений, создание новых разделов, блоков, формирование устойчивого интереса
                                пользователей к ресурсу.
                                <br/> Таким образом, поддержка сайтов – это комплекс услуг, за которым скрывается
                                решение разных задач (в зависимости от целей, для которых ресурс был создан). <br/> От
                                этого и будет рассчитываться объем проводимых работ: постоянная поддержка сайта – оплата
                                исходя из среднего объема работы в месяц, периодическая техническая поддержка сайтов –
                                исходя из примерного количества потраченного времени на обслуживание сайта, например,
                                100 часов в год.
                            </Text>
                            <ContentBlock>
                                <Title>Что входит в комплекс услуг по поддержке сайта?
                                </Title>
                                <Text>
                                    В большинстве случаев, сопровождение сайтов рассматривается как долгосрочное
                                    сотрудничество владельца ресурса с компанией, предоставляющей эти услуги.
                                </Text>
                                <Text>
                                    В этом случае, заключается договор, в котором прописываются все необходимые
                                    мероприятии, которые будут проводиться в целях обеспечения стабильной работы
                                    веб-сайта, и поддержки интереса пользователей к нему.
                                </Text>
                                <Text>
                                    Свои услуги мы предлагаем для того, чтобы Вам не нужно было создавать новые рабочие
                                    места в своей компании для специалистов, которые бы занимались обслуживанием
                                    веб-проекта.
                                </Text>
                            </ContentBlock>
                        </div>
                    </WebPOWrapper>
                    <PortfolioSlider/>
                </>
            }
            {service === 'ux' &&
                <>
                    <WebPOWrapper>
                        <div className="entry-content">
                            <Title>Дизайн интерфейсов любой сложности</Title>
                            <Text>
                                Наш дизайн интерфейсов не ограничивается только эстетикой. Мы обеспечиваем простотой
                                для достижения цели, учитывая пользовательские привычки Ваших клиентов не только внутри
                                сайта, приложения и других сервисов, а также офлайн.
                            </Text>
                            <Text>Мы построим правильную логику взаимодействия пользователя с сайтом или приложением,
                                которая приведёт к увеличению конверсии, продвижению товаров и улучшением обслуживания
                                клиентов.</Text>
                            <LinkBlock>
                                <div>Веб-приложения</div>
                                <div>Мобильные приложения</div>
                                <div>Банкоматы и терминалы</div>
                                <div>Интерфейсы индустриальных и промышленных систем</div>
                            </LinkBlock>
                            <ColumnBlockWrap>
                                <div className="wp-block-column is-layout-flow">
                                    <p>Подбираем на проект дизайнера с сильными
                                        скиллами
                                        в нужной области и усиливаем другими специалистами: 2D- и 3D-иллюстраторами.</p>
                                </div>
                                <div className="wp-block-column is-layout-flow">
                                    <p>Отвечаем в течение дня, простые проекты оцениваем за два, подписываем документы и
                                        начинаем работу.
                                    </p>
                                </div>
                                <div className="wp-block-column is-layout-flow">
                                    <p>
                                        Быстро вникаем в проект и не тратим деньги клиентов на прототипы для простых
                                        сервисов и в отраслях, где собаку съели.
                                    </p>
                                </div>
                            </ColumnBlockWrap>
                            <ContentBlock>
                                <Title>Делаем сложные вещи простыми:</Title>
                                <Ul>
                                    <Li><img src={Star} alt=""/> <span>Упорядочиваем большие объемы информации;</span>
                                    </Li>
                                    <Li><img src={Star} alt=""/> <span>Выстраиваем навигацию;</span> </Li>
                                    <Li><img src={Star} alt=""/> <span>Помогаем пользователю совершить целевое действие без нервов и обращений в службу
                                        поддержки;</span> </Li>
                                </Ul>
                                <Text>
                                    Если бизнес сложный, то больше времени уделяем глубокому исследованию, анализу
                                    аудитории
                                    и ее потребностей. Если выявляем много подводных камней, то делаем прототипы. Но
                                    чаще всего
                                    готовы предложить решение, не тратя десятки часов на изучение сферы и онбординг.
                                </Text>
                            </ContentBlock>
                            <ContentBlock>
                                <Title>Дизайн, на который
                                    можно опереться в будущем</Title>
                                <Text>
                                    Делаем продуманный качественный дизайн, который позволит решать новые бизнес-задачи
                                    быстро
                                    и с минимальными затратами. Для этого собираем UI-киты, чтобы упорядочить и
                                    унифицировать
                                    сотни элементов: кнопки, иконки, чекбоксы, поля, заголовки, меню, списки, селекты,
                                    уведомления, модальные окна. Разработчики будут счастливы.
                                </Text>
                                <Text>
                                    Дизайн-система — это
                                    язык,
                                    благодаря которому дизайнеры и разработчики живут в гармонии
                                </Text>
                            </ContentBlock>
                            <ContentBlock>
                                <Title>Прозрачность процесса
                                    и синхронизация с бизнесом</Title>
                                <Text>
                                    Сверяемся с клиентом на каждом этапе, а не молчим несколько месяцев, пока не сделаем
                                    идеально. После
                                    обратной связи обсуждаем варианты решения и двигаемся дальше. Спустя одну-две-три
                                    итерации
                                    макет
                                    превращается в финальный дизайн.
                                </Text>
                                <Ul>
                                    <Li><img src={Star} alt=""/> <span>Все видно в Фигме</span> </Li>
                                    <Li><img src={Star} alt=""/> <span>Арт-директинг</span> </Li>
                                    <Li><img src={Star} alt=""/> <span>Scrum, Lean, Agile</span> </Li>
                                    <Li><img src={Star} alt=""/> <span>Дейли, еженедельные отчеты</span> </Li>
                                </Ul>
                            </ContentBlock>
                        </div>
                    </WebPOWrapper>
                    <PortfolioSlider/>
                </>
            }
            {service === 'webPO' &&
                <>
                    <WebPOWrapper>
                        <div className="entry-content">
                            <Title>Разработка програмного обеспечения</Title>
                            <Text>Все-таки трудно автомотизировать бизнес :(</Text>
                            <TextCursive>RIZOFT поможет вам решить рутинные бизнес-задачи!</TextCursive>
                            <LinkBlock>
                                <div>Автоматизация бизнес-задач</div>
                                <div>Уменьшение нагрузки на персонал</div>
                                <div>Оптимизация методов работы с клиентами</div>
                                <div>Упрощение работы с документооборотом</div>
                                <div>Увеличение доверия клиентов к бренду</div>
                            </LinkBlock>
                            <ContentBlock>
                                <Title><span>Собственно</span> , что мы сможем сделать:</Title>
                                <Ul>
                                    <Li><img src={Star} alt=""/> <span>Промышленные приложения</span> </Li>
                                    <Li><img src={Star} alt=""/> <span>Чат-боты</span> </Li>
                                    <Li><img src={Star} alt=""/> <span>Мобильные приложения</span> </Li>
                                    <Li><img src={Star} alt=""/> <span>И многое-многое другое...</span> </Li>
                                </Ul>
                            </ContentBlock>
                            <ContentBlock>
                                <Title>Успешно автоматизируем бизнес-процессы различной направленности:</Title>
                                <Ul>
                                    <Li><img src={Star} alt=""/> <span>Медицина</span> </Li>
                                    <Li><img src={Star} alt=""/> <span>Ресторанный бизнес</span> </Li>
                                    <Li><img src={Star} alt=""/> <span>Логистика</span> </Li>
                                    <Li><img src={Star} alt=""/> <span>Развлечения</span> </Li>
                                    <Li><img src={Star} alt=""/> <span>Аренда</span> </Li>
                                    <Li><img src={Star} alt=""/> <span>Интернет торговля</span> </Li>
                                    <Li><img src={Star} alt=""/> <span>И многое-многое другое...</span> </Li>
                                </Ul>
                            </ContentBlock>
                        </div>
                    </WebPOWrapper>
                    <PortfolioSlider/>
                </>
            }
        </ServicesWrapper>
    );
};

