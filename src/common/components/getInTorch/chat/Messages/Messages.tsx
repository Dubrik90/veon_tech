import React from 'react';
import {Massage, MassageWrapper, MessagesWrapper, Time, WelcomeBlock} from "./style";

export const Messages = () => {
    return (
        <MessagesWrapper>
            <WelcomeBlock>
                <MassageWrapper>
                    <Massage>Приветствуем Вас.</Massage>
                    <Time>Отправлено в 19:00</Time>
                </MassageWrapper>
                <MassageWrapper>
                    <Massage>Напишите, что Вас интересует, и я Вам обязательно помогу.</Massage>
                    <Time>Отправлено в 19:00</Time>
                </MassageWrapper>
                <MassageWrapper>
                    <Massage>Вам обязательно помогу.</Massage>
                    <Time>Отправлено в 19:00</Time>
                </MassageWrapper>
                <MassageWrapper>
                    <Massage>Приветствуем Вас. Готовы проконсультировать по каждой из представленных услуг!</Massage>
                    <Time>Отправлено в 19:00</Time>
                </MassageWrapper>
                <MassageWrapper>
                    <Massage>Напишите, что Вас интересует, и я Вам обязательно помогу.</Massage>
                    <Time>Отправлено в 19:00</Time>
                </MassageWrapper>
                <MassageWrapper>
                    <Massage>Напишите, что Вас интересует, и я Вам обязательно помогу.</Massage>
                    <Time>Отправлено в 19:00</Time>
                </MassageWrapper>
            </WelcomeBlock>
        </MessagesWrapper>
    );
};

