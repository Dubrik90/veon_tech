import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
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
import {CaseOptics} from './pages/caseOptics';
import {CaseCentavras} from "./pages/caseCentavras";
import {caseDataArray} from "./pages/case/app/data";
import {ServicesPage} from './pages/servicesPage';


function App() {
    useEffect(() => {
        document.title = 'Главная — VEON-TECH'
    }, [])


    return (
        <Routes>
            <Route path={ROUTS.HOME} element={<Layout/>}>
                <Route path={ROUTS.HOME} element={<Home/>}/>
                <Route path={ROUTS.ABOUT} element={<About/>}/>
                <Route path={ROUTS.JOBS} element={<Jobs/>}/>
                <Route path={ROUTS.NDA} element={<Nda/>}/>
                <Route path={ROUTS.CASES} element={<Сases/>}/>
                <Route path={ROUTS.SERVICES} element={<Services/>}/>
                <Route path={ROUTS.SERVICE_PAGE} element={<ServicesPage/>}/>
                <Route path={ROUTS.BONUSES} element={<Bonuses/>}/>
                <Route path={ROUTS.CONTACTS} element={<Contacts/>}/>
                <Route path={ROUTS.POLICY} element={<Policy/>}/>

                <Route path={ROUTS.CASE_GRANIT} element={<CaseGranit/>}/>
                <Route path={ROUTS.CASE_SWISS} element={<CaseSwiss/>}/>
                <Route path={ROUTS.CASE_PARTY_INTEL} element={<CasePartyIntel/>}/>
                <Route path={ROUTS.CASE_PAPPY_ELEPHANT} element={<CaseHappyElephant/>}/>
                <Route path={ROUTS.CASE_OPTICS} element={<CaseOptics/>}/>
                <Route path={ROUTS.CASE_CENTAVRAS} element={<CaseCentavras/>}/>
                <Route path={ROUTS.CASE_RENT_CLUB} element={<Case caseData={caseDataArray[3]}/>}/>
                <Route path={ROUTS.CASE_SODOX} element={<Case caseData={caseDataArray[2]}/>}/>
                <Route path={ROUTS.CASE_ART_MEDIA} element={<Case caseData={caseDataArray[1]}/>}/>
                <Route path={ROUTS.CASE_SINARADESING} element={<Case caseData={caseDataArray[0]}/>}/>
                {/*<Route path={ROUTS.CASE_RENT_CLUB} element={<CaseRentClub/>}/>*/}
            </Route>
        </Routes>
    );
}

export default App;
