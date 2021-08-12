import styled from "styled-components";

import { motion } from "framer-motion";
import { PageAnimation } from "../Animate";

const ContactUsPage = () => {
  return (
    <ContactUsContainer
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      hello
    </ContactUsContainer>
  );
};

export default ContactUsPage;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const ContactUsContainer = styled.div`
  padding: 5rem 10rem;
`;
