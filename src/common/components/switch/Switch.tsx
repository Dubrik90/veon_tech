import React, {FC, useEffect} from 'react';

import Moon from "../../../pages/home/portfolio/assets/moon.svg";
import Sun from "../../../pages/home/portfolio/assets/sun.svg";
import {ModalSwich, SwitchWrapper} from "./style";
import {ThemeType} from "../../types/types";
import {useAppDispatch, useAppSelector} from "../../hook";
import {setIsSelectThemBlockedAC} from "../../../app/app-reduser";

type SwitchProps = {
    theme: ThemeType,
    onClick: () => void
}
export const Switch: FC<SwitchProps> = ({theme, onClick}) => {
    const dispatch = useAppDispatch()
    const isThemeBlock = useAppSelector(state => state.app.isSelectThemBlocked)

    useEffect(() => {
        if (isThemeBlock) {
            const timeout = setTimeout(() => {
                dispatch(setIsSelectThemBlockedAC({isBlock: false}))
                clearTimeout(timeout);
            }, 3000)
        }
    }, [isThemeBlock])

    return (

        <SwitchWrapper theme={theme} onClick={onClick}>
            <img src={Moon} alt="Moon"/>
            <img src={Sun} alt="Sun"/>
            <span className={'switch'}></span>
            <ModalSwich isThemeBlock={isThemeBlock}>Светлая или темная сторона? Хм...<br/> Останусь-ка на светлой.</ModalSwich>
        </SwitchWrapper>
    );
};

