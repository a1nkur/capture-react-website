import styled from "styled-components";
import home1 from "../Assets/img/home1.png";

const AboutSection = () => {
  return (
    <AboutSectionContainer>
      <Content>
        <TextDescription>
          <div className="title">
            <div className="hide">
              <h2>Lorem ipsum dolor sit.</h2>
            </div>
            <div className="hide">
              <h2>
                Lorem, <span>ipsum</span> dolor.
              </h2>
            </div>
            <div className="hide">
              <h2>Lorem.</h2>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            autem quidem rem, architecto tenetur facere dicta totam inventore
            amet enim.
          </p>
          <button>Contact Us</button>
        </TextDescription>
        <ImageContainer>
          <img src={home1} alt="home-image-1" />
        </ImageContainer>
      </Content>
    </AboutSectionContainer>
  );
};

export default AboutSection;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const AboutSectionContainer = styled.div`
  min-height: 90vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 10rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const TextDescription = styled.div`
  flex: 1;
  padding-right: 5rem;

  .title {
    padding-bottom: 2rem;

    .hide {
      /* overflow: hidden; */ //! animation
    }
  }

  p {
    padding-bottom: 2rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  /* overflow: hidden; */ //! animation
  img {
    height: 70vh;
    width: 100%;
    object-fit: cover;
  }
`;
