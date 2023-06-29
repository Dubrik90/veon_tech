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
  column-gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 40px 43px;
  border: 1px solid #6EEC4E;
  border-radius: 19px;
  
  @media (max-width: 1364px) {
    padding: 0 10px;
    border: none;
    display: grid;
    grid-template-columns: 60% 40%;
    justify-content: flex-start;
    row-gap: 50px;
    column-gap: 15px;
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 10px;
    justify-items: flex-start;
  }
  

`
export const TitleBlock = styled.div`
  ${flexColumn()};
  row-gap: 15px;
  flex: 0 1 650px;

`
export const Title = styled(TitleH2)`
  color: var(--colors-text-dark);
  font-size: 50px;
  @media (max-width: 1210px) {
    font-size: calc(30px + (50 - 30) * ((100vw - 320px) / (1920 - 320)));
  }
`
export const Text = styled(TextRegular)`
  font-size: 28px;
  @media (max-width: 1210px) {
    font-size: calc(18px + (28 - 18) * ((100vw - 320px) / (1920 - 320)));
  }
`
export const ButtonBlock = styled.div`
  ${flexColumn()};
  align-items: center;
  row-gap: 10px;
`
export const ImageWrapper = styled.div`
`
export const Img = styled.img`
  object-fit: cover;
`
export const Button = styled.button`
  position: relative;
  font-size: 16px;
  background: var(--colors-bg-green);
  font-weight: var(--fw-extra-bold);
  line-height: 20px;
  color: var(--colors-text-wight);
  padding: 15px 25px;
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  font-family: var(--family);
  text-transform: uppercase;
  border-radius: 5px;

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
    border-radius: 5px;
  }

 

  @media (max-width: 834px) {
    font-size: 14px;
    padding: 10px;
  }
  @media (max-width: 425px) {
    width: 100%;
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
  
  @media (max-width: 1364px) {
   align-items: flex-start;
    row-gap: 5px;
  }
  
`
export const PhoneLink = styled.a`
  font-weight: var(--fw-medium);
  font-size: 24px;
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
    bottom: 0;
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
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`
export const Email = styled.p`
  font-weight: var(--fw-medium);
  font-size: 20px;
  line-height: 122%;
  color: var(--colors-text-dark);

  @media (max-width: 768px) {
    font-size: 16px;
  }
`
