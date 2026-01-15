import imgTeamCarlLutz from '@/assets/imgTeamCarlLutz.png';
import imgTeamDrew from '@/assets/imgTeamDrew.png';
import imgTeamJessicaReid from '@/assets/imgTeamJessicaReid.png';
import imgTeamTimHardy from '@/assets/imgTeamTimHardy.png';
import TeamMemberCard from '@/components/_cards/team-member-card/TeamMemberCard.tsx';

const Team = () => {
  return (
    <section className="bg-[#F5F5F5] py-20 md:py-32">
      <div className="mx-auto max-w-480 px-6 md:px-12">
        <div className="mb-12 flex flex-col items-start justify-between md:mb-24 md:flex-row md:items-end">
          <h2 className="font-black text-5xl text-black uppercase tracking-tighter md:text-8xl">
            Invested
            <br />
            Partnership
          </h2>
          <p className="mt-6 max-w-sm text-left font-bold text-gray-500 text-lg md:mt-0 md:text-right md:text-xl">
            We treat your business like it's our own. Senior-only
            expertise—Decades of Shared Experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <TeamMemberCard
            delay={0.1}
            img={imgTeamCarlLutz}
            name="Carl Lutz"
            subTitle="Founder & President"
          />
          <TeamMemberCard
            delay={0.2}
            imageScale={1.3}
            img={imgTeamTimHardy}
            name="Tim Hardy"
            subTitle="VP Engineering"
          />
          <TeamMemberCard
            delay={0.3}
            img={imgTeamDrew}
            name="Drew Nowacoski"
            subTitle="VP Product"
          />
          <TeamMemberCard
            delay={0.4}
            imageScale={1.8}
            img={imgTeamJessicaReid}
            name="Jessica Reid"
            subTitle="VP Delivery"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
