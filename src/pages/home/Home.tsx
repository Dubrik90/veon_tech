import React, {FC, useEffect, useRef} from 'react';
import {Technologies} from './technologies';
import {DescriptionWeb} from './descriptionWeb/DescriptionWeb';
import {HeadrMain} from './headrMain/HeadrMain';
import {Portfolio} from "./portfolio";
import {Company} from './company';
import {Reviews} from './reviews';
import {Contacts} from "./contacts";
import {Layer} from "./layer";
import {gsap} from "gsap";
import {setIsOpenFormAC} from "../../app/app-reduser";
import {Methodology} from "./methodology";

export const Home = () => {
    const headerAnimate = useRef(null)
    const button = useRef(null)
    const descriptionWeb = useRef(null)


    const tl = gsap.timeline({defaults: {ease: 'power2.easeInOut'}})

    useEffect(() => {
        const el = headerAnimate.current;
        const but = button.current;
        const descWeb = descriptionWeb.current;

        tl.to(el, {clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, duration: 1.5}, 1)
            .to(but, {opacity: 1, ease: 'power0.easeNone'}, 1.7)
            .to(descWeb, {clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1}, 1.7)

    }, [])


    return (
        <>
            <HeadrMain headerAnimate={headerAnimate} button={button}/>
            <DescriptionWeb descriptionWeb={descriptionWeb}/>
            <Methodology/>
            <Technologies/>
            <Portfolio/>
            <Company/>
            <Layer/>
            <Reviews/>
            <Contacts/>
        </>
    )
}
