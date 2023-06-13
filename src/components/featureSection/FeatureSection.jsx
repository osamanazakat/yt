import "./FeatureSection.scss";
import Wrapper from "../wrapper/Wrapper";
import Img1 from "../../assets/feature-1.png";
import Img2 from "../../assets/feature-2.png";
import Img3 from "../../assets/feature-3.png";

const FeatureSection = () => {
  return (
    <section className="features">
      <Wrapper>
        <div className="features__text">
          <h2>Improve Your Lifestile</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>

        <div className="features__container">
          <div className="features__card">
            <img src={Img1} alt="" />
            <h3>Better sleep</h3>
            <span>All night long</span>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat minim mollit non duis enim
              velit.
            </p>
          </div>

          <div className="features__card">
            <img src={Img2} alt="" />
            <h3>Great dreams</h3>
            <span>Positive feel</span>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat minim mollit non duis enim
              velit.
            </p>
          </div>

          <div className="features__card">
            <img src={Img3} alt="" />
            <h3>Soft satisfaction</h3>
            <span>Active energy</span>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat minim mollit non duis enim
              velit.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default FeatureSection;
