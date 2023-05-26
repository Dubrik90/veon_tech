import React, {FC} from 'react';
import {HeaderBlock, HeaderContent, HeaderText, ServiceHeaderWrapper, Title, Text, Button, HeaderImage, Img} from './style';
import {Container} from "../../../common/style/Container";
import {useAppDispatch, useAppSelector} from "../../../common/hook";
import {setIsOpenFormAC} from "../../../app/app-reduser";
import {useScrollBlock} from "../../../common/hook/use-scroll-block";

type ServiceHeaderPropsType = {
    title: string,
    text: string,
    img: string,
    titleBtn: string
}

export const ServiceHeader:FC<ServiceHeaderPropsType> = ({text, img, title, titleBtn}) => {
    const dispatch = useAppDispatch()
    const isOpenForm = useAppSelector(state => state.app.isOpenForm)
    const [blockScroll, allowScroll] = useScrollBlock();

    const onClickFormModalHandler = () => {
        blockScroll()
        dispatch(setIsOpenFormAC({isOpen: !isOpenForm}))
    }

    return (
        <ServiceHeaderWrapper>
            <Container>
                <HeaderBlock>
                    <HeaderContent>
                        <Title className='animate'>Creating <span>unique websites</span>, we bring <span>our clients' </span> commercial goals to life</Title>
                        <Text>{text}</Text>
                        {/*<Button className='animate' onClick={onClickFormModalHandler}>{titleBtn}</Button>*/}
                    </HeaderContent>
                    {/*<HeaderImage>*/}
                    {/*    <Img src={img} alt='image'/>*/}
                    {/*</HeaderImage>*/}
                </HeaderBlock>
            </Container>
        </ServiceHeaderWrapper>
    );
};

