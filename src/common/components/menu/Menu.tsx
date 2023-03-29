import React, {FC} from 'react';
import {Link, NavLink} from "react-router-dom";
import {ROUTS} from "../../constans/routs";
import {Arrow} from "../header/assets";
import {MenuItem, MenuList, MenuSubItem, NavigateMenu, SubMenu} from "./style";
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
        {title: 'NDA', to: ROUTS.NDA},
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
                <MenuItem className='about-link'><NavLink onClick={onClickCloseBurger} to={'/'}>О НАШЕЙ
                    КОМПАНИИ</NavLink></MenuItem>
                <MenuItem>
                    <NavLink onClick={onClickCloseBurger} to={'/qr'}>КЕЙСЫ</NavLink>
                </MenuItem>
                <MenuItem className='about-sub-menu'>УСЛУГИ<Arrow/>
                    <SubMenu>
                        {submenuLinksServices.map((el, index) => <MenuSubItem key={index}><Link
                            to={el.to}>{el.title}</Link></MenuSubItem>)}
                    </SubMenu>
                </MenuItem>
                <MenuItem className='about-link'>
                    <NavLink onClick={onClickCloseBurger} to={'#'}>Разработка сайтов</NavLink>
                </MenuItem>
                <MenuItem><NavLink onClick={onClickCloseBurger} to={'/asq'}>БОНУСЫ</NavLink></MenuItem>
                <MenuItem onClick={onClickCloseBurger}><NavLink to={ROUTS.JOBS}>КОНТАКТЫ</NavLink></MenuItem>
                <Switch theme={theme} onClick={onClick}/>
            </MenuList>

        </NavigateMenu>
    );
};
