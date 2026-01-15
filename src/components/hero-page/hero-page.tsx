import Container from '@/components/container/container';
import Section from '@/components/section/section';

type Props = {
  title?: string;
  subtitle?: string;
  pretitle?: string;
  children?: React.ReactNode;
};

const HeroPage = ({ theme, children }: Props) => {
  return (
    <Section role="banner">
      <Container>{children}</Container>
    </Section>
  );
};

export default HeroPage;
