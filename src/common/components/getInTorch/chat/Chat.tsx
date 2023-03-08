import React from 'react';
import {ChatWrapper, Close, ContentFooter, ContentHeader} from "./style";
import {Button, SubTitle, Title} from "../style";
import {Messages} from "./Messages";

type ChatType = {
    closeModal: (e: any) => void
    view: boolean
}
export const Chat: React.FC<ChatType> = ({closeModal, view, }) => {

    return (

        <ChatWrapper view={view} ><Close onClick={closeModal}>x</Close>
            <ContentHeader>
                <Button>
                    <Title>Пишите, отвечу лично-</Title>
                    <SubTitle>Александр Иванцов, sales-manager</SubTitle>
                </Button>
            </ContentHeader>
            <ContentFooter>
                <Messages/>
            </ContentFooter>
        </ChatWrapper>
    );
};

