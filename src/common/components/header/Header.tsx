import React, {useEffect} from "react";
import {Container} from "../../style/Container";
import {HeaderContent, HeaderWrapper, Tint} from "./style"
import {Burger} from "../../style/Burger";
import LogoLight from './assets/LogoLightN.svg';
import {Menu} from "../menu";
import {useAppDispatch, useAppSelector} from "../../hook";
import {Link, useLocation} from "react-router-dom";
import {ROUTS} from "../../constans/routs";
import gsap from "gsap";
import {setIsOpenBurgerAC, setIsSelectThemBlockedAC, setThemeAC} from "../../../app/app-reduser";
import {useScrollBlock} from "../../hook/use-scroll-block";
import LogoDark from './assets/LogoDarkN.svg'


export const Header = () => {
    const location = useLocation();

    const dispatch = useAppDispatch()
    const theme = useAppSelector(state => state.app.theme)
    const isOpenBurger = useAppSelector(state => state.app.isOpenBurger)
    const [blockScroll, allowScroll] = useScrollBlock();
    const validPaths = ['/case/happy-elephant', '/case/optics', '/case/swiss', '/case/granit-company', '/case/party-intel', '/case/centavras', '/case/rent-club'];


    const onClickOpenBurger = () => {
        if (!isOpenBurger) {
            blockScroll()
        }
        dispatch(setIsOpenBurgerAC({isOpen: !isOpenBurger}))
        if (isOpenBurger) {
            allowScroll()
        }
    }
    const onClickUpHandler = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    const onClickCloseBurger = () => {
        allowScroll()
        dispatch(setIsOpenBurgerAC({isOpen: false}))
    }
    const switchElement = document.querySelector('.switch');

    useEffect(() => {
        if (theme === 'dark' && validPaths.includes(location.pathname)) {
            dispatch(setThemeAC({theme: 'light'}))
            dispatch(setIsSelectThemBlockedAC({isBlock: true}))
        }
    }, [location.pathname])

    const toggleTheme = () => {
        if (validPaths.includes(location.pathname)) {
            const anim = gsap.fromTo(
                switchElement,
                {
                    left: 31,
                },
                {
                    left: 0,
                    onComplete: () => {
                        // Удаляем стили анимации после ее выполнения
                        gsap.set(switchElement, {clearProps: 'all'});
                    },
                }
            ).repeat(1)
                .yoyo(true);
            dispatch(setIsSelectThemBlockedAC({isBlock: true}))
            return
        } else if (theme === 'light') {
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
            <HeaderWrapper className={'header'}>
                <Container>
                    <HeaderContent>
                        <Link to={ROUTS.HOME} onClick={onClickUpHandler}>
                            <img src={theme === 'light' ? LogoLight : LogoDark} alt=""/>
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