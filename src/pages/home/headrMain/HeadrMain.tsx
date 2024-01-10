import React, {FC, useEffect, useLayoutEffect, useRef} from 'react'
import {Container} from '../../../common/style/Container'
import {Button, HeaderMainContent, HeaderMainWrapper, SubTitle, SubTitleSmall, Title, Title2} from './style'
import {useAppDispatch, useAppSelector} from "../../../common/hook";
import {setIsOpenFormAC} from "../../../app/app-reduser";
import {useScrollBlock} from "../../../common/hook/use-scroll-block";
import {gsap} from "gsap";
import {CSSPlugin} from "gsap/CSSPlugin";

type HeadrMainProps = {
    headerAnimate: React.RefObject<HTMLInputElement>;
    button: React.RefObject<HTMLButtonElement>;
}

export const HeadrMain:FC<HeadrMainProps>  = ({headerAnimate, button}) => {
    gsap.registerPlugin(CSSPlugin);
    const dispatch = useAppDispatch()
    const isOpenForm = useAppSelector(state => state.app.isOpenForm)
    const [blockScroll, allowScroll] = useScrollBlock();

    const onClickFormModalHandler = () => {
        blockScroll()
        dispatch(setIsOpenFormAC({isOpen: true}))
    }



    return (
        <HeaderMainWrapper ref={headerAnimate}>
            <Container>
                <HeaderMainContent>
                    <SubTitle>МЫ ПРЕДОСТАВЛЯЕМ <br/> КАЧЕСТВЕННЫЕ АУТСОРС <br/> УСЛУГИ ДЛЯ РЕШЕНИЯ <br/> ВАШИХ ЗАДАЧ.
                    </SubTitle>
                    <SubTitleSmall>МЫ ПРЕДОСТАВЛЯЕМ КАЧЕСТВЕННЫЕ <br/> АУТСОРС УСЛУГИ ДЛЯ РЕШЕНИЯ<br/>
                        ВАШИХ ЗАДАЧ.
                    </SubTitleSmall>
                    <Title>Вот где начинаются</Title>
                    <Title2>ваши свершения</Title2>
                    <Button ref={button} onClick={onClickFormModalHandler}>Оставить заявку</Button>
                </HeaderMainContent>
            </Container>
        </HeaderMainWrapper>
    )
}

