import { Card } from "../common/Card";
import { StatItem } from "../common/StatItem";
import buildingImage from "../../assets/building.jpg";

export const HeroSection = () => {
  return (
    <section className="flex flex-row py-16">
      {/* First Column */}
      <div className="relative w-[55%]">
        <div className="flex flex-col gap-10">
          <h1 className="text-7xl font-bold mb-4 leading-[1.2]">
            <span className="text-primary">Future of your</span> <br /> business
            today.
          </h1>

          <div className="flex flex-col gap-10 mr-56">
            {/* Image with text */}
            <div className="flex flex-row gap-6">
              <img
                src="/images/avatar.png"
                alt="Avatar"
                className="w-[120px] h-[120px] rounded-md bg-muted-light flex-shrink-0  "
              />
              <p className="text-sm text-muted-dark font-semibold mt-4">
                Where we elevate your business with innovative strategies and
                expert solutions. As a full-service business agency
              </p>
            </div>

            {/* Stat Items */}
            <div className="grid grid-cols-2 gap-4 w-full mt-4">
              <StatItem
                imageSrc="/images/icon1.png"
                label="Your protection"
                value="2000+"
              />
              <StatItem
                imageSrc="/images/icon2.png"
                label="Provide tailored"
                value="7001+"
              />
            </div>
          </div>
        </div>

        {/* Absolutely positioned card */}
        <Card containerClassName="absolute bottom-10 -right-30 w-75 p-10 pt-5 z-10">
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-row items-center justify-between w-full">
              <h5 className="text-primary text-3xl font-semibold">721+</h5>
              <h5 className="text-primary text-3xl font-semibold">1000+</h5>
            </div>
            <h5 className="text-xl text-justify font-bold">
              Growth is our priority.
            </h5>
            <p className="text-xs text-justify text-muted-dark mt-2">
              As a full-service business agency, we specialize in helping
              companies of all sizes optimize their operations.
            </p>
          </div>
        </Card>
      </div>

      {/* Second Column */}
      <div className="w-[45%] pl-10">
        <img
          src={buildingImage}
          alt="Hero Image"
          className="w-full h-125 border rounded-xl"
        />
      </div>
    </section>
  );
};
