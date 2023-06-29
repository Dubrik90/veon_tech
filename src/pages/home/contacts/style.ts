import styled from 'styled-components';
import {flexColumn} from "../../../common/style/mixin";



export const ContactsWrapper = styled.div`
  position: relative;
  padding-top: calc(50px + (80 - 50) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(30px + (80 - 30) * ((100vw - 320px) / (1920 - 320)));
`

export const ContentBlock = styled.div`
  will-change: transform;
  ${flexColumn()}
  row-gap: 20px;
  align-items: center;
`
export const Subtitle = styled.div`
  color: var(--colors-text-dark);
  font-family: Manrope, sans-serif;
  font-size: .875rem;
  font-weight: 600;
  letter-spacing: .07em;
  line-height: 1.4em;
  text-transform: uppercase;
  
  @media(max-width: 420px) {
    font-size: 12px;
  }
`

export const Title = styled.button`
  font-family: Coolvetica, sans-serif;
  font-weight: 400;
  line-height: 1.2em;
  --transition-time: .5s;
  color: var(--colors-text-dark);
  border: none;
  display: block;
  overflow: hidden;
  position: relative;
  transition: color var(--transition-time) ease-in-out;
  z-index: 2;
  font-size: calc(30px + 70 * (100vw / 1920));

  @media(max-width: 768px) {
    font-size: calc(30px + (70 + 70 * 0.7) * ((100vw - 320px) / 1600));
  }

  :before {
    background: var(--colors-bg-green);
    transform: translateX(-175%);
    height: 8px;
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    transition: transform var(--transition-time) ease-in-out;
    width: 100%;
    z-index: -1;
    @media(max-width: 768px) {
      height: 5px;
    }
  }

  :after {
    background: #6EEC4E;
    bottom: 0;
    content: "";
    height: 8px;
    left: 0;
    position: absolute;
    transition: transform var(--transition-time) ease-in-out;
    width: 100%;
    z-index: -1;
    @media(max-width: 768px) {
      height: 5px;
    }
  }

  :hover {
    color: var(--colors-bg-green);

    :before {
      background: var(--colors-bg-green);
      transform: translateX(0);
    }

    :after {
      transform: translateX(175%);
    }

  }

`

export const ContactsBlock = styled.div`
  position: relative;
  z-index: 50;
  max-width: 650px;
  margin: 0 auto;
  background: var(--colors-bg);
  overflow: hidden;
  border-radius: 43px;
  @media (max-width: 768px) {
    padding: 0 15px;
    border-radius: 0 ;
    max-width: 100%;
  }

`
export const ContactsForm = styled.form`
  position: relative;
  z-index: 50;
  padding: 32px 20px 26px 20px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 20px;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    margin-bottom: 20px
  }
  @media (max-width: 768px) {
    padding: 23px 15px;
  }
  @media (max-width: 425px) {
    padding: 18px 10px;
  }

`
export const Input = styled.input`
  border: 1px solid var(--colors-text-light);
  border-radius: 7px;
  background: var(--colors-bg);
  padding: 10px;
  color: var(--colors-text-light);
  max-width: 196px;

  ::placeholder {
    color: var(--colors-text-light);
    font-size: 14px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 10px;
  }
`


export const InputName = styled(Input)`

`
export const InputEmail = styled(Input)`
  @media (max-width: 425px) {
    display: none;
  }
`
export const Placeholder = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 163%;
  color: #747474;
  align-items: center;
  column-gap: 10px;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
`

export const InputPhone = styled(Input)`
  border: none;
  position: absolute;
  width: 100%;
  height: 65px;
  top: 50%;
  transform: translateY(-50%);

  &:focus ~ ${Placeholder} {
    display: none;
  }

`


export const Textarea = styled.textarea`
  font-family: 'Mulish';
  border: 1px solid var(--colors-text-light);
  background: var(--colors-bg);
  border-radius: 7px;
  width: 100%;
  height: 144px;
  padding: 15px 15px;

  ::placeholder {
    color: var(--colors-text-light);
  }

  color: var(--colors-text-light);
  font-size: 14px;
  @media (max-width: 888px) {
    height: 95px;
  }
`
export const SubText = styled.p`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-weight: 400;
    font-size: 13px;
    line-height: 163%;
    color: var(--colors-text-light);
    margin-top: -15px;

    a {
      font-size: 13px;
      line-height: 163%;
      color: var(--color-link);
      text-decoration: underline;
    }
  }
`

export const SubTitle = styled.p`
  display: none;
  @media (max-width: 768px) {
    position: relative;
    z-index: 50;
    display: block;
    text-align: center;
    font-weight: 800;
    font-size: 28px;
    line-height: 163%;
    padding: 10px 0;
    color: var(--colors-text-light);
    span {
      color: #5DB447;
    }

    @media (max-width: 768px) {
      font-size: 17px;
    }

  }
`
