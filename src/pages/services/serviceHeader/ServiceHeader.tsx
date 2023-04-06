import React, {FC} from 'react';
import {HeaderBlock, HeaderContent, HeaderText, ServiceHeaderWrapper, Title, Text, Button, HeaderImage, Img} from './style';
import {Container} from "../../../common/style/Container";

type ServiceHeaderPropsType = {
    title: string,
    text: string,
    img: string
}

export const ServiceHeader:FC<ServiceHeaderPropsType> = ({text, img, title}) => {
    return (
        <ServiceHeaderWrapper>
            <Container>
                <HeaderBlock>
                    <HeaderContent>
                        <Title>{title}</Title>
                        <Text>{text}</Text>
                        <Button>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</Button>
                    </HeaderContent>
                    <HeaderImage>
                        <Img src={img} alt='image'/>
                    </HeaderImage>
                </HeaderBlock>
            </Container>

        </ServiceHeaderWrapper>
    );
};

