import React, {useEffect, useRef, useState} from 'react';
import {GoUpWrapper} from "./style";
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";


export const GoUp = () => {
    gsap.registerPlugin(ScrollTrigger);
    const [up, setUp] = useState(false)
    const circleRef = useRef(null);

    useEffect(() => {
        const el = circleRef.current
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
        gsap.fromTo(el, {translateX: 0}, {translateX: 0})
        gsap.fromTo('.torch', {translateX: 0}, {translateX: 0})
    }, [up]);


    useEffect(() => {
        gsap.to("#thirdCircle", {
            x: -63,
            scrollTrigger: {
                trigger: "#thirdCircle",
                start: "top center",
                end: "bottom 80px",
                scrub: true
            }
        });
        gsap.fromTo(".torch", {y: 0}, {
            y: -75,
            scrollTrigger: {
                trigger: "#thirdCircle",
                scrub: true
            }
        });
    }, []);

    return (
        <GoUpWrapper id="thirdCircle" ref={circleRef} onClick={() => setUp(!up)}> </GoUpWrapper>
    );
};

