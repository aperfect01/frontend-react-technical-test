interface CardProps {
  containerClassName?: string;
  children?: React.ReactNode;
}

export const Card = ({ children, containerClassName = "" }: CardProps) => {
  return (
    <div
      className={`p-6 bg-white rounded-lg shadow-md border border-gray-200 font-poppins ${containerClassName}`}
    >
      {children}
    </div>
  );
};
