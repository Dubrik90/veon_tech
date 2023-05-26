import React from 'react';
import {ElephantDescContent, HappyElephantDescWrapper, ImageBlock, Img, Text} from './style';
import {Container} from '../../../common/style/Container';
import MobileImg from '../assets/elephantMobile.webp'

export const HappyElephantDesc = () => {
    return (
        <HappyElephantDescWrapper>
            <Container>
                <ElephantDescContent>
                    <Text>The backend is managed by 1C, which handles calendars and appointments. <br/> Users interact with calendars through various frontend systems. </Text>
                    <ImageBlock>
                        <Img src={MobileImg} alt={'mobile image'}/>
                    </ImageBlock>
                    <Text>One of the client's key requirements was responsiveness, and we successfully fulfilled this task. <br/>One of the client's key requirements was responsiveness, and we successfully fulfilled this task.</Text>
                </ElephantDescContent>
            </Container>
        </HappyElephantDescWrapper>
    );
};

