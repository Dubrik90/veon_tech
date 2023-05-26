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
                            Need consultation?
                        </Title>
                        <Text>
                            We are ready to provide comprehensive consultation on the terms and any questions regarding working with our company!
                        </Text>
                    </TitleBlock>
                    <ButtonBlock>
                        <ImageWrapper>
                            <Img src={theme === 'light' ? LogoLight : Logo}/>
                        </ImageWrapper>
                            <Button className='animate' onClick={onClickOpenModalHandler}>GET CONSULTATION</Button>
                    </ButtonBlock>
                    <ContactBlock>
                        <PhoneLink href="tel:+375333028790">+375 (33) 302-87-90</PhoneLink>
                        <Email>sales@veon-tech.ru</Email>
                    </ContactBlock>
                </HelpContent>
            </Container>
        </HelpWrapper>
    );
};

