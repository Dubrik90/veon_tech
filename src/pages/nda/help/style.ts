import styled from "styled-components";
import {TextRegular, TitleH2} from "../../../common/style/global";
import {flexColumn} from "../../../common/style/mixin";

export const HelpWrapper = styled.div`
    padding: 67px 0;
  @media (max-width: 1210px) {
    padding: 30px 0;
  }

`
export const HelpContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 43px;
  border: 1px solid #6EEC4E;
  border-radius: 19px;
  
  @media (max-width: 1210px) {
    padding: 0 10px;
    border: none;
    display: grid;
    grid-template-columns: 60% 40%;
    justify-content: flex-start;
    row-gap: 30px;
    column-gap: 15px;
  }
  @media (max-width: 660px) {
    grid-template-columns: 50% 50%;
    column-gap: 10px;
  }
  

`
export const TitleBlock = styled.div`
  ${flexColumn()};
  row-gap: 15px;
  flex: 0 1 580px;

`
export const Title = styled(TitleH2)`
  color: var(--colors-text-dark);

  @media (max-width: 1210px) {
    font-size: 30px;
  }
  @media (max-width: 834px) {
    font-size: 18px;
  }
  @media (max-width: 425px) {
    font-size: 14px;
  }
`
export const Text = styled(TextRegular)`
  
  @media (max-width: 1210px) {
    font-size: 16px;
  }
  @media (max-width: 834px) {
    font-size: 14px;
  }
  @media (max-width: 425px) {
    font-size: 12px;
  }
`
export const ButtonBlock = styled.div`
  ${flexColumn()};
  align-items: center;
  row-gap: 10px;
`
export const ImageWrapper = styled.div`
  @media (max-width: 425px) {
    max-width: 130px;
  }

`
export const Img = styled.img`
    width: 100%;
  object-fit: cover;

`
export const Button = styled.button`
  position: relative;
  font-size: 16px;
  


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

  background: var(--colors-bg-green);
  font-weight: var(--fw-extra-bold);
  line-height: 20px;
  color: var(--colors-text-wight);
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  font-family: var(--family);
  text-transform: uppercase;

  @media (max-width: 834px) {
    font-size: 12px;
    padding: 10px;
  }
  @media (max-width: 425px) {
    font-size: 11px;
    padding: 5px;
  }

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

`
export const ContactBlock = styled.div`
  ${flexColumn()};
  align-items: center;
  row-gap: 15px;
  
  @media (max-width: 1210px) {
   align-items: flex-start;
    row-gap: 5px;
  }
`
export const PhoneLink = styled.a`
  font-weight: var(--fw-medium);
  font-size: 18px;
  line-height: 122%;
  color: var(--colors-text-dark);
  display: inline-block;
  position: relative;
  overflow: hidden;
  padding-bottom: 5px;
  --transition-time: .5s;
  
  :after{
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--colors-bg-green);
    opacity: 0;
    visibility: hidden;
    transition: transform var(--transition-time) ease-in-out;
    transform: translateX(-175%);
  }
  
  
  &:hover {
    :after{
      left: 0;
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
    }
   
  }
  
  @media (max-width: 834px) {
    font-size: 14px;
  }

`
export const Email = styled.p`
  font-weight: var(--fw-medium);
  font-size: 18px;
  line-height: 122%;
  color: var(--colors-text-dark);
  
  @media (max-width: 834px) {
    font-size: 14px;
  }
`
