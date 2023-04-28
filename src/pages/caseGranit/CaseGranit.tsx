import React from 'react';
import { CaseGranitWrapper } from './style';
import {CaseHeader} from "../../common/components/caseHeader";
import {CaseImageComponent} from "../../common/components/caseImageComponent";
import GranitCompany from '../../common/components/caseImageComponent/assets/granitCompany.webp'

export const CaseGranit = () => {
    return (
        <CaseGranitWrapper>
            <CaseHeader title={'Кейс по разработке сайта для Уральской гранитной компании'}/>
            <CaseImageComponent img={GranitCompany}/>

        </CaseGranitWrapper>
    );
};

