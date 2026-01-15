import { Link } from '@tanstack/react-router';
import imgProjectValuTeachers from '@/assets/imgProjectValuTeachers.jpeg';
import imgProjectYoungLife from '@/assets/imgProjectYoungLife.jpeg';
import ProjectCard from '@/components/_cards/project-card/ProjectCard.tsx';

const SelectedWork = () => {
  return (
    <section className="bg-[#F5F5F5] py-20 md:py-32">
      <div className="mx-auto max-w-480 px-6 md:px-12">
        <div className="mb-12 flex flex-col items-start justify-between md:mb-16 md:flex-row md:items-center">
          <h2 className="font-black text-5xl text-black uppercase tracking-tighter md:text-8xl">
            Selected
            <br />
            Work
          </h2>
          <Link
            className="mt-6 rounded-full bg-red-600 px-8 py-4 font-bold text-lg text-white uppercase tracking-widest transition-all hover:bg-black md:mt-0"
            to="/work"
          >
            All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <ProjectCard
            category="Data Engineering"
            delay={0.1}
            img={imgProjectValuTeachers}
            name="ValuTeachers"
          />
          <ProjectCard
            category="App Development"
            delay={0.2}
            img={imgProjectYoungLife}
            name="Young Life"
          />
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
