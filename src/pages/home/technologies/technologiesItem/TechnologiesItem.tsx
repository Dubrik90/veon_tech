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
        gsap.fromTo(el, {scale: 0}, {scale: 1, duration: .5, scrollTrigger: {
                trigger: el
            }})
    }, [img])

    return (
            <TechnologiesItemWrapper ref={elAnimate}>
                <ImgWrap style={img}></ImgWrap>
                <div>{title}</div>
            </TechnologiesItemWrapper>
    );
};
