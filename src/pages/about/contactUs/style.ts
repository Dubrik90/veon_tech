import styled from "styled-components";

export const ContactUsWrapper =styled.div`
  padding-top: calc(10px + (20 - 10) * ((100vw - 320px) / (1920 - 320)));
 // padding-bottom: calc(10px + (20 - 10) * ((100vw - 320px) / (1920 - 320)));
  hr {
    height: 1px;
    background-color: rgb(217, 217, 217);
  }
`
export const DiscussProject =styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  cursor: pointer;
  transition: color 0.5s ease;
  align-items: center;
  
  a{
    width: 100%;
    display: flex;
    justify-content: space-between;
    column-gap: 10px;
    align-items: center;
  }
  svg {
    transition: all .5s ease;
    width: calc(30px + (108 - 30) * ((100vw - 320px) / (1920 - 320)));
    height: calc(30px + (108 - 30) * ((100vw - 320px) / (1920 - 320)));
    path {
      transition: all .8s ease;
      fill: var(--colors-text-dark);
    }
  }
    
  :hover {
    h3 {
      color: var(--color-menu-hover);
    }
    div {
      transform: rotate(45deg);
      span {
        background-color: var(--color-menu-hover);
      }
    }
    svg {
      transform: translateX(5px);
    //  transition: all .8s ease;
      path {
        transition: all .5s ease;
        fill: var(--color-menu-hover);
      }
    }
  }
  
`
export const Title =styled.h3`
  font-size: calc(31px + (100 - 31) * ((100vw - 320px) / (1920 - 320)));
  letter-spacing: -.01em;
  font-weight: var(--fw-bold);
  line-height: 1.4;
  transition: color 0.5s ease;
  color: var(--colors-text-dark);
`
export const Button =styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: calc(30px + (108 - 30) * ((100vw - 320px) / (1920 - 320)));
  height: calc(30px + (108 - 30) * ((100vw - 320px) / (1920 - 320)));
  cursor: pointer;
  z-index: 2;
  transition: all .5s ease;
  color: var(--colors-text-dark);
  //transform: rotate(-45deg);

  :hover {
   // transform: rotate(0);
  }

  span:nth-child(1) {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(30px + (108 - 30) * ((100vw - 320px) / (1920 - 320)));
    height: calc(3px + (6.5 - 3) * ((100vw - 320px) / (1920 - 320)));
    background-color: var(--colors-text-dark);
    border-radius: 2px;
    transition: color 0.5s ease;
  }

  span:nth-child(2) {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    width: calc(30px + (108 - 30) * ((100vw - 320px) / (1920 - 320)));
    height: calc(3px + (6.5 - 3) * ((100vw - 320px) / (1920 - 320)));
    background-color: var(--colors-text-dark);
    border-radius: 2px;
    transition: color 0.5s ease;
  }

`
export const WorkAtUs =styled.div`

`