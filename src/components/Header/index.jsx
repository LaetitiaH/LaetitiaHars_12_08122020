import styled from "styled-components";
import logo from "../../assets/logo.png";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px 15px 30px;
  height: 90px;
  background-color: #020203;
  box-sizing: border-box;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const HomeLogo = styled.img`
  height: 60px;
`;

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const StyledLink = styled.div`
  color: #ffffff;
  font-size: 24px;
`;

const links = [
  { name: "Accueil" },
  { name: "Profil" },
  { name: "Réglage" },
  { name: "Communauté" },
];

const Header = () => (
  <NavContainer>
    <HomeLogo src={logo} />
    <LinkContainer>
      {links.map((link, index) => (
        <StyledLink key={index}>{link.name}</StyledLink>
      ))}
    </LinkContainer>
  </NavContainer>
);

export default Header;
