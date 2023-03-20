import React, {useEffect, useRef, useState} from 'react';
import './index.css';
import {HashRouter, Route, Routes} from 'react-router-dom';
import {ROUTS} from './common/constans/routs';
import {MainWrapper} from './common/style/Main';
import {Home} from './pages/home';
import {Header} from './common/components/header';
import {ScrollToTop} from './common/components/scrollToTop';
import {Footer} from './common/components/footer';
import {Work} from './pages/work';
import {GetInTorch} from "./common/components/getInTorch/GetInTorch";
import {GoUp} from "./common/components/goUp";
import {Cookie} from "./common/components/cookie";
import {ModalWindow} from "./common/components/modalWindow";
import {useBodyScrollLock} from "./common/hook";
import {ThemeType} from "./common/types/types";


function App() {
    const [theme, setTheme] = useState<ThemeType>('light');
    const [view, setView] = useState(false)
    const [isBodyLocked, setBodyLocked] = useBodyScrollLock();
    const openModal = () => {
        setBodyLocked()
        setView(!view)
    }

    return (
        <HashRouter>
            <ScrollToTop/>
            <Header theme={theme} setTheme={setTheme}/>
            <GetInTorch />
            <GoUp/>
            <Cookie/>
            <MainWrapper>
                <Routes>
                    <Route path={ROUTS.HOME} element={<Home theme={theme} view={view} openModal={openModal}/>}/>
                    <Route path={ROUTS.WORK_IN_VEON} element={<Work/>}/>
                </Routes>
            </MainWrapper>
            <Footer/>
            {view && <ModalWindow openModal={openModal}/>}
        </HashRouter>
    );
}

export default App;
