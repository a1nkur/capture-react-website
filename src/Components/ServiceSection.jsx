import styled from "styled-components";
import home2 from "../Assets/img/home2.png";

import clock from "../Assets/img/clock.svg";
import diaphragm from "../Assets/img/diaphragm.svg";
import money from "../Assets/img/money.svg";
import teamwork from "../Assets/img/teamwork.svg";

const ServiceSection = () => {
  return (
    <ServiceSectionContainer>
      <div className="box">
        <TextDescription>
          <h2>
            Lorem, <span>ipsum</span>
          </h2>
          <h2>dolor.</h2>
          <Cards>
            <Card>
              <div className="icon">
                <img src={clock} alt="clock" />
                <h4>Lorem Ipsum</h4>
              </div>
              <p>Lorem ipsum dolor ipsum sit.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={diaphragm} alt="diaphragm" />
                <h4>Lorem Ipsum</h4>
              </div>
              <p>Lorem ipsum dolor sit.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={money} alt="money" />
                <h4>Lorem Ipsum</h4>
              </div>
              <p>Lorem ipsum dolor sit.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={teamwork} alt="teamwork" />
                <h4>Lorem Ipsum</h4>
              </div>
              <p>Lorem ipsum dolor sit.</p>
            </Card>
          </Cards>
        </TextDescription>
        <ImageContainer>
          <img src={home2} alt="" />
        </ImageContainer>
      </div>
    </ServiceSectionContainer>
  );
};

export default ServiceSection;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const ServiceSectionContainer = styled.div`
  min-height: 90vh;
  padding: 5rem 10rem 0 10rem;

  .box {
    display: flex;
    align-items: center;
    /* justify-content: center; */
  }
`;

const TextDescription = styled.div`
  flex: 1;

  h2 {
    font-size: 4rem;
  }
`;

const Cards = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Card = styled.div`
  flex-basis: 15rem;
  .icon {
    display: flex;
    align-items: center;
    width: 13rem;
    justify-content: space-between;
    padding-bottom: 1rem;
    h4 {
      padding: 1rem;
      background-color: #fff;
    }
  }
`;

const ImageContainer = styled.div`
  flex: 1;

  img {
    height: 70vh;
    width: 100%;
    object-fit: cover;
  }
`;
