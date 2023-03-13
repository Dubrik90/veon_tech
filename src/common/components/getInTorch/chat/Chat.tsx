import React from 'react';
import {ButtonInputMassage, ChatContent, ChatFooter, ChatHeader, ChatWrapper, Close, Input, InputBlock} from "./style";
import {AvatarWrap, Button, SubTitle, Title} from "../style";
import {Messages} from "./Messages";
import Avatar from "../assets/managerImg.jpg";

type ChatType = {
    closeModal: (e: any) => void
    view: boolean
}
export const Chat: React.FC<ChatType> = ({closeModal, view,}) => {

    return (
        <ChatWrapper view={view}><Close onClick={closeModal}>x</Close>
            <ChatHeader>
                <AvatarWrap img={Avatar}/>
                <Button>
                    <Title>Пишите, отвечу лично-</Title>
                    <SubTitle>Александра Иванцова, sales-manager</SubTitle>
                </Button>
            </ChatHeader>
            <ChatContent>
                <Messages/>
            </ChatContent>
            <InputBlock>
                <Input type="text" placeholder='Введите ваше сообщение'/>
                <ButtonInputMassage type='button'></ButtonInputMassage>
            </InputBlock>
            <ChatFooter>
                Чат для сайта Veon-Tech
            </ChatFooter>

            {/*<ContentFooter>*/}
            {/*    */}
            {/*</ContentFooter>*/}
        </ChatWrapper>
    );
};

