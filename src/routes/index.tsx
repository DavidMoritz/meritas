import { createFileRoute } from '@tanstack/react-router';

import HomePageHero from '@/components/_templates/home-page-hero/HomePageHero.tsx';
import Services from '@/components/_templates/our-services/Services.tsx';
import Partners from '@/components/_templates/partners/Partners.tsx';
import SelectedWork from '@/components/_templates/selected-work/SelectedWork.tsx';
import Team from '@/components/_templates/team/Team.tsx';
import BlockQuote from '@/components/block-quote/BlockQuote.tsx';
import { Main } from '@/components/main/Main.tsx';

export const Route = createFileRoute('/')({ component: App });

function App() {
  return (
    <Main>
      <HomePageHero />

      <Partners />

      <Services />

      <SelectedWork />

      <BlockQuote />

      <Team />
    </Main>
  );
}
