import React from 'react';
import {HelpContent, HelpWrapper, Button, TitleBlock, Title, Text, ButtonBlock, ImageWrapper, Img, ContactBlock, PhoneLink, Email} from './style';
import {Container} from '../../../common/style/Container';
import {useAppDispatch, useAppSelector} from "../../../common/hook";
import Logo from '../assets/logo.png'
import LogoLight from '../assets/logoLight.png'
import {setIsConsultantModalOpenAC} from "../../../app/app-reduser";
import {useScrollBlock} from "../../../common/hook/use-scroll-block";
import {ConsultantModal} from "../../../common/components/consultantModal";

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
                            <Img src={theme === 'light' ? LogoLight : Logo}/>
                        </ImageWrapper>
                            <Button className='animate' onClick={onClickOpenModalHandler}>Получить консультацию</Button>
                    </ButtonBlock>
                    <ContactBlock>
                        <PhoneLink href="tel:+79955775163">+7(995)577-51-63</PhoneLink>
                        <Email>clients@veon-tech.ru</Email>
                    </ContactBlock>
                </HelpContent>
            </Container>

        </HelpWrapper>
    );
};

