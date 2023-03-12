import React, {useEffect, useState} from "react";
import {Container} from "../../style/Container";
import {HeaderContent, HeaderLogo, HeaderWrapper, ImgWrap} from "./style"
import {Burger} from "../../style/Burger";
import LogoLight from './assets/logoLight.svg';
import LogoDark from './assets/logoDark.svg';
import {Menu} from "../menu";
import {ThemeType} from "../../types/types";
import {useBodyScrollLock} from "../../hook";
import {Link} from "react-router-dom";
import {ROUTS} from "../../constans/routs";

export const Header = () => {
    const [isBodyLocked, setBodyLocked] = useBodyScrollLock();
    const [theme, setTheme] = useState<ThemeType>('light');
    const [isOpenBurger, setIsOpenBurger] = useState<boolean>(false);

    const onClickBurger = () => {
        setBodyLocked()
        setIsOpenBurger(!isOpenBurger)
    }
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');

        if (isOpenBurger) {
            onClickBurger()
        }
    }

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <HeaderWrapper>
            <Container>
                <HeaderContent>
                    <Link to={ROUTS.HOME}>
                        <ImgWrap img={theme === 'light' ? LogoLight : LogoDark}/>
                    </Link>
                    <Menu isOpenBurger={isOpenBurger}
                          theme={theme}
                          onClick={toggleTheme}
                          onClickBurger={onClickBurger}
                    />
                    <Burger isOpenBurger={isOpenBurger} onClick={onClickBurger}></Burger>
                </HeaderContent>
            </Container>
        </HeaderWrapper>
    )
}