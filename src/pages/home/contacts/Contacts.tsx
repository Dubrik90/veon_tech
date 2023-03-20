import React, {FC} from 'react';
import {ContactsWrapper, ContentBlock, Subtitle, Title} from "./style";
import {Container} from "../../../common/style/Container";

type ContactsPropsType = {
    view: boolean,
    openModal: () => void
}

export const Contacts:FC<ContactsPropsType> = ({openModal, view}) => {

    return (
        <ContactsWrapper>
            <Container>
                <ContentBlock>
                    <Subtitle>Давайте приступим к работе?</Subtitle>
                    <Title onClick={openModal}>Связаться с нами</Title>
                </ContentBlock>
            </Container>
        </ContactsWrapper>
    );
};

