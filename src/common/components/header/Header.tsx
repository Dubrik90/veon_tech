import React, {FC, useEffect, useState} from "react";
import {Container} from "../../style/Container";
import {HeaderContent, HeaderLogo, HeaderWrapper, ImgWrapDesctop, ImgWrapMobile, Tint} from "./style"
import {Burger} from "../../style/Burger";
import LogoLight from './assets/logoLight.svg';
import LogoDark from './assets/logoDark.svg';
import LogoMobileDark from './assets/logoMobileDark.png';
import LogoMobileWhite from './assets/logoMobileWhite.png';
import {Menu} from "../menu";
import {ThemeType} from "../../types/types";
import {useAppDispatch, useAppSelector, useBodyScrollLock} from "../../hook";
import {Link} from "react-router-dom";
import {ROUTS} from "../../constans/routs";
import gsap from "gsap";
import {setIsOpenBurgerAC, setThemeAC} from "../../../app/app-reduser";


export const Header = () => {
    const dispatch = useAppDispatch()
    const theme = useAppSelector(state => state.app.theme)
    const isOpenBurger = useAppSelector(state => state.app.isOpenBurger)

    const [isBodyLocked, setBodyLocked] = useBodyScrollLock();

    // const [isOpenBurger, setIsOpenBurger] = useState<boolean>(false);

    const onClickOpenBurger = () => {
        setBodyLocked()
        dispatch(setIsOpenBurgerAC({isOpen: !isOpenBurger}))
        // setIsOpenBurger(!isOpenBurger)
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
        dispatch(setIsOpenBurgerAC({isOpen: false}))
    }

    const toggleTheme = () => {
        if (theme === 'light') {
            dispatch(setThemeAC({theme: 'dark'}))
        } else dispatch(setThemeAC({theme: 'light'}))
    }

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    useEffect(() => {
        let headerTint = gsap.utils.toArray('.header-tint')
        let itemMenu = gsap.utils.toArray('.about-sub-menu')

        itemMenu.forEach((link: any, ind) => {
            link.addEventListener('mouseover', () => {
                gsap.to(headerTint, {
                    opacity: 1,
                    visibility: 'visible'
                });
            })
            link.addEventListener('mouseout', () => {
                gsap.to(headerTint, {
                    opacity: 0,
                    visibility: 'hidden'
                });
            })
        })
    }, []);


    return (
        <>
            <HeaderWrapper>
                <Container>
                    <HeaderContent>
                        <Link to={ROUTS.HOME} onClick={onClickUpHandler}>
                            <ImgWrapDesctop img={theme === 'light' ? LogoLight : LogoDark}/>
                            <ImgWrapMobile img={theme === 'light' ? LogoMobileWhite : LogoMobileDark}/>
                        </Link>
                        <Menu isOpenBurger={isOpenBurger}
                              onClick={toggleTheme}
                              onClickCloseBurger={onClickCloseBurger}
                        />
                        <Burger isOpenBurger={isOpenBurger} onClick={onClickOpenBurger}></Burger>
                    </HeaderContent>
                </Container>
            </HeaderWrapper>
            <Tint className="header-tint"></Tint>
        </>

    )
}