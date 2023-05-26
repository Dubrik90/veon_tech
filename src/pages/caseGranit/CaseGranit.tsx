import React from 'react';
import {CaseGranitWrapper, GranitTextContent, Text} from './style';
import {CaseHeader} from "../../common/components/caseHeader";
import {CaseImageComponent} from "../../common/components/caseImageComponent";
import GranitCompany from '../../common/components/caseImageComponent/assets/granitCompany.webp'
import {Container} from "../../common/style/Container";
import {Wishes} from "./wishes";
import {JointWork} from './jointWork';
import {CaseHelp} from "../case/caseHelp";
import {SimilarCases} from "../case/similarCases";

export const CaseGranit = () => {
    return (
        <CaseGranitWrapper>
            <CaseHeader title={'Case Study: Website Development for Ural Granite Company'}/>
            <CaseImageComponent img={GranitCompany}/>
            <Container>
                <GranitTextContent>
                    <Text>
                        <span>Ural Granite Company</span> is a successful and dynamic team of professionals specializing in the production of stone products, memorial complexes, complex architectural forms, and stone in landscaping and interior design.
                    </Text>
                    <Text>
                        Objective: Create a customized website catalog with a modern design that would provide a competitive advantage. Ensure its proper display on all devices and browsers.
                    </Text>
                </GranitTextContent>
            </Container>
            <Wishes/>
            <JointWork/>
            <CaseHelp/>
            <SimilarCases/>
        </CaseGranitWrapper>
    );
};

