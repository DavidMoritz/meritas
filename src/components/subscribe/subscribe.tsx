import NewsletterForm from 'pliny/ui/NewsletterForm';
import SectionContainer from '@/components/section-container/section-container';
import siteMetadata from '@/data/siteMetadata';

export default function Subscribe() {
  if (!siteMetadata.newsletter?.provider) return null;

  return (
    <SectionContainer>
      <div className="flex items-center justify-center pt-4">
        <NewsletterForm />
      </div>
    </SectionContainer>
  );
}
