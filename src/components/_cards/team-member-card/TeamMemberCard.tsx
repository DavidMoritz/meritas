import { motion } from 'motion/react';

interface TeamMemberCardProps {
  img: string;
  name: string;
  subTitle: string;
  delay?: number;
  imageScale?: number;
}

const TeamMemberCard = ({
  img,
  name,
  subTitle,
  delay = 0,
  imageScale = 1,
}: TeamMemberCardProps) => (
  <motion.div
    className="group relative overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5, delay }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <div className="mb-4 aspect-square overflow-hidden bg-gray-200">
      <img
        alt={name}
        className="h-full w-full transform object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0 md:grayscale"
        src={img}
        style={{ transform: `scale(${imageScale})` }}
      />
    </div>
    <h4 className="font-black text-2xl text-black uppercase">{name}</h4>
    <p className="font-bold text-gray-500 text-sm uppercase tracking-widest">
      {subTitle}
    </p>
  </motion.div>
);

export default TeamMemberCard;
