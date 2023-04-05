import React, {useRef} from 'react';
import {Chat} from "./chat/Chat";
import {Button, GetInTorchWrapper, Title} from "./style";
import {MassageIcon} from "./assets";


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
                <MassageIcon/>
                <Button onClick={openModal}>
                    <Title>Отправте нам сообщение</Title>
                </Button>
            </GetInTorchWrapper>
            <Chat view={view} closeModal={closeModal}/>
        </>
    );
};

