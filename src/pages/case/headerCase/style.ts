import styled from "styled-components";
import {flexColumn} from "../../../common/style/mixin";
import {TextMedium} from "../../../common/style/global";

export const HeaderCaseWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 15px;
  justify-content: center;
  max-width: 1320px;
  background: var(--colors-bg);
  box-shadow: 0 4px 20px 10px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  padding: 37px 50px;
  margin-bottom: 140px;
  
  @media (max-width: 1024px) {
    padding: 25px 30px;
    margin-bottom: 100px;
  }
  @media (max-width: 768px) {
    padding: 25px 20px;
    margin-bottom: 50px;
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 30px;
    margin-bottom: 30px;
  }
  @media (max-width: 525px) {
    box-shadow: none;
    border-radius: 0;
    padding: 0;
  }
`
export const CaseHeaderBlockColumn = styled.div`
  ${flexColumn()};
  row-gap: 10px;
 // flex-wrap: wrap;
  @media (max-width: 640px) {
    flex-direction: row;
    column-gap: 30px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  @media (max-width: 640px) {
    column-gap: 10px;
  }
  
`
export const ImageBlock = styled.div`
  @media (max-width: 1024px) {
    max-width: 180px;
  }
  @media (max-width: 768px) {
    max-width: 150px;
  }
  @media (max-width: 525px) {
    max-width: 100px;
  }
  @media (max-width: 380px) {
    max-width: 105px;
  }
`
export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`

export const CaseHeaderBlock = styled.div`
  ${flexColumn()};
  row-gap: 5px;
  @media (max-width: 380px) {
    flex: 0 0 172px;
  }
 
`
export const ServiceTitle = styled(TextMedium)`
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 525px) {
    font-size: 12px;
  }

  a {
    transition: color 0.3s;

    :hover {
      color: var(--colors-text-green);
    }
  }
`

