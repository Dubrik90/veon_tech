import React, {FC} from 'react';
import {Technologies} from './technologies';
import {DescriptionWeb} from './descriptionWeb/DescriptionWeb';
import {HeadrMain} from './headrMain/HeadrMain';
import {Portfolio} from "./portfolio";
import {Company} from './company';
import {Reviews} from './reviews';
import {Contacts} from "./contacts";
import {Layer} from "./layer";
import {ThemeType} from "../../common/types/types";

type HomePropsType = {
    view: boolean,
    openModal: () => void,
    theme: ThemeType
}

export const Home:FC<HomePropsType> = ({openModal, view, theme}) => {

    return (
        <>
            <HeadrMain view={view} openModal={openModal}/>
            <DescriptionWeb/>
            <Technologies/>
            <Portfolio/>
            <Company theme={theme}/>
            <Layer/>
            <Reviews/>
            <Contacts view={view} openModal={openModal}/>
        </>
    )
}
