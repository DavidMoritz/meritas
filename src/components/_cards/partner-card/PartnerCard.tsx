interface PartnerCardProps {
  logo: string;
  alt: string;
  url: string;
  maxHeight?: string;
}

const PartnerCard = ({
  logo,
  alt,
  url,
  maxHeight = 'max-h-26',
}: PartnerCardProps) => (
  <a
    className="group relative flex h-47 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#f3f8fc] p-8 transition-all hover:bg-white"
    href={url}
    rel="noopener noreferrer"
    target="_blank"
  >
    <img
      alt={alt}
      className={`${maxHeight} w-auto object-contain mix-blend-luminosity transition-transform duration-500 group-hover:scale-110`}
      src={logo}
    />
  </a>
);

export default PartnerCard;
