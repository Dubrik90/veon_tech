import React, {useEffect, useState} from "react";
import {Container} from "../../style/Container";
import {HeaderContent, HeaderLogo, HeaderWrapper} from "./style"
import {Burger} from "../../style/Burger";
import LogoLight from './assets/logoLight.svg';
import LogoDark from './assets/logoDark.svg';
import {Menu} from "../menu";
import {ThemeType} from "../../types/types";

export const Header = () => {
    const [theme, setTheme] = useState<ThemeType>('light');
    const [isOpenBurger, setIsOpenBurger] = useState<boolean>(false);

    const onClickBurger = () => {
        setIsOpenBurger(!isOpenBurger)
    }
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <HeaderWrapper>
            <Container>
                <HeaderContent>
                    <HeaderLogo>
                        <img src={theme === 'light' ? LogoLight : LogoDark}
                             alt="Logo"/>
                    </HeaderLogo>
                    <Menu isOpenBurger={isOpenBurger} theme={theme} onClick={toggleTheme}/>
                    <Burger isOpenBurger={isOpenBurger} onClick={onClickBurger}></Burger>
                </HeaderContent>
            </Container>
        </HeaderWrapper>
    )
}