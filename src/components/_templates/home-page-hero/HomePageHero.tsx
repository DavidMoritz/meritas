import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import imgHeroBackground from '@/assets/imgHeroBackground.png';

const HomePageHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.25]);
  const letterSpacing = useTransform(
    scrollYProgress,
    [0, 0.8],
    ['-0.05em', '0.02em']
  );

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className="relative flex h-screen w-full flex-col justify-center overflow-hidden bg-black py-8 text-white md:h-[110vh] md:justify-end md:py-0 md:pb-48"
      ref={ref}
    >
      {/* Video Background with Timelapse Overlay */}
      <motion.div className="absolute inset-0 h-full w-full" style={{ y }}>
        <motion.img
          alt="Background"
          animate={{ scale: [1.1, 1.2] }}
          className="h-full w-full object-cover"
          src={imgHeroBackground}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse',
            ease: 'linear',
          }}
        />

        {/* Stars (Timelapse Effect) */}
        <motion.div
          animate={{ rotate: 360 }}
          className="absolute inset-0 z-0"
          transition={{
            rotate: {
              duration: 60,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            },
          }}
        >
          {/* Generating 250 stars for a 150% increase */}
          {[...Array(250)].map((_, i) => (
            <div
              className="absolute rounded-full bg-white mix-blend-screen"
              key={i}
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.5, // Increased clarity (0.5 to 1.0)
                boxShadow: `0 0 ${Math.random() * 3 + 1}px white`,
              }}
            />
          ))}
        </motion.div>

        {/* Shooting Stars */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            animate={{
              x: ['0%', '-200%'],
              y: ['0%', '200%'],
              opacity: [0, 1, 0],
            }}
            className="absolute z-0 h-px bg-linear-to-r from-transparent via-white to-transparent"
            key={`shooting-${i}`}
            style={{
              top: `${Math.random() * 40}%`,
              left: `${Math.random() * 20 + 80}%`,
              width: '100px',
              rotate: '135deg',
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: Math.random() * 10 + 5,
              ease: 'easeOut',
              delay: Math.random() * 10,
            }}
          />
        ))}

        {/* Moon Element (Moon Glow) */}
        <motion.div
          animate={{
            y: ['-100%', '200%'],
            opacity: [0, 0.4, 0.4, 0],
          }}
          className="-translate-x-1/2 absolute top-0 left-1/2 h-[30vw] w-[30vw] rounded-full bg-linear-to-b from-blue-50 via-blue-900 to-transparent opacity-30 mix-blend-screen blur-[80px]"
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          }}
        />

        {/* Moonlight Overlay */}
        <motion.div
          animate={{
            backgroundColor: [
              '#000000',
              '#0f172a',
              '#1e1b4b',
              '#0f172a',
              '#000000',
            ], // Black -> Slate -> Indigo -> Slate -> Black
            opacity: [0.6, 0.3, 0.4, 0.3, 0.6],
          }}
          className="absolute inset-0 mix-blend-overlay"
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          }}
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/40" />
      </motion.div>

      {/* Massive Typographic Hero */}
      <div className="pointer-events-none relative z-20 mx-auto w-full max-w-480 px-4 md:px-12">
        <motion.div style={{ y: textY, opacity: textOpacity }}>
          <motion.h1
            className="text-center font-black text-[10vw] text-white uppercase leading-[0.9] drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] md:text-left md:text-[10vw] md:leading-[0.85]"
            style={{ letterSpacing }}
          >
            Custom
            <br />
            <span className="text-white">Solutions.</span>
            <br />
            <span className="text-red-500">Built to Last.</span>
          </motion.h1>
        </motion.div>
      </div>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="absolute right-0 bottom-12 left-0 z-30 flex justify-center md:right-12 md:left-auto md:block"
        initial={{ opacity: 0, y: 100 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="flex flex-col items-center gap-4 md:items-end">
          <p className="max-w-50 text-center font-bold text-gray-400 text-xs uppercase tracking-widest md:text-right md:text-sm">
            Digital Transformation
            <br />
            Delivered by Experts
          </p>
          <button
            aria-label="Scroll to services section"
            className="group flex h-16 w-16 items-center justify-center rounded-full bg-white text-black transition-all duration-300 hover:bg-red-600 hover:text-white md:h-32 md:w-32"
            onClick={scrollToServices}
            type="button"
          >
            <ArrowRight className="-rotate-45 h-6 w-6 transition-transform duration-300 group-hover:rotate-0 md:h-12 md:w-12" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePageHero;
