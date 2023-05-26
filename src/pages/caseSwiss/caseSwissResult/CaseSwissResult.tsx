import React from 'react';
import {CaseSwissResultWrapper, ContentBlock, ImageBlock, Text, TextBlock} from './style';
import SwissResoult from "../assets/swissResult.webp";

export const CaseSwissResult = () => {
    return (
        <CaseSwissResultWrapper>
            <ContentBlock>
                <TextBlock>
                    <Text>
                        We made all the requested changes to the website, as desired by the client. We implemented the ability to add banners to articles and news on the site.
                    </Text>
                    <Text>
                        We created a dedicated news section. Now, regular visitors can discover something new and stay updated with the latest changes in the company's life.
                    </Text>
                </TextBlock>
                <ImageBlock src={SwissResoult}></ImageBlock>
            </ContentBlock>
        </CaseSwissResultWrapper>
    );
};

