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


export const Layout = () => {
    const isOpenForm = useAppSelector(state => state.app.isOpenForm)
    const isModalWindowOpen = useAppSelector(state => state.app.isModalWindowOpen)
    const isConsultantModalOpen = useAppSelector(state => state.app.isConsultantModalOpen)
    const isOpenBonuseFormOpen = useAppSelector(state => state.app.isOpenBonuseForm)

    const tl = gsap.timeline({defaults: {ease: 'power2.easeInOut', duration: 2}})

    useEffect(() => {
        tl.to('header', {opacity: 1, y: 0})
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
            {isModalWindowOpen && <ModalWindoww />}
            {/*{isConsultantModalOpen && <ConsultantModal />}*/}
            {isOpenBonuseFormOpen && <BonuseForm />}
        </>
    )
}