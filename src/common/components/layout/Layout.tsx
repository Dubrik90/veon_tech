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


export const Layout = () => {
    const isOpenForm = useAppSelector(state => state.app.isOpenForm)
    const isModalWindowOpen = useAppSelector(state => state.app.isModalWindowOpen)
    const isConsultantModalOpen = useAppSelector(state => state.app.isConsultantModalOpen)

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
            {isModalWindowOpen && <ModalWindoww />}
            {isConsultantModalOpen && <ConsultantModal />}
        </>
    )
}