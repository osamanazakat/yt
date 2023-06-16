import "./Footer.scss";
import Wrapper from "../wrapper/Wrapper";
import FooterPhone from "../../assets/footer-phone.png";
import PlayStore from "../../assets/footer-play-store.svg";
import AppStore from "../../assets/footer-app-store.svg";
import Logo from "../../assets/footer-logo.svg";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <Wrapper>
        <div className="footer__container">
          <div className="footer__text">
            <h2>Start Building Today!</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="footer__stores">
              <img src={PlayStore} alt="" />
              <img src={AppStore} alt="" />
            </div>
          </div>
          <div className="footer__img-container">
            <img src={FooterPhone} alt="" />
          </div>
        </div>

        <div className="footer__links-container">
          <div className="footer__logo-container">
            <img src={Logo} alt="" />
          </div>

          <div className="footer__links-col">
            <h3>Platforms</h3>
            <ul>
              <li>iOS</li>
              <li>Android</li>
              <li>Web</li>
            </ul>
          </div>

          <div className="footer__links-col">
            <h3>About</h3>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Feedback</li>
            </ul>
          </div>

          <div className="footer__links-col">
            <h3>Get In Touch</h3>
            <p>+1 888 888 888</p>
            <p>info@restful.app</p>

            <div className="footer__icons">
              <div className="footer__icon">
                <AiFillInstagram />
              </div>
              <div className="footer__icon">
                <FaFacebookF />
              </div>
              <div className="footer__icon">
                <AiFillLinkedin />
              </div>
              <div className="footer__icon">
                <AiOutlineTwitter />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
