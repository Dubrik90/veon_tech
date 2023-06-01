import React from 'react';
import {
    About,
    AboutContact,
    Corporation,
    FooterBottom,
    FooterContent,
    FooterIcons,
    FooterTop,
    FooterWrapper
} from "./style";
import {Container} from "../../style/Container";

import logo from '../../../common/components/header/assets/apdateLogo.png'
import instagram from './assets/insta.svg'
import facebook from './assets/facebook.svg'
import linkedin from './assets/linkedin.svg'
import watsap from './assets/watsapp.svg'
import telega from './assets/teleg.svg'

const dataSocial = [
    {img: instagram, to: 'https://www.instagram.com/veontech.agency/?igshid=YmMyMTA2M2Y%3D'},
    {img: facebook, to: 'https://www.facebook.com/veontech.ru'},
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
                        <img loading="lazy" src={logo} alt="logo"/>
                        <FooterIcons>
                            {dataSocial.map((el, index) => <a target='_blank' href={el.to} key={index}>
                                <img loading="lazy" src={el.img}/></a>)}
                        </FooterIcons>
                    </FooterTop>
                    <FooterBottom>
                        <About>
                            <p>ООО "Веон-консалт"</p>
                            <p>УНП 193082231</p>
                        </About>
                        <AboutContact>
                            <a href="tel:+79955775163">+7 (995) 577-51-63</a>
                            <p>clients@veon-tech.ru</p>
                            <p>220068, г. Минск, ул. Сурганова, 57б, офис 187</p>
                            <p>С понедельника по пятницу</p>
                        </AboutContact>
                        <Corporation>
                            <p>Copyright © 2023 VEON-TECH Ltd</p>
                            <p>All Rights Reserved.</p>
                        </Corporation>
                    </FooterBottom>
                </FooterContent>
            </Container>
        </FooterWrapper>
    );
};