import React from 'react';
import {
    About,
    AboutContact,
    Corporation,
    FooterBottom,
    FooterContent,
    FooterIcons,
    FooterTop,
    FooterWrapper,
    ImgWrap
} from "./style";
import {Container} from "../../style/Container";

import logo from './assets/biglogo.png'
import instagram from './assets/insta.svg'
import facebook from './assets/facebook.svg'
import linkedin from './assets/linkedin.svg'
import watsap from './assets/watsapp.svg'
import telega from './assets/teleg.svg'

const dataSocial = [
    {img: instagram, to: 'https://instagram.com/veontech.agency?igshid=YmMyMTA2M2Y='},
    {img: facebook, to: 'https://www.facebook.com/{ID}'},
    {img: linkedin, to: 'https://www.linkedin.com/company/veon-tech/'},
    {img: watsap, to: 'https://wa.me/'},
    {img: telega, to: 'https://t.me/veon_tech'},
]

export const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <FooterContent>
                    <FooterTop>
                        <img src={logo} alt="logo"/>
                        <FooterIcons>
                            {dataSocial.map((el, index) => <a target='_blank' href={el.to} key={index}>
                                <img src={el.img}/></a>)}
                        </FooterIcons>
                    </FooterTop>
                    <FooterBottom>
                        <About>
                            <p>ООО "Веон-консалт"</p>
                            <p>УНП 193082231</p>
                        </About>
                        <AboutContact>
                            <a href="tel:+79955775163">+7(995)577-51-63</a>
                            <p>sales@veon-tech.ru</p>
                            <p>220068, г. Минск, ул. Орловская, 40а, офис 40-1</p>
                            <p>С понедельника по пятницу</p>
                        </AboutContact>
                        <Corporation>
                            <p>Copyright © 2022 Veon-Tech Ltd</p>
                            <p>All Rights Reserved.</p>
                        </Corporation>
                    </FooterBottom>
                </FooterContent>
            </Container>
        </FooterWrapper>
    );
};