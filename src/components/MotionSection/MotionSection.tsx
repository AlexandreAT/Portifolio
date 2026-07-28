import type { ReactNode } from 'react';
import { useReducedMotion } from 'framer-motion';
import { AnimatedSection } from './MotionSection.style';

interface MotionSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  ariaLabelledby?: string;
}

export const MotionSection = ({
  children,
  id,
  className,
  ariaLabelledby,
}: MotionSectionProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatedSection
      id={id}
      className={className}
      aria-labelledby={ariaLabelledby}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.42, ease: 'easeOut' }}
    >
      {children}
    </AnimatedSection>
  );
};
