import Image from '@/components/Image';
import SectionContainer from '@/components/section-container/section-container';
import SectionTitle from '@/components/section-title/section-title';

export default function ClientGallery() {
  return (
    <SectionContainer>
      <SectionTitle>Our Clients</SectionTitle>

      <div className="grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-4">
        <div className="flex w-full items-center justify-center p-6">
          <Image
            alt="Tower Street Insurance"
            className="h-auto w-full"
            height={99.551}
            loading="lazy"
            src="/client-logos/tower-street-insurance-logo.svg"
            width={258.926}
          />
        </div>

        <div className="flex w-full items-center justify-center p-6">
          <Image
            alt="Risk Verifi"
            className="h-auto w-full"
            height={80}
            loading="lazy"
            src="/client-logos/risk-verifi-logo.svg"
            width={200}
          />
        </div>

        <div className="flex w-full items-center justify-center p-6">
          <span className="font-semibold text-gray-700 text-lg">
            Young Life
          </span>
        </div>

        <div className="flex w-full items-center justify-center p-6">
          <span className="font-semibold text-gray-700 text-lg">
            Optech Enterprise Solutions
          </span>
        </div>
      </div>
    </SectionContainer>
  );
}
