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
    <Card containerClassName={className}>
      <div className="flex flex-col gap-5">
        <div className="w-16 h-16 bg-secondary p-2 flex items-center justify-center">
          <Icon className="size-10 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Card>
  );
};
