import { Link, useLocation } from '@tanstack/react-router';

const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <footer className="-mt-12 relative z-20 rounded-t-[2rem] bg-black px-6 pt-24 pb-12 text-white md:rounded-t-[3rem] md:px-12 md:pt-40">
      <div className="mx-auto max-w-[1920px]">
        <div
          className={`flex flex-col items-start gap-12 border-white/20 border-b pb-16 md:gap-20 md:pb-32 lg:flex-row ${isContactPage ? 'justify-end' : 'justify-between'}`}
        >
          {!isContactPage && (
            <div className="w-full flex-1">
              <h2 className="mb-8 font-black text-[12vw] uppercase leading-none tracking-tighter md:mb-12 md:text-[10vw]">
                Let's
                <br />
                Build.
              </h2>
              <Link
                className="w-full rounded-full bg-red-600 px-12 py-8 font-bold text-white text-xl uppercase tracking-widest transition-all hover:bg-white hover:text-black md:w-auto md:py-10 md:text-2xl"
                to="/contact"
              >
                Start Project
              </Link>
            </div>
          )}

          <div className="flex w-full flex-col gap-12 text-left md:flex-row md:gap-20 lg:w-auto lg:gap-32">
            <div>
              <h4 className="mb-6 font-bold text-gray-500 uppercase tracking-widest">
                Socials
              </h4>
              <ul className="space-y-4 font-bold text-lg md:text-xl">
                <li>
                  <a
                    className="transition-colors hover:text-red-500"
                    href="https://www.linkedin.com/company/meritas-digital"
                    rel="noopener"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-red-500"
                    href="https://x.com/meritasdigital"
                    rel="noopener"
                    target="_blank"
                  >
                    X
                  </a>
                </li>
                <li className="hidden">
                  <a
                    className="transition-colors hover:text-red-500"
                    href="https://instagram.com/meritasdigital"
                    rel="noopener"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 font-bold text-gray-500 uppercase tracking-widest">
                Contact Information
              </h4>
              <div className="space-y-6">
                <div>
                  <p className="mb-2 text-gray-500 text-xs uppercase tracking-widest">
                    Email
                  </p>
                  <a
                    className="font-mono text-white text-xl transition-colors hover:text-red-500 md:text-2xl"
                    href="mailto:contact@meritasdigital.com"
                  >
                    contact@meritasdigital.com
                  </a>
                </div>
                <div>
                  <p className="mb-2 text-gray-500 text-xs uppercase tracking-widest">
                    Phone
                  </p>
                  <a
                    className="font-mono text-white text-xl transition-colors hover:text-red-500 md:text-2xl"
                    href="tel:+12144606863"
                  >
                    +1 (214) 460-6863
                  </a>
                </div>
                <div>
                  <p className="mb-2 text-gray-500 text-xs uppercase tracking-widest">
                    Address
                  </p>
                  <p className="font-bold text-white text-xl md:text-2xl">
                    Dallas, TX
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between text-center font-bold text-gray-500 text-sm uppercase tracking-widest md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Meritas Digital.</p>
          <p className="mt-4 md:mt-0">Designed & Built in Texas</p>
        </div>
      </div>

      {/* Background Texture */}
      {/*<div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay z-[-1]">*/}
      {/*	<img src={imgMeritasMountain3} className="w-full h-full object-cover" alt="" />*/}
      {/*</div>*/}
    </footer>
  );
};

export default Footer;
