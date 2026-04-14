interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`border border-red-900 p-6 rounded-lg shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;