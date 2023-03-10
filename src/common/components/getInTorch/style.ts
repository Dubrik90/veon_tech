import styled from "styled-components";

export const GetInTorchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  position: fixed;
  right: 90px;
  bottom: 20px;
  z-index: 1111111;
  transition: all 0.3s;
  width: 330px;
  border-radius: 14px;
  background-color: #6EEC4E;
  padding: 10px 10px 10px 60px;


  @media (max-width: 435px) {
    right: 15px;
    width: 300px;
  }
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    top: -4px;
    left: -49px;
    background-image: url("assets/managerImg.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

`
export const Title = styled.p`
  color: white;
  font-weight: 800;
  font-size: 18px;
  @media (max-width: 450px) {
    font-size: 16px;
  }
`
export const SubTitle = styled.p`
  color: white;
  font-size: 10px;
`