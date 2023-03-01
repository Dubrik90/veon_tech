import React from 'react';
import './index.css';
import {HashRouter, Route, Routes} from 'react-router-dom';
import {ROUTS} from './common/constans/routs';
import {MainWrapper} from './common/style/Main';
import {Home} from './pages/home';
import {Header} from './common/components/header';
import {ScrollToTop} from './common/components/scrollToTop';
import {Footer} from './common/components/footer';
import {Work} from './pages/work';

function App() {
    return (
        <HashRouter>
            <ScrollToTop/>
            <Header/>
            <MainWrapper>
                <Routes>
                    <Route path={ROUTS.HOME} element={<Home/>}/>
                    <Route path={ROUTS.WORK_IN_VEON} element={<Work/>}/>
                </Routes>
            </MainWrapper>
            <Footer/>
        </HashRouter>
    );
}

export default App;
