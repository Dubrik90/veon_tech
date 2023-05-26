import styled from "styled-components";
import {Link} from "react-router-dom";
import {flexColumn} from "../../../common/style/mixin";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const ContactUsServiseWrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 90px;
  
`
export const ContactUsBlokTop = styled.div`
  background-color: #5DB447;
  border-radius: 5px;
  position: relative;
  border-bottom: 1px solid black;
  margin-bottom: 30px;

  :before {
    position: absolute;
    content: '';
    background-color: #5DB447;
    width: 30px;
    height: 32px;
    display: block;
    bottom: -6px;
    left: 20%;
    border-radius: 4px;
    -webkit-transform: skewY(35deg);
    -ms-transform: skewY(35deg);
    transform: skewY(35deg);
    border-top: 0;
  }


`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 30px;
  position: relative;
  width: 100%;
  padding: 50px calc(15px + (30 - 15) * ((100vw - 320px) / (1920 - 320)));;
  
  @media (max-width: 767px) {
    flex-direction: column;
    row-gap: 40px;
  }

  :before {
    position: absolute;
    content: '';
    background-color: #5DB447;
    top: -6px;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    -webkit-transform: skewY(1.5deg);
    -ms-transform: skewY(1.5deg);
    transform: skewY(1.5deg);
    border-radius: 6px;
    transform-origin: right top;
  }

  :after {
    position: absolute;
    content: '';
    background-color: rgba(0, 0, 0, .2);
    width: 90%;
    height: 30%;
    display: block;
    border-radius: 4px;
    -webkit-transform: skewY(-2deg);
    -ms-transform: skewY(-2deg);
    transform: skewY(-2deg);
    right: 5%;
    top: -20px;
    z-index: -1;
  }
`
export const Title = styled.h4`
  z-index: 10;
  font-size: calc(21px + (36 - 21) * ((100vw - 320px) / (1920 - 320)));
  color: var(--colors-text-dark);
  line-height: 1.4;
`
export const LinksBlock = styled.div`
  z-index: 10;
  color: var(--colors-text-dark);
  ${flexColumn()};
  row-gap: 20px;
  flex: 0 0 280px;
  
  @media (max-width: 767px) {
    flex: 0 0 auto;
  }
`
export const LinkUs = styled(Link)`
 // border: 0;
  text-align: center;
  color: var(--colors-text-dark);
  background: 0 0;
  position: relative;
  margin-left: 5px;
  margin-right: 5px;
  text-shadow: none;
  padding: 8px 22px;
  line-height: 1.6;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: calc(19px + (20 - 19) * ((100vw - 320px) / (1920 - 320)));
  font-weight: var(--fw-medium);
  border-style: solid;
  border-radius: 3px;
  border-color: #fff;
  -webkit-transition: all .3s;
  transition: all .3s;
  font-family: 'Montserrat';
  
  :hover {
    :after {
      border-color: #393939;
    }
  }
  
  :after {
    content: '';
    border: 2px solid #fff;
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transform: skewX(-8deg);
    transform: skewX(-8deg);
    transition: all .3s;
  }
`

export const Button = styled.button`
  color: var(--colors-text-dark);
  background: 0 0;
  position: relative;
  z-index: 0;
  text-shadow: none;
  padding: 8px 22px;
  line-height: 1.6;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: calc(19px + (20 - 19) * ((100vw - 320px) / (1920 - 320)));
  font-weight: var(--fw-medium);
  font-family: 'Montserrat';
  border-style: solid;
  border-radius: 3px;
  -webkit-transition: background-color .3s;
  transition: background-color .3s, color 0.3s;

  :before {
    content: '';
    border-radius: 4px;
    position: absolute;
    background-color: var(--colors-bg);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transform: skewX(-8deg);
    transform: skewX(-8deg);
    -webkit-transition: background-color .3s;
    transition: background-color .3s;
    z-index: -1;
  }
  :hover {
    color: #dbe8d3;
    :before {
      background-color: #393939;
    }
  }
  
`
export const LineBlock = styled.div`
  padding: 50px 0;
  // position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 30px;

  span {
    display: flex;
    width: 100%;
    height: 1px;
    background-color: rgb(216, 216, 216);
  }
`
export const HeardIcon = styled(FavoriteBorderIcon)`  
  path {
    fill: var(--colors-text-green);
  }
`
export const TitleBottom = styled.h3`
  text-align: center;
  margin-bottom: 30px;
  font-size: calc(21px + (36 - 21) * ((100vw - 320px) / (1920 - 320)));
  color: var(--colors-text-dark);
  line-height: 1.4;
  position: relative;
  padding-bottom: 20px;
  
  :after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: var(--colors-text-green);
  }

`
export const LinksBottomBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 30px;

  @media (max-width: 767px) {
   flex-direction: column;
  row-gap: 20px;
  }
  
  
  
`
export const ButtonBottom = styled(Button)`
  text-transform: uppercase;
  @media (max-width: 767px) {
    flex: 1 1 auto;
    width: 100%;
  }
  
  flex: 0 0 300px;
  
  :before {
    background-color: var(--colors-bg-green);
  }
`