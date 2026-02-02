import { Container } from "../components/layouts/Container";
import { FeaturesSection } from "../components/sections/Features";
import { HeroSection } from "../components/sections/Hero";

const LandingPage = () => {
  return (
    <Container>
      <HeroSection />
      <FeaturesSection />
    </Container>
  );
};

export default LandingPage;
