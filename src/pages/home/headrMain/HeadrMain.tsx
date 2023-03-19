import React, {FC, useEffect, useRef, useState} from 'react'
import {Container} from '../../../common/style/Container'
import {Button, HeaderMainContent, HeaderMainWrapper, SubTitle, SubTitleSmall, Title, Title2} from './style'
import {ModalWindow} from "../../../common/components/modalWindow";
import {useBodyScrollLock} from "../../../common/hook";

type HeadrMainPropsType = {
    view: boolean,
    openModal: () => void
}

export const HeadrMain: FC<HeadrMainPropsType> = ({openModal, view}) => {
    const headerAnimate = useRef(null)
    const [isBodyLocked, setBodyLocked] = useBodyScrollLock();


    useEffect(() => {
        // const el = headerAnimate.current
        // gsap.fromTo(el, {translateX: 1000}, {translateX: 0, duration: 2.5})
    }, [])

    return (
        <HeaderMainWrapper>
            <Container>
                <HeaderMainContent ref={headerAnimate}>
                    <SubTitle>МЫ ПРЕДОСТАВЛЯЕМ <br/> КАЧЕСТВЕННЫЕ АУТСОРС УСЛУГИ <br/> ДЛЯ МИЛЛИОНОВ
                        ПОЛЬЗОВАТЕЛЕЙ <br/> ПО ВСЕМУ МИРУ.
                    </SubTitle>
                    <SubTitleSmall>МЫ ПРЕДОСТАВЛЯЕМ КАЧЕСТВЕННЫЕ <br/> АУТСОРС УСЛУГИ ДЛЯ МИЛЛИОНОВ <br/> ПОЛЬЗОВАТЕЛЕЙ
                        ПО ВСЕМУ МИРУ.
                    </SubTitleSmall>
                    <Title>Вот где начинаются</Title>
                    <Title2>ваши свершения</Title2>
                    <Button onClick={openModal}>Оставить заявку</Button>
                </HeaderMainContent>
            </Container>
        </HeaderMainWrapper>
    )
}
