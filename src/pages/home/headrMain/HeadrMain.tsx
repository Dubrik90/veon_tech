import React, {useEffect, useRef, useState} from 'react'
import {Container} from '../../../common/style/Container'
import {Button, HeaderMainContent, HeaderMainWrapper, SubTitle, Title} from './style'
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
        const el = headerAnimate.current
        gsap.fromTo(el, {translateX: 1000}, {translateX: 0, duration: 2.5})
    }, [])

    return (
        <HeaderMainWrapper >
            {view && <ModalWindow openModal={openModal}/>}
            <Container>
                <HeaderMainContent ref={headerAnimate}>
                    <Title>Ваш <span>успех начинается</span> здесь</Title>
                    <SubTitle>
                        Создаем по-настоящему эффективные сайты: внедряем актуальные IT разработки, уделяем максимум
                        внимания дизайну и удобству.
                    </SubTitle>
                    <Button onClick={openModal}>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</Button>
                </HeaderMainContent>
            </Container>
        </HeaderMainWrapper>


    )
}
