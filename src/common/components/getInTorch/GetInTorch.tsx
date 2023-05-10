import React, {useRef} from 'react';
import {Chat} from "./chat/Chat";
import {Button, GetInTorchWrapper, IconsBlock, Title} from "./style";
import {Linkedin, MassageIcon, Telegram} from "./assets";
import MassageIc from "./assets/massage.png";


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
                    <div>
                        <a href="https://www.linkedin.com/company/veon-tech/" target={'_blank'}>
                            <Linkedin/>
                            <span>Сообщение в Linkedin</span>
                        </a>
                    </div>
                    <div>
                        <a href="https://t.me/veon_tech" target={'_blank'}>
                            <Telegram/>
                            <span>Сообщение в Telegram</span>
                        </a>
                    </div>
                    <div>
                        <p onClick={openModal}>
                            <img loading="lazy" src={MassageIc}/>
                            <span>Оставить сообщение</span>
                        </p>
                    </div>
                </IconsBlock>
            </GetInTorchWrapper>
            <Chat view={view} closeModal={closeModal}/>
        </>
    );
};

