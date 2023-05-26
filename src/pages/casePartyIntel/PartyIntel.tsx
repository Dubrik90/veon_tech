import React from 'react';
import {PartyIntelWrapper} from './style';
import {CaseHeader} from "../../common/components/caseHeader";
import {CaseImageComponent} from "../../common/components/caseImageComponent";
import Party from "./assets/party.webp";
import {PartyIntelAbout} from "./partyIntelAbout";
import {PartyIntelResult} from "./partyIntelResult";
import {PartyIntelWishes} from './partyIntelWishes';
import {CaseHelp} from "../case/caseHelp";
import {SimilarCases} from "../case/similarCases";

export const CasePartyIntel = () => {
    return (
        <PartyIntelWrapper>
            <CaseHeader title={'Case Study: Website Development for LLC "PartyIntel"'}/>
            <CaseImageComponent img={Party}/>
            <PartyIntelAbout/>
            <PartyIntelResult/>
            <PartyIntelWishes/>
            <CaseHelp/>
            <SimilarCases/>
        </PartyIntelWrapper>
    );
};

