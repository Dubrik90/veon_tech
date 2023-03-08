import styled from "styled-components";

export const MessagesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 95%;
  font-size: 16px;
  position: relative;
  height: 350px;
  margin: 0 auto;
  background-color: white;
  @media (max-width: 380px) {
    width: 85%;
  }
`
export const MessageContainer = styled.div`
`
export const Massage = styled.div`
  margin: 20px 20px 0 30px;
  padding: 10px;
  background: #F4F4F4;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 8px;
  box-sizing: border-box;
`
export const Time = styled.div`
  margin-left: 40px;
  font-size: 8px;
  color: #B0B0B0;
  font-weight: 400;
`
export const SendMessageBlock = styled.div`

`
export const Input = styled.input`
  position: absolute;
  bottom: 15px;
  right: 10px;
  padding: 15px;
  width: 95%;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.17);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`
