import { useCallback, useEffect, useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

export const AUTOPLAY_INITIAL_DELAY = 2_000;
export const AUTOPLAY_INTERVAL = 2_800;
export const AUTOPLAY_RESUME_DELAY = 10_000;

export const useTechnologyCarousel = () => {
  const autoplay = useRef(
    Autoplay({
      delay: AUTOPLAY_INTERVAL,
      playOnInit: false,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', containScroll: false },
    [autoplay.current],
  );
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const initialTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isPointerInteraction = useRef(false);
  const reduceMotion = useRef(false);

  const clearResumeTimer = useCallback(() => {
    if (resumeTimer.current) {
      clearTimeout(resumeTimer.current);
      resumeTimer.current = null;
    }
  }, []);

  const scheduleResume = useCallback(() => {
    if (!emblaApi || reduceMotion.current || document.hidden) return;
    clearResumeTimer();
    resumeTimer.current = setTimeout(() => {
      autoplay.current.play();
    }, AUTOPLAY_RESUME_DELAY);
  }, [clearResumeTimer, emblaApi]);

  const registerInteraction = useCallback(() => {
    autoplay.current.stop();
    scheduleResume();
  }, [scheduleResume]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    registerInteraction();
  }, [emblaApi, registerInteraction]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    registerInteraction();
  }, [emblaApi, registerInteraction]);

  useEffect(() => {
    if (!emblaApi) return;
    const autoplayPlugin = autoplay.current;

    reduceMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handlePointerDown = () => {
      isPointerInteraction.current = true;
      autoplayPlugin.stop();
      clearResumeTimer();
    };

    const handleSettle = () => {
      if (!isPointerInteraction.current) return;
      isPointerInteraction.current = false;
      scheduleResume();
    };

    const handleVisibility = () => {
      if (document.hidden) {
        autoplayPlugin.stop();
        clearResumeTimer();
      } else if (!reduceMotion.current) {
        scheduleResume();
      }
    };

    if (!reduceMotion.current) {
      initialTimer.current = setTimeout(() => {
        if (!document.hidden) autoplayPlugin.play();
      }, AUTOPLAY_INITIAL_DELAY);
    }

    emblaApi.on('pointerDown', handlePointerDown);
    emblaApi.on('settle', handleSettle);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      emblaApi.off('pointerDown', handlePointerDown);
      emblaApi.off('settle', handleSettle);
      document.removeEventListener('visibilitychange', handleVisibility);
      autoplayPlugin.stop();
      clearResumeTimer();
      if (initialTimer.current) clearTimeout(initialTimer.current);
    };
  }, [clearResumeTimer, emblaApi, scheduleResume]);

  return { emblaRef, scrollPrev, scrollNext, registerInteraction };
};
