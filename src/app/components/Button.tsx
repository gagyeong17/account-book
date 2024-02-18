interface ButtonProps {
  children: React.ReactNode;
}
const Button = ({ children }: ButtonProps) => {
  return (
    <button className=" bg-sky-100 rounded-md w-full h-12 text-black hover:bg-sky-200 active:bg-sky-200 border-none">
      {children}
    </button>
  );
};

export default Button;
