import React, {FC} from 'react';
import {CaseType} from "../app/data";
import {ContentCaseWrapper, Title, Text, ImageBlock, Img} from "./style";

type ContentCaseProps = {
    activeCase: CaseType
}
export const ContentCase:FC<ContentCaseProps> = ({activeCase}) => {
    return (
        <ContentCaseWrapper>
            <Title>Background:</Title>
            <Text>{activeCase.appealClient}</Text>
            <ImageBlock>
                <Img src={activeCase.screenImg} alt="picture"/>
            </ImageBlock>
            <Title>Development Process:</Title>
            <Text>{activeCase.process}</Text>
            <Title>Results:</Title>
            <Text>{activeCase.result}</Text>
        </ContentCaseWrapper>
    );
};

