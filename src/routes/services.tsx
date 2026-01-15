import { createFileRoute, Link, useLocation } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import imgServicesHero from '@/assets/imgHeroBackground.png';
import { Main } from '@/components/main/Main.tsx';
import { ShootingStars } from '@/components/shooting-stars/ShootingStars.tsx';

export const Route = createFileRoute('/services')({
  component: RouteComponent,
});

const SERVICES_DATA = [
  {
    id: 'strategy',
    title: 'Strategy',
    subtitle: 'Clarity & Structure',
    description:
      'Aligning strategy, sequencing, and investment for maximum impact with minimal waste.',
    tags: ['Audit', 'Align', 'Guide', 'Forecast'],
    deliverables: [
      {
        title: 'Audit',
        desc: 'We assess your current environment, systems and processes to understand where you are today.',
      },
      {
        title: 'Align',
        desc: 'We work with stakeholders to ensure digital initiatives align with broader business goals.',
      },
      {
        title: 'Guide',
        desc: 'We help prioritize and sequence initiatives for maximum impact and minimal waste.',
      },
      {
        title: 'Forecast',
        desc: 'We create phased roadmaps that provide clarity on timelines, resources and investment.',
      },
    ],
  },
  {
    id: 'development',
    title: 'Development',
    subtitle: 'Enterprise Application Development',
    description:
      'Modernizing infrastructure or creating custom solutions from scratch.',
    tags: [
      'Documenting existing systems',
      'Developing custom solutions',
      'Replatforming',
      'Expert guidance',
    ],
    deliverables: [
      {
        title: 'Discover',
        desc: 'We document existing systems, understand business requirements, and identify opportunities for improvement.',
      },
      {
        title: 'Architect',
        desc: 'We design scalable, maintainable solutions that integrate with your existing infrastructure.',
      },
      {
        title: 'Build',
        desc: 'We develop custom front-end and back-end solutions using modern technologies and best practices.',
      },
      {
        title: 'Deploy',
        desc: 'We implement CI/CD pipelines and containerized deployments for reliable, repeatable releases.',
      },
    ],
  },
  {
    id: 'design',
    title: 'Design',
    subtitle: 'Digital Experience Design',
    description:
      'Intuitive, accessible, and scalable UX across web, mobile, and platform experiences.',
    tags: [
      'Full-spectrum UX audits',
      'Wireframes/prototypes',
      'Design systems',
      'Accessibility compliance',
    ],
    deliverables: [
      {
        title: 'Research',
        desc: 'We conduct full-spectrum UX audits and user research to understand needs and pain points.',
      },
      {
        title: 'Design',
        desc: 'We create wireframes, prototypes, and interface designs that balance aesthetics with usability.',
      },
      {
        title: 'Systematize',
        desc: 'We build scalable design systems with reusable components and clear documentation.',
      },
      {
        title: 'Validate',
        desc: 'We ensure WCAG/ADA compliance and test with real users to validate the experience.',
      },
    ],
  },
  {
    id: 'data-ai', // "Data & AI" mapped to slug
    title: 'Data & AI',
    subtitle: 'Data & Intelligence Solutions',
    description:
      'Maximizing data value through warehousing, analytics, and business intelligence.',
    tags: [
      'Data strategy and architecture',
      'Data warehousing',
      'Business intelligence',
      'Interactive dashboards',
    ],
    deliverables: [
      {
        title: 'Assess',
        desc: 'We evaluate your current data landscape and define a strategy for maximizing data value.',
      },
      {
        title: 'Architect',
        desc: 'We design data warehousing solutions and establish data governance frameworks.',
      },
      {
        title: 'Implement',
        desc: 'We build data pipelines, implement business intelligence tools, and develop analytics capabilities.',
      },
      {
        title: 'Visualize',
        desc: 'We create interactive dashboards and reporting systems that turn data into actionable insights.',
      },
    ],
  },
  {
    id: 'staff', // "Staff Augmentation" mapped to slug
    title: 'Staff',
    subtitle: 'Staff Augmentation',
    description:
      "Specialized, vetted talent who integrate seamlessly to expand your team's capabilities.",
    tags: [
      'Senior-level expertise',
      'Seamless integration',
      'No momentum loss',
    ],
    deliverables: [
      {
        title: 'Understand',
        desc: 'We meet with your team to understand your needs, culture, and technical requirements.',
      },
      {
        title: 'Match',
        desc: 'We identify senior-level talent from our network who have the right expertise and fit.',
      },
      {
        title: 'Integrate',
        desc: 'We onboard specialists who work directly with your team using your processes and tools.',
      },
      {
        title: 'Deliver',
        desc: 'We provide ongoing support and ensure the augmented team delivers results without losing momentum.',
      },
    ],
  },
];

