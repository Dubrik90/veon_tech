import styled from 'styled-components';
import {flexColumn} from "../../../../common/style/mixin";

export const CurrentDevWrapper = styled.div`
 
  ${flexColumn()};
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #FFFDFD;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  row-gap: 20px;
  flex: 0 0 349px;
  padding: 35px 38px 11px 28px;
  min-height: 215px;
  
  a {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    flex-grow: 1;
  }
  
  @media (max-width: 1844px) {
    flex: 1 0 349px;
    :last-child {
      flex: 0 0 50%;
    }
  }
  @media (max-width: 1366px) {
    :last-child {
      flex: 1 0 349px;
    }
  }
  @media (max-width: 406px) {
    padding: 35px 10px 11px 18px;
  }
`
export const CardImage = styled.div`
  margin-top: -54px;

  img {
    width: 55px;
    height: 55px;
    border-radius: 9px;
  }
`

export const Title = styled.h3`
  font-weight: var(--fw-medium);
  font-size: 25px;
  line-height: 129.5%;
  color: var(--color-dark);

`
export const SubTitle = styled.p`
  font-size: 15px;
  line-height: 129.5%;
  color: var(--color-dark);
  flex: 1 1 auto;
`

export const ButtonArrow = styled.button`
  display: flex;
  align-items: center;
  align-self: flex-start;
  font-weight: var(--fw-extra-bold);
  font-size: 13px;
  color: var(--color-dark);
  
  a {
    transition: color 0.3s;
  }

  svg {
    transition: all 0.3s;
    margin-left: 5px;
  }
  
  :hover {
    color: #5DB447;
    
    svg {
      transform: translateX(5px);
      path {
         fill:#5DB447;
      }
    }
  }
`
