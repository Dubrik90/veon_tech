import styled from "styled-components";
import {flexColumn} from "../../../common/style/mixin";

export const BonusesCardWrapper = styled.li`
  background: var(--colors-bg);
  box-shadow: 2px 4px 20px 2px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
  padding-top: calc(80px + (150 - 80) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(30px + (40 - 30) * ((100vw - 768px) / (1920 - 768)));
  padding-left: calc(20px + (50 - 20) * ((100vw - 768px) / (1920 - 768)));
  padding-right: calc(20px + (50 - 20) * ((100vw - 768px) / (1920 - 768)));
  position: relative;
  ${flexColumn()};
  z-index: 10;
  max-width: 458px;
  flex: 1 1 auto;
  min-height: 388px;
  

  @media (min-width: 769px) {
    width: calc(33% - 10px);
  }

  span {
    content: '';
    position: absolute;
    top: -22px;
    left: 0;
    transform: translateX(-50%);
    font-size: 32px;
    line-height: 1.3;
    text-transform: lowercase;
    color: var(--colors-text-dark);
    transition: all 0.3s;
    
    @media (max-width: 425px) {
      top: -16px;
    //  left: 33px;
    //  transform: translateX(0);
      font-size: 20px;
    }
  }
  
  :after {
    background: var(--colors-bg-green);
    content: '';
    position: absolute;
    top: -32px;
    left: 0;
    transform: translateX(-50%);
    width: 65px;
    height: 65px;
    border: 2px solid #5DB447;
    border-radius: 100%;
    z-index: -1;
    
    @media (max-width: 425px) {
      top: -23px;
    //  left: 15px;
   //   transform: translateX(0);
      width: 40px;
      height: 40px;
    }
  }
  
  
`
export const ImgBlock = styled.div`
  background: var(--colors-bg-grey-card-bonuse);
  position: absolute;
  top: -32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  
  @media (max-width: 425px) {
    max-width: 50px;
    top: -20px;
  }

  :after {
    background: var(--colors-bg-grey-card-bonuse);
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 110px;
    height: 110px;
    border: 2px solid #5DB447;
    border-radius: 100%;
    z-index: -1;
    
    @media (max-width: 425px) {
      width: 90px;
      height: 90px;
      
    }
  }

`
export const Img = styled.img`
  max-width: 100%;
`
export const Title = styled.h5`
  font-weight: var(--fw-bold);
  font-size: calc(16px + (32 - 16) * ((100vw - 320px) / (1920 - 320)));
  line-height: 129.5%;
  text-align: center;
  color: var(--colors-text-dark);
`
export const SubTitle = styled.p`
  font-weight: var(--fw-bold);
  font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1920 - 320)));
  line-height: 129.5%;
  text-align: center;
  color: var(--colors-text-dark);
  margin-bottom: calc(20px + (70 - 20) * ((100vw - 320px) / (1920 - 320)));
`
export const Text = styled.p`
  font-size: calc(14px + (17 - 14) * ((100vw - 320px) / (1920 - 320)));
  line-height: 178.5%;
  text-align: center;
  letter-spacing: 0.005em;
  color: var(--colors-text-dark);
  margin-bottom: calc(20px + (30 - 20) * ((100vw - 320px) / (1920 - 320)));
`
export const SubText = styled.p`
  flex: 1 1 auto;
  font-size: 12px;
  line-height: 129.5%;
  text-align: center;
  color: var(--colors-text-dark);
  margin-bottom: calc(20px + (50 - 20) * ((100vw - 320px) / (1920 - 320)));
`
export const Button = styled.button`
  position: relative;
  align-self: center;
  font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));
  background: var(--colors-bg-green);
  font-weight: var(--fw-extra-bold);
  line-height: 1.2;
  color: var(--colors-text-wight);
  padding: 15px 50px;
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  font-family: 'Coolvetica';
  letter-spacing: 1.1px;
  text-transform: uppercase;
  z-index: 10;

  @media(max-width: 1024px) {
    align-self: stretch;
  }
  

  //@media (max-width: 980px) {
  //  align-self: stretch;
  //}

  :before {
    background-color: var(--colors-bg-green);
    border: 2px solid var(--colors-bg-green);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: background-color .3s ease-in-out, border-color .3s ease-in-out, transform .3s ease-in-out;
    width: 100%;
    z-index: -1;
  }

  @media (min-width: 769px) {
    :hover {
      background: var(--colors-text-wight);
      color: black;
      transition: all 0.3s;

      :before {
        transition: all 0.3s;
        background-color: var(--colors-text-wight);
        transform: scale(1.1);
      }
    }
  }
`




