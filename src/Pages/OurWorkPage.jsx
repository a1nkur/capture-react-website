import styled from "styled-components";
import athSml from "../Assets/img/athlete-small.png";
import gdtSml from "../Assets/img/goodtimes-small.png";
import rcrSml from "../Assets/img/theracer-small.png";

import { Link } from "react-router-dom";

const OurWorkPage = () => {
  return (
    <OurWorkContainer>
      <Movie>
        <Link>
          <h2>The Athelete</h2>
          <div className="line"></div>
          <div className="image__container">
            <img src={athSml} alt="the-athelte" />
          </div>
        </Link>
      </Movie>
      <Movie>
        <Link>
          <h2>Good Times</h2>
          <div className="line"></div>
          <div className="image__container">
            <img src={gdtSml} alt="good-times" />
          </div>
        </Link>
      </Movie>
      <Movie>
        <Link>
          <h2>The Racer</h2>
          <div className="line"></div>
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

const OurWorkContainer = styled.div`
  padding: 5rem 10rem;
`;

const Movie = styled.div`
  padding-bottom: 2rem;
  height: 90vh;
  h2 {
    font-size: 4rem;
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: rgb(35, 217, 151);
    margin: 1.5rem 0;
  }

  .image__container {
    img {
      height: 60vh;
      width: 100%;
      object-fit: cover;
    }
  }
`;
