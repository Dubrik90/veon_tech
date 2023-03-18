import React, {useEffect, useRef, useState} from 'react'
import {Container} from '../../../common/style/Container'
import {Button, HeaderMainContent, HeaderMainWrapper, SubTitle, Title, Title2} from './style'
import gsap from 'gsap';
import {ModalWindow} from "../../../common/components/modalWindow";
import {useBodyScrollLock} from "../../../common/hook";

export const HeadrMain = () => {
    const headerAnimate = useRef(null)
    const [isBodyLocked, setBodyLocked] = useBodyScrollLock();

    const [view, setView] = useState(false)
    const openModal = () => {
        setBodyLocked()
        setView(!view)
    }

    useEffect(() => {
        // const el = headerAnimate.current
        // gsap.fromTo(el, {translateX: 1000}, {translateX: 0, duration: 2.5})
    }, [])

    return (
        <HeaderMainWrapper>
            {view && <ModalWindow openModal={openModal}/>}
            <Container>
                <HeaderMainContent ref={headerAnimate}>
                    <SubTitle> ПРЕДОСТАВЛЯЕМ КАЧЕСТВЕННЫЕ АУТСОРС УСЛУГИ ДЛЯ МИЛЛИОНОВ ПОЛЬЗОВАТЕЛЕЙ ПО ВСЕМУ МИРУ
                    </SubTitle>
                    <Title>Вот где начинаются</Title>
                    <Title2>ваши свершения</Title2>
                    <Button onClick={openModal}>Оставить заявку</Button>
                </HeaderMainContent>
            </Container>
        </HeaderMainWrapper>


    )
}
