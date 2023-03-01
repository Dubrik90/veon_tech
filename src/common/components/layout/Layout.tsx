import { Outlet } from "react-router-dom"
import { Container } from "../../style/Container"
import { Footer } from "../footer/Footer"
import { Header } from "../header/Header"
import { ScrollToTop } from "../scrollToTop/ScrollToTop"


export const Layout = () => {

    return (
        <>
            <ScrollToTop/>
                <Header/>
                    <Outlet/>
                <Footer/>
        </>
    )
}