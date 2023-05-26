import React, {useEffect} from 'react';
import {ServiceBlock, ServicesPageBlock, ServicesPageWrapper, Title } from './style';
import {Container} from '../../common/style/Container';
import {Link} from "react-router-dom";
import {animateText} from "../../common/animate/animateText";

export const ServicesPage = () => {

    useEffect(() => {
        document.title = 'Servises — VEON-TECH'
        animateText()
    }, []);

    const serviseLinks  = [
        {title: 'WEBSITE DEVELOPMENT', to: `/services/webDev`},
        {title: 'WEBSITE SUPPORT', to: `/services/support`},
        {title: 'SOFTWARE DEVELOPMENT', to: `/services/webPO`},
        {title: 'UX/UI DESIGN', to: `/services/ux`},
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

