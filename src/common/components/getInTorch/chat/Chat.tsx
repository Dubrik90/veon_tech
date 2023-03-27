import React from 'react';
import {ChatContent, ChatFooter, ChatHeader, ChatWrapper, CloseIcon, Input, InputBlock} from "./style";
import {Button, SubTitle, Title} from "../style";
import {Messages} from "./Messages";
import {Avatar, Send} from "../assets";

type ChatType = {
    closeModal: (e: any) => void
    view: boolean
}
export const Chat: React.FC<ChatType> = ({closeModal, view,}) => {

    return (
        <ChatWrapper view={view}>
            <CloseIcon onClick={closeModal}/>
            <ChatHeader>
                <Avatar/>
                <Button>
                    <Title>Артем</Title>
                    <SubTitle>Customer support</SubTitle>
                </Button>
            </ChatHeader>
            <ChatContent>
                <Messages/>
            </ChatContent>
            <InputBlock>
                <Input placeholder='Введите сообщение'></Input>
                <Send/>
            </InputBlock>
            <ChatFooter></ChatFooter>
        </ChatWrapper>
    );
};

