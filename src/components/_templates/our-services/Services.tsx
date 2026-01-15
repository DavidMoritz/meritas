import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 'strategy',
      title: 'Strategy',
      desc: 'Aligning strategy, sequencing, and investment.',
    },
    {
      id: 'development',
      title: 'Development',
      desc: 'Custom enterprise applications and modernization.',
    },
    {
      id: 'design',
      title: 'Design',
      desc: 'Intuitive, accessible and scalable digital experiences.',
    },
    {
      id: 'data-ai',
      title: 'Data & AI',
      desc: 'Maximizing data value and integrity through analytics.',
    },
  ];

  return (
    <section
      className="-mt-12 relative z-10 rounded-t-[2rem] bg-black px-6 py-20 text-white md:rounded-t-[3rem] md:px-12 md:py-40"
      id="services"
    >
      <div className="mx-auto max-w-[1920px]">
        <div className="mb-12 flex flex-col items-start justify-between border-white/20 border-b pb-12 md:mb-24 md:flex-row md:items-end">
          <h2 className="font-black text-5xl uppercase tracking-tighter md:text-8xl">
            Our
            <br />
            <span className="text-red-600">Services</span>
          </h2>
          <p className="mt-8 max-w-md text-left text-gray-400 text-lg md:mt-0 md:text-right md:text-2xl">
            Comprehensive digital solutions tailored to your business needs.
          </p>
        </div>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <Link
              className="group relative cursor-pointer overflow-hidden border-white/20 border-b py-8 md:py-16"
              hash={service.id}
              key={service.id}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              to="/services"
            >
              <div className="relative z-10 flex flex-col items-start justify-between transition-transform duration-500 group-hover:translate-x-0 md:flex-row md:items-center md:group-hover:translate-x-8">
                <h3 className="w-full break-words font-bold text-4xl uppercase tracking-tight transition-colors duration-300 group-hover:text-black md:w-auto md:text-7xl">
                  {service.title}
                </h3>
                <div className="mt-4 flex items-center gap-2 opacity-100 transition-opacity duration-300 md:mt-0 md:pr-12 md:opacity-0 md:group-hover:opacity-100">
                  <span className="font-bold text-gray-400 text-lg md:text-black md:text-xl">
                    {service.desc}
                  </span>
                  <ArrowUpRight className="h-6 w-6 text-white transition-all duration-300 hover:text-red-600 md:h-10 md:w-10 md:text-black" />
                </div>
              </div>

              {/* Hover Background Reveal - Hidden on mobile to prevent stuck hover states */}
              <motion.div
                animate={{ height: hoveredService === index ? '100%' : '0%' }}
                className="absolute inset-0 z-0 hidden w-full bg-white md:block"
                initial={{ height: 0 }}
                transition={{ duration: 0.4, ease: 'circOut' }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
