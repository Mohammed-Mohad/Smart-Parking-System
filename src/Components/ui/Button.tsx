interface ButtonProps {
  children?: string;
  onClick?: () => void;
  disabled?: boolean;
}
const Button = ({ children,onClick,disabled }: ButtonProps) => {
  return (
    <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-5 rounded-lg mt-2 " onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
