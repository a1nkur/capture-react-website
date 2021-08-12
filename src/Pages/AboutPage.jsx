import AboutSection from "../Components/AboutSection";
import FaqSection from "../Components/FaqSection";
import ServiceSection from "../Components/ServiceSection";
import styled from "styled-components";

import { motion } from "framer-motion";
import { PageAnimation } from "../Animate";

const AboutPage = () => {
  return (
    <Container
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServiceSection />
      <FaqSection />
    </Container>
  );
};

export default AboutPage;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled(motion.div)``;
