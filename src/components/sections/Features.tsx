import { FeaturesCarousel } from "./FeaturesCarousel";

export const FeaturesSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-0">
      {/* Tagline */}
      <div className="flex flex-col md:flex-row w-full items-start md:items-center justify-between gap-10 mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
          Build the future of your <br className="hidden md:block" /> business
          today.
        </h2>
        <p className="text-base md:text-base lg:text-lg text-muted max-w-md md:max-w-sm lg:max-w-md">
          Where we elevate your business with innovative{" "}
          <br className="md:hidden lg:block" /> strategies and expert solutions.
          As a full-service <br className="md:hidden lg:block" /> business
          agency, we specialize in helping <br className="md:hidden lg:block" />
          companies of all sizes optimize their operations.
        </p>
      </div>

      {/* Features + Carousel */}
      <FeaturesCarousel />
    </section>
  );
};
