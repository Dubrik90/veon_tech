import React from 'react';
import {Technologies} from '../../common/components/technologies';
import {DescriptionWeb} from './descriptionWeb/DescriptionWeb';
import {HeadrMain} from './headrMain/HeadrMain';
import {HomeWrapper} from './style';


export const Home = () => {

    return (
        <HomeWrapper>
            <HeadrMain/>
            <DescriptionWeb/>
            <Technologies/>
        </HomeWrapper>

    )
}
