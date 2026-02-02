import type { IconType } from "react-icons/lib";
import { Card } from "../common/Card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconType;
  className?: string;
}

export const FeatureCard = ({
  title,
  description,
  icon: Icon,
  className = "",
}: FeatureCardProps) => {
  return (
    <Card containerClassName={`${className}`}>
      <div className="flex flex-col gap-4 md:gap-5">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary p-2 flex items-center justify-center rounded-md">
          <Icon className="w-5 h-5 md:w-10 md:h-10 text-primary" />
        </div>
        <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
          {title}
        </h3>
        <p className="text-sm md:text-base text-gray-600">{description}</p>
      </div>
    </Card>
  );
};
