import React from 'react';
import {ChatContent, ChatFooter, ChatHeader, ChatWrapper, CloseIcon, Input, InputBlock} from "./style";
import {Button, Title} from "../style";
import {Messages} from "./Messages";
import {Send} from "../assets";

type ChatType = {
    closeModal: (e: any) => void
    view: boolean
}
export const Chat: React.FC<ChatType> = ({closeModal, view,}) => {

    return (
        <ChatWrapper view={view}>
            <CloseIcon onClick={closeModal}/>
            <ChatHeader>
                <Button>
                    <Title>Send us a message</Title>
                </Button>
            </ChatHeader>
            <ChatContent>
                <Messages/>
            </ChatContent>
            <InputBlock>
                <Input placeholder='enter a message'></Input>
                <Send/>
            </InputBlock>
            <ChatFooter></ChatFooter>
        </ChatWrapper>
    );
};

