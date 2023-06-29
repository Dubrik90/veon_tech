import styled from "styled-components";
import Tail from '../assets/tail-yellow.svg'
import Quotes from '../assets/quotes.svg'

export const ProgressWrapper = styled.div`
  padding-top: calc(40px + (120 - 40) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(40px + (90 - 40) * ((100vw - 320px) / (1920 - 320)));
  background-color: var(--colors-bg-green-dark);
`

export const Title = styled.h3`
  font-weight: 600;
  font-size: calc(30px + (76 - 30) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.3;
  letter-spacing: -.02em;
  color: var(--colors-text-dark);
  margin-bottom: 50px;

  @media (min-width: 1200px) {
   // font-size: 42px;
   // line-height: 52px;
    margin-bottom: 70px;
  }
`
export const ProgressContentTop = styled.div`
  margin-bottom: 50px;

  @media (min-width: 768px) {
    margin-bottom: 90px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 174px;
  }
`
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -10px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin: -20px;
  }
`
export const Li = styled.li`
  width: 100%;
  display: flex;
  flex: 0 0 auto;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  letter-spacing: -.02em;
  color: var(--color-dark);
  position: relative;

  @media (max-width: 1199px) {
    // border-bottom: 2px solid #5DB447;
  }

  :not(:last-child) {
    :after {
      content: '';
      position: absolute;
      top: 0;
      right: 10px;
      height: 100%;
      width: 2px;
      background-color: #5DB447;
      @media (max-width: 1199px) {
        top: 100%;
        left: 0;
        width: 310px;
        height: 2px;
      }
    }
  }
  
  @media (max-width: 1199px) {
    :after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 310px;
      height: 2px;
      background-color: #5DB447;
    }
  }


  @media (min-width: 768px) {
    width: 50%;
    padding: 20px;
  }

  @media (min-width: 1200px) {
    width: 25%;
  }
`
export const SubTitle = styled.span`
  font-size: 76px;
  line-height: 78px;
  font-weight: 700;
  color: var(--colors-text-dark);
  
  //span   {
  //  font-size: 30px;
  //}
`
export const Text = styled.p`
  font-size: 18px;
  line-height: 25px;
  font-weight: 400;
  max-width: 320px;
  color: var(--colors-text-dark);


  @media (min-width: 1200px) {
    font-size: 20px;
    line-height: 30px

  }
`
export const ProgressContentBottom = styled.div`
  background-color: var(--color-dg-footer);
  position: relative;
  padding: 25px 16px 20px;
  border-radius: 14px;

  @media (min-width: 768px) {
    border-radius: 0;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }

  :before {
    content: "";
    position: absolute;
    bottom: -15px;
    right: 1%;
    width: 30px;
    height: 30px;
    background: url(${Tail}) no-repeat center/contain;

    @media (min-width: 768px) {
      display: none;
    }
  }

  :after {
    content: "";
    position: absolute;
    top: -10%;
    left: 4%;
    width: 40px;
    height: 25px;
    background: url(${Quotes}) no-repeat center/contain;

    @media (min-width: 768px) {
      display: none;
    }
  }
`
export const ImgBlock = styled.div`
  display: none;
  svg {
    path {
      fill: var(--colors-text-dark);
    }
  }

  @media (min-width: 768px) {
    display: block
  }
`
export const ContentText = styled.h3`
  width: 100%;
  font-weight: 600;
  font-size: 5vw;
  line-height: 1.1;
  letter-spacing: -.02em;
  color: var(--colors-text-dark);
  
  span {
    color: var(--colors-text-green);
  }
  

  @media (max-width: 767px) {
    color: var(--color-withe);
  }

  @media (min-width: 1200px) {
    font-weight: 700;
    width: 80%;
  }

  @media (min-width: 1400px) {
    font-size: 4vw;
  }

  @media (min-width: 1900px) {
    font-size: 3vw;
  }
 
`




