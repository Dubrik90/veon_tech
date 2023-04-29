import React from 'react';
import { CaseOpticsWrapper } from './style';
import {CaseHeader} from "../../common/components/caseHeader";
import {CaseImageComponent} from "../../common/components/caseImageComponent";
import Optics from "./assets/optics.webp";
import { OpticsAbout } from './opticsAbout';
import {OpticsDesk} from "./opticsDesk";
import {OpticsResult} from "./opticsResult";
import {CaseHelp} from "../case/caseHelp";
import {SimilarCases} from "../case/similarCases";

export const CaseOptics = () => {
    return (
        <CaseOpticsWrapper>
            <CaseHeader title={'Кейс по разработке сайта для ООО "Коннектор Оптикс"'}/>
            <CaseImageComponent img={Optics}/>
            <OpticsAbout/>
            <OpticsDesk/>
            <OpticsResult/>
            <CaseHelp/>
            <SimilarCases/>
        </CaseOpticsWrapper>
    );
};

