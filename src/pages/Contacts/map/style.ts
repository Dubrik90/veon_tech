import styled from "styled-components";

import { Map } from 'react-yandex-maps';

export const StyledMap = styled(Map)`
  width: calc(460px + (670 - 460) * ((100vw - 1024px) / (1920 - 1024)));
  height: calc(300px + (390 - 300) * ((100vw - 320px) / (1920 - 320)));
 //border-radius: 17px;
  
  @media(max-width: 1024px) {
    width: 100%;
  }
`;

export const MapComponentWrapper = styled.div`
  background: var(--colors-bg-green-dark);
  padding-top: calc(30px + (50 - 30) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(30px + (50 - 30) * ((100vw - 320px) / (1920 - 320)));
`
export const MapWrapperBlock = styled.div`
  display: flex;
  column-gap: calc(30px + (170 - 30) * ((100vw - 320px) / (1920 - 320)));
  justify-content: center;

  @media(max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
    justify-content: center;
  }
  
  
`
export const CardWrapper = styled.div`
  
  @media(max-width: 1024px) {
    width: 100%;
    text-align: center;
  }
`
export const MapWrapper = styled.div`
 border-radius: 17px;
  overflow: hidden;
  
  @media(max-width: 1024px) {
    width: 100%;
  }
`
export const FormBlock = styled.div`
  @media(max-width: 1024px) {
    text-align: center;
  }
`


export const Title = styled.h3`
  font-weight: var(--fw-bold);
  font-size: calc(16px + (23 - 16) * ((100vw - 320px) / (1920 - 320)));
  line-height: 163%;
  color: var(--colors-text-dark);
  margin-bottom: 15px;

  span {
    color: var(--colors-text-green);
  }
  
  
`

export const SubTitle = styled.p`
  font-weight: var(--fw-medium);
  font-size: calc(10px + (13 - 10) * ((100vw - 320px) / (1920 - 320)));
  line-height: 163%;
  color: var(--colors-text-dark);
  margin-bottom: 10px;
`
export const FormWrapper = styled.form`
  max-width: 490px;
  background: var(--colors-bg);
  box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
  
  padding-top: calc(20px + (42 - 20) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(20px + (42 - 20) * ((100vw - 320px) / (1920 - 320)));
  padding-right: calc(15px + (37 - 15) * ((100vw - 320px) / (1920 - 320)));
  padding-left: calc(15px + (37 - 15) * ((100vw - 320px) / (1920 - 320)));

  @media(max-width: 480px) {
    margin: 0 -15px;
    border-radius: 0;
  }

`
export const InputBlock = styled.div`
  .react-tel-input .form-control {
    width: 100%;
    background-color: var(--colors-bg);
    color: var(--colors-text-dark);
  }
  
`

export const Placeholder = styled.span`
  position: absolute;
  padding: 12px;
  height: 38px;
  display: inline-block;
  transform: translateY(0px);
  pointer-events: none;
  top: 1px;
  left: 1px;
  transition: all 0.3s;
  font-size: 14px;
  line-height: 129.5%;
  color: #9B9B9B;
`
export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  margin-bottom: 16px;

  .form-control {
    width: 100% !important;
  }
`
export const CustomInput = styled.input`
  width: 100%;
  height: 38px;
  padding: 10px;
  background-color: var(--colors-bg);
  border: 1px solid #A6A6A6;
  border-radius: 5px;
  font-size: 14px;
  color: var(--colors-text-dark);
  
  ::placeholder {
    color: var(--colors-text-dark);
  }

  &:focus {
    color: var(--colors-text-dark);
    outline: none;
  }

  &:focus ~ ${Placeholder} {
    transform: translateY(-14px);
    font-size: 12px;
    line-height: 16px;
    
  }
`
export const CustomTextArea = styled.textarea`
  width: 100%;
  height: 98px;
  padding: 10px;
  color: var(--colors-text-dark);
  background-color: var(--colors-bg);
  border: 1px solid #A6A6A6;
  border-radius: 5px;
  font-size: 14px;
  
  ::placeholder {
    color: var(--colors-text-dark);
  }
`

export const Errors = styled.div`
  position: absolute;
  color: red;
  bottom: -14px;
  z-index: 90000;
  font-size: 14px;
`
export const SubText = styled.p`
  font-weight: var(--fw-medium);
  font-size: 11px;
  line-height: 1.4;
  letter-spacing: 0.1px;
  color: var(--colors-text-dark);
  text-align: left;
  margin-bottom: 18px;
  
  a {
    color: var(--color-link);
    :hover {
      color: var(--color-dark);
    }
  }
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
  
  @media(max-width: 480px) {
   width: 100%;
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

