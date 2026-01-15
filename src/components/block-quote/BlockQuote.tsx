import { motion } from 'motion/react';

const BlockQuote = () => {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-black py-24 text-white md:min-h-[60vh] md:py-40">
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <h2 className="font-black text-3xl uppercase leading-tight tracking-tighter md:text-7xl">
            "If you don't have time to do it{' '}
            <span className="text-red-600">right</span>, when will you have time
            to do it <span className="text-red-600">over</span>?"
          </h2>
          <p className="mt-8 font-bold text-gray-500 text-lg uppercase tracking-widest md:mt-12 md:text-xl">
            - John Wooden
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlockQuote;
