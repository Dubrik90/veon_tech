import styled from 'styled-components';


export const HeaderWrapper = styled.header`
  padding: 5px 0;
  min-height: 90px;
  margin-bottom: 50px;
  box-shadow: 0 10px 10px rgba(10, 91, 8, 0.31);
`
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 70px;
  @media (max-width: 1300px) {
    column-gap: 20px;
  }
  @media (max-width: 768px) {
    justify-content: stretch;
  }
`

type PropsImageType = {
    width?: string,
    height?: string,
    cursor?: string
    borderRadius?: string
    hover?: boolean
}

export const HeaderLogo = styled.div<PropsImageType>`
  width: 315px;
  height: 80px;
  transition: all 0.3s;
  overflow: hidden;
  flex: 1 1 auto;
  position: relative;
  z-index: 10;

   @media (max-width: 768px) {
    width: 250px;
    height: 70px;
  }

  img {
    max-width: 315px;
    object-fit: contain;
    cursor: pointer;
      @media (max-width: 768px) {
    width: 250px;
  }
    
  }
`



export const DiamondWrapper = styled.div`
  padding-left: 25px;
  position: absolute;
  top: -3px;
  right: -33px;
`

