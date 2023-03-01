import React, {FC} from 'react';
import {DiamondWrapper} from "../header/style";
import {NavLink} from "react-router-dom";
import {ROUTS} from "../../constans/routs";
import {Arrow} from "../header/assets";
import Diamond from "../header/assets/diamond.png";
import {MenuItem, MenuList, MenuSubItem, NavigateMenu, SubMenu} from "./style";
import {ThemeType} from "../../types/types";
import { Switch } from '../switch';


type MenuProps = {
    isOpenBurger: boolean,
    theme: ThemeType,
    onClick: () => void

}
export const Menu: FC<MenuProps> = ({isOpenBurger, theme, onClick}) => {
    return (
        <NavigateMenu>
            <MenuList isOpenBurger={isOpenBurger}>
                <MenuItem>
                    <NavLink to={ROUTS.HOME}>ГЛАВНАЯ</NavLink>
                </MenuItem>
                <MenuItem>О НАС
                    <Arrow/>
                    <SubMenu>
                        <MenuSubItem><a href="#">О НАШЕЙ КОМПАНИИ</a></MenuSubItem>
                        <MenuSubItem><a href="#">NDA</a></MenuSubItem>
                        <MenuSubItem><a href="#">ВАКАНСИИ</a></MenuSubItem>
                    </SubMenu>
                </MenuItem>
                <MenuItem>
                    <NavLink to={ROUTS.WORK_IN_VEON}>КЕЙСЫ</NavLink>
                </MenuItem>
                <MenuItem>УСЛУГИ
                    <Arrow/>
                    <SubMenu>
                        <MenuSubItem><a href="#">Разработка сайтов</a></MenuSubItem>
                        <MenuSubItem><a href="#">Поддержка сайтов</a></MenuSubItem>
                        <MenuSubItem><a href="#">Разработка ПО</a></MenuSubItem>
                        <MenuSubItem><a href="#">UX/UI дизайн</a></MenuSubItem>
                    </SubMenu>
                </MenuItem>
                <MenuItem>БОНУСЫ
                    {theme === 'light' && <DiamondWrapper><img src={Diamond} alt="Logo"/></DiamondWrapper>}
                </MenuItem>
                <MenuItem><a href="#">КОНТАКТЫ</a></MenuItem>
               <Switch theme={theme} onClick={onClick}/> 
            </MenuList>
            
        </NavigateMenu>
    );
};

