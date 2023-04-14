import React from 'react';
import {
    About,
    AboutBlock,
    AboutQuality,
    BarLinks, BarLinksMobile,
    Card,
    CardsBlock,
    ContainerJob,
    DescriptionBar,
    DescriptionBlock,
    DescriptionContent,
    EchoBlock,
    EchoText,
    EchoTextBlock,
    EchoTitle,
    JobDescriptionWrapper,
    SubTitle,
    Title
} from "./style";
import {Link} from "react-router-dom";
import {Blank} from "../assets";
import {Accordeon} from "./accordeon";

export const JobDescription = () => {
    const cardArrayData = [
        {title: 'Различные проекты и конкретные задачи'},
        {title: 'Сплоченный, молодой коллектив'},
        {title: 'Индивидуальная  прокачка навыков'},
        {title: 'Перспективный карьерный рост'},
    ]
    const linksArrayData = [
        {title: 'О нашей компании', to: ''},
        {title: 'Работа в Veon-Tech', to: ''},
        {title: 'Отзывы клиентов', to: ''},
        {title: 'Популярные вопросы', to: ''},
    ]

    return (
        <JobDescriptionWrapper>
            <ContainerJob>
                <DescriptionBlock>
                    <DescriptionContent>
                        <BarLinksMobile>
                            {linksArrayData.map((el, index) => <Link key={index} to={el.to}>{el.title}</Link>)}
                        </BarLinksMobile>
                        <AboutBlock>
                            <About>
                                Амбициозная и целеустремленная команда экспертов, с большим стремлением оказывать
                                высококачественные услуги по интернет-маркетингу и веб-разработке. Если Вы желаете стать
                                частью нашей команды, тогда отправляйте нам Ваше резюме на электронную почту
                                sales@veon-tech.ru
                            </About>
                            <About>
                                Если Вы ищете душевное место работы с классной атмосферой, приятными людьми и хорошей
                                оплатой труда, то Вам в нашу команду!
                            </About>
                        </AboutBlock>
                        <AboutQuality>
                            <SubTitle>Мы работаем эффективно, поэтому у нас 7-часовой рабочий день!</SubTitle>
                            <Title>Почему нужно работать именно в Veon-Tech?</Title>
                            <CardsBlock>
                                {cardArrayData.map((el, index) => <Card key={index}>{el.title}</Card>)}
                            </CardsBlock>
                        </AboutQuality>

                        <Accordeon/>

                    </DescriptionContent>
                    <DescriptionBar>
                        <BarLinks>
                            {linksArrayData.map((el, index) => <Link key={index} to={el.to}>{el.title}</Link>)}
                        </BarLinks>
                        <EchoBlock>
                            <EchoTitle>Откликнуться</EchoTitle>
                            <EchoText>
                                Пожалуйста вышлите Ваше резюме на контактный e-mail указанный ниже. Мы рассмотрим Вашу
                                кандидатуру и дадим ответ в течение 3-5 рабочих дней.
                                <a href="#">sales@veon-tech.ru</a>
                            </EchoText>
                        </EchoBlock>
                        <EchoBlock>
                            <EchoTitle>Нет бланка резюме? Поможем!</EchoTitle>
                            <EchoTextBlock>
                                <Blank/>
                                Чистый бланк резюме для заполнения
                            </EchoTextBlock>
                        </EchoBlock>
                    </DescriptionBar>
                </DescriptionBlock>
            </ContainerJob>
        </JobDescriptionWrapper>
    );
};

