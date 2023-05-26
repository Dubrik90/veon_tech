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
                <Text>We use <Link to={ROUTS.POLICY}>cookies </Link> to optimize the website's performance.
                </Text>
                <Button onClick={onClickCloseCookieHandler}>I AGREE</Button>
            </CookieContent>
        </CookieWrapper>
    );
};

