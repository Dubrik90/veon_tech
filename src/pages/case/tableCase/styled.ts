import styled from "styled-components";
import {TitleH3} from "../../../common/style/global";

export const TableCaseWrapper = styled.div`
  margin-bottom: 50px;
  @media (max-width: 425px) {
    margin: 0px -15px 30px -15px;
  }
`

export const TableTitle = styled(TitleH3)`
  background: #5DB447;
  border-radius: 6px 6px 0 0;
  text-align: center;
  padding: 15px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 610px) {
    font-size: 18px;
    padding: 10px;
  }
  @media (max-width: 375px) {
    font-size: 14px;
  }
`
export const Table = styled.table`
  max-width: 1140px;
  border-collapse: collapse;

  td {
    width: 50%;
    padding: 10px 30px;
    border-collapse: collapse;
    font-size: 18px;
    line-height: 1.3;

    @media (max-width: 768px) {
      font-size: 16px;
      padding: 10px;
    }
    @media (max-width: 610px) {
      font-size: 14px;
      padding: 10px;
    }
    @media (max-width: 475px) {
      font-size: 12px;
    }
  }
`
export const Tbody = styled.tbody`
  color: var(--colors-text-dark);
  border-radius: 0 0 6px 6px;
  box-shadow: 0 4px 20px 10px rgba(0, 0, 0, .25);
  padding: 10px;
`
export const TdL = styled.td`
  border: solid #e6e6e6;
  border-width: 0 1px 1px 0;
`
export const TdR = styled.td`
  border: solid #e6e6e6;
  border-width: 0 0 1px;
`