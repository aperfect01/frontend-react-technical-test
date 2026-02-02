import { FeaturesCarousel } from "./FeaturesCarousel";

export const FeaturesSection = () => {
  return (
    <section className="py-16">
      {/* Tagline */}
      <div className="flex flex-row w-full items-center justify-between gap-10 mb-16">
        <h2 className="text-5xl font-bold  ">
          Build the future of your <br /> business today.
        </h2>
        <p className="text-base text-muted">
          Where we elevate your business with innovative <br /> strategies and
          expert solutions. As a full-service <br /> business agency, we
          specialize in helping <br />
          companies of all sizes optimize their operations.
        </p>
      </div>

      {/* Features + Carousel*/}
      <FeaturesCarousel />
    </section>
  );
};
