import styled from 'styled-components';
import {Button} from "../home/headrMain/style";
import {flexColumn} from "../../common/style/mixin";


export const JobsWrapper = styled.div`
  ${flexColumn()};
  z-index: 0;
`
export const ButtonJobMobile = styled(Button)`
  display: none;
  //padding: 15px 20px;
  //@media (max-width: 632px) {
  //  display: flex;
  //  bottom: 0;
  //  z-index: 5;
  //  padding: 15px 80px;
  //  margin-bottom: 20px;
  //
  //}
`

