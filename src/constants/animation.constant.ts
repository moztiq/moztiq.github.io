import { Easing, Variants } from 'framer-motion';

export const defaultEasing: Easing = 'easeIn';

export const fadeInSlideToLeft: Variants = {
  initial: {
    opacity: 0,
    x: 30,
    transition: { duration: 0.5, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  exit: {
    opacity: 0,
    x: -30,
    transition: { duration: 0.5, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};

export const shakeVariant: Variants = {
  initial: {
    rotate: -5,
    willChange: 'transform',
  },
  animate: {
    rotate: 0,
    willChange: 'transform',
  },
  whileHover: { scale: 1.05, rotate: 5, willChange: 'transform' },
};

export const flipVariant: Variants = {
  initial: {
    rotateX: 0,
    willChange: 'transform',
  },
  animate: {
    rotateX: 360,
    willChange: 'transform',
  },
  whileHover: { rotateX: 0, willChange: 'transform' },
};
