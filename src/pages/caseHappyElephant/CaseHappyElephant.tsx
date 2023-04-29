import React from 'react';
import { CaseHappyElephantWrapper } from './style';
import {CaseHeader} from "../../common/components/caseHeader";
import {CaseImageComponent} from "../../common/components/caseImageComponent";
import Elephant from "./assets/elephant.webp";
import {HappyElephantAbout} from "./HappyElephantAbout";

export const CaseHappyElephant = () => {
    return (
        <CaseHappyElephantWrapper>
            <CaseHeader title={'Кейс по разработке сайта для “Счастливый слон”'}/>
            <CaseImageComponent img={Elephant}/>
            <HappyElephantAbout/>
        </CaseHappyElephantWrapper>
    );
};

