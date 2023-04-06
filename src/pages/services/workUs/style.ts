import styled from "styled-components";
import {TitleH3} from "../../../common/style/global";

export const WorkUsWrapper = styled.div`
  padding: 72px 0 60px 0;
  background-color: rgba(110, 236, 78, 0.15);

  @media (max-width: 768px) {
    padding: 40px 0 40px 0;
  }
`

export const WorkUsContent = styled.div`

`
export const Title = styled(TitleH3)`
  font-size: 30px;
  margin-bottom: 30px;
  

  @media (max-width: 768px) {
    font-size: 25px;
  }
  @media (max-width: 620px) {
    font-size: 18px;
  }
`
export const CardBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media(max-width: 1018px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

