import React, {FC} from 'react';
import {CaseType} from "../app/data";
import {HeaderCaseWrapper, CaseHeaderBlockColumn, ImageBlock, Img, ServiceTitle, CaseHeaderBlock} from './style';

type HeaderCaseProps = {
    activeCase: CaseType
}
export const HeaderCase: FC<HeaderCaseProps> = ({activeCase}) => {

    return (
        <HeaderCaseWrapper>
            <CaseHeaderBlockColumn>
                <ImageBlock>
                    <Img src={activeCase.logoImg} alt="logo"/>
                </ImageBlock>
                <CaseHeaderBlock>
                    <ServiceTitle>
                        Услуга проекта: {activeCase.service}
                    </ServiceTitle>
                    <ServiceTitle>
                        Клиент: {activeCase.client}
                    </ServiceTitle>
                    <ServiceTitle>
                        Проект url: <a href={activeCase.projectUrl}>{activeCase.projectUrl}</a>
                    </ServiceTitle>
                </CaseHeaderBlock>
            </CaseHeaderBlockColumn>
            <CaseHeaderBlockColumn>
                <ServiceTitle>
                    О компании: {activeCase.aboutCompany}
                </ServiceTitle>
                <ServiceTitle>
                    Основные цели: {activeCase.targets}
                </ServiceTitle>
            </CaseHeaderBlockColumn>

        </HeaderCaseWrapper>
    );
};

