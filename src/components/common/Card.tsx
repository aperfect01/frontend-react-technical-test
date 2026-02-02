interface CardProps {
  containerClassName?: string;
  children?: React.ReactNode;
}

export const Card = ({ children, containerClassName = "" }: CardProps) => {
  return (
    <div
      className={`p-6 bg-white rounded-3xl border-none shadow-2xl/50  ${containerClassName}`}
    >
      {children}
    </div>
  );
};
