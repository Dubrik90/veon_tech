import React, {FC} from 'react';
import {Technologies} from './technologies';
import {DescriptionWeb} from './descriptionWeb/DescriptionWeb';
import {HeadrMain} from './headrMain/HeadrMain';
import {Portfolio} from "./portfolio";
import {Company} from './company';
import {Reviews} from './reviews';
import {Contacts} from "./contacts";
import {Layer} from "./layer";

type HomePropsType = {
    view: boolean,
    openModal: () => void
}

export const Home:FC<HomePropsType> = ({openModal, view}) => {

    return (
        <>
            <HeadrMain view={view} openModal={openModal}/>
            <DescriptionWeb/>
            <Technologies/>
            <Portfolio/>
            <Company/>
            <Layer/>
            <Reviews/>
            <Contacts view={view} openModal={openModal}/>
        </>
    )
}
