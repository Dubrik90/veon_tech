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


export const Home = () => {

    return (
        <>
            <HeadrMain />
            <DescriptionWeb/>
            <Technologies/>
            <Portfolio/>
            <Company/>
            <Layer/>
            <Reviews/>
            <Contacts/>
        </>
    )
}
