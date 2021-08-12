import styled from "styled-components";
// import athSml from "../Assets/img/athlete-small.png";
// import athbg from "../Assets/img/athlete2.png";

//Import Images
import athlete from "../Assets/img/athlete-small.png";
import goodtimes from "../Assets/img/goodtimes-small.png";
import theracer from "../Assets/img/theracer-small.png";
import athlete2 from "../Assets/img/athlete2.png";
import goodtimes2 from "../Assets/img/good-times2.jpg";
import theracer2 from "../Assets/img/the-racer2.jpg";

import { useHistory } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";

import { MovieState } from "../moviestate.js";

const MovieDetail = () => {
  const history = useHistory();
  const pathName = history.location.pathname;

  const [currentlySelectedMovie, setCurrentlySelectedMovie] = useState(null);

  useEffect(() => {
    const filteredArr = MovieState().filter(item => item.url === pathName);
    setCurrentlySelectedMovie(filteredArr[0]);
  }, [MovieState, pathName]);

  return (
    <Fragment>
      {currentlySelectedMovie && (
        <MovieDetailContainer>
          <header>
            <h2>{currentlySelectedMovie.title}</h2>
            <div className="small-image__container">
              <img src={currentlySelectedMovie.mainImg} alt="" />
            </div>
          </header>
          <AwardSection>
            <div className="container">
              <div className="award-1">
                <h2>{currentlySelectedMovie.awards[0].title}</h2>
                <div className="line"></div>
                <p>{currentlySelectedMovie.awards[0].description}</p>
              </div>
              <div className="award-2">
                <h2>{currentlySelectedMovie.awards[1].title}</h2>
                <div className="line"></div>
                <p>{currentlySelectedMovie.awards[1].description}</p>
              </div>
              <div className="award-3">
                <h2>{currentlySelectedMovie.awards[2].title}</h2>
                <div className="line"></div>
                <p>{currentlySelectedMovie.awards[2].description}</p>
              </div>
            </div>
          </AwardSection>
          <BigImageContainer>
            <img src={currentlySelectedMovie.secondaryImg} alt="" />
          </BigImageContainer>
        </MovieDetailContainer>
      )}
    </Fragment>
  );
};

export default MovieDetail;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const MovieDetailContainer = styled.div`
  header {
    height: 90vh;
    position: relative;

    h2 {
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translateX(-50%);
      font-size: 8rem;
      opacity: 0.6;
    }

    .small-image__container {
      img {
        height: 90vh;
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;

const AwardSection = styled.section`
  min-height: 100vh;
  padding: 0rem 10rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;

    h2 {
      font-size: 3rem;
    }

    .line {
      width: 100%;
      height: 1px;
      background-color: rgb(35, 217, 151);
      margin: 1.5rem 0;
    }

    .award-1,
    .award-2,
    .award-3 {
      flex-basis: 20rem;

      p {
        font-size: 1.5rem;
      }
    }
  }
`;

const BigImageContainer = styled.div`
  min-height: 100vh;

  img {
    width: 100%;
    object-fit: cover;
  }
`;
