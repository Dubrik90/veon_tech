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
  column-gap: calc(30px + (90 - 30) * ((100vw - 320px) / (1920 - 320)));
  cursor: pointer;
  transition: color 0.5s ease;
  align-items: center;
  padding: 47px 0;
  
  a{
    width: 100%;
    display: flex;
    justify-content: space-between;
    column-gap: calc(30px + (90 - 30) * ((100vw - 320px) / (1920 - 320)));
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
  font-size: 70px;
  letter-spacing: -.01em;
  line-height: 1.4;
  transition: color 0.5s ease;
  color: var(--colors-text-dark);
  font-family: 'Inter';
  font-weight: 800;

  @media (max-width: 1920px) {
    font-size: calc(30px + (70 - 30) * ((100vw - 320px) / (1920 - 320)));
  }
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