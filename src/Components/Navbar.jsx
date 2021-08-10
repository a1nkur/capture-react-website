import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarContainer>
      <h1>capture</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">1. About Us</Link>
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
        </li>
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const NavbarContainer = styled.nav`
  overflow: auto;
  min-height: 10vh;
  background-color: #282828;
  padding: 0 10rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  align-items: center;

  h1 {
    font-size: 2rem;
    font-family: "Lobster", cursive;
    color: #fff;
  }

  .nav-links {
    display: flex;
    margin-left: auto;

    li {
      margin-right: 1.5rem;
      /* position: relative;  */ //! animation
    }
  }
`;
