import React, {useEffect, useRef, useState} from 'react';
import {GoUpWrapper} from "./style";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


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
            x: -70,
            duration: 3,
            scrollTrigger: {
                trigger: "#thirdCircle",
                start: "top center",
                end: "bottom 80px",
                scrub: true
            }
        });
        gsap.to(".torch", {
            x: -70,
            duration: 3,
            scrollTrigger: {
                trigger: "#thirdCircle",

             //   start: "top center",
             //   end: "bottom 80px",
                scrub: true
            }
        });
    }, []);

    return (
        <GoUpWrapper id="thirdCircle" ref={circleRef} onClick={() => setUp(!up)}> </GoUpWrapper>
    );
};

