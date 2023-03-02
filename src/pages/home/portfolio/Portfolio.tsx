import React from 'react';
import {PortfolioContent, PortfolioWrapper, SubTitle, Title, Works} from "./style";
import {Container} from "../../../common/style/Container";
import {portfolioData} from "./data";
import {WorkDesk} from "./workDesk";
import {SliderSwiper} from "../../../common/components/swiper";

export const Portfolio = () => {
    return (
        <PortfolioWrapper>
            <Container>
                <PortfolioContent>
                    <SubTitle>МЫ РУЧАЕМСЯ ЗА КАЧЕСТВО</SubTitle>
                    <Title>НАШИ КЕЙСЫ</Title>
                    <Works>
                        <SliderSwiper/>
                        {portfolioData.map((el, index) => <WorkDesk key={index} work={el}/>)}
                    </Works>
                </PortfolioContent>
            </Container>
        </PortfolioWrapper>
    );
};

