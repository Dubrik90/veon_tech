import React, {useState} from 'react';
import {
    AccordionBtn, AccordionContent, AccordionContentWrap, AccordionDesk,
    AccordionItem,
    AccordionListInner, AccordionListTop,
    AccordionText, ListBtn, PrinciplesAccordeon, PrinciplesWrapper, Title, TitleList
} from "./style";
import {Container} from "../../../common/style/Container";
import {Clouse} from "../../../common/components/modalReview/style";

export const Principles = () => {
    const [activeAccordeonItem, setActiveAccordeonItem] = useState<string | null>(null);

    const accordionData = [
        {
            id: '0',
            title: 'Производительность',
            text: ' Используем проверенные современные технологии ' +
                'и методологии управления для достижения лучших результатов. ' +
                'Используем комплексный подход для повышения скорости и ' +
                'производительности разрабатываемых проектов. <br/><br/> ' +
                'И мы всегда открыты новому: быстро переключаемся на свежие решения, ' +
                'программы и изобретения.'
        },
        {
            id: '1',
            title: 'Исследование ниши',
            text: 'За 18 лет мы накопили опыт в разных\n' +
                '                                        отраслях. И могли бы\n' +
                '                                        идти по универсальному пути при создании веб-ресурсов. Но это не наш подход:\n' +
                '                                        мы\n' +
                '                                        всегда исследуем бизнес клиента и его рынок от А до Я, а затем от A до Z,\n' +
                '                                        чтобы\n' +
                '                                        применять лучшие практики и международный опыт. <br/>\n' +
                '                                        <br/>\n' +
                '                                        От детского питания до автомобилей и сложного технологического\n' +
                '                                        оборудования: для\n' +
                '                                        любой сферы мы разрабатываем эффективные решения.'
        },
        {
            id: '2',
            title: 'Перспективы развития',
            text: 'Каким вы видите свой бизнес завтра? А через\n' +
                '                                        год? В своей\n' +
                '                                        работе мы всегда думаем о дальнейшем развитии. Разрабатывая ваш проект, мы\n' +
                '                                        рассказываем вам, какие этапы и пути развития доступны вашему бизнесу,\n' +
                '                                        выбираем, с\n' +
                '                                        чего нужно начать работу, и планируем с вами дорожную карту, которая\n' +
                '                                        позволяет\n' +
                '                                        постоянно улучшать ваши инструменты.'
        },
        {
            id: '3',
            title: 'Безграничные возможности',
            text: 'Мы не пасуем перед трудностями и всегда\n' +
                '                                        готовы к\n' +
                '                                        открытию новых горизонтов, будь это совершенно другой рынок или отрасль. Мы\n' +
                '                                        реализовали десятки проектов, число клиентов и заказов в которых исчисляется\n' +
                '                                        миллионами, — и мы готовы покорять новые вершины с нашими клиентами. У вас\n' +
                '                                        есть\n' +
                '                                        необычная идея? Вы хотите запустить уникальный проект? Мы поможем вам\n' +
                '                                        реализовать\n' +
                '                                        его!'
        },
    ]
    const [activeItem, setActiveItem] = useState()

    const onClickToggleHandler = (ind: string) => {
        if(ind == activeAccordeonItem) {
          return  setActiveAccordeonItem(null)
        }
        setActiveAccordeonItem(ind)
    }

    return (
        <PrinciplesWrapper>
            <Container>
                <Title className={'animate'}>Принципы работы</Title>
                <PrinciplesAccordeon>
                    {accordionData.map((el, index) => (
                        <AccordionItem className={activeAccordeonItem === el.id ? 'open' : ''} key={el.id} onClick={()=>onClickToggleHandler(el.id)}>
                            <AccordionListTop>
                                <TitleList>{el.title}</TitleList>
                                <ListBtn></ListBtn>
                            </AccordionListTop>
                            <AccordionListInner>
                                <AccordionBtn>
                                    <AccordionDesk>
                                        <span></span>
                                        <span></span>
                                    </AccordionDesk>
                                </AccordionBtn>
                                <AccordionContent className={activeAccordeonItem === el.id ? 'open' : ''}>
                                    <AccordionContentWrap>
                                        <AccordionText>
                                            {el.text}
                                        </AccordionText>
                                    </AccordionContentWrap>
                                </AccordionContent>
                            </AccordionListInner>
                        </AccordionItem>
                    ))}
                </PrinciplesAccordeon>
            </Container>
        </PrinciplesWrapper>
    );
};

