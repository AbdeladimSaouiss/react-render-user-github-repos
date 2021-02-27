// import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// Components
import Repositories from "./components/Repositories";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, menu, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Repositories />
    </Wrapper>
  );
}

export default App;
