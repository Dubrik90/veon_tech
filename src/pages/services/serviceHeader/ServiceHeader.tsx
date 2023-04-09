import React, {FC} from 'react';
import {HeaderBlock, HeaderContent, HeaderText, ServiceHeaderWrapper, Title, Text, Button, HeaderImage, Img} from './style';
import {Container} from "../../../common/style/Container";
import {useAppDispatch, useAppSelector, useBodyScrollLock} from "../../../common/hook";
import {setIsOpenFormAC} from "../../../app/app-reduser";

type ServiceHeaderPropsType = {
    title: string,
    text: string,
    img: string
}

export const ServiceHeader:FC<ServiceHeaderPropsType> = ({text, img, title}) => {
    const dispatch = useAppDispatch()
    const isOpenForm = useAppSelector(state => state.app.isOpenForm)
    const [isBodyLocked, setBodyLocked] = useBodyScrollLock();

    const onClickFormModalHandler = () => {
        setBodyLocked()
        dispatch(setIsOpenFormAC({isOpen: !isOpenForm}))
    }

    return (
        <ServiceHeaderWrapper>
            <Container>
                <HeaderBlock>
                    <HeaderContent>
                        <Title>{title}</Title>
                        <Text>{text}</Text>
                        <Button onClick={onClickFormModalHandler}>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</Button>
                    </HeaderContent>
                    <HeaderImage>
                        <Img src={img} alt='image'/>
                    </HeaderImage>
                </HeaderBlock>
            </Container>
        </ServiceHeaderWrapper>
    );
};

