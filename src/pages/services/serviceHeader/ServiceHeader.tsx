import React from 'react';
import {HeaderBlock, HeaderContent, ServiceHeaderWrapper, Title} from './style';
import {Container} from "../../../common/style/Container";

export const ServiceHeader = () => {

    return (
        <ServiceHeaderWrapper>
            <Container>
                <HeaderBlock>
                    <HeaderContent>
                        <Title className='animate'>Создавая <span>уникальные сайты</span>, мы воплощаем в жизнь
                            коммерческие цели <span>наших клиентов</span></Title>
                    </HeaderContent>
                </HeaderBlock>
            </Container>
        </ServiceHeaderWrapper>
    );
};

