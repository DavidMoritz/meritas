import { motion } from 'motion/react';
import { useState } from 'react';
import heroImage from '@/assets/imgHeroBackground3.png';

const ContactPageHero = () => {
  const [_, setImageLoaded] = useState(false);

  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden px-6 pt-32 pb-24 md:px-20 md:pt-40"
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="absolute inset-0 z-0">
        <motion.img
          alt="Background"
          animate={{ opacity: 1, scale: 1 }}
          className="h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          onLoad={() => setImageLoaded(true)}
          src={heroImage}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="origin-bottom-left font-semibold text-[12vw] leading-none tracking-[-4px] md:text-[100px] md:leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Let's Build
          <br />
          Something Great.
        </motion.h1>
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl text-[18px] text-white/90 leading-[1.3] tracking-[-0.02em] md:text-[24px] lg:text-[32px]"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Tell us about your project, your needs and how we can help.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ContactPageHero;
