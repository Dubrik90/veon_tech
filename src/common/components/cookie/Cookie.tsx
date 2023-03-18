import React, {useState} from 'react';
import {Button, CookieContent, CookieWrapper, Text} from "./style";
import {Link} from "react-router-dom";
import {ROUTS} from "../../constans/routs";

export const Cookie = () => {
    const [isShowCookie, setIsShowCookie] = useState(true)

    const onClickCloseCookieHandler = () => {
        setIsShowCookie(false)
    }

    return (
        <CookieWrapper isShowCookie={isShowCookie}>
            <CookieContent>
                <Text>Мы используем файлы <Link to={ROUTS.WORK_IN_VEON}>cookies </Link> чтобы оптимизировать работу сайта.
                </Text>
                <Button onClick={onClickCloseCookieHandler}>Я согласен</Button>
            </CookieContent>
        </CookieWrapper>
    );
};

