import styled from "styled-components";

const FaqSection = () => {
  return (
    <FaqSectionContainer>
      <h2>Lorem, ipsum?</h2>
      <h2>
        <span>FAQ</span>
      </h2>

      <div className="question">
        <h3>Lorem ipsum dolor sit amet?</h3>
        <div className="answer">
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sit
            obcaecati illum quod in est
          </h4>
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
        </div>
        <div className="line"></div>
      </div>
      <div className="question">
        <h3>Lorem ipsum dolor sit amet?</h3>
        <div className="answer">
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sit
            obcaecati illum quod in est
          </h4>
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
        </div>
        <div className="line"></div>
      </div>
      <div className="question">
        <h3>Lorem ipsum dolor sit amet?</h3>
        <div className="answer">
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sit
            obcaecati illum quod in est
          </h4>
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
        </div>
        <div className="line"></div>
      </div>
      <div className="question">
        <h3>Lorem ipsum dolor sit amet?</h3>
        <div className="answer">
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sit
            obcaecati illum quod in est
          </h4>
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
        </div>
        <div className="line"></div>
      </div>
    </FaqSectionContainer>
  );
};

export default FaqSection;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const FaqSectionContainer = styled.div`
  min-height: 90vh;
  padding: 5rem 10rem 0 10rem;

  .question {
    padding: 2rem 0;
    overflow: hidden;

    h3 {
      font-size: 2rem;
      color: #fff;
    }

    .answer {
      padding-top: 1rem;

      h4 {
        color: #ccc;
        font-weight: lighter;
      }
    }
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: rgb(35, 217, 151);
    margin: 1.5rem 0;
  }
`;
