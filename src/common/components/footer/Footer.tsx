import React from 'react';
import {
    About, BottomLogo,
    Contacts, Copyright,
    FooterBottom,
    FooterContent,
    FooterIcons,
    FooterTop,
    FooterWrapper,
    ImgBlock,
    ImgWrap
} from "./style";
import {Container} from "../../style/Container";

import logo from './assets/biglogo.png'
import instagram from './assets/insta.png'
import facebook from './assets/facebook.png'
import linkedin from './assets/linkedin.png'
import watsap from './assets/watsapp.png'
import telega from './assets/teleg.png'
import logoBottom from './assets/logoFooter.png'

const dataSocial = [
    {img: instagram},
    {img: facebook},
    {img: linkedin},
    {img: watsap},
    {img: telega},
]

export const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <FooterContent>
                    <FooterTop>
                        <img src={logo} alt="logo"/>
                        <FooterIcons>
                            {dataSocial.map((el, index) => <ImgBlock key={index}>
                                <ImgWrap img={el.img}/></ImgBlock>)}
                        </FooterIcons>
                    </FooterTop>
                    <FooterBottom>
                        <About>
                            <p>ООО "Веон-консалт"</p>
                            <p>УНП 193082231</p>
                        </About>
                        <Contacts>
                            <a href="tel:+79955775163">+7(995)577-51-63</a>
                            <p>sales@veon-tech.ru</p>
                            <p>220068, г. Минск, ул. Орловская, 40а, офис 40-1</p>
                            <p>С понедельника по пятницу</p>
                        </Contacts>
                        <Copyright>
                            <p>Copyright © 2022 Veon-Tech Ltd</p>
                            <p>All Rights Reserved.</p>
                        </Copyright>
                        <BottomLogo>
                            <img src={logoBottom} alt="logoBottom"/>
                        </BottomLogo>

                    </FooterBottom>
                </FooterContent>

            </Container>
        </FooterWrapper>
    );
};