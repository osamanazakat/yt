import "./Testimonials.scss";
import Wrapper from "../wrapper/Wrapper";
import Bg1 from "../../assets/bg-price-2.svg";
import Bg2 from "../../assets/bg-footer.svg";
import Img1 from "../../assets/testimonial-1.png";
import Img2 from "../../assets/testimonial-2.png";
import Img3 from "../../assets/testimonial-3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <Wrapper>
        <div className="testimonials__text">
          <h2>We Help Our Users</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>

        <div className="testimonials__carousel">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
          >
            <article className="testimonials__card">
              <blockquote className="testimonials__quote">
                “You know you're in love when you can't fall asleep because
                reality is finally better than your dreams.”
              </blockquote>
              <div>
                <img src={Img1} alt="" />
                <p>Full Name</p>
                <span>Position @ Company</span>
              </div>
            </article>

            <article className="testimonials__card">
              <blockquote className="testimonials__quote">
                “I've learned that people will forget what you said, people will
                forget what you did, but people will never forget how you made
                them feel.”
              </blockquote>
              <div>
                <img src={Img2} alt="" />
                <p>Full Name</p>
                <span>Position @ Company</span>
              </div>
            </article>

            <article className="testimonials__card">
              <blockquote className="testimonials__quote">
                “You know you're in love when you can't fall asleep because
                reality is finally better than your dreams.”
              </blockquote>
              <div>
                <img src={Img3} alt="" />
                <p>Full Name</p>
                <span>Position @ Company</span>
              </div>
            </article>
          </Carousel>
        </div>
      </Wrapper>

      <img src={Bg1} alt="" className="testimonials__bg-1" />
      <img src={Bg2} alt="" className="testimonials__bg-2" />
    </section>
  );
};

export default Testimonials;
