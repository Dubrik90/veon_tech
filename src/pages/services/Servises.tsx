import React from 'react';
import { ServicesWrapper } from './style';
import {ServiceHeader} from "./serviceHeader";
import {useParams} from "react-router-dom";
import {dataServices} from "./app/dataService";

export const Services = () => {
    const {service} = useParams()

    const activeDataService = dataServices.filter(el => el.type === service)[0]

    return (
        <ServicesWrapper>
            <ServiceHeader img={activeDataService.img}
                           text={activeDataService.text}
                           title={activeDataService.title}
            />

        </ServicesWrapper>
    );
};

