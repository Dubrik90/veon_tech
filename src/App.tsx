import React from 'react';
import './index.css';
import {HashRouter, Route, Routes} from 'react-router-dom';
import {ROUTS} from './common/constans/routs';
import {Home} from './pages/home';
import {Layout} from "./common/components/layout/Layout";
import {Jobs} from "./pages/jobs";
import {Nda} from "./pages/nda";
import {Сases} from "./pages/cases";



function App() {

    return (
        <HashRouter>
            <Routes>
                <Route path={ROUTS.HOME} element={<Layout/>}>
                    <Route path={ROUTS.HOME} element={<Home/>}/>
                    <Route path={ROUTS.JOBS} element={<Jobs/>}/>
                    <Route path={ROUTS.NDA} element={<Nda/>}/>
                    <Route path={ROUTS.CASES} element={<Сases/>}/>
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
