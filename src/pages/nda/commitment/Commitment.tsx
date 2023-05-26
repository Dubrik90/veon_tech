import React from 'react';
import {CommitmentBlock, CommitmentWrapper, Content, Title, Text, ImageBlock, Img} from './style';
import {Container} from '../../../common/style/Container';
import Treaty from '../assets/treaty.png'
import {TitleHead} from "../../services/benefit/style";

export const Commitment = () => {
    return (
        <CommitmentWrapper>
            <Container>
                <TitleHead  className='animate'>Non-Disclosure Agreement (NDA)</TitleHead>
                <CommitmentBlock>
                    <Content>
                        {/*<Title>НДА (Соглашение о неразглашении)</Title>*/}
                        <Text className='animate'>
                            An NDA is a contract through which parties agree not to disclose information covered by the agreement. The NDA establishes confidential relationships between the parties to protect any type of confidential information.
                        </Text>
                    </Content>
                    <ImageBlock>
                        <Img className='animate' src={Treaty}/>
                    </ImageBlock>
                </CommitmentBlock>
            </Container>
        </CommitmentWrapper>
    );
};

