import styled, {createGlobalStyle} from 'styled-components'

import '../../assets/font/font.css'

export default createGlobalStyle`
  html {
    width: 100%;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :focus,
  :active {
    outline: none;
  }

  html,
  body {
    height: 100%;
  }

  body {
    line-height: 1;
    margin: 0;
    font-family: var(--family);
    font-weight: var(--fw-regular);
    background-color: var(--colors-bg);
    font-size: var(--fs-18);
    transition: all 0.3s;
  }

  input,
  button,
  textarea {
    font-size: inherit;
  }

  button {
    cursor: pointer;
    color: inherit;
    background-color: inherit;
  }

  a {
    color: inherit;
    text-decoration-line: none;
    transition: all 0.3s;
  }

  //a:link,
  //a:visited {
  //  text-decoration: none;
  //}
  a:hover {
    text-decoration: none;
  }

  ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: inherit;
    font-size: inherit;
  }
`

export const TitleH2 = styled.h2`
  font-weight: var(--fw-bold);
  font-size: 40px;
  line-height: 1.1;
  color: var(--color-dark);
`
export const TitleH3 = styled.h3`
  font-weight: var(--fw-bold);
  font-size: 24px;
  line-height: 1.3;
  color: var(--colors-text-dark);
`
export const TitleH4 = styled.h4`
  font-weight: var(--fw-bold);
  font-size: 20px;
  line-height: 1.1;
  color: var(--color-dark);
`

export const TextRegular = styled.p`
  font-size: 20px;
  line-height: 1.3;
  color: var(--colors-text-dark);
`
export const TextMedium = styled.p`
  font-size: 20px;
  font-weight: var(--fw-medium);
  line-height: 1.2;
  color: var(--colors-text-dark);
`
// export const FlexColumn = styled.div`
//   display: flex;
//   flex-direction: column;
// `