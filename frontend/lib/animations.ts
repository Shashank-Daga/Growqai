import { easeInOut } from "framer-motion"

export const animationConfig = {
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    verySlow: 1.2,
  },
  delay: {
    stagger: 0.1,
    small: 0.2,
    medium: 0.4,
  },
  easing: {
    ease: [0.25, 0.1, 0.25, 1],
    easeOut: [0, 0, 0.2, 1],
    easeIn: [0.42, 0, 1, 1],
  },
}

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: animationConfig.duration.normal, ease: animationConfig.easing.ease },
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
  transition: { duration: animationConfig.duration.normal, ease: animationConfig.easing.ease },
}

export const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 40 },
  transition: { duration: animationConfig.duration.normal, ease: animationConfig.easing.ease },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration: animationConfig.duration.normal, ease: easeInOut },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: animationConfig.delay.stagger,
      delayChildren: 0.1,
    },
  },
}

export const parallaxVariants = {
  initial: { y: 0 },
  animate: (custom: number) => ({
    y: custom * 20,
    transition: { duration: 0.5 },
  }),
}
