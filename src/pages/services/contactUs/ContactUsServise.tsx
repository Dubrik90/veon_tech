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

export const ContactUsServise = () => {
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
                        <Title>
                            Чтобы заказать создание сайта под ключ в Минске - свяжитесь с нами, удобным для Вас способом.
                        </Title>
                        <LinksBlock>
                            <LinkUs to={ROUTS.CONTACTS}>Связаться с нами</LinkUs>
                            <Button onClick={onClickFormModalHandler}>Оставить заявку</Button>
                        </LinksBlock>
                    </Content>
                </ContactUsBlokTop>
                <LineBlock>
                    <span></span>
                    <HeardIcon/>
                    <span></span>
                </LineBlock>
                <TitleBottom>ВОЗМОЖНО, ВАС ЗАИНТЕРЕСУЮТ</TitleBottom>
                <LinksBottomBlock>
                    <ButtonBottom onClick={onClickFormModalHandler}>SEO</ButtonBottom>
                    <ButtonBottom onClick={onClickFormModalHandler}>ВЕБ-АНАЛИТИКА</ButtonBottom>
                </LinksBottomBlock>
            </Container>
        </ContactUsServiseWrapper>
    );
};

