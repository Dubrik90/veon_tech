import {Outlet} from "react-router-dom"
import {GetInTorch} from "../getInTorch/GetInTorch";
import {GoUp} from "../goUp";
import {Cookie} from "../cookie";
import React, {useEffect, useRef} from "react";
import {FormUsers} from "../FormUsers";
import {useAppSelector} from "../../hook";
import {MainWrapper} from "../../style/Main";
import {ScrollToTop} from "../../hook/scrollToTop";
import {Header} from "../header";
import {Footer} from "../footer";
import {ModalWindoww} from "../modalWindow";
import {ConsultantModal} from "../consultantModal";
import {BonuseForm} from "../bonuseForm";
import {useScrollBlock} from "../../hook/use-scroll-block";
import {gsap} from "gsap";
import {WaterfallModal} from "../waterfallModal";
import {ScramModal} from "../scrumModal";


export const Layout = () => {
    const isOpenForm = useAppSelector(state => state.app.isOpenForm)
    const isModalWindowOpen = useAppSelector(state => state.app.isModalWindowOpen)
    const isOpenBonuseFormOpen = useAppSelector(state => state.app.isOpenBonuseForm)

    const tl = gsap.timeline({defaults: {ease: 'power2.easeInOut', duration: 2}})

    useEffect(() => {
        tl.to('header', {opacity: 1, y: 0})

        const animSolb = gsap.utils.toArray('.animate')

        animSolb.forEach((anim: any) => {

            gsap.fromTo(anim, {
                opacity: 0,
                transform: 'rotate(3deg) scaleY(.9) translateY(50px)',
            }, {
                opacity: 1,
                transform: 'rotate(0) scaleY(1) translateY(0)',
                duration: 1.5,
                transitionTimingFunction: 'cubic-bezier(.19,.91,.36,.99)',
                scrollTrigger: {
                    trigger: anim,
                    start: 'top 90%',
                }
            })
        })
    }, [])

    return (
        <>
            <ScrollToTop/>
            <Header/>
            <MainWrapper>
                <Outlet/>
            </MainWrapper>
            <Footer/>
            {isOpenForm && <FormUsers/>}
            <GetInTorch/>
            <GoUp/>
            <Cookie/>
            <ConsultantModal />
            <ScramModal />
            {isModalWindowOpen && <ModalWindoww />}
            {isOpenBonuseFormOpen && <BonuseForm />}
            <WaterfallModal/>

        </>
    )
}