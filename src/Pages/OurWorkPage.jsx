import styled from "styled-components";
import athSml from "../Assets/img/athlete-small.png";
import gdtSml from "../Assets/img/goodtimes-small.png";
import rcrSml from "../Assets/img/theracer-small.png";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import {
  PageAnimation,
  fadeAnimation,
  imageAnimation,
  lineAnimation,
  slider,
  sliderContainer,
} from "../Animate";

const OurWorkPage = () => {
  return (
    <OurWorkContainer
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <Link to="/work/the-athlete">
          <motion.h2 variants={fadeAnimation}>The Athelete</motion.h2>
          //! Since, we only want to do fadeAnimation to h2 only aftet the top
          level //! animation i.e PageAnimation has been done, basically we are
          staggering //! this animation.
          <motion.div className="line" variants={lineAnimation}></motion.div>
          <div className="image__container">
            <motion.img
              src={athSml}
              alt="the-athelte"
              variants={imageAnimation}
            />
          </div>
        </Link>
      </Movie>
      <Movie>
        <Link to="/work/good-times">
          <h2>Good Times</h2>
          <motion.div className="line" variants={lineAnimation}></motion.div>
          <div className="image__container">
            <img src={gdtSml} alt="good-times" />
          </div>
        </Link>
      </Movie>
      <Movie>
        <Link to="/work/the-racer">
          <h2>The Racer</h2>
          <motion.div className="line" variants={lineAnimation}></motion.div>
          <div className="image__container">
            <img src={rcrSml} alt="the-racer" />
          </div>
        </Link>
      </Movie>
    </OurWorkContainer>
  );
};

export default OurWorkPage;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const OurWorkContainer = styled(motion.div)`
  padding: 5rem 10rem;
`;

const Movie = styled.div`
  padding-bottom: 2rem;
  height: 90vh;
  h2 {
    font-size: 4rem;
    color: #000;
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: rgb(35, 217, 151);
    margin: 1.5rem 0;
  }

  .image__container {
    overflow: hidden; //! ANIMATION, IF YOU GIVE THIS PROPERTY TO THE DIV CONTAING IMAGE, THE IMAGE WILL ANIMATE INSIDE THE DIV ONLY.
    img {
      height: 60vh;
      width: 100%;
      object-fit: cover;
    }
  }
`;

//  Frame Animation

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: #fffebf;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
