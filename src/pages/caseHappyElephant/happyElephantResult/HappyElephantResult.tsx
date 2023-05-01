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
                            Оплата в свою очередь осуществляется через платежные модули, подключаемые к сайту в типовом механизме. <br/> При переходе к оплате ставятся в резерв Бонусы.
                            {/*{text1}*/}
                        </Text>
                        <Text>
                            {/*{text2}*/}
                            Выбирая нас клиент получил следующее: <br/>
                            -Календарь бронирования с широким функционалом <br/>
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
                        {text2}
                    </TextMob>
                </Container>
            </HappyElephantResultWrapperMob>

        </>

    )
};

