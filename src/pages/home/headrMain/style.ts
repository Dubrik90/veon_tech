import styled from 'styled-components';

export const HeadrMainWrapper = styled.div`
  padding: 120px 0px 214px 150px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 58px 0px 66px 0px;
  }

`
export const Title = styled.h1`
  order: 1;
  font-weight: var(--fw-black);
  font-size: 58px;
  line-height: 73px;
  color: var(--colors-text-green);
  margin-bottom: 87px;

  span {
    color: var(--colors-text-dark);
  }

  @media (max-width: 768px) {
    order: 2;
  }
  @media (max-width: 680px) {
    font-size: 50px;
    line-height: 63px;
    text-indent: 100px;
  }
  @media (max-width: 680px) {
    font-size: 43px;
  }
  @media (max-width: 470px) {
    font-size: 33px;
  }
  @media (max-width: 376px) {
    font-size: 29px;
  }
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
  font-size: 16px;
  line-height: 20px;
  color: var(--colors-text-wight);
  padding: 12px 18px;
  display: flex;
  justify-content: center;
  transition: all 0.3s;


  :hover {
    background: #3D5F47;
  }

  @media (max-width: 680px) {
    padding: 38px 50px;
    align-self: stretch;
  }
  @media (max-width: 400px) {
    padding: 38px 11px;
    align-self: stretch;
  }

`




