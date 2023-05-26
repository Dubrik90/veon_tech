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
                        Service: {activeCase.service}
                    </ServiceTitle>
                    <ServiceTitle>
                        Client: {activeCase.client}
                    </ServiceTitle>
                    <ServiceTitle>
                        Project URL: <a href={activeCase.projectUrl}>{activeCase.projectUrl}</a>
                    </ServiceTitle>
                </CaseHeaderBlock>
            </CaseHeaderBlockColumn>
            <CaseHeaderBlockColumn>
                <ServiceTitle>
                    Company Overview: {activeCase.aboutCompany}
                </ServiceTitle>
                <ServiceTitle>
                    Primary Goals: {activeCase.targets}
                </ServiceTitle>
            </CaseHeaderBlockColumn>
        </HeaderCaseWrapper>
    );
};

