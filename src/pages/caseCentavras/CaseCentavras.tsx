import React from 'react';
import {CaseCentavrasWrapper} from './style';
import {CaseHeader} from "../../common/components/caseHeader";
import {CaseImageComponent} from "../../common/components/caseImageComponent";
import CentavrasImg from "./assets/centavras.webp";
import {CentavrasAbout} from "./centavrasAbout";
import {CentavrasDesc} from "./centavrasDesc";
import {CentavrasResult} from "./centavrasResult";
import {CaseHelp} from "../case/caseHelp";
import {SimilarCases} from "../case/similarCases";


export const CaseCentavras = () => {
    return (
        <CaseCentavrasWrapper>
            <CaseHeader title={'Centavras Kft'}/>
            <CaseImageComponent img={CentavrasImg}/>
            <CentavrasAbout/>
            <CentavrasDesc/>
            <CentavrasResult/>
            <CaseHelp/>
            <SimilarCases/>
        </CaseCentavrasWrapper>
    );
};

