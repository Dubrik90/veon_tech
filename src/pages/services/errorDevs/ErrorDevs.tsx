import React, {useState} from 'react';
import {
    ErrorContent,
    ErrorDevsContent,
    ErrorDevsWrapper,
    Li,
    LiError,
    Text,
    Title,
    TitleError,
    Ul,
    UlError
} from "./style";
import {Container} from "../../../common/style/Container";
import {mistakeData} from "../app/dataError";

export const ErrorDevs = () => {

    const [errorIndex, setCardIndex] = useState<number>(0)
    const activeErrorData = mistakeData[errorIndex]

    const onClickSetActiveError = (index: any) => {
        setCardIndex(index)
    }

    return (
        <ErrorDevsWrapper>
            <Container>
                <Title>4 основные ошибки при разработке сайта</Title>
                <ErrorDevsContent>
                    <Ul>
                        {mistakeData.map((el: any, index: any) => (
                            <Li key={index}
                                onClick={() => onClickSetActiveError(index)}
                                className={index === errorIndex ? 'active' : ''}
                            >{el.head}</Li>))}
                    </Ul>
                    <ErrorContent>
                        <TitleError>{activeErrorData.head}</TitleError>
                        <Text>{activeErrorData.text}</Text>
                        <UlError>
                            {activeErrorData.ul?.map((el: any, index: any) => (
                                <LiError key={index}
                                >{el}</LiError>))}
                        </UlError>
                    </ErrorContent>
                </ErrorDevsContent>
            </Container>
        </ErrorDevsWrapper>
    );
};

