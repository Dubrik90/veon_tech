import React from 'react';
import './index.css';
import {Route, Routes, useLocation} from 'react-router-dom';
import {ROUTS} from './common/constans/routs';
import {Home} from './pages/home';
import {Layout} from "./common/components/layout/Layout";
import {Jobs} from "./pages/jobs";
import {Nda} from "./pages/nda";
import {Сases} from "./pages/cases";
import {Case} from "./pages/case";
import {Services} from "./pages/services";
import {Bonuses} from './pages/bonuses';
import {Contacts} from "./pages/Contacts";
import {Policy} from "./pages/policy";
import {About} from "./pages/about";
import {CaseGranit} from "./pages/caseGranit";
import {CaseSwiss} from './pages/caseSwiss';
import {CasePartyIntel} from './pages/casePartyIntel';
import {CaseHappyElephant} from "./pages/caseHappyElephant";

function App() {

    return (
        <Routes>
            <Route path={ROUTS.HOME} element={<Layout/>}>
                <Route path={ROUTS.HOME} element={<Home/>}/>
                <Route path={ROUTS.ABOUT} element={<About/>}/>
                <Route path={ROUTS.JOBS} element={<Jobs/>}/>
                <Route path={ROUTS.NDA} element={<Nda/>}/>
                <Route path={ROUTS.CASES} element={<Сases/>}/>
                <Route path={ROUTS.CASE} element={<Case/>}/>
                <Route path={ROUTS.SERVICES} element={<Services/>}/>
                <Route path={ROUTS.BONUSES} element={<Bonuses/>}/>
                <Route path={ROUTS.CONTACTS} element={<Contacts/>}/>
                <Route path={ROUTS.POLICY} element={<Policy/>}/>
                <Route path={ROUTS.CASE_GRANIT} element={<CaseGranit/>}/>
                <Route path={ROUTS.CASE_SWISS} element={<CaseSwiss/>}/>
                <Route path={ROUTS.CASE_PARTY_INTEL} element={<CasePartyIntel/>}/>
                <Route path={ROUTS.CASE_PAPPY_ELEPHANT} element={<CaseHappyElephant/>}/>
            </Route>
        </Routes>
    );
}

export default App;
