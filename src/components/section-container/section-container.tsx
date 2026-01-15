import Container from '@/components/container/container';
import Section from '@/components/section/section';

interface Props {
  theme?: 'default' | 'red' | 'blue' | 'deep-blue' | 'slate' | 'vertical-grad';
  children: React.ReactNode;
}

export default function SectionContainer({ theme, children }: Props) {
  return (
    <Section theme={theme}>
      <Container>{children}</Container>
    </Section>
  );
}
