import React, {useEffect} from 'react';
import {ServiceBlock, ServicesPageBlock, ServicesPageWrapper, Title } from './style';
import {Container} from '../../common/style/Container';
import {Link} from "react-router-dom";
import {animateText} from "../../common/animate/animateText";

export const ServicesPage = () => {

    useEffect(() => {
        document.title = 'Сервисы — VEON-TECH'
        animateText()
    }, []);

    const serviseLinks  = [
        {title: 'Разработка сайтов', to: `/services/webDev`},
        {title: 'Поддержка сайтов', to: `/services/support`},
        {title: 'Разработка ПО', to: `/services/webPO`},
        {title: 'UX/UI дизайн', to: `/services/ux`},

    ]

    return (
        <ServicesPageWrapper>
            <Container>
                <ServicesPageBlock>
                    <Title>Выберите сервис</Title>
                    <ServiceBlock>
                        <ul>
                            {serviseLinks.map((el, index) => (
                                <Link to={el.to} key={index}>{el.title}</Link>
                            ))}
                        </ul>
                    </ServiceBlock>
                </ServicesPageBlock>
            </Container>
        </ServicesPageWrapper>
    );
};

