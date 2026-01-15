import { Link, useLocation } from '@tanstack/react-router';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import Icon from '@/components/Icon/Icon.tsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/services') {
      e.preventDefault();
      document.body.scrollTop = 0;
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      document.body.scrollTop = 0;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(document.body.scrollTop > 50);
    };
    document.body.addEventListener('scroll', handleScroll);
    return () => document.body.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      animate={{ y: 0 }}
      className={`fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 md:px-12 md:py-6 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'} text-white mix-blend-difference`}
      initial={{ y: -100 }}
      transition={{ duration: 0.6, ease: 'circOut' }}
    >
      <Link
        className="flex items-center gap-2"
        onClick={handleHomeClick}
        to="/"
      >
        <img
          alt="Meritas"
          className="font-black font-sans text-2xl uppercase tracking-tighter"
          src="/images/meritas-logo-white.svg"
        />
      </Link>

      <div className="hidden items-center gap-12 font-bold text-sm uppercase tracking-widest md:flex">
        <Link
          className="text-white/75 transition-colors hover:text-white"
          onClick={handleServicesClick}
          to="/services"
        >
          Services
        </Link>
        {/*<a href="#work" className="text-white/75 hover:text-white transition-colors">Work</a>*/}
        {/*<a href="#about" className="text-white/75 hover:text-white transition-colors">About</a>*/}
        <Link
          className="rounded-full bg-red-600 px-8 py-3 font-black text-white text-xs uppercase tracking-widest transition-all hover:scale-105 hover:bg-white hover:text-black"
          to="/contact"
        >
          Let's Talk
        </Link>
      </div>

      <button
        className="text-white md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        {isOpen ? <Icon icon="x" /> : <Icon icon="list" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 z-50 flex h-screen w-screen flex-col items-center justify-center gap-12 bg-black md:hidden">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            <Icon icon="x" />
          </button>
          <Link
            className="font-black text-4xl text-white uppercase tracking-tighter"
            onClick={e => {
              handleServicesClick(e);
              setIsOpen(false);
            }}
            to="/services"
          >
            Services
          </Link>
          {/*<a*/}
          {/*	href="#work"*/}
          {/*	className="text-white text-4xl font-black uppercase tracking-tighter"*/}
          {/*	onClick={() => setIsOpen(false)}*/}
          {/*>*/}
          {/*	Work*/}
          {/*</a>*/}
          {/*<a*/}
          {/*	href="#about"*/}
          {/*	className="text-white text-4xl font-black uppercase tracking-tighter"*/}
          {/*	onClick={() => setIsOpen(false)}*/}
          {/*>*/}
          {/*	About*/}
          {/*</a>*/}
          <Link
            className="w-2/3 rounded-full bg-red-600 py-6 font-bold text-white text-xl"
            to="/contact"
          >
            Contact Us
          </Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
