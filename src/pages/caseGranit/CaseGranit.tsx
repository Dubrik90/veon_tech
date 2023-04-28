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
            <CaseHeader title={'Кейс по разработке сайта для Уральской гранитной компании'}/>
            <CaseImageComponent img={GranitCompany}/>
            <Container>
                <GranitTextContent>
                    <Text>
                        <span>Уральская гранитная компания</span> — успешная и динамичная команда профессионалов,
                        специализирующиеся на
                        производстве изделий из камня, мемориальных комплексов, изделий сложных архитектурных форм,
                        камня в
                        ландшафте и интерьере.
                    </Text>
                    <Text>
                        Создать сайт-каталог с современным индивидуальным дизайном, который создаст преимущество перед
                        конкурентами. Обеспечить его корректное отображение на всех девайсах и браузерах.
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

