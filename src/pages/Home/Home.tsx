import { AboutSummarySection } from '@/components/sections/AboutSummarySection/AboutSummarySection';
import { ContactSection } from '@/components/sections/ContactSection/ContactSection';
import { DifferentialsSection } from '@/components/sections/DifferentialsSection/DifferentialsSection';
import { FeaturedProjectsSection } from '@/components/sections/FeaturedProjectsSection/FeaturedProjectsSection';
import { HeroSection } from '@/components/sections/HeroSection/HeroSection';
import { Main } from './Home.style';

const Home = () => (
  <Main>
    <HeroSection />
    <DifferentialsSection />
    <FeaturedProjectsSection />
    <AboutSummarySection />
    <ContactSection />
  </Main>
);

export default Home;
