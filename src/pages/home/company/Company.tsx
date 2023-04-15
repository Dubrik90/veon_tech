import React, {FC} from 'react';
import {Container} from '../../../common/style/Container';

import {CompanyBlock, CompanyWrapper, ImgWrap, Title} from './style';
import Marquee from "react-fast-marquee";
import {clients} from "./data";
import {ThemeType} from "../../../common/types/types";
import {useAppSelector} from "../../../common/hook";


export const Company = () => {
    const theme = useAppSelector(state => state.app.theme)


    return (
        <CompanyWrapper>
            <Container>
                <Title className='title-technologies'>Наши клиенты</Title>
            </Container>
            <Marquee speed={150}>
                <CompanyBlock>
                    {clients.map((el, index) =><ImgWrap key={index} img={theme === 'light' ? el.img : el.imgWhite}/>)}
                </CompanyBlock>
            </Marquee>
        </CompanyWrapper>
    );
};

