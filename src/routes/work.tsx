import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'motion/react';
import imgServicesHero from '@/assets/imgHeroBackground.png';
import Partners from '@/components/_templates/partners/Partners.tsx';
import { Main } from '@/components/main/Main.tsx';
import { ShootingStars } from '@/components/shooting-stars/ShootingStars.tsx';

export const Route = createFileRoute('/work')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Main>
      {/* Hero Section */}
      <div className="relative flex h-[80vh] w-full flex-col justify-center px-6 md:h-screen md:px-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            alt="Background"
            animate={{ opacity: 1, scale: 1 }}
            className="h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            src={imgServicesHero}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </div>

        <ShootingStars />

        {/* Title Content */}
        <motion.div
          animate="visible"
          className="relative z-10 mx-auto mt-24 w-full max-w-480"
          initial="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
              },
            },
          }}
        >
          <div className="mb-8 overflow-hidden">
            <motion.h1
              className="origin-bottom-left font-semibold text-[12vw] leading-none tracking-[-4px] md:text-[100px] md:leading-[1.1]"
              variants={{
                hidden: { y: '100%' },
                visible: {
                  y: 0,
                  transition: {
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              Projects.
            </motion.h1>
          </div>

          <motion.p
            className="max-w-2xl font-semibold text-gray-300 text-xl leading-normal tracking-tight md:text-[32px] md:leading-11"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: 'easeOut',
                },
              },
            }}
          />
        </motion.div>
      </div>

      {/* Partners Section */}
      <Partners />
    </Main>
  );
}
