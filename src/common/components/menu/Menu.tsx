import React, {FC} from 'react';
import {DiamondWrapper} from "../header/style";
import {Link, NavLink} from "react-router-dom";
import {ROUTS} from "../../constans/routs";
import {Arrow} from "../header/assets";
import Diamond from "../header/assets/diamond.png";
import {MenuItem, MenuList, MenuSubItem, NavigateMenu, SubMenu} from "./style";
import {ThemeType} from "../../types/types";
import {Switch} from '../switch';


type MenuProps = {
    isOpenBurger: boolean,
    theme: ThemeType,
    onClick: () => void,
    onClickCloseBurger: () => void

}
export const Menu: FC<MenuProps> = ({isOpenBurger, theme, onClick, onClickCloseBurger}) => {

    const submenuLinksAbout = [
        {title: 'О НАШЕЙ КОМПАНИИ', to: ROUTS.WORK_IN_VEON},
        {title: 'NDA', to: ROUTS.WORK_IN_VEON},
        {title: 'ВАКАНСИИ', to: ROUTS.WORK_IN_VEON},
    ]
    const submenuLinksServices = [
        {title: 'Разработка сайтов', to: ROUTS.WORK_IN_VEON},
        {title: 'Поддержка сайтов', to: ROUTS.WORK_IN_VEON},
        {title: 'Разработка ПО', to: ROUTS.WORK_IN_VEON},
        {title: 'UX/UI дизайн', to: ROUTS.WORK_IN_VEON},
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
                    <NavLink onClick={onClickCloseBurger} to={ROUTS.WORK_IN_VEON}>КЕЙСЫ</NavLink>
                </MenuItem>
                <MenuItem className='about-sub-menu'>УСЛУГИ<Arrow/>
                    <SubMenu>
                        {submenuLinksServices.map((el, index) => <MenuSubItem key={index}><Link
                            to={el.to}>{el.title}</Link></MenuSubItem>)}
                    </SubMenu>
                </MenuItem>
                <MenuItem className='about-link'>
                    <NavLink onClick={onClickCloseBurger} to={ROUTS.WORK_IN_VEON}>Разработка сайтов</NavLink>
                </MenuItem>
                <MenuItem><NavLink onClick={onClickCloseBurger} to={ROUTS.HOME}>БОНУСЫ</NavLink></MenuItem>
                <MenuItem onClick={onClickCloseBurger}><Link to={ROUTS.WORK_IN_VEON}>КОНТАКТЫ</Link></MenuItem>
                <Switch theme={theme} onClick={onClick}/>
            </MenuList>

        </NavigateMenu>
    );
};

