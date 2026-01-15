import { motion } from 'motion/react';

interface ProjectCardProps {
  img: string;
  category: string;
  name: string;
  delay?: number;
}

const ProjectCard = ({ img, category, name, delay = 0 }: ProjectCardProps) => (
  <motion.div
    className="group relative cursor-pointer overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5, delay }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <div className="mb-6 aspect-[21/9] overflow-hidden rounded-xl bg-black">
      <img
        alt={name}
        className="h-full w-full transform object-cover object-center transition-all duration-500 group-hover:scale-105"
        src={img}
      />
    </div>
    <p className="mb-2 font-bold text-red-600 text-sm uppercase tracking-widest">
      {category}
    </p>
    <h4 className="font-black text-3xl text-black uppercase md:text-4xl">
      {name}
    </h4>
  </motion.div>
);

export default ProjectCard;
