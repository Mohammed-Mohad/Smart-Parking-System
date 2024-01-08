interface HeadingProps {
    title: string;
  }
  
  const Heading = ({ title }: HeadingProps) => {
    return (
      <h2 className="text-3xl font-bold text-gray-800 ">{title}</h2>
    );
  };
  
  export default Heading;