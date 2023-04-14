import {Outlet} from "react-router-dom"
import {GetInTorch} from "../getInTorch/GetInTorch";
import {GoUp} from "../goUp";
import {Cookie} from "../cookie";
import React from "react";
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


export const Layout = () => {
    const isOpenForm = useAppSelector(state => state.app.isOpenForm)
    const isModalWindowOpen = useAppSelector(state => state.app.isModalWindowOpen)
    const isConsultantModalOpen = useAppSelector(state => state.app.isConsultantModalOpen)
    const isOpenBonuseFormOpen = useAppSelector(state => state.app.isOpenBonuseForm)

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