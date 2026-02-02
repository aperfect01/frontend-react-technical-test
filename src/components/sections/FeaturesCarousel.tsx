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
      {/* Positioning context WITHOUT vertical padding */}
      <div className="relative">
        {/* Scroll container WITH padding */}
        <div ref={carouselRef} className="flex gap-5 px-5 py-10 carousel">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className="min-w-[30%] p-10 shadow-xl/50"
            />
          ))}
        </div>

        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute top-10 bottom-10 left-0 w-[50%] -translate-x-4/5 bg-[#fffafa] hover:bg-white/70 flex items-center justify-end pr-4 cursor-pointer"
          >
            <FaArrowLeft className="w-15 h-15 text-primary" />
          </button>
        )}

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute top-10 bottom-10 right-0 w-[50%] translate-x-4/5 bg-[#fffafa] hover:bg-white/70 flex items-center justify-start pl-4 cursor-pointer"
          >
            <FaArrowRight className="w-15 h-15 text-primary" />
          </button>
        )}
      </div>
    </div>
  );
};
