import styled from "styled-components";
import {fontSize} from "../../../../style/mixin";

export const MessagesWrapper = styled.div`
  flex: 1 1 auto;
`
export const WelcomeBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

export const MessageContainer = styled.div`

`
export const MassageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

`
export const Massage = styled.p`
  background: #F4F4F4;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 8px;
  padding: 7px 10px;
  line-height: 1.1;
  ${fontSize(13)};
  color: var(--color-dark);
`

export const Time = styled.span`
  ${fontSize(9)};
  color: var(--color-dark);
  opacity: 0.8;
`


