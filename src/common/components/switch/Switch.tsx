import React, {FC} from 'react';

import Moon from "../../../pages/home/portfolio/assets/moon.svg";
import Sun from "../../../pages/home/portfolio/assets/sun.svg";
import {SwitchWrapper} from "./style";
import {ThemeType} from "../../types/types";

type SwitchProps = {
    theme: ThemeType,
    onClick: () => void
}
export const Switch: FC<SwitchProps> = ({theme, onClick}) => {

    return (
        <SwitchWrapper  theme={theme} onClick={onClick}>
            <img src={Moon} alt=""/>
            <img src={Sun} alt=""/>
            <span className={'switch'}></span>
        </SwitchWrapper>
    );
};

