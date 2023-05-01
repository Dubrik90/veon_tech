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
            text: 'Мы гарантируем максимальную производительность и скорость разработки. Используем проверенные и современные технологии и методологии в управлении проектами.\n' +
                'Наша команда всегда открыта для новых решений. Готова быстро адаптироваться к изменениям на рынке, чтобы обеспечить клиентам наилучшие результаты.\n'
        },
        {
            id: '1',
            title: 'Исследование ниши',
            text: 'Более 5 лет мы предоставляем качественные аутсорс услуги в сфере веб-разработки. Однако, мы не придерживаемся универсального подхода при создании веб-ресурсов.\n' +
                'Мы уделяем дотошное внимание внутреннему и внешнему анализу рынка клиента, чтобы применять лучшие практики и международный опыт наших сотрудников и партнёров.\n'
        },
        {
            id: '2',
            title: 'Перспективы развития',
            text: 'Мы не останавливаемся на достигнутом и всегда смотрим в будущее.\n' +
                'Наша команда планирует постоянно работу совместно с клиентом. Определяем последовательность этапов развития, которые помогут привести бизнес клиента к успеху.\n' +
                'Именно такой подход гарантирует получать эффективные инструменты и постоянно улучшать результаты. Наш бизнес - развиваться вместе с ними.\n'
        },
        {
            id: '3',
            title: 'Безграничные возможности',
            text: 'Коммерческий опыт в различных сферах позволяет нам быть готовым к любым вызовам и преодолевать трудности. Мы всегда ищем новые возможности, открыты для работы с многофункциональными проектами различной направленности.\n' +
                'Будь это сложный веб-ресурс или уникальное приложение. Мы готовы принять вызов и помочь Вам достичь успеха.\n'
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

