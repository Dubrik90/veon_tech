import styled from "styled-components";

export const TechnoWrapper = styled.div`
  background-color: var(--colors-bg-green-dark);
  padding-top: calc(50px + (120 - 50) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(56px + (180 - 56) * ((100vw - 320px) / (1920 - 320)));
`

export const TechnoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: calc(50px + (300 - 50) * ((100vw - 768px) / (1920 - 768)));

  @media (max-width: 767px) {
    flex-direction: column;
    row-gap: 30px;
  }
`

export const TechnoBlock = styled.div`
  position: relative;
  width: 464px;
  
  @media (max-width: 767px) {
    width: calc(300px + (464 - 300) * ((100vw - 320px) / (767 - 320)));
  }

  svg {
    fill: var(--colors-text-dark);
  }

  //max-width: 464px svg {
  //
  //  fill: #20101e;
  //
  //  transition: fill var(--transition) line {
  //    stroke: #20101e;
  //    transition: stroke var(--transition)
  //  }
  //
  //} 

  figure {
    position: absolute;
    //  transition: filter var(--transition);
    z-index: 2;
    background: var(--colors-bg);
    border: 3px solid #f6f0ed;
    box-sizing: content-box;
    --transition-time: .3s;
    --transition: var(--transition-time) ease-in-out;
    transition: filter var(--transition), background-color var(--transition), border-color var(--transition);

    img {
      display: block;
      height: auto;
      margin: auto;
      max-width: 100%
    }
  }


  figure:first-of-type {
    left: 22.9052%;
    top: 18.30108%;
    width: 46.1034%;
    height: 22%;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      max-width: 80%;
      max-height: 90px;
    }
    
  }

  figure:nth-of-type(2) {
    left: 63.7586%;
    top: 28.6452%;
    width: 26.5776%;
    height: 28%;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      max-width: 60%;
      max-height:80%;
    }
  }

  figure:nth-of-type(3) {
    left: 32.5603448276%;
    top: 45.311827957%;
    width: 32.4655172414%;
    height: 40%;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      max-width: 80%;
      max-height: 80%;
    }
  }


`
export const TechnoText = styled.p`
  max-width: calc(370px + (600 - 370) * ((100vw - 768px) / (1920 - 768)));
  color: var(--colors-text-dark);
  font-size: calc(18px + (28 - 18) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.3;
  font-weight: var(--fw-regular);

  @media (max-width: 767px) {
    max-width: 100%;
  }

`


