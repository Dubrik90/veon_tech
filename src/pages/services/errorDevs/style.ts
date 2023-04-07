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
export const Title = styled(TitleH3)`
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 25px;
  }
  @media (max-width: 620px) {
    font-size: 18px;
  }
`
export const ErrorDevsContent = styled.div`
  display: grid;
  grid-template-columns: 330px 1fr;
  column-gap: 50px;

  @media (max-width: 1024px) {
    column-gap: 30px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 270px 1fr;
  }
  @media (max-width: 620px) {
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
  font-size: 14px;
  line-height: 1.3;
  padding: 5px 10px 5px 35px;
  color: var(--color-dark);
  transition: all 0.3s;
  counter-increment: section;
  position: relative;

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
    left: 5px;
    font-size: 20px;
    line-height: 1.3;
    text-transform: lowercase;
    color: var(--color-dark);
    transition: all 0.3s;
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
  @media (max-width: 1024px) {
    margin-bottom: 20px;
    font-size: 18px;
  }
`
export const Text = styled(TextRegular)`
  max-width: 1000px;
  margin-bottom: 20px;
  
  @media (max-width: 1024px) {
    margin-bottom: 15px;
    font-size: 14px;
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
  font-size: 20px;
  color: var(--colors-text-dark);
  position: relative;
  padding-left: 25px;

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  :before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 5px;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: var(--colors-text-green);
    color: var(--color-dark);
  }
`
