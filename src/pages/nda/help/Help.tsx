import React from 'react';
import {HelpContent, HelpWrapper, Button, TitleBlock, Title, Text, ButtonBlock, ImageWrapper, Img, ContactBlock, PhoneLink, Email} from './style';
import {Container} from '../../../common/style/Container';
import {useAppSelector} from "../../../common/hook";
import Logo from '../assets/logo.png'
import LogoLight from '../assets/logoLight.png'

export const Help = () => {
    const theme = useAppSelector(state => state.app.theme)

    return (
        <HelpWrapper>
            <Container>
                <HelpContent>
                    <TitleBlock>
                        <Title>
                            Нужна консультация?
                        </Title>
                        <Text>
                            Готовы предоставить полную консультацию по условиям и
                            всем интересующим вопросам работы с нашей компанией!
                        </Text>
                    </TitleBlock>
                    <ButtonBlock>
                        <ImageWrapper>
                            <Img src={theme === 'light' ? LogoLight : Logo}/>
                        </ImageWrapper>
                            <Button>Получить консультацию</Button>
                    </ButtonBlock>
                    <ContactBlock>
                        <PhoneLink href="tel:+79955775163">+7(995)577-51-63</PhoneLink>
                        <Email>sales@veon-tech.ru</Email>
                    </ContactBlock>
                </HelpContent>
            </Container>
        </HelpWrapper>
    );
};

