import { Card } from "../common/Card";

interface FeatureCardProps {
  title: string;
  description: string;
  iconSrc: string;
  className?: string;
}

export const FeatureCard = ({
  title,
  description,
  iconSrc,
  className = "",
}: FeatureCardProps) => {
  return (
    <Card containerClassName={className}>
      <div className="flex flex-col gap-5">
        <img
          src={iconSrc}
          alt={`${title} icon`}
          className="w-16 h-16 bg-secondary p-5"
        />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Card>
  );
};
