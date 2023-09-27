type Animation = {
    hidden: {
      y?: number;
      opacity?: number;
      x?: number;
    };
    show: {
      y?: number;
      x?: number;
      opacity?: number;
      transition?: {
        type?: string;
        duration?: number;
        delay?: number;
        ease?: [number, number, number, number];
      };
    };
  };
  export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right', delay: number): Animation => {
    return {
      hidden: {
        y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
        opacity: 0,
        x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  
  export const fadeInDown = (delay: number): Animation => {
    return {
      hidden: {
        y: -80,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  
  export const fadeInLeft = (delay: number): Animation => {
    return {
      hidden: {
        x: -80,
        opacity: 0,
      },
      show: {
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  
  export const fadeInRight = (delay: number): Animation => {
    return {
      hidden: {
        x: 80,
        opacity: 0,
      },
      show: {
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  