import React from 'react';
import {
    Button, ButtonBottom,
    ContactUsBlokTop,
    ContactUsServiseWrapper,
    Content,
    HeardIcon,
    LineBlock,
    LinksBlock,
    LinksBottomBlock,
    LinkUs,
    Title,
    TitleBottom
} from "./style";
import {Container} from "../../../common/style/Container";
import { Link } from 'react-router-dom';
import {ROUTS} from "../../../common/constans/routs";
import {useScrollBlock} from "../../../common/hook/use-scroll-block";
import {setIsOpenFormAC} from "../../../app/app-reduser";
import {useAppDispatch} from "../../../common/hook";

export const  ContactUsServise = () => {
    const dispatch = useAppDispatch()
    const [blockScroll, allowScroll] = useScrollBlock();

    const onClickFormModalHandler = () => {
        blockScroll()
        dispatch(setIsOpenFormAC({isOpen: true}))
    }

    return (
        <ContactUsServiseWrapper>
            <Container>
                <ContactUsBlokTop>
                    <Content>
                        <Title className='animate'>
                            To order turnkey website development in Minsk, please contact us using your preferred method.
                        </Title>
                        <LinksBlock>
                            <LinkUs className='animate' to={ROUTS.CONTACTS}>Contact us</LinkUs>
                            <Button className='animate' onClick={onClickFormModalHandler}>Submit a request</Button>
                        </LinksBlock>
                    </Content>
                </ContactUsBlokTop>
                <LineBlock>
                    <span></span>
                    <HeardIcon/>
                    <span></span>
                </LineBlock>
                <TitleBottom>You may also be interested in</TitleBottom>
                <LinksBottomBlock>
                    <ButtonBottom className='animate' onClick={onClickFormModalHandler}>Website maintenance</ButtonBottom>
                    <ButtonBottom className='animate' onClick={onClickFormModalHandler}>Design</ButtonBottom>
                </LinksBottomBlock>
            </Container>
        </ContactUsServiseWrapper>
    );
};

