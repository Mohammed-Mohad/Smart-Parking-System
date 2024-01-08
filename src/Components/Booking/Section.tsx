interface SectionProps {
    children?: React.ReactNode;
  }
  
  const Section = ({ children }: SectionProps) => {
    return (
      <section className="flex flex-col items-center justify-center w-full p-6 space-y-6">
        {children}
      </section>
    );
  };
  
  export default Section;