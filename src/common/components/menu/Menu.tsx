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
        {title: 'NDA', to: ROUTS.NDA},
        {title: 'ВАКАНСИИ', to: ROUTS.JOBS},
    ]
    const submenuLinksServices = [
        {title: 'Разработка сайта', to: `/services/webDev`},
        {title: 'Разработка мобильного приложения', to: `/services/mobileDevelopment`},
        {title: 'Разработка ПО', to: `/services/webPO`},
        {title: 'Поддержка проекта', to: `/services/support`},
        {title: 'UX/UI дизайн', to: `/services/ux`},
    ]

    return (
        <NavigateMenu>
            <MenuList isOpenBurger={isOpenBurger}>
                <MenuItem className='about-sub-menu'>
                    <NavLink onClick={onClickCloseBurger} to={ROUTS.ABOUT}>
                        <span className='link__wrap'>
                            <span className='link__title'>О НАШЕЙ КОМПАНИИ
                            <span className="link__title--duplicate">О НАШЕЙ КОМПАНИИ</span>
                        </span>
                    </span>
                    </NavLink>
                    <Arrow/>
                    <SubMenu>
                        {submenuLinksAbout.map((el, index) => <MenuSubItem key={index}><Link
                            to={el.to}>{el.title}</Link></MenuSubItem>)}
                    </SubMenu>
                </MenuItem>
                <MenuItem className='about-link'><NavLink onClick={onClickCloseBurger} to={ROUTS.ABOUT}>
                    О НАШЕЙ КОМПАНИИ</NavLink></MenuItem>
                <MenuItem>
                    <NavLink onClick={onClickCloseBurger} to={ROUTS.CASES}>
                         <span className='link__wrap'>
                        <span className='link__title'>КЕЙСЫ
                        <span className="link__title--duplicate">КЕЙСЫ</span>
                        </span>
                    </span>
                    </NavLink>
                </MenuItem>
                <MenuItem className='about-sub-menu'>
                    <span className='link__wrap'>
                        <span className='link__title'>УСЛУГИ
                        <span className="link__title--duplicate">УСЛУГИ</span>
                        </span>
                    </span>
                    <Arrow/>
                    <SubMenu>
                        {submenuLinksServices.map((el, index) => <MenuSubItem key={index}><Link
                            to={el.to}>{el.title}</Link></MenuSubItem>)}
                    </SubMenu>
                </MenuItem>
                <MenuItem className='about-link'>
                    <NavLink onClick={onClickCloseBurger} to={ROUTS.SERVICE_PAGE}>Услуги</NavLink>
                </MenuItem>
                <MenuItem><NavLink onClick={onClickCloseBurger} to={ROUTS.BONUSES}>
                    <span className='link__wrap'>
                        <span className='link__title'>БОНУСЫ
                        <span className="link__title--duplicate">БОНУСЫ</span>
                        </span>
                    </span>
                </NavLink></MenuItem>
                <MenuItem onClick={onClickCloseBurger}><NavLink to={ROUTS.CONTACTS}>
                    <span className='link__wrap'>
                        <span className='link__title'>КОНТАКТЫ
                        <span className="link__title--duplicate">КОНТАКТЫ</span>
                        </span>
                    </span>
                </NavLink></MenuItem>
                <Switch theme={theme} onClick={onClick}/>
            </MenuList>
        </NavigateMenu>
    );
};

