import { useMemo, useRef } from 'react';

interface HeroProps {
  theme?: 'dark' | 'light';
  children?: React.ReactNode;
}

const Hero = (props: HeroProps) => {
  const ref = useRef(null);

  /**
   * A computed string of CSS classes used to style a container element.
   * The class string is dynamically generated based on the selected theme (`dark` or `light`)
   * provided in the `props.theme`, and includes base layout styling.
   */
  const classString = useMemo(() => {
    const classes = [
      'relative',
      'w-full',
      'h-[110vh]',
      'overflow-hidden',
      'flex flex-col',
      'justify-center',
      'md:justify-end',
      'pb-0',
      'md:pb-48',
    ];

    // ADD THEME CLASS
    switch (props.theme) {
      case 'dark':
        classes.push('bg-black', 'text-white');
        break;
      case 'light':
        classes.push('bg-white', 'text-black');
        break;
      default:
        classes.push('bg-black', 'text-white');
        break;
    }

    return classes.toString().replace(/,/g, ' ');
  }, [props.theme]);

  return (
    <section className={classString} ref={ref}>
      {props.children}
    </section>
  );
};

export default Hero;
