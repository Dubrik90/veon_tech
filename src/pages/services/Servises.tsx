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
import {dataServices} from "./app/dataService";
import {ErrorDevs} from "./errorDevs";
import {WorkUs} from "./workUs";
import Pencil1 from "./assets/stateDev/pencil1.svg";
import Creative2 from "./assets/stateDev/creativity2.svg";
import Proto3 from "./assets/stateDev/prototype3.svg";
import Comp4 from "./assets/stateDev/computer4.svg";
import Check5 from "./assets/stateDev/quality-check5.svg";
import Up6 from "./assets/stateDev/start-up6.svg";
import {Benefit} from "./benefit";
import {ContactUsServise} from "./contactUs";
import {animateText} from "../../common/animate/animateText";
import {PortfolioSlider} from "../home/portfolioSlider/PortfolioSlider";
import {Li, Ul} from "../home/methodology/style";
import Star from "../home/methodology/assets/star.svg";


export type CardWorkUsType = {
    img: string,
    title: string,
    text: string,
}

export const Services = () => {
    const {service} = useParams()
    const activeDataService = dataServices.filter(el => el.type === service)[0]

    useEffect(() => {
        if (service === 'webDev') {
            document.title = 'Website development — VEON-TECH'
        } else if (service === 'support') {
            document.title = 'Website support — VEON-TECH'
        }
        else if (service === 'ux') {
            document.title = 'UX/UI design — VEON-TECH'
        }else if (service === 'webPO') {
            document.title = 'Software development — VEON-TECH'
        }

      //  document.title = 'Кейсы — VEON-TECH'
        animateText()
    }, [service])


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

    return (
        <ServicesWrapper>
            {service === 'webDev' &&
                <>
                    <ServiceHeader img={activeDataService.img}
                                   text={activeDataService.text}
                                   title={activeDataService.title}
                                   titleBtn={activeDataService.titleBtn}
                    />
                    <ErrorDevs/>
                    <WorkUs cardArray={cardArray1}
                            title={'Почему работать с нами удобно и выгодно?'}
                    />
                    <Benefit/>
                    <ContactUsServise/>
                    <PortfolioSlider/>
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
                    <WebPOWrapper>
                        <div className="entry-content">
                            <Title>WEBSITE SUPPORT</Title>
                            <Text>
                                After the site has been created, it is necessary to take care of its further work – technical support of the site.
                            </Text>
                            <LinkBlock>
                                <div>System testing</div>
                                <div>Website content updates</div>
                                <div>Editing pages, modules, and blocks</div>
                                <div>Ensuring uninterrupted website operation</div>
                            </LinkBlock>
                            <Text>
                                Website maintenance includes not only updates but also implementing graphic changes, creating new sections and blocks, and generating sustained user interest in the resource.
                                <br/> Thus, website support is a complex set of services aimed at solving various tasks depending on the goals for which the resource was created. <br/> The scope of work will be calculated based on this: continuous website support is paid based on the average monthly workload, periodic technical website support is based on the approximate amount of time spent on website maintenance, for example, 100 hours per year.
                            </Text>
                            <ContentBlock>
                                <Title>What is included in the complex of website support services?
                                </Title>
                                <Text>
                                    In most cases, website maintenance is considered a long-term collaboration between the site owner and the company providing these services.
                                </Text>
                                <Text>
                                    In this case, a contract is concluded that specifies all the necessary measures that will be taken to ensure the stable operation of the website and maintain user interest in it.
                                </Text>
                                <Text>
                                    We offer our services so that you do not have to create new positions in your company for specialists dedicated to servicing the web project.
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
                            <Title>Design of Interfaces of Any Complexity</Title>
                            <Text>
                                Our interface design goes beyond aesthetics. We ensure simplicity to achieve goals, taking into account the user habits of your clients not only within websites, applications, and other services but also offline.
                            </Text>
                            <Text>We will establish the right logic of user interaction with the website or application, leading to increased conversion, product promotion, and improved customer service.</Text>
                            <LinkBlock>
                                <div>Web applications</div>
                                <div>Mobile applications</div>
                                <div>ATMs and terminals</div>
                                <div>Interfaces for industrial and industrial systems</div>
                            </LinkBlock>
                            <ColumnBlockWrap>
                                <div className="wp-block-column is-layout-flow">
                                    <p>We select a designer with strong skills in the required field for the project and complement them with other specialists such as 2D and 3D illustrators.</p>
                                </div>
                                <div className="wp-block-column is-layout-flow">
                                    <p>We respond within a day, estimate simple projects in two days, sign documents, and start working.</p>
                                </div>
                                <div className="wp-block-column is-layout-flow">
                                    <p>We quickly grasp the project and don't waste clients' money on prototypes for simple services and industries where the subject matter is well known.</p>
                                </div>
                            </ColumnBlockWrap>
                            <ContentBlock>
                                <Title>We make complex things simple by:</Title>
                                <Ul>
                                    <Li><img src={Star} alt="Star"/> <span>Organizing large volumes of information;</span> </Li>
                                    <Li><img src={Star} alt="Star"/> <span>Structuring navigation;</span> </Li>
                                    <Li><img src={Star} alt="Star"/> <span>Assisting users in accomplishing their goals without stress or support requests;</span> </Li>
                                </Ul>
                                <Text>
                                    If the business is complex, we dedicate more time to in-depth research, audience analysis, and their needs. If we encounter many pitfalls, we create prototypes. However, most of the time, we are ready to propose a solution without spending dozens of hours studying the industry and onboarding.
                                </Text>
                            </ContentBlock>
                            <ContentBlock>
                                <Title>Design that can be relied upon in the future</Title>
                                <Text>
                                    We create thoughtful and high-quality designs that allow for quick and cost-effective resolution of new business tasks. To achieve this, we gather UI kits to organize and standardize hundreds of elements, such as buttons, icons, checkboxes, fields, headers, menus, lists, selects, notifications, and modal windows. Developers will be delighted.
                                </Text>
                                <Text>Design system is the language that enables designers and developers to live in harmony.</Text>
                            </ContentBlock>
                            <ContentBlock>
                                <Title>Process transparency and synchronization with the business</Title>
                                <Text>
                                    We align with the client at every stage instead of staying silent for several months until achieving perfection. After receiving feedback, we discuss solution options and move forward. After one, two, or three iterations, the layout transforms into the final design.
                                </Text>
                                <Ul>
                                    <Li><img src={Star} alt="Star"/> <span>Everything is visible in Figma</span> </Li>
                                    <Li><img src={Star} alt="Star"/> <span>Art direction</span> </Li>
                                    <Li><img src={Star} alt="Star"/> <span>Scrum, Lean, Agile</span> </Li>
                                    <Li><img src={Star} alt="Star"/> <span>Dailies, weekly reports</span> </Li>
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
                            <Title>Software Development</Title>
                            <Text>It can still be challenging to automate business processes :(</Text>
                            <TextCursive>VEON-TECH will help you solve routine business tasks!</TextCursive>
                            <LinkBlock>
                                <div>Business Task Automation</div>
                                <div>Reduced workload on staff</div>
                                <div>Optimization of customer interaction methods</div>
                                <div>Streamlined document management</div>
                                <div>Increased customer trust in the brand</div>
                            </LinkBlock>
                            <ContentBlock>
                                <Title><span>Here's</span> , what we can do:</Title>
                                <Ul>
                                    <Li><img src={Star} alt="star"/> <span>Industrial applications</span> </Li>
                                    <Li><img src={Star} alt="star"/> <span>Chatbots</span> </Li>
                                    <Li><img src={Star} alt="star"/> <span>Mobile applications</span> </Li>
                                    <Li><img src={Star} alt="star"/> <span>And much, much more...</span> </Li>
                                </Ul>
                            </ContentBlock>
                            <ContentBlock>
                                <Title>We successfully automate business processes in various industries:</Title>
                                <Ul>
                                    <Li><img src={Star} alt="star"/> <span>Healthcare</span> </Li>
                                    <Li><img src={Star} alt="star"/> <span>Restaurant business</span> </Li>
                                    <Li><img src={Star} alt="star"/> <span>Logistics</span> </Li>
                                    <Li><img src={Star} alt="star"/> <span>Entertainment</span> </Li>
                                    <Li><img src={Star} alt="star"/> <span>Rental services</span> </Li>
                                    <Li><img src={Star} alt="star"/> <span>E-commerce</span> </Li>
                                    <Li><img src={Star} alt="star"/> <span>And much, much more...</span> </Li>
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

