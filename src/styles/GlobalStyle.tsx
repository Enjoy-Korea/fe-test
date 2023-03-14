import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset styles */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    --gray-font: #8B8B8B;
    --yellow: #ffd951
  }

  input {
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

button {
  border: 0;
  padding: 0;
  margin: 0;
  background-color: #fff;
}
  
  /* Global styles */
  body {
    font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    font-size: 1rem;
    line-height: 1.5;
    background-color: white;
    color: #515151;
  }
`;

export default GlobalStyle;
