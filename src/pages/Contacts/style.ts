import styled from "styled-components";
import {flexColumn} from "../../common/style/mixin";

export const ContactsWrapper = styled.div`
  padding-top: 140px;
  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
  
  svg {
    grid-area: 1 / 1 / 2 / 2;
    font-size: 44px;
    fill: var(--colors-text-dark);
    margin-bottom: 15px;
    
    @media (max-width: 768px) {
      margin-bottom: 0;
    }
  }
`

export const SocialContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  
  @media(max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ContactsCardWrapper = styled.div`
  ${flexColumn()};
 // padding-top: calc(50px + (132 - 50) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(30px + (60 - 30) * ((100vw - 320px) / (1920 - 320)));

  @media(max-width: 768px) {
    flex-direction: row;
  }
`
export const ContactsCardContent = styled.div`
  ${flexColumn()};
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 60px 210px 1fr;
    // grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 10px;
  }

  :not(:last-child) {
    :after {
      content: '';
      position: absolute;
      bottom: 0;
      right: -12px;
      width: 1px;
      height: 100%;
      background: #D9D9D9;

      @media (max-width: 768px) {
        width: 100%;
        height: 1px;
        bottom: -12px;
        right: 0;
      }
    }
  }
  @media (max-width: 768px) {
    :after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: -12px;
      right: 0;
      background: #D9D9D9;
  }
`

export const Title = styled.h5`
  grid-area: 1 / 2 / 2 / 3;
  font-weight: var(--fw-bold);
  font-size: calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.2;
  color: var(--colors-text-dark);
  text-align: center;
 margin-bottom: 10px;
  min-height: 50px;
  
  @media (max-width: 768px) {
    margin-bottom: 0;
    justify-self: flex-start;
    min-height: auto;
  }
`
export const Text = styled.p`
  grid-area: 2 / 1 / 3 / 4;
  font-weight: var(--fw-regularfw);
  font-size: calc(16px + (18 - 16) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.2;
  text-align: center;
  color: var(--colors-text-dark);
  margin-bottom: 40px;
  flex: 1 1 auto;

  @media (max-width: 768px) {
    text-align: left;
    margin-bottom: 0;
  }
`
export const ContactLink = styled.p`
  grid-area: 3 / 1 / 4 / 4;
  font-weight: var(--fw-bold);
  font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.4;
  text-align: center;
  color: var(--colors-text-green);
  
  @media (max-width: 768px) {
    justify-self: flex-end;
  }
`


