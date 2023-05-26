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
                    <SubTitle>WE PROVIDE <br/> HIGH-QUALITY OUTSOURCING <br/> SERVICES FOR CLIENTS <br/> AROUND THE WORLD.
                    </SubTitle>
                    <SubTitleSmall>WE PROVIDE HIGH-QUALITY <br/> OUTSOURCING SERVICES FOR
                        <br/>
                        CLIENTS AROUND THE WORLD.
                    </SubTitleSmall>
                    <Title>This is where your</Title>
                    <Title2>achievements begin.</Title2>
                    <Button ref={button} onClick={onClickFormModalHandler}>LEAVE AN INQUIRY</Button>
                </HeaderMainContent>
            </Container>
        </HeaderMainWrapper>
    )
}

