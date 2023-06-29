import React from 'react';
import {Container} from '../../../common/style/Container';
import {CompanyBlock, CompanyWrapper, Laer, Title} from './style';
import Marquee from "react-fast-marquee";
import {clients} from "./data";

export const Company = () => {
    return (
        <CompanyWrapper>
            <Container>
                <Title className='animate'>Наши клиенты</Title>
            </Container>
            <Marquee speed={70}>
                <CompanyBlock>
                    {clients.map((el, index) => (
                        <div className={'img_block'} key={index}>
                            <img src={el.img} alt={"логотип компании"}/></div>))}
                </CompanyBlock>
            </Marquee>
            <Container>
                <Laer></Laer>
            </Container>
        </CompanyWrapper>
    );
};

