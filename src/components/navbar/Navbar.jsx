import "./Navbar.scss";
import Wrapper from "../wrapper/Wrapper";
import Logo from "../../assets/logo.svg";
import Button from "../button/Button";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Wrapper className="navbar__container">
        <div className="navbar__logo">
          <a href="#">
            <img src={Logo} alt="logo" />
          </a>
        </div>

        <ul className="navbar__links">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Feedbacks</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
        <Button className="navbar__btn">hell</Button>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