function RouteComponent() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const location = useLocation();

  // Auto-expand accordion based on hash in URL
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Remove the # from the hash
      const serviceId = hash.startsWith('#') ? hash.slice(1) : hash;

      // Check if the service ID exists in SERVICES_DATA
      const serviceExists = SERVICES_DATA.some(s => s.id === serviceId);

      if (serviceExists) {
        // Set expanded state to auto-open the accordion
        setExpanded(serviceId);
      }
    }
  }, [location.hash]);

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
          {/* Optional Gradient for readability if needed but not requested */}
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
                    ease: [0.16, 1, 0.3, 1], // Custom quint-like ease for premium feel
                  },
                },
              }}
            >
              Services.
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
          >
            We're the digital heavyweights you call when 'good enough' isn't an
            option. We build complex products that feel simple, freeing you up
            to focus on innovation and growth for your business.
          </motion.p>
        </motion.div>
      </div>

      {/* Content Section (Accordions) */}
      <div className="relative z-10 mx-auto max-w-480 px-6 pb-24 md:px-12">
        <div className="flex flex-col border-[#444444] border-t">
          {SERVICES_DATA.map(service => (
            <div
              className="scroll-mt-20 border-[#444444] border-b"
              id={service.id}
              key={service.id}
            >
              {/* Header */}
              <button
                aria-controls={`${service.id}-content`}
                aria-expanded={expanded === service.id}
                className="group relative w-full cursor-pointer overflow-hidden py-12 text-left"
                onClick={() =>
                  setExpanded(expanded === service.id ? null : service.id)
                }
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setExpanded(expanded === service.id ? null : service.id);
                  }
                }}
                type="button"
              >
                <div className="relative z-10 flex w-full flex-col justify-between gap-8 px-4 md:flex-row md:items-start md:px-0">
                  {/* Left Column: Title */}
                  <div className="shrink-0 md:w-65">
                    <h2 className="font-bold text-lg text-white uppercase tracking-tight">
                      {service.title}
                    </h2>
                  </div>

                  {/* Middle Column: Subtitle + Description */}
                  <div className="flex flex-1 flex-col gap-2 pr-12 md:pr-0">
                    <h3 className="font-semibold text-3xl text-white tracking-tight">
                      {service.subtitle}
                    </h3>
                    <p className="max-w-2xl font-normal text-2xl text-[#797979] leading-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Right Column: Arrow */}
                  <div className="absolute top-12 right-0 flex shrink-0 justify-end pr-4 md:relative md:top-auto md:w-25 md:pr-0">
                    <motion.div
                      animate={{ rotate: expanded === service.id ? 90 : 0 }}
                      className="flex h-14 w-14 items-center justify-center rounded-full text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#ec4a4a]"
                    >
                      <ArrowUpRight className="h-8 w-8" strokeWidth={1.5} />
                    </motion.div>
                  </div>
                </div>
              </button>

              {/* Content */}
              <AnimatePresence>
                {expanded === service.id && (
                  <motion.div
                    animate={{ height: 'auto', opacity: 1 }}
                    aria-labelledby={service.id}
                    className="overflow-hidden"
                    exit={{ height: 0, opacity: 0 }}
                    id={`${service.id}-content`}
                    initial={{ height: 0, opacity: 0 }}
                    role="region"
                    transition={{ duration: 0.5, ease: 'circOut' }}
                  >
                    <div className="px-4 pb-16 md:px-0 md:pb-24 md:pl-73">
                      {/* Tags */}
                      <div className="mb-12">
                        <h4 className="mb-4 text-2xl text-white">
                          <span className="font-bold">
                            What we're good at:{' '}
                          </span>
                          <span className="font-normal text-gray-300">
                            {service.tags.join(', ')}
                          </span>
                        </h4>
                      </div>

                      {/* Deliverables Grid */}
                      <div className="mb-12">
                        <h4 className="mb-8 border-[#444444] border-b pb-4 font-bold text-2xl text-white">
                          What We Deliver
                        </h4>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                          {service.deliverables.map(item => (
                            <div key={item.title}>
                              <h5 className="mb-4 font-bold text-2xl text-white uppercase">
                                {item.title}
                              </h5>
                              <p className="text-[#797979] text-lg leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="">
                        <Link
                          className="inline-block rounded-full bg-red-600 px-6 py-5 font-black text-base text-white uppercase tracking-widest transition-all hover:scale-105 hover:bg-white hover:text-black md:px-8 md:py-6 md:text-lg"
                          to="/contact"
                        >
                          Start Your Project <span className="ml-2">→</span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
}
