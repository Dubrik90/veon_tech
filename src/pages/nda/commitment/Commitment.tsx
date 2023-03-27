import React from 'react';
import {CommitmentBlock, CommitmentWrapper, Content, Title, Text, ImageBlock, Img} from './style';
import {Container} from '../../../common/style/Container';
import Treaty from '../assets/treaty.png'

export const Commitment = () => {
    return (
        <CommitmentWrapper>
            <Container>
                <CommitmentBlock>
                    <Content>
                        <Title>НДА (Соглашение о неразглашении)</Title>
                        <Text>
                            НДА — контракт, через который стороны соглашаются не раскрыть информацию, закрытую
                            соглашением. NDA создает конфиденциальные отношения между сторонами, чтобы защитить любой
                            тип конфиденциальной информации.
                        </Text>
                    </Content>
                    <ImageBlock>
                        <Img src={Treaty}/>
                    </ImageBlock>

                </CommitmentBlock>
            </Container>
        </CommitmentWrapper>
    );
};

