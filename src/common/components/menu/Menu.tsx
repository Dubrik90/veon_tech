import React, {FC} from 'react';
import {Link, NavLink} from "react-router-dom";
import {ROUTS} from "../../constans/routs";
import {Arrow} from "../header/assets";
import {MenuItem, MenuList, MenuSubItem, NavigateMenu, SubMenu} from "./style";
import {ThemeType} from "../../types/types";
import {Switch} from '../switch';
import {useAppSelector} from "../../hook";


type MenuProps = {
    isOpenBurger: boolean,

    onClick: () => void,
    onClickCloseBurger: () => void

}
export const Menu: FC<MenuProps> = ({isOpenBurger, onClick, onClickCloseBurger}) => {
    const theme = useAppSelector(state => state.app.theme)



    const submenuLinksAbout = [
        {title: 'О НАШЕЙ КОМПАНИИ', to: ROUTS.JOBS},
        {title: 'NDA', to: ROUTS.JOBS},
        {title: 'ВАКАНСИИ', to: ROUTS.JOBS},
    ]
    const submenuLinksServices = [
        {title: 'Разработка сайтов', to: ROUTS.JOBS},
        {title: 'Поддержка сайтов', to: ROUTS.JOBS},
        {title: 'Разработка ПО', to: ROUTS.JOBS},
        {title: 'UX/UI дизайн', to: ROUTS.JOBS},
    ]

    return (
        <NavigateMenu>
            <MenuList isOpenBurger={isOpenBurger}>
                <MenuItem><NavLink onClick={onClickCloseBurger} to={ROUTS.HOME}>ГЛАВНАЯ</NavLink></MenuItem>
                <MenuItem className='about-sub-menu'>О НАС<Arrow/>
                    <SubMenu>
                        {submenuLinksAbout.map((el, index) => <MenuSubItem key={index}><Link
                            to={el.to}>{el.title}</Link></MenuSubItem>)}
                    </SubMenu>
                </MenuItem>
                <MenuItem className='about-link'><NavLink onClick={onClickCloseBurger} to={ROUTS.HOME}>О НАШЕЙ
                    КОМПАНИИ</NavLink></MenuItem>
                <MenuItem>
                    <NavLink onClick={onClickCloseBurger} to={ROUTS.JOBS}>КЕЙСЫ</NavLink>
                </MenuItem>
                <MenuItem className='about-sub-menu'>УСЛУГИ<Arrow/>
                    <SubMenu>
                        {submenuLinksServices.map((el, index) => <MenuSubItem key={index}><Link
                            to={el.to}>{el.title}</Link></MenuSubItem>)}
                    </SubMenu>
                </MenuItem>
                <MenuItem className='about-link'>
                    <NavLink onClick={onClickCloseBurger} to={ROUTS.JOBS}>Разработка сайтов</NavLink>
                </MenuItem>
                <MenuItem><NavLink onClick={onClickCloseBurger} to={ROUTS.JOBS}>БОНУСЫ</NavLink></MenuItem>
                <MenuItem onClick={onClickCloseBurger}><Link to={ROUTS.JOBS}>КОНТАКТЫ</Link></MenuItem>
                <Switch theme={theme} onClick={onClick}/>
            </MenuList>

        </NavigateMenu>
    );
};

