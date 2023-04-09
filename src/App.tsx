import React from 'react';
import './index.css';
import {HashRouter, Route, Routes} from 'react-router-dom';
import {ROUTS} from './common/constans/routs';
import {Home} from './pages/home';
import {Layout} from "./common/components/layout/Layout";
import {Jobs} from "./pages/jobs";
import {Nda} from "./pages/nda";
import {Сases} from "./pages/cases";
import {Case} from "./pages/case";
import {Services} from "./pages/services";
import { Bonuses } from './pages/bonuses';
import {Contacts} from "./pages/Contacts";



function App() {

    return (
        <HashRouter>
            <Routes>
                <Route path={ROUTS.HOME} element={<Layout/>}>
                    <Route path={ROUTS.HOME} element={<Home/>}/>
                    <Route path={ROUTS.JOBS} element={<Jobs/>}/>
                    <Route path={ROUTS.NDA} element={<Nda/>}/>
                    <Route path={ROUTS.CASES} element={<Сases/>}/>
                    <Route path={ROUTS.CASE} element={<Case/>}/>
                    <Route path={ROUTS.SERVICES} element={<Services/>}/>
                    <Route path={ROUTS.BONUSES} element={<Bonuses/>}/>
                    <Route path={ROUTS.CONTACTS} element={<Contacts/>}/>
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
