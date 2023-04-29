import React from 'react';
import {CaseSwissWrapper} from './style';
import {CaseHeader} from "../../common/components/caseHeader";

import {CaseImageComponent} from "../../common/components/caseImageComponent";
import Swiss from "./assets/swiss.webp";
import {CaseSwissAbout} from './caseSwissAbout';
import {CaseSwissResult} from "./caseSwissResult";
import {CaseHelp} from "../case/caseHelp";
import {SimilarCases} from "../case/similarCases";

export const CaseSwiss = () => {
    return (
        <CaseSwissWrapper>
            <CaseHeader title={'Кейс по разработке сайта для B.Well Swiss'}/>
            <CaseImageComponent img={Swiss}/>
            <CaseSwissAbout/>
            <CaseSwissResult/>
            <CaseHelp/>
            <SimilarCases/>
        </CaseSwissWrapper>
    );
};

