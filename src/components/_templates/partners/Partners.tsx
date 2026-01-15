import imgLogoOES from '@/assets/imgLogoOES.png';
import imgLogoRiskVerifi from '@/assets/imgLogoRiskVerifi.png';
import imgLogoTowerStreetInsurance from '@/assets/imgLogoTowerStreetInsurance.png';
import imgLogoUltimateMatchmaker from '@/assets/imgLogoUltimateMatchmaker.png';
import imgLogoValuTeachers from '@/assets/imgLogoValuTeachers.png';
import imgLogoYoungLife from '@/assets/imgLogoYoungLife.png';
import PartnerCard from '@/components/_cards/partner-card/PartnerCard.tsx';

const Partners = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-[#080f17] to-[#000000]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <p className="mb-16 text-center font-bold text-base text-white uppercase tracking-widest md:text-lg">
          Trusted by Purpose-Driven Brands
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PartnerCard
            alt="Tower Street Insurance"
            logo={imgLogoTowerStreetInsurance}
            url="https://towerstreetinsurance.com/"
          />
          <PartnerCard
            alt="Young Life"
            logo={imgLogoYoungLife}
            url="https://www.younglife.org/"
          />
          <PartnerCard
            alt="ValuTeachers"
            logo={imgLogoValuTeachers}
            maxHeight="max-h-16"
            url="https://www.valuteachers.com/"
          />
          <PartnerCard
            alt="Ultimate Matchmaker"
            logo={imgLogoUltimateMatchmaker}
            maxHeight="max-h-15.25"
            url="https://theultimatematchmaker.com/"
          />
          <PartnerCard
            alt="RiskVerifi"
            logo={imgLogoRiskVerifi}
            maxHeight="max-h-27.5"
            url="https://riskverifi.com/"
          />
          <PartnerCard
            alt="OES"
            logo={imgLogoOES}
            maxHeight="max-h-16"
            url="http://oesincorp.com/"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
