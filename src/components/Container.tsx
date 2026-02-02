interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-7xl mx-auto p-4 font-poppins">{children}</div>;
};
