import React, {MutableRefObject, useEffect, useRef} from 'react';
import {DType} from "../data";
import { ImgWrap } from '../style';
import { TechnologiesItemWrapper } from './style';
import gsap from "gsap";


export type TechnologiesItemType = {
    tech: DType,
}

export const TechnologiesItem: React.FC<TechnologiesItemType> = ({tech}) => {
    const {title, img} = tech

    const elAnimate = useRef(null)

    useEffect(() => {
        const el = elAnimate.current
        gsap.fromTo(el, {scale: 0}, {scale: 1, duration: .5, stagger: 0.1, scrollTrigger: {
                trigger: el,
            }})
    }, [img])

    return (
            <TechnologiesItemWrapper >
                <ImgWrap ref={elAnimate} style={img}></ImgWrap>
                <div ref={elAnimate}>{title}</div>
            </TechnologiesItemWrapper>
    );
};
