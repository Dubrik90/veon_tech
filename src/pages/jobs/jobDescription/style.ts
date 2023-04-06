import styled from "styled-components";
import {TextRegular, TitleH4} from "../../../common/style/global";
import { flexColumn } from "../../../common/style/mixin";

export const JobDescriptionWrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 50px;
  background-color: var(--colors-bg);
  @media (max-width: 632px) {
    padding-top: 40px;
    padding-bottom: 30px;
  }
`
export const ContainerJob = styled.div`
  max-width: 1300px;
  box-sizing: content-box;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`
export const DescriptionBlock = styled.div`
  display: flex;
  column-gap: 30px;
  justify-content: space-between;
  @media (max-width: 632px) {
    flex-direction: column;
    row-gap: 20px;
  }
`
export const DescriptionContent = styled.div`
  ${flexColumn()};
  row-gap: 90px;
  flex: 0 1 730px;
  @media (max-width: 632px) {
    row-gap: 30px;
  }
`
export const BarLinks = styled.div`
  ${flexColumn()};
  row-gap: 3px;
  width: 270px;
  
  @media (max-width: 632px) {
    display: none;
  }

  a {
    display: flex;
    background: var(--color-grey-light);
    font-size: 14px;
    line-height: 163%;
    padding: 7px 24px;
    color: var(--color-dark);
    transition: all 0.3s;

    :nth-child(2) {
      background-color: var(--colors-text-green);
      color: var(--colors-text-wight);
    }

    :hover {
      background-color: var(--colors-text-green);
      color: var(--colors-text-wight);
    }
  }

`
export const BarLinksMobile = styled(BarLinks)`
  display: none;
  @media (max-width: 632px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    gap: 20px;
    @media (max-width: 366px) {
      gap: 10px;
    }
    a {
      padding: 5px 15px;
      @media (max-width: 425px) {
        font-size: 12px;
      }
      @media (max-width: 366px) {
        padding: 5px 8px;
      }
    }
  }
`

export const DescriptionBar = styled.div`
  ${flexColumn()};
  row-gap: 60px;
  max-width: 270px;
  @media (max-width: 632px) {
    max-width: 100%;
    row-gap: 30px;
  }
`
export const AboutBlock = styled.div`
  ${flexColumn()};
  row-gap: 30px;
`

export const About = styled.p`
  font-size: 14px;
  line-height: 163%;
  text-align: justify;
  color: var(--colors-text-dark);
  @media (max-width: 425px) {
    font-size: 13px;
  }
`
export const AboutQuality = styled.div`
  ${flexColumn()};
  row-gap: 15px;
`
export const SubTitle = styled(TextRegular)`
  
  @media (max-width: 1030px) {
    font-size: 18px;
  }
  @media (max-width: 960px) {
    font-size: 16px;
    max-width: 320px;
  }
  @media (max-width: 632px) {
    text-align: center;
    max-width: 250px;
    font-size: 14px;
    align-self: center;
  }
`
export const Title = styled.h3`
  font-weight: var(--fw-bold);
  font-size: 28px;
  line-height: 163%;
  color: var(--colors-text-dark);
  
  @media (max-width: 1030px) {
    font-size: 25px;
  }
  @media (max-width: 960px) {
    font-size: 20px;
  }
  @media (max-width: 836px) {
    font-size: 18px;
  }
  @media (max-width: 800px) {
    max-width: 320px;
  }
  @media (max-width: 632px) {
    max-width: 100%;
  }
  @media (max-width: 425px) {
    font-size: 15px;
  }
`
export const CardsBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 160px);
  justify-content: space-between;
  column-gap: 10px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 15px;
  }
  @media (max-width: 988px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 15px;
  }
`
export const Card = styled.div`
  flex: 0 0 165px;
  font-size: 14px;
  line-height: 172%;
  color: var(--colors-text-dark);
  position: relative;
  padding-left: 15px;
  @media (max-width: 425px) {
    font-size: 13px;
  }

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: var(--colors-text-green);
  }
`

export const EchoBlock = styled.div`
  ${flexColumn()};
  row-gap: 12px;
  padding: 15px 24px;
  background: var(--color-grey-light);
`
export const EchoTitle = styled(TitleH4)`
`
export const EchoText = styled.h4`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  font-size: 13px;
  line-height: 175%;
  text-align: justify;
  color: var(--color-grey);
  
  @media (max-width: 366px) {
    line-height: 140%;
    row-gap: 10px;
  }

  a {
    text-decoration: underline;
    transition: color 0.3s;

    :hover {
      color: var(--colors-text-green);
    }
  }
`

export const EchoTextBlock = styled.h4`
  display: flex;
  column-gap: 10px;
  font-size: 13px;
  line-height: 155%;
  text-align: justify;
  color: var(--color-grey);

  svg {
    max-width: 35px;
    transition: fill 0.3s;
    cursor: pointer;

    :hover {
      fill: var(--colors-text-green);
    }
  }


`












