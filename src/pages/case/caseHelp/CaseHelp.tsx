import React from 'react';
import {CaseHelpWrapper, HelpContent, SubTitle, Title} from './style';
import {Container} from "../../../common/style/Container";

export const CaseHelp = () => {
    return (
        <CaseHelpWrapper>
            <Container>
                <HelpContent>
                    <SubTitle>ХОТИТЕ <span>ТАК ЖЕ?</span> МЫ <span>ПОМОЖЕМ!</span> </SubTitle>
                    <Title>Заказать звонок</Title>
                </HelpContent>
            </Container>
        </CaseHelpWrapper>
    );
};

