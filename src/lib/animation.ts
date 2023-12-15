const fadeinAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const animation = (index: number) => {
  return {
    variants: fadeinAnimationVariants,
    initial: "initial",
    animate: "animate",
    viewport: {
      once: true,
    },
    custom: index,
  };
};
