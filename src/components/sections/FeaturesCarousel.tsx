import { useEffect, useRef, useState } from "react";
import { featuresData } from "../../data/features";
import { FeatureCard } from "./FeatureCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export const FeaturesCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmt = carouselRef.current.offsetWidth;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmt : scrollAmt,
      behavior: "smooth",
    });
  };

  const updateScrollButtons = () => {
    if (!carouselRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

    const paddingThreshold = 15; // px tolerance

    setCanScrollLeft(scrollLeft > paddingThreshold);
    setCanScrollRight(
      scrollLeft + clientWidth < scrollWidth - paddingThreshold,
    );
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    updateScrollButtons(); // initial check
    carousel.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      carousel.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  return (
    <div className="relative mt-30">
      {/* Carousel Wrapper */}
      <div ref={carouselRef} className="flex gap-5 py-10 p-5  carousel">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            className="min-w-[30%] p-10 px-10"
          />
        ))}
      </div>
      {/* Carousel Left Arrow */}
      {canScrollLeft && (
        <div
          onClick={() => scroll("left")}
          className="absolute top-0 -left-50 h-full w-[50%] flex items-center justify-end cursor-pointer p-4 -translate-x-1/2 bg-[#fffafa] hover:bg-white/70 transition-colors"
        >
          <FaArrowLeft className="w-15 h-15 text-primary" />
        </div>
      )}

      {/* Carousel Right Arrow */}
      {canScrollRight && (
        <div
          onClick={() => scroll("right")}
          className="absolute top-0 -right-50 h-full w-[50%] flex items-center justify-start cursor-pointer p-4 translate-x-1/2 bg-[#fffafa] hover:bg-white/70 transition-colors"
        >
          <FaArrowRight className="w-15 h-15 text-primary" />
        </div>
      )}
    </div>
  );
};
