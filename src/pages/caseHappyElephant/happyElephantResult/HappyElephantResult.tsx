import React, {FC} from 'react';
import {HappyElephantResultWrapper, HappyElephantResultWrapperMob, ResultContent, Text, TextMob} from './style';

import {Container} from '../../../common/style/Container';
import {Img} from "../HappyElephantAbout/style";
import ElephfImage from "../assets/elephantAbutImage.webp";

type HappyElephantResultProps = {
    img: string,
    text1: string,
    text2: string,
}

export const HappyElephantResult: FC<HappyElephantResultProps> = ({text1, text2, img}) => {
    return (
        <>
            <HappyElephantResultWrapper src={img}>
                <Container>
                    <ResultContent>
                        <Text>
                            Payment, on the other hand, is facilitated through payment modules connected to the website using a standard mechanism. <br/> When proceeding to payment, bonuses are reserved.
                            {/*{text1}*/}
                        </Text>
                        <Text>
                            Выбирая нас клиент получил следующее: <br/>
                            - Календарь бронирования с широким функционалом <br/>
                            - Кабинет сделки с интуитивно-понятным пользователю интерфейсом <br/>
                            - Реализована система платежей <br/>
                        </Text>
                    </ResultContent>
                </Container>
            </HappyElephantResultWrapper>
            <HappyElephantResultWrapperMob>
                <Img src={img}/>
                <Container>
                    <TextMob>
                        {text1}
                    </TextMob>
                    <TextMob>
                        By choosing our services, the client received the following:<br/>
                        - A feature-rich booking calendar<br/>
                        - A user-friendly deal cabinet interface<br/>
                        - Implemented payment system<br/>
                        - Our team also developed various user behavior scenarios in the deal cabinet.<br/>
                    </TextMob>
                </Container>
            </HappyElephantResultWrapperMob>

        </>

    )
};

