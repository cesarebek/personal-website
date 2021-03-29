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
      duration: 0.75,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.25,
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

export const titleAnim = {
  hidden: { y: 600 },
  show: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const titleLeft = {
  hidden: {
    opacity: 0,
    x: -300,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};
export const titleRight = {
  hidden: {
    opacity: 0,
    x: 300,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};
