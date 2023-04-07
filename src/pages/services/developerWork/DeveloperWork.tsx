import React from 'react';
import {DeveloperCardBlock, DeveloperWorkContent, DeveloperWorkWrapper, Title} from './style';
import {Container} from "../../../common/style/Container";
import Portfolio1 from "../assets/devSites/portfolio-1.jpg";
import Portfolio2 from "../assets/devSites/portfolio-2.jpg";
import Portfolio3 from "../assets/devSites/portfolio-3.jpg";
import {DevCard} from "./devCard";
import {ROUTS} from "../../../common/constans/routs";
import {DevSlider} from "./devSlider";


export type CardDeveloperWorkType = {
    img: string,
    title: string,
    to: string
}

export const DeveloperWork = () => {

    const developerWorkData: CardDeveloperWorkType[] = [
        {
            img: Portfolio1,
            title: 'Сайт-визитка',
            to: ROUTS.HOME
        },
        {
            img: Portfolio2,
            title: 'Корпоративный сайт',
            to: ROUTS.HOME
        },
        {
            img: Portfolio3,
            title: 'Интернет-магазин',
            to: ROUTS.HOME
        },
    ]


    return (
        <DeveloperWorkWrapper>
            <Container>
                <DeveloperWorkContent>
                    <Title>Разработка сайтов под ключ</Title>
                    <DeveloperCardBlock>
                        {developerWorkData.map((el, index) => (
                            <DevCard el={el} key={index}/>
                        ))}
                    </DeveloperCardBlock>
                </DeveloperWorkContent>
                <DevSlider developerWorkData={developerWorkData}/>
            </Container>
        </DeveloperWorkWrapper>
    );
};

