import { motion, useReducedMotion } from 'framer-motion';
import { FiFileText } from 'react-icons/fi';
import { Button } from '@/components/Button/Button';
import { TechnologyCarousel } from '@/components/TechnologyCarousel/TechnologyCarousel';
import { profile } from '@/data/portfolio.data';
import {
  Actions,
  Availability,
  Copy,
  Frame,
  Hero,
  HeroContent,
  Image,
  LastName,
} from './HeroSection.style';

export const HeroSection = () => {
  const reduceMotion = useReducedMotion();

  const scrollToProjects = () => {
    document.getElementById('projetos-em-destaque')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Hero id="inicio">
      <HeroContent>
        <Copy
          as={motion.div}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.48 }}
        >
          <Availability><span aria-hidden="true" />{profile.availability}</Availability>
          <h1>
            {profile.firstName}
            <LastName>{profile.lastName}</LastName>
          </h1>
          <h2>{profile.role}</h2>
          <p>{profile.introduction}</p>
          <small>{profile.complementaryDescription}</small>
          <Actions>
            <Button onClick={scrollToProjects} showArrow>Ver projetos</Button>
            <Button
              href={profile.resumeUrl}
              variant="secondary"
              external
            >
              <FiFileText aria-hidden="true" /> Acessar currículo
            </Button>
          </Actions>
        </Copy>

        <Frame
          as={motion.div}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <Image src={profile.profileImage} alt={`Foto profissional de ${profile.fullName}`} />
        </Frame>
      </HeroContent>
      <TechnologyCarousel />
    </Hero>
  );
};
