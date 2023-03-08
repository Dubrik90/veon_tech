import styled from "styled-components";

type ChatWrapperProps = {
    view: boolean
}
export const ChatWrapper = styled.div<ChatWrapperProps>`
  overflow: ${({view}) => view && 'hidden'};
  transform: ${({view}) => view ? 'translate(0,0)' : 'translate( 0,10000px)'};
  z-index: ${({view}) => view ? '123456789' : '2345678902'};
  transition: 0.3s;

  position: absolute;
  bottom: 0;
  right: 95px;
  
  @media (max-width: 450px) {
    right: 0;
  }
  background-color: #6eec4e;
  border-radius: 17px;
`
export const Close = styled.span`
  position: absolute;
  right: 10px;
  top: 0;
  font-size: 30px;
  cursor: pointer;
  z-index: 50;

  &:hover {
    color: white;
  }
`
export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  border-radius: 17px;
  right: 0;
  top:50%;
  z-index: 12345678;
  width: 330px;

  background-color: #6EEC4E;
  padding: 10px 10px 10px 60px;

  &:before{
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    top: -4px;
    left: -49px;
    background-color: #dbe8d3;
  }

`
export const ContentFooter = styled.div`
  min-width: 300px;
  max-width: 400px;
  width: 100%;
  min-height: 376px;
  height:auto ;
`
export const Icon = styled.span`
  cursor: pointer;
  position: absolute;
  right: 30px;
  bottom: 23px;
  background-color: #6eec4e;
  border: 5px solid #6eec4e;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  
`

