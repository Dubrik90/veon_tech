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
import {animateText} from "../../animate/animateText";


export const Layout = () => {
    const isOpenForm = useAppSelector(state => state.app.isOpenForm)
    const isModalWindowOpen = useAppSelector(state => state.app.isModalWindowOpen)
    const isOpenBonuseFormOpen = useAppSelector(state => state.app.isOpenBonuseForm)

    const tl = gsap.timeline({defaults: {ease: 'power2.easeInOut', duration: 2}})

    useEffect(() => {
        tl.to('header', {opacity: 1, y: 0})
        animateText()
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
            <ConsultantModal/>
            <ScramModal />
            {isModalWindowOpen && <ModalWindoww/>}
            {isOpenBonuseFormOpen && <BonuseForm/>}
            <WaterfallModal/>
        </>
    )
}