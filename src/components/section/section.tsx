type Props = {
  theme?: 'default' | 'red' | 'blue' | 'deep-blue' | 'slate' | 'hero';
  role?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
};

const Section = ({ role, theme, backgroundImage, children }: Props) => {
  let sectionClass = 'py-20 bg-cover bg-center';

  switch (theme) {
    case 'red':
      sectionClass += ' bg-primary-500';
      break;
    case 'blue':
      sectionClass += ' bg-blue-500';
      break;
    case 'deep-blue':
      sectionClass += ' bg-blue-700';
      break;
    case 'slate':
      sectionClass += ' bg-gray-50';
      break;
    case 'hero':
      sectionClass += ' py-40';
      break;
  }

  return (
    <section
      className={sectionClass}
      role={role}
      style={{ background: `url(${backgroundImage})` }}
    >
      {children}
    </section>
  );
};

export default Section;
