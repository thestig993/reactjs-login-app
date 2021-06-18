import { useContext, useState } from "react";
import { UserContext } from "../../../context";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  NavbarText,
  NavbarToggler,
} from "reactstrap";
import classes from "./TopNavbar.module.scss";
import Cookies from "js-cookie";

const TopNavbar = () => {
  const user = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    Cookies.remove("token");
  };

  return (
    <Navbar color="dark" dark expand="md">
      <Container>
        <NavbarToggler onClick={toggle} />

        <NavbarBrand href="/">
          <img
            className={classes.logo}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png"
          />
        </NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/dashboard">Dashboard</NavLink>
            </NavItem>
            <NavItem onClick={logout}>
              <NavLink href="/">Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <NavbarText>
          {user.firstName} {user.lastName}
        </NavbarText>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
