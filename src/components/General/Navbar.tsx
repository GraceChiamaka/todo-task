import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuIcon from "../../assets/images/menu.svg";
import { useState } from "react";

export const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <Nav>
      <Logo>
        <Link to="/">TSKS</Link>
      </Logo>
    </Nav>
  );
};

export const Nav = styled.nav`
  display: flex;
  margin: 8px auto;
  width: 1200px;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary[100]};
  padding: ${({ theme }) => theme.spacing.double(8, 24)};
  border-radius: ${({ theme }) => theme.borderRadius.custom(25)};
  ${({ theme }) => theme.media.mobile} {
    width: 90%;
    margin: 12px auto;
    justify-content: space-between;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.double(24, 24)};
  }
`;
const Logo = styled.div`
  font-size: ${({ theme }) => theme.fontSize.heading};
  a {
    font-weight: bold;
    text-decoration: none;
    font-family: ${({ theme }) => theme.fontFamily.avenirBlack};
    color: ${({ theme }) => theme.colors.primary[300]};
  }
  ${({ theme }) => theme.media.mobile} {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
const NavToggler = styled.button`
  width: ${({ theme }) => theme.spacing.large};
  height: ${({ theme }) => theme.spacing.large};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  display: none;
  img {
    width: ${({ theme }) => theme.spacing.custom(18)};
  }
  ${({ theme }) => theme.media.mobile} {
    display: inline;
  }
`;
