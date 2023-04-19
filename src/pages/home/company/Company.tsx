import React, {FC} from 'react';
import {Container} from '../../../common/style/Container';

import {CompanyBlock, CompanyWrapper, ImgWrap, Laer, Title} from './style';
import Marquee from "react-fast-marquee";
import {clients} from "./data";
import {ThemeType} from "../../../common/types/types";
import {useAppSelector} from "../../../common/hook";


export const Company = () => {
    const theme = useAppSelector(state => state.app.theme)


    return (
        <CompanyWrapper>
            <Container>
                <Title className='animate'>Наши клиенты</Title>
            </Container>
            <Marquee speed={150}>
                <CompanyBlock>
                    {clients.map((el, index) =><ImgWrap key={index} img={theme === 'light' ? el.img : el.imgWhite}/>)}
                </CompanyBlock>
            </Marquee>
            <Container>
                <Laer></Laer>
            </Container>
        </CompanyWrapper>
    );
};

