import { Header } from "./Header";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="bg-secondary w-full p-4 font-poppins">
      <Header />
      {children}
    </div>
  );
};
