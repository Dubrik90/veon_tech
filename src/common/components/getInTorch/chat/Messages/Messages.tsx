import React from 'react';
import {messageData} from "./data";
import {Input, Massage, MessageContainer, MessagesWrapper, SendMessageBlock, Time} from "./style";
import {Icon} from "../style";

export const Messages = () => {
    return (
        <MessagesWrapper>
            {messageData.map((m, index) => <MessageContainer key={index}>
                <Massage key={m.id}> {m.message} </Massage>
                <Time>Отправлено в {m.time}</Time>
            </MessageContainer>)}
            <SendMessageBlock >
                <Input placeholder='Введите ваше сообщение'/>
                <Icon></Icon>
            </SendMessageBlock>
        </MessagesWrapper>
    );
};

