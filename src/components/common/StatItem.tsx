interface StatItemProps {
  imageSrc?: string;
  label: string;
  value: string;
  className?: string;
  imageContainerClassName?: string;
}

export const StatItem = ({
  imageSrc,
  label,
  value,
  className,
  imageContainerClassName,
}: StatItemProps) => {
  return (
    <div className={`flex flex-row items-center gap-5 ${className}`}>
      <div
        className={`bg-white shadow-lg rounded-md p-4 mb-2 ${imageContainerClassName}`}
      >
        {imageSrc && <img src={imageSrc} alt={label} className="w-8 h-8" />}
      </div>
      <div className="flex flex-col items-baseline">
        <span className="text-xl font-semibold">{value}</span>
        <span className="text-sm">{label}</span>
      </div>
    </div>
  );
};
