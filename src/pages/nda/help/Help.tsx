import React from 'react';
import {
    Button,
    ButtonBlock,
    ContactBlock,
    Email,
    HelpContent,
    HelpWrapper,
    ImageWrapper,
    Img,
    PhoneLink,
    Text,
    Title,
    TitleBlock
} from './style';
import {Container} from '../../../common/style/Container';
import {useAppDispatch, useAppSelector} from "../../../common/hook";
import LogoLight from '../assets/logoLight.png'
import {setIsConsultantModalOpenAC} from "../../../app/app-reduser";
import {useScrollBlock} from "../../../common/hook/use-scroll-block";
import {Logo} from "../../../common/components/logo/Logo";
import ApdateLogo from "../../../common/components/header/assets/apdateLogo.png";

export const Help = () => {
    const theme = useAppSelector(state => state.app.theme)
    const [blockScroll, allowScroll] = useScrollBlock();
    const dispatch = useAppDispatch()

    const onClickOpenModalHandler = () => {
        blockScroll()
        dispatch(setIsConsultantModalOpenAC({isOpen: true}))
    }

    return (
        <HelpWrapper>
            <Container>
                <HelpContent>
                    <TitleBlock>
                        <Title className='animate'>
                            Нужна консультация?
                        </Title>
                        <Text>
                            Готовы предоставить полную консультацию по условиям и
                            всем интересующим вопросам работы с нашей компанией!
                        </Text>
                    </TitleBlock>
                    <ButtonBlock>
                        <ImageWrapper>
                            <img loading="lazy" src={ApdateLogo} alt="logo company"/>
                        </ImageWrapper>
                        <Button className='animate' onClick={onClickOpenModalHandler}>Получить консультацию</Button>
                    </ButtonBlock>
                    <ContactBlock>
                        <PhoneLink href="tel:+37529302-87-90">+375(29)302-87-90</PhoneLink>
                        <Email>clients@veon-tech.ru</Email>
                    </ContactBlock>
                </HelpContent>
            </Container>

        </HelpWrapper>
    );
};

