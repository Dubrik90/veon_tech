import React from 'react';
import {Technologies} from './technologies';
import {DescriptionWeb} from './descriptionWeb/DescriptionWeb';
import {HeadrMain} from './headrMain/HeadrMain';
import {HomeWrapper} from './style';
import {Portfolio} from "./portfolio";
import {Company} from './company';
import { Reviews } from './reviews';
import {Contacts} from "./contacts";


export const Home = () => {

    return (
        <HomeWrapper>
            <HeadrMain/>
            <DescriptionWeb/>
            <Technologies/>
            <Portfolio/>
            <Company/>
            <Reviews/>
            <Contacts/>
        </HomeWrapper>

    )
}
