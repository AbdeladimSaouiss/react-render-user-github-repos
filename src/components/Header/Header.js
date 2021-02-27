import styled from "styled-components";

const Hero = styled.div`
  color: #fff;
  font-size: 30px;
  text-align: center;
  background: #000;
  padding: 30px;
  margin: 0 15px 30px;

  @media (max-width: 720px) {
    margin: 0 30px 30px;
  }
`;

function Header() {
  return <Hero>Addy Osmani's GitHub Repositories</Hero>;
}

export default Header;
