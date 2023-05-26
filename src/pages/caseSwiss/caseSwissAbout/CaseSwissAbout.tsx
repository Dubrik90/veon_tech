import React from 'react';
import {CaseSwissAboutWrapper, CaseSwissContent, Text} from './style';
import swissImg1 from '../assets/swissImg1.png'
import {Container} from "../../../common/style/Container";


export const CaseSwissAbout = () => {
    return (
        <CaseSwissAboutWrapper src={swissImg1}>
            <Container>
                <CaseSwissContent>
                    <Text>B.Well Swiss specializes in the development of medical products.</Text>
                    <Text>The client was concerned about the lack of visual representation of news and articles on the website.</Text>
                </CaseSwissContent>
            </Container>
        </CaseSwissAboutWrapper>
    );
};

