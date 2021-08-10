import styled from "styled-components";
import athSml from "../Assets/img/athlete-small.png";
import athbg from "../Assets/img/athlete2.png";

const MovieDetail = () => {
  return (
    <MovieDetailContainer>
      <header>
        <h2>The Athlete</h2>
        <div className="small-image__container">
          <img src={athSml} alt="" />
        </div>
      </header>
      <AwardSection>
        <div className="container">
          <div className="award-1">
            <h2>Truly A masterpiece</h2>
            <div className="line"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
              non.
            </p>
          </div>
          <div className="award-2">
            <h2>Fresh look on a brutal sport.</h2>
            <div className="line"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
              non.
            </p>
          </div>
          <div className="award-3">
            <h2>It’s okay. One time watch.</h2>
            <div className="line"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
              non.
            </p>
          </div>
        </div>
      </AwardSection>
      <BigImageContainer>
        <img src={athbg} alt="" />
      </BigImageContainer>
    </MovieDetailContainer>
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
