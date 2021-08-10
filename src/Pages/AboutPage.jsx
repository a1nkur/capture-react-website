import AboutSection from "../Components/AboutSection";
import FaqSection from "../Components/FaqSection";
import ServiceSection from "../Components/ServiceSection";

const AboutPage = () => {
  return (
    <div className="about__page">
      <AboutSection />
      <ServiceSection />
      <FaqSection />
    </div>
  );
};

export default AboutPage;
