import React, {useEffect, useRef} from 'react';
import {Chat} from "./chat/Chat";
import gsap from 'gsap';
import {AvatarWrap, Button, GetInTorchWrapper, SubTitle, Title} from "./style";
import LogoLight from "../header/assets/logoLight.svg";
import LogoDark from "../header/assets/logoDark.svg";
import Avatar from './assets/managerImg.jpg'


export const GetInTorch = () => {
    const [view, setView] = React.useState(false)
    const circleRef = useRef(null);

    const openModal = () => {
        setView(true)
    }
    const closeModal = () => {
        setView(!view)
    }

    // useEffect(() => {
    //     gsap.to("#Torch", {
    //         x: -70,
    //         duration: 3,
    //         scrollTrigger: {
    //             trigger: "#Torch",
    //             start: "top center",
    //             end: "bottom 180px",
    //             scrub: true
    //         }
    //     });
    //
    //
    // }, []);


    // gsap.fromTo(el, {translateX: 0}, {translateX: 0, duration: 2.5})

    return (
        <>
            <GetInTorchWrapper view={view} className='torch' ref={circleRef}>
                <AvatarWrap img={Avatar}/>
                <Button onClick={openModal}>
                    <Title>Пишите, отвечу лично-</Title>
                    <SubTitle>Александра Иванцова, sales-manager</SubTitle>
                </Button>
            </GetInTorchWrapper>
            <Chat view={view} closeModal={closeModal}/>
        </>
    );
};

