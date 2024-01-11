import React, {useEffect, useRef} from 'react';
import {DescriptionWeb} from './descriptionWeb/DescriptionWeb';
import {HeadrMain} from './headrMain/HeadrMain';
import {Company} from './company/Company';
import {Reviews} from './reviews/Reviews';
import {Contacts} from "./contacts";
import {Layer} from "./layer";
import {gsap} from "gsap";
import {Methodology} from "./methodology";
import {Techno} from './techno';
import {PortfolioSlider} from './portfolioSlider/PortfolioSlider';
import {SliderReviews} from "../../common/components/sliderReviews";


export const Home = () => {

    useEffect(() => {
        document.title = 'Главная — VEON-TECH'
    }, [])

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
            <Techno/>
            <PortfolioSlider/>
            {/*<Technologies/>*/}
            {/*<Portfolio/>*/}
            <Company/>
            {/*<Layer/>*/}
            {/*<SliderReviews/>*/}
            {/*<Reviews/>*/}
            <Contacts/>
        </>
    )
}
