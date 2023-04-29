import React, {FC} from 'react';
import {HappyElephantResultWrapper, ResultContent, Text} from './style';

import {Container} from '../../../common/style/Container';

type HappyElephantResultProps = {
    img: string,
    text1: string,
    text2: string,
}

export const HappyElephantResult:FC<HappyElephantResultProps> = ({text1, text2,img}) => {
    return (
        <HappyElephantResultWrapper src={img}>
            <Container>
                <ResultContent>
                    <Text>
                        {text1}
                    </Text>
                    <Text>
                        {text2}
                    </Text>
                </ResultContent>
            </Container>
        </HappyElephantResultWrapper>
    )
};

