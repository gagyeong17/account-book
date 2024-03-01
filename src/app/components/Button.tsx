interface ButtonProps {
  children: React.ReactNode;
}
const Button = ({ children }: ButtonProps) => {
  return (
    <button className="text-gray-500 bg-sky-100 rounded-md w-full h-12 hover:bg-sky-200 active:bg-sky-200 border-none">
      {children}
    </button>
  );
};

export default Button;
