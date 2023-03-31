import styled from "styled-components";

export const CommitmentWrapper = styled.div`
  padding-top: 40px;
  @media (max-width: 768px) {
    padding-bottom: 20px;


`
export const CommitmentBlock = styled.div`
  display: flex;
  column-gap: 50px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    border-bottom: 2px solid var(--colors-bg-green);
    column-gap: 10px;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    row-gap: 10px;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 31px;
`
export const Title = styled.h3`
  font-weight: var(--fw-bold);
  font-size: 40px;
  line-height: 1.1;
  color: var(--colors-text-dark);
  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`
export const Text = styled.p`
 font-size: 20px;
  line-height: 169%;
  color: var(--colors-text-dark);
  position: relative;
  padding-left: 30px;
  
  @media (max-width: 1024px) {
    font-size: 18px;
    padding-left: 20px;
  }
  @media (max-width: 768px) {
    padding-left: 0;
    font-size: 16px;
  }
  @media (max-width: 560px) {
    font-size: 14px;
  }

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background-color: var(--colors-bg-green);

    @media (max-width: 768px) {
      display: none;
    }
  }

`
export const ImageBlock = styled.div`
  flex: 1 0 40%;
  align-self: flex-end;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`
export const Img = styled.img`
  max-width: 100%;
  //height: 100%;
   object-fit: cover;
`