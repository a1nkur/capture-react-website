import styled from "styled-components";
import home1 from "../Assets/img/home1.png";

import { titleAnimation, fadeAnimation, imageAnimation } from "../Animate";
import { motion } from "framer-motion";
import Wave from "./Wave";
import { Fragment } from "react";

const AboutSection = () => {
  return (
    <Fragment>
      <AboutSectionContainer>
        <Content>
          <TextDescription>
            <div className="title">
              <div className="hide">
                <motion.h2 variants={titleAnimation}>
                  Lorem ipsum dolor sit.
                </motion.h2>
              </div>
              <div className="hide">
                <motion.h2 variants={titleAnimation}>
                  Lorem, <span>ipsum</span> dolor.
                </motion.h2>
              </div>
              <div className="hide">
                <motion.h2 variants={titleAnimation}>Lorem.</motion.h2>
              </div>
            </div>
            <motion.p variants={fadeAnimation}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              autem quidem rem, architecto tenetur facere dicta totam inventore
              amet enim.
            </motion.p>
            <motion.button variants={fadeAnimation}>Contact Us</motion.button>
          </TextDescription>
          <ImageContainer>
            <motion.img
              src={home1}
              alt="home-image-1"
              variants={imageAnimation}
            />
          </ImageContainer>
          <Wave />
        </Content>
      </AboutSectionContainer>
    </Fragment>
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
  z-index: 2;

  .title {
    padding-bottom: 2rem;

    .hide {
      overflow: hidden; //! animation
    }
  }

  p {
    padding-bottom: 2rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  z-index: 2;

  /* overflow: hidden; */ //! animation
  img {
    height: 70vh;
    width: 100%;
    object-fit: cover;
  }
`;
