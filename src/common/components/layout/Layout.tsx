import {Outlet} from "react-router-dom"
import {GetInTorch} from "../getInTorch/GetInTorch";
import {GoUp} from "../goUp";
import {Cookie} from "../cookie";
import React from "react";
import {ModalWindow} from "../modalWindow";
import {useAppSelector} from "../../hook";
import {MainWrapper} from "../../style/Main";
import {ScrollToTop} from "../scrollToTop";
import {Header} from "../header";
import {Footer} from "../footer";


export const Layout = () => {
    const isOpenForm = useAppSelector(state => state.app.isOpenForm)

    return (
        <>
            <ScrollToTop/>
            <Header/>
            <MainWrapper>
                <Outlet/>
            </MainWrapper>
            <Footer/>
            {isOpenForm && <ModalWindow/>}
            <GetInTorch/>
            <GoUp/>
            <Cookie/>
        </>
    )
}