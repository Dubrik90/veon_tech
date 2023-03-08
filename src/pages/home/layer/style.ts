import styled from "styled-components";

export const LayerWrapper = styled.div`
  @media (max-width: 768px) {
    height: 50px;
    background: #3D5F47;
    position: relative;
    
    :after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      height: 2px;
      background: #6EEC4E;
    }
  }
    
`