import styled from 'styled-components';
import {fontSize} from "../../../common/style/mixin";

export const HeaderMainWrapper = styled.div`

`
export const HeaderMainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 200px 0 220px 50px;
  @media (max-width: 768px) {
    padding: 130px 0 66px 0;
  }

`
export const Title = styled.h1`
  order: 1;
  font-weight: var(--fw-black);
  //font-size: 58px;
  line-height: 73px;
  color: var(--colors-text-green);
  margin-bottom: 87px;
  ${fontSize(58)}

  span {
    color: var(--colors-text-dark);
  }
  @media (max-width: 1048px) {
    font-size: 52px;
  }


  @media (max-width: 768px) {
    order: 2;
    text-indent: 224px;
    ${fontSize(84)}
    line-height: 1.2;
    letter-spacing: 3.1px;
  }
  @media (max-width: 690px) {
    font-size: 66px;
  }
  @media (max-width: 640px) {
    font-size: 61px;
    text-indent: 182px;
  }
  @media (max-width: 570px) {
    font-size: 54px;
    text-indent: 158px;
  }
  @media (max-width: 510px) {
    font-size: 47px;
    text-indent: 137px
  };
  @media (max-width: 450px) {
    font-size: 40px;
    text-indent: 110px;
  };
  @media (max-width: 386px) {
    font-size: 33px;
    text-indent: 100px;
  };
  @media (max-width: 340px) {
    font-size: 30px;
    text-indent: 100px;
  };
  
  
  @media (max-width: 320px) {
    font-size: 29px;
    line-height: 33px;
    text-indent: 100px;
  };

`
export const SubTitle = styled.p`
  order: 2;
  line-height: 25px;
  color: var(--colors-text-dark);
  margin-bottom: 27px;
  max-width: 650px;
  @media (max-width: 768px) {
    order: 1;
  }
  @media (max-width: 680px) {
    font-size: 10px;
    line-height: 13px;
    max-width: 240px;
  }
`
export const Button = styled.button`
  order: 3;
  align-self: flex-start;
  background: var(--colors-bg-green);
  border-radius: 8px;
  font-weight: var(--fw-extra-bold);
  ${fontSize(18)}
  line-height: 20px;
  color: var(--colors-text-wight);
  padding: 12px 18px;
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  font-family: var(--family) ;

  :hover {
    background: #3D5F47;
  }

  @media (max-width: 680px) {
    padding: 30px 50px;
    align-self: stretch;
  }
  @media (max-width: 400px) {
    padding: 30px 11px;
    align-self: stretch;
  }

`




