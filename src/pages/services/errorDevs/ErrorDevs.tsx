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
import Star from "../../home/methodology/assets/star.svg";

export const ErrorDevs = () => {

    const [errorIndex, setCardIndex] = useState<number>(0)
    const activeErrorData = mistakeData[errorIndex]

    const onClickSetActiveError = (index: any) => {
        setCardIndex(index)
    }

    return (
        <ErrorDevsWrapper>
            <Container>
                <Title className='animate'>4 common mistakes in website development</Title>
                <ErrorDevsContent>
                    <Ul>
                        {mistakeData.map((el: any, index: any) => (
                            <Li key={index}
                                onClick={() => onClickSetActiveError(index)}
                                className={index === errorIndex ? 'active' : ''}
                            >{el.head}</Li>))}
                    </Ul>
                    <ErrorContent>
                        <TitleError className='animate'>{activeErrorData.head}</TitleError>
                        <Text className='animate'>{activeErrorData.text}</Text>
                        <UlError>
                            {activeErrorData.ul?.map((el: any, index: any) => (
                                <LiError key={index} className='animate'
                                ><img src={Star} alt=""/> <span>{el}</span>
                                </LiError>))}
                        </UlError>
                    </ErrorContent>
                </ErrorDevsContent>
            </Container>
        </ErrorDevsWrapper>
    );
};

