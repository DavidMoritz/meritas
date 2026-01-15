import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  scale: number;
}

export const ShootingStars = () => {
  const [star, setStar] = useState<ShootingStar | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const spawnStar = () => {
      // Spawn mainly in the top area, constrained above the text
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * (window.innerHeight * 0.25);
      const scale = 0.5 + Math.random() * 0.7; // 0.5 to 1.2

      const newStar = {
        id: Date.now(),
        x,
        y,
        scale,
      };

      setStar(newStar);

      // Duration of flight is fixed at 1.5s in component, so remove after that
      setTimeout(() => {
        setStar(null);
      }, 1500);

      // Next spawn in 10-25 seconds for "occasional" feel
      const nextDelay = Math.random() * 15_000 + 10_000;
      timeoutId = setTimeout(spawnStar, nextDelay);
    };

    // Start loop
    timeoutId = setTimeout(spawnStar, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      <AnimatePresence>
        {star && <StarItem key={star.id} {...star} />}
      </AnimatePresence>
    </div>
  );
};

const StarItem = ({ x, y, scale }: ShootingStar) => {
  // Shooting direction: steeper angle (approx 55 degrees)
  const moveX = 200;
  const moveY = 300;

  return (
    <motion.div
      animate={{
        x: x + moveX,
        y: y + moveY,
        opacity: [0, 1, 0], // Fade in, then out
      }}
      initial={{ x, y, opacity: 0 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        transform: `scale(${scale}) rotate(55deg)`, // Aligned with the steeper movement vector
      }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      {/* The Star Head */}
      <div className="h-[2px] w-[2px] rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]" />

      {/* The Star Tail */}
      <div className="-translate-y-1/2 -translate-x-[2px] absolute top-1/2 right-0 h-[1px] w-[150px] origin-right bg-gradient-to-l from-white to-transparent" />
    </motion.div>
  );
};
