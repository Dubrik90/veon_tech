import React from 'react';
import {ButtonInputMassage, ChatContent, ChatFooter, ChatHeader, ChatWrapper, Close, Input, InputBlock} from "./style";
import {AvatarWrap, Button, SubTitle, Title} from "../style";
import {Messages} from "./Messages";
import {Avatar, MassageIcon, Send} from "../assets";

type ChatType = {
    closeModal: (e: any) => void
    view: boolean
}
export const Chat: React.FC<ChatType> = ({closeModal, view,}) => {

    return (
        <ChatWrapper view={view}> <Close onClick={closeModal}>x</Close>
            <ChatHeader>
                {/*<MassageIcon/>*/}
                <Avatar/>
                {/*<AvatarWrap img={Avatar}/>*/}
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
                {/*<ButtonInputMassage type='button'></ButtonInputMassage>*/}
            </InputBlock>
            <ChatFooter>

            </ChatFooter>

            {/*<ContentFooter>*/}
            {/*    */}
            {/*</ContentFooter>*/}
        </ChatWrapper>
    );
};

