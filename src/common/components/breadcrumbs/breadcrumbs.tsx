import React, {FC} from 'react';
import {Link} from 'react-router-dom';


import {PageName, BreadcrumbsWrapper, Category} from './style';
import {ROUTS} from "../../constans/routs";

type BreadcrumbsPropsType = {
    title: string
}
export const Breadcrumbs: FC<BreadcrumbsPropsType> = ({title}) => {
    return (
        <BreadcrumbsWrapper>
            <Category>
                <Link to={ROUTS.HOME}>ГЛАВНАЯ</Link>
            </Category>
            <PageName>{title}</PageName>
        </BreadcrumbsWrapper>
    );
};

