import { useCallback, useEffect, useRef } from 'react';
import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';

export const AUTO_SCROLL_SPEED = 0.45;
export const AUTO_SCROLL_START_DELAY = 800;

export const useTechnologyCarousel = () => {
  const autoScroll = useRef(
    AutoScroll({
      speed: AUTO_SCROLL_SPEED,
      startDelay: AUTO_SCROLL_START_DELAY,
      playOnInit: false,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
    }),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      containScroll: false,
      dragFree: true,
    },
    [autoScroll.current],
  );

  const resumeContinuousScroll = useCallback(() => {
    autoScroll.current.reset();
  }, []);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    resumeContinuousScroll();
  }, [emblaApi, resumeContinuousScroll]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    resumeContinuousScroll();
  }, [emblaApi, resumeContinuousScroll]);

  useEffect(() => {
    if (!emblaApi) return;
    const autoScrollPlugin = autoScroll.current;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const syncPlayback = () => {
      if (document.hidden || mediaQuery.matches) {
        autoScrollPlugin.stop();
      } else {
        autoScrollPlugin.play(document.hidden ? undefined : 0);
      }
    };

    syncPlayback();
    document.addEventListener('visibilitychange', syncPlayback);
    mediaQuery.addEventListener('change', syncPlayback);

    return () => {
      document.removeEventListener('visibilitychange', syncPlayback);
      mediaQuery.removeEventListener('change', syncPlayback);
      autoScrollPlugin.stop();
    };
  }, [emblaApi]);

  return { emblaRef, scrollPrev, scrollNext };
};
