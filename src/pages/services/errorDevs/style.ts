import styled from "styled-components";
import {TextRegular, TitleH3} from "../../../common/style/global";
import {flexColumn} from "../../../common/style/mixin";

export const ErrorDevsWrapper = styled.div`
  padding: 72px 0 60px 0;
  background-color: rgba(110, 236, 78, 0.15);

  @media (max-width: 768px) {
    padding: 40px 0 40px 0;
  }
`
export const Title = styled.h3`
 // text-align: center;
  font-weight: var(--fw-bold);
  font-size: calc(30px + (56 - 30) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.4;
  color: var(--colors-text-dark);
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`
export const ErrorDevsContent = styled.div`
  display: grid;
  grid-template-columns: 450px 1fr;
  column-gap: 50px;

  @media (max-width: 1024px) {
    column-gap: 30px;
    grid-template-columns: 330px 1fr;
  }
  @media (max-width: 768px) {
   // grid-template-columns: 270px 1fr;
  }
  @media (max-width: 768px) {
    ${flexColumn()};
    row-gap: 20px;
  }
  
`
export const Ul = styled.ul`
  ${flexColumn()};
  row-gap: 3px;
`
export const Li = styled.li`
  cursor: pointer;
  min-height: 55px;
  display: flex;
  align-items: center;
  background: var(--color-grey-light);
  font-size: 21px;
  line-height: 1.3;
  padding: 5px 10px 5px 65px;
  color: var(--color-dark);
  transition: all 0.3s;
  counter-increment: section;
  position: relative;
  border-radius: 5px;

  @media (max-width: 1024px) {
    font-size: 16px;
    padding: 5px 10px 5px 55px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 620px) {
    min-height: 45px;
  }

  :hover {
    background-color: var(--colors-text-green);
    color: var(--colors-text-wight);
  }

  :before {
    content: counter(section, decimal-leading-zero);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 22px;
    font-size: 22px;
    line-height: 1.3;
    text-transform: lowercase;
    color: var(--color-dark);
    transition: all 0.3s;
    font-weight: var(--fw-medium);

    @media (max-width: 1024px) {
      font-size: 18px;
      left: 18px;
    }
  }

  &.active {
    background-color: var(--colors-text-green);
    color: var(--colors-text-wight);

    :before {
      color: var(--colors-text-wight);
    }

  }
`
export const ErrorContent = styled.div`
  ${flexColumn()}
`

export const TitleError = styled(TitleH3)`
  margin-bottom: 30px;
  font-size: 30px;
  @media (max-width: 1024px) {
    margin-bottom: 20px;
    font-size: 21px;
  }
`
export const Text = styled(TextRegular)`
  max-width: 1000px;
  margin-bottom: 20px;
  font-size: 21px;
  
  @media (max-width: 1024px) {
    margin-bottom: 15px;
    font-size: 18px;
  }
`
export const UlError = styled.ul`
  ${flexColumn()};
  row-gap: 7px;
  
  @media (max-width: 1024px) {
    row-gap: 5px;
  }

`
export const LiError = styled.li`
  font-size: 21px;
  color: var(--colors-text-dark);
  position: relative;
 // padding-left: 5px;
  display: flex;
  align-items: center;
  column-gap: 10px;
  
  span {
    font-size: 20px;
    line-height: 1.4;
    @media (max-width: 1024px) {
      font-size: 18px;
    }
  }
  
  img {
    max-width: 28px;
  }

  

  //:before {
  //  content: '';
  //  position: absolute;
  //  top: 50%;
  //  transform: translateY(-50%);
  //  left: 5px;
  //  width: 10px;
  //  height: 10px;
  //  border-radius: 100%;
  //  background-color: var(--colors-text-green);
  //  color: var(--color-dark);
  //}
`
