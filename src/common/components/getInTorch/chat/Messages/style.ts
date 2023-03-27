import styled from "styled-components";
import {fontSize} from "../../../../style/mixin";

export const MessagesWrapper = styled.div`
  flex: 1 1 auto;
`
export const WelcomeBlock = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  row-gap: 20px;
  //max-width: 200px;
`

export const MessageContainer = styled.div`

`
export const MassageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

`
export const Massage = styled.p`
  background-color: #f1f0f0;
//  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 8px;
  padding: 9px 10px;
  line-height: 1.4;
  font-size: 14px;
  color: var(--color-dark);
`

export const Time = styled.span`
  font-size: 9px;
  color: var(--color-dark);
  opacity: 0.8;
`


