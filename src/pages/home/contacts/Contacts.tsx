import React, {FC, useRef} from 'react';
import {ContactsWrapper, ContentBlock, Subtitle, Title} from "./style";
import {Container} from "../../../common/style/Container";
import {useAppDispatch, useAppSelector} from "../../../common/hook";
import {setIsOpenFormAC} from "../../../app/app-reduser";

export const Contacts = () => {
    const dispatch = useAppDispatch()
    const isOpenForm = useAppSelector(state => state.app.isOpenForm)

    const onClickFormModalHandler = () => {
        dispatch(setIsOpenFormAC({isOpen: !isOpenForm}))
    }

    return (
        <ContactsWrapper>
            <Container>
                <ContentBlock>
                    <Subtitle>Давайте приступим к работе?</Subtitle>
                    <Title onClick={onClickFormModalHandler}>Связаться с нами</Title>
                </ContentBlock>
            </Container>
        </ContactsWrapper>
    );
};

