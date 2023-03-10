import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
html {
    width: 100%;
    overflow-x: hidden;
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