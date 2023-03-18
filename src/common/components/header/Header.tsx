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

    const onClickOpenBurger = () => {
        setBodyLocked()
        setIsOpenBurger(!isOpenBurger)
    }
    const onClickUpHandler = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    const onClickCloseBurger = () => {
        if (isOpenBurger) {
            setBodyLocked()
        }
        setIsOpenBurger(false)
    }

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <HeaderWrapper>
            <Container>
                <HeaderContent>
                    <Link to={ROUTS.HOME} onClick={onClickUpHandler}>
                        <ImgWrap img={theme === 'light' ? LogoLight : LogoDark}/>
                    </Link>
                    <Menu isOpenBurger={isOpenBurger}
                          theme={theme}
                          onClick={toggleTheme}
                          onClickCloseBurger={onClickCloseBurger}
                    />
                    <Burger isOpenBurger={isOpenBurger} onClick={onClickOpenBurger}></Burger>
                </HeaderContent>
            </Container>
            <div className="content-shadow"></div>
        </HeaderWrapper>
    )
}