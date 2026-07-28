import { useCallback } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { technologies } from '@/data/portfolio.data';
import { useTechnologyCarousel } from '@/hooks/useTechnologyCarousel';
import { getIcon } from '@/utils/icons';
import {
  ArrowButton,
  Carousel,
  Container,
  Slide,
  Slides,
  TechnologyCard,
  Viewport,
} from './TechnologyCarousel.style';

export const TechnologyCarousel = () => {
  const { emblaRef, scrollPrev, scrollNext, registerInteraction } = useTechnologyCarousel();

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollNext, scrollPrev],
  );

  return (
    <Container aria-label="Tecnologias principais">
      <span>Tecnologias</span>
      <Carousel>
        <ArrowButton type="button" onClick={scrollPrev} aria-label="Tecnologia anterior">
          <FiChevronLeft aria-hidden="true" />
        </ArrowButton>
        <Viewport
          ref={emblaRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onPointerUp={registerInteraction}
          aria-label="Carrossel de tecnologias. Use as setas do teclado para navegar."
        >
          <Slides>
            {technologies.map((technology) => {
              const Icon = getIcon(technology.icon);
              return (
                <Slide key={technology.id}>
                  <TechnologyCard $color={technology.color}>
                    <Icon aria-hidden="true" />
                    <strong>{technology.name}</strong>
                  </TechnologyCard>
                </Slide>
              );
            })}
          </Slides>
        </Viewport>
        <ArrowButton type="button" onClick={scrollNext} aria-label="Próxima tecnologia">
          <FiChevronRight aria-hidden="true" />
        </ArrowButton>
      </Carousel>
    </Container>
  );
};
