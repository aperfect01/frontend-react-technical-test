import { Container } from "../components/layouts/Container";
import { FeaturesSection } from "../components/sections/Features";
import { HeroSection } from "../components/sections/Hero";

export const LandingPage = () => {
  return (
    <Container>
      <HeroSection />
      <FeaturesSection />
    </Container>
  );
};
