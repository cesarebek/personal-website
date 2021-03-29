export const menuSlide = {
  hidden: {
    x: '50vw',
  },
  open: {
    x: 0,
  },
  close: {
    x: '50vw',
  },
  transition: { ease: 'easeOut' },
};

export const projectCard = {
  hover: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export const pageTransition = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.5,
    },
  },
};
