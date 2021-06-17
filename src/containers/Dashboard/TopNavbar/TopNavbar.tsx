import { useContext } from "react";
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
} from "reactstrap";
import classes from "./TopNavbar.module.scss";
import Cookies from "js-cookie";

const TopNavbar = () => {
  const user = useContext(UserContext);

  const logout = () => {
    Cookies.remove("token");
  };

  return (
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarBrand href="/">
          <img
            className={classes.logo}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png"
          />
        </NavbarBrand>
        <Collapse navbar>
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
