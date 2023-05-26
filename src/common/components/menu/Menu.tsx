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
        {title: 'JOBS', to: ROUTS.JOBS},
    ]
    const submenuLinksServices = [
        {title: 'WEBSITE DEVELOPMENT', to: `/services/webDev`},
        {title: 'WEBSITE SUPPORT', to: `/services/support`},
        {title: 'SOFTWARE DEVELOPMENT', to: `/services/webPO`},
        {title: 'UX/UI DESIGN', to: `/services/ux`},
    ]

    return (
        <NavigateMenu>
            <MenuList isOpenBurger={isOpenBurger}>
                <MenuItem className='about-sub-menu'>
                    <NavLink onClick={onClickCloseBurger} to={ROUTS.ABOUT}>
                        <span className='link__wrap'>
                            <span className='link__title'>ABOUT OUR COMPANY
                            <span className="link__title--duplicate">ABOUT OUR COMPANY</span>
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
                    ABOUT OUR COMPANY</NavLink></MenuItem>
                <MenuItem>
                    <NavLink onClick={onClickCloseBurger} to={ROUTS.CASES}>
                         <span className='link__wrap'>
                        <span className='link__title'>CASES
                        <span className="link__title--duplicate">CASES</span>
                        </span>
                    </span>
                    </NavLink>
                </MenuItem>
                <MenuItem className='about-sub-menu'>
                    <span className='link__wrap'>
                        <span className='link__title'>SERVICES
                        <span className="link__title--duplicate">SERVICES</span>
                        </span>
                    </span>
                    <Arrow/>
                    <SubMenu>
                        {submenuLinksServices.map((el, index) => <MenuSubItem key={index}><Link
                            to={el.to}>{el.title}</Link></MenuSubItem>)}
                    </SubMenu>
                </MenuItem>
                <MenuItem className='about-link'>
                    <NavLink onClick={onClickCloseBurger} to={ROUTS.SERVICE_PAGE}>SERVICES</NavLink>
                </MenuItem>
                <MenuItem><NavLink onClick={onClickCloseBurger} to={ROUTS.BONUSES}>
                    <span className='link__wrap'>
                        <span className='link__title'>BONUSES
                        <span className="link__title--duplicate">BONUSES</span>
                        </span>
                    </span>
                </NavLink></MenuItem>
                <MenuItem onClick={onClickCloseBurger}><NavLink to={ROUTS.CONTACTS}>
                    <span className='link__wrap'>
                        <span className='link__title'>CONTACTS
                        <span className="link__title--duplicate">CONTACTS </span>
                        </span>
                    </span>
                </NavLink></MenuItem>
                <Switch theme={theme} onClick={onClick}/>
            </MenuList>
        </NavigateMenu>
    );
};

