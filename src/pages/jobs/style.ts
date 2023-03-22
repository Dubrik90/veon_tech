import styled from 'styled-components';
import {Button} from "../home/headrMain/style";


export const JobsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  z-index: 0;


`
export const ButtonJobMobile = styled(Button)`
  display: none;
  padding: 15px 20px;
  @media (max-width: 632px) {
    display: flex;
    bottom: 0;
    z-index: 5;
    padding: 15px 80px;
    margin-bottom: 20px;

  }
`

