import React, {FC} from 'react';
import {Container} from '../../../common/style/Container';

import {CompanyBlock, CompanyWrapper, ImgWrap, Title} from './style';
import Marquee from "react-fast-marquee";
import {clients} from "./data";
import {ThemeType} from "../../../common/types/types";

type CompanyPropsType = {
    theme: ThemeType
}
export const Company:FC<CompanyPropsType> = ({theme}) => {
    console.log(theme)


    return (
        <CompanyWrapper>
            <Container>
                <Title>Наши клиенты</Title>
            </Container>
            <Marquee speed={150}>
                <CompanyBlock>
                    {clients.map((el, index) =><ImgWrap key={index} img={theme === 'light' ? el.img : el.imgWhite}/>)}
                </CompanyBlock>
            </Marquee>
        </CompanyWrapper>
    );
};

