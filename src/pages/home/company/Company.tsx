import React from 'react';
import {Container} from '../../../common/style/Container';

import {CompanyBlock, CompanyWrapper, ImgWrap, Title} from './style';
import Marquee from "react-fast-marquee";
import {clients} from "./data";


export const Company = () => {

    return (
        <CompanyWrapper>
            <Container>
                <Title>Наши клиенты</Title>
            </Container>
            <Marquee speed={150}>
                <CompanyBlock>
                    {clients.map((el, index) =><ImgWrap key={index} img={el.img}/>)}
                </CompanyBlock>
            </Marquee>
        </CompanyWrapper>
    );
};

