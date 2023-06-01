import React from 'react';
import {Button, ContactUsWrapper, DiscussProject, Title, WorkAtUs} from "./style";
import {Container} from "../../../common/style/Container";
import {Link} from "react-router-dom";
import {ROUTS} from "../../../common/constans/routs";
import {useScrollBlock} from "../../../common/hook/use-scroll-block";
import {setIsOpenFormAC} from "../../../app/app-reduser";
import {useAppDispatch} from "../../../common/hook";

export const ContactUs = () => {
    const dispatch = useAppDispatch()
    const [blockScroll, allowScroll] = useScrollBlock();

    const onClickOpenFormHandler = () => {
        blockScroll()
        dispatch(setIsOpenFormAC({isOpen: true}))
    }


    return (
        <ContactUsWrapper>
            <Container>
                <DiscussProject onClick={onClickOpenFormHandler} className={'animate'}>
                    <Title>DISCUSS THE PROJECT</Title>
                    <Button>
                        <span></span>
                        <span></span>
                    </Button>
                </DiscussProject>
            </Container>
            <hr/>
            <Container>
                <DiscussProject className={'animate'}>
                    <Link to={ROUTS.JOBS}>
                        <Title>WORK WITH US</Title>
                        <svg width="113" height="114" viewBox="0 0 113 114" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M56.3776 0.869141L112.755 57.2468L56.3776 113.624L51.6224 108.869L99.8822 60.6093L0 60.6093L0 53.8843L99.8822 53.8843L51.6224 5.62443L56.3776 0.869141Z"
                                  fill="currentColor"></path>
                        </svg>
                    </Link>
                </DiscussProject>
            </Container>
            <hr/>
        </ContactUsWrapper>
    );
};

