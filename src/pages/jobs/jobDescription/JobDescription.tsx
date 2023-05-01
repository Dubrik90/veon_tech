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
import {TitleHead} from "../../services/benefit/style";
import {ROUTS} from "../../../common/constans/routs";

export const JobDescription = () => {
    const cardArrayData = [
        {title: 'Различные проекты и конкретные задачи'},
        {title: 'Сплоченный, молодой коллектив'},
        {title: 'Индивидуальная  прокачка навыков'},
        {title: 'Перспективный карьерный рост'},
    ]
    const linksArrayData = [
        {title: 'О нашей компании', to: ROUTS.ABOUT},
        {title: 'Работа в Veon-Tech', to: ROUTS.JOBS},
        {title: 'Отзывы клиентов', to: ''},
        {title: 'Бонусы', to: ROUTS.BONUSES},
    ]

    return (
        <JobDescriptionWrapper>
            <ContainerJob>
                <TitleHead className='animate'>
                    Работа в Veon-Tech</TitleHead>
                <DescriptionBlock>
                    <DescriptionContent>
                        <BarLinksMobile>
                            {linksArrayData.map((el, index) => <Link className='animate' key={index} to={el.to}>{el.title}</Link>)}
                        </BarLinksMobile>
                        <AboutBlock>
                            <About className='animate'>
                                Амбициозная и целеустремленная команда экспертов, с большим стремлением оказывать
                                высококачественные услуги по интернет-маркетингу и веб-разработке. <br/> Если Вы желаете стать
                                частью нашей команды, тогда отправляйте нам Ваше резюме на электронную почту:
                                sales@veon-tech.ru
                            </About>
                            <About className='animate'>
                                Если Вы ищете душевное место работы с классной атмосферой, приятными людьми и хорошей
                                оплатой труда, то Вам в нашу команду!
                            </About>
                        </AboutBlock>
                        <AboutQuality>
                            <SubTitle className='animate'>Мы работаем эффективно, поэтому у нас 7-часовой рабочий день!</SubTitle>
                            <Title>Почему нужно работать именно в Veon-Tech?</Title>
                            <CardsBlock>
                                {cardArrayData.map((el, index) => <Card className='animate' key={index}>{el.title}</Card>)}
                            </CardsBlock>
                        </AboutQuality>

                        <Accordeon/>

                    </DescriptionContent>
                    <DescriptionBar>
                        <BarLinks>
                            {linksArrayData.map((el, index) => <Link className='animate' key={index} to={el.to}>{el.title}</Link>)}
                        </BarLinks>
                        <EchoBlock>
                            <EchoTitle className='animate'>Откликнуться</EchoTitle>
                            <EchoText>
                                Пожалуйста вышлите Ваше резюме на контактный e-mail указанный ниже. Мы рассмотрим Вашу
                                кандидатуру и дадим ответ в течение 3-5 рабочих дней.
                                <a href="#">sales@veon-tech.ru</a>
                            </EchoText>
                        </EchoBlock>
                        <EchoBlock>
                            <EchoTitle className='animate'>Нет бланка резюме? Поможем!</EchoTitle>
                            <EchoTextBlock>
                                <Blank/>
                                <span>Xа, нет! <br/> Тащи свой</span>
                            </EchoTextBlock>
                        </EchoBlock>
                    </DescriptionBar>
                </DescriptionBlock>
            </ContainerJob>
        </JobDescriptionWrapper>
    );
};

