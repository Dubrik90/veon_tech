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
        // Общий код Google Tag Manager для всего приложения
        (function (w: any, d: any, s: any, l: any, i: any) {
            w[l] = w[l] || [];
            w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l !== 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-NMCLJT48');

        // Заголовок страницы
        document.title = 'Главная — VEON-TECH'
    }, [])


    return (
        <div>
            {/* Google Tag Manager (noscript) */}
            <noscript>
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMCLJT48"
                        height="0" width="0" style={{display: 'none', visibility: 'hidden'}}>
                </iframe>
            </noscript>
            {/* End Google Tag Manager (noscript) */}
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
        </div>

    );
}

export default App;
