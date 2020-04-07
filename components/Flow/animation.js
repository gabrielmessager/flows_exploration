export const transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96]
};

export const headerVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition
  }
};

export const buttonsVariants = {
  exit: { x: 30, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition }
};