interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const Button = ({ label, onClick, className }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 bg-primary text-white rounded hover:bg-transparent hover:text-primary border-2 border-primary transition-colors duration-300 font-poppins ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
