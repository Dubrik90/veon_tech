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
        {title: 'Various projects and specific tasks'},
        {title: 'Close-knit, young team'},
        {title: 'Individual skills development'},
        {title: 'Promising career growth'},
    ]
    const linksArrayData = [
        {title: 'About our company', to: ROUTS.ABOUT},
        {title: 'Job at Veon-Tech', to: ROUTS.JOBS},
        {title: 'Отзывы клиентов', to: ''},
        {title: 'BONUSES', to: ROUTS.BONUSES},
    ]

    return (
        <JobDescriptionWrapper>
            <ContainerJob>
                <TitleHead className='animate'>
                    Job at Veon-Tech</TitleHead>
                <DescriptionBlock>
                    <DescriptionContent>
                        <BarLinksMobile>
                            {linksArrayData.map((el, index) => <Link className='animate' key={index} to={el.to}>{el.title}</Link>)}
                        </BarLinksMobile>
                        <AboutBlock>
                            <About className='animate'>
                                An ambitious and determined team of experts with a strong commitment to providing high-quality internet marketing and web development services. <br/> If you wish to become part of our team, please send us your resume to the email address: sales@veon-tech.ru
                            </About>
                            <About className='animate'>
                                If you're looking for a welcoming work environment with a great atmosphere, pleasant people, and good pay, then our team is the right fit for you!
                            </About>
                        </AboutBlock>
                        <AboutQuality>
                            <SubTitle className='animate'>We work efficiently, which is why our workday is 7 hours long!</SubTitle>
                            <Title>Why should you work at Veon-Tech?</Title>
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

