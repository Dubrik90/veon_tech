import React, {useRef} from 'react';
import {Chat} from "./chat/Chat";
import {Button, GetInTorchWrapper, IconsBlock, Title} from "./style";
import {Linkedin, MassageIcon, Telegram} from "./assets";


export const GetInTorch = () => {
    const [view, setView] = React.useState(false)
    const circleRef = useRef(null);

    const openModal = () => {
        setView(true)
    }
    const closeModal = () => {
        setView(!view)
    }

    return (
        <>
            <GetInTorchWrapper view={view} className='torch' ref={circleRef}>
                <MassageIcon/>
                <Button onClick={openModal}>
                    <Title>Отправте нам сообщение</Title>
                </Button>
                <IconsBlock>
                    <a href="https://www.linkedin.com/company/veon-tech/" target={'_blank'}>
                        <Linkedin/>
                    </a>
                    <a href="https://t.me/veon_tech" target={'_blank'}>
                        <Telegram/>
                    </a>
                </IconsBlock>
            </GetInTorchWrapper>
            <Chat view={view} closeModal={closeModal}/>
        </>
    );
};

