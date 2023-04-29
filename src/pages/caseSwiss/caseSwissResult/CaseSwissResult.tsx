import React from 'react';
import {CaseSwissResultWrapper, ContentBlock, ImageBlock, Text, TextBlock} from './style';
import SwissResoult from "../assets/swissResult.webp";

export const CaseSwissResult = () => {
    return (
        <CaseSwissResultWrapper>
            <ContentBlock>
                <TextBlock>
                    <Text>
                        Мы внесли все изменения в сайт, что хотел заказчик. Реализовали возможность добавления баннеров
                        к
                        статьям и новостям на сайт.
                    </Text>
                    <Text>
                        Мы отдельно выделили раздел с новостями. Теперь постоянные посетители могут узнать что-то новое
                        и
                        ознакомиться с последними изменениями в жизни компании.
                    </Text>
                </TextBlock>
                <ImageBlock src={SwissResoult}></ImageBlock>
            </ContentBlock>
        </CaseSwissResultWrapper>
    );
};

