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
        {title: 'О НАШЕЙ КОМПАНИИ', to: ROUTS.ABOUT},
        {title: 'NDA', to: ROUTS.NDA},
        {title: 'ВАКАНСИИ', to: ROUTS.JOBS},
    ]
    const submenuLinksServices = [
        {title: 'Разработка сайтов', to: `/services/webDev`},
        {title: 'Поддержка сайтов', to: `/services/support`},
        {title: 'Разработка ПО', to: `/services/webPO`},
        {title: 'UX/UI дизайн', to: `/services/ux`},
    ]

    return (
        <NavigateMenu>
            <MenuList isOpenBurger={isOpenBurger}>
                <MenuItem>
                    <NavLink onClick={onClickCloseBurger} to={ROUTS.HOME}>
                        <span className='link__wrap'>
                        <span className='link__title'>ГЛАВНАЯ
                        <span className="link__title--duplicate">ГЛАВНАЯ</span>
                        </span>
                    </span>
                    </NavLink>
                </MenuItem>
                <MenuItem className='about-sub-menu'>
                    <span className='link__wrap'>
                        <span className='link__title'>О НАС
                        <span className="link__title--duplicate">О НАС</span>
                        </span>
                    </span>
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
                    <NavLink onClick={onClickCloseBurger} to={ROUTS.SERVICES}>Разработка сайтов</NavLink>
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

