import React, {useState} from 'react';
import {Technologies} from './technologies';
import {DescriptionWeb} from './descriptionWeb/DescriptionWeb';
import {HeadrMain} from './headrMain/HeadrMain';
import {HomeWrapper} from './style';
import {Portfolio} from "./portfolio";
import {Company} from './company';
import {Reviews} from './reviews';
import {Contacts} from "./contacts";
import {Layer} from "./layer";

import {GetInTorch} from "../../common/components/getInTorch/GetInTorch";

export const Home = () => {

    return (
        <>
            <HeadrMain/>
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
