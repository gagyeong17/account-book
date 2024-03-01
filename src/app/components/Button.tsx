interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}
const Button = ({ children, type = "submit" }: ButtonProps) => {
  return (
    <button
      type={type}
      className="text-gray-500 bg-sky-100 rounded-md w-full h-12 hover:bg-sky-200 active:bg-sky-200 border-none"
    >
      {children}
    </button>
  );
};

export default Button;
