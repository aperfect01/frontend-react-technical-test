import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { LuShieldCheck } from "react-icons/lu";
import { MdOutlineTune } from "react-icons/md";
import buildingImage from "../../assets/building.jpg";
import { Card } from "../common/Card";
import { StatItem } from "../common/StatItem";

export const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row py-16 lg:py-24 px-6 lg:px-0">
      {/* First Column */}
      <div className="relative lg:w-[55%] w-full mb-10 lg:mb-0">
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2]">
            <span className="text-primary">Future of your</span> <br /> business
            today.
          </h1>

          <div className="flex flex-col gap-8 lg:gap-10 lg:mr-56">
            {/* Image with text */}
            <div className="flex flex-row gap-4 lg:gap-6 items-start">
              <div className="size-12 lg:size-30 rounded-md bg-muted-light flex-shrink-0 flex items-center justify-center">
                <HiOutlinePresentationChartBar className="size-6 lg:size-15 text-primary" />
              </div>

              <p className="text-sm md:text-base text-muted-dark font-semibold mt-0 lg:mt-2">
                Where we elevate your business with innovative strategies and
                expert solutions. As a full-service business agency
              </p>
            </div>

            {/* Stat Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4">
              <StatItem
                icon={LuShieldCheck}
                label="Your protection"
                value="2000+"
              />
              <StatItem
                icon={MdOutlineTune}
                label="Provide tailored"
                value="7001+"
              />
            </div>
          </div>
        </div>

        {/* Absolutely positioned card only on large screens */}
        <Card containerClassName="lg:absolute bottom-0 lg:bottom-10 right-0 lg:-right-30 w-full lg:w-75 p-8 lg:p-10 lg:pt-5 z-10 mt-10 lg:mt-0">
          <div className="flex flex-col items-center gap-4 lg:gap-5">
            <div className="flex flex-row items-center justify-between w-full text-lg lg:text-3xl font-semibold text-primary">
              <h5>721+</h5>
              <h5>1000+</h5>
            </div>
            <h5 className="text-lg lg:text-xl font-bold text-center">
              Growth is our priority.
            </h5>
            <p className="text-xs md:text-sm text-muted-dark text-center mt-2">
              As a full-service business agency, we specialize in helping
              companies of all sizes optimize their operations.
            </p>
          </div>
        </Card>
      </div>

      {/* Second Column */}
      <div className="lg:w-[45%] w-full lg:pl-10">
        <img
          src={buildingImage}
          alt="Hero Image"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-125 border rounded-xl object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
};
