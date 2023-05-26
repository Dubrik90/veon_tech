import React from 'react';
import {Massage, MassageWrapper, MessagesWrapper, Time, WelcomeBlock} from "./style";

export const Messages = () => {
    return (
        <MessagesWrapper>
            <WelcomeBlock>
                <MassageWrapper>
                    <Massage>
                        Hello.
                        Do you have any questions? We will be happy to answer!
                    </Massage>
                    {/*<Time>Отправлено в 19:00</Time>*/}
                </MassageWrapper>

            </WelcomeBlock>
        </MessagesWrapper>
    );
};

