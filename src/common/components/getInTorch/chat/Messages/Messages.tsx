import React from 'react';
import {Massage, MassageWrapper, MessagesWrapper, Time, WelcomeBlock} from "./style";

export const Messages = () => {
    return (
        <MessagesWrapper>
            <WelcomeBlock>
                <MassageWrapper>
                    <Massage>
                        Здравствуйте.
                        У вас возникли вопросы? Мы с удовольствием ответим!</Massage>
                    {/*<Time>Отправлено в 19:00</Time>*/}
                </MassageWrapper>

            </WelcomeBlock>
        </MessagesWrapper>
    );
};

