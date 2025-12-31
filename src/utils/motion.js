// Fast, snappy professional animation variants for Framer Motion

// Custom easing curves for quick, responsive feel
export const easeOut = [0.16, 1, 0.3, 1]; // Smooth, confident ease-out
export const easeInOut = [0.65, 0, 0.35, 1]; // Balanced ease-in-out
export const spring = { type: "spring", stiffness: 200, damping: 20 }; // Snappy spring
export const smoothSpring = { type: "spring", stiffness: 150, damping: 25, mass: 0.5 }; // Smooth spring

// Enhanced fade animations - FASTER
export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4, ease: easeOut }
};

export const fadeInSlow = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: easeOut }
};

// Enhanced slide animations with blur effect - FASTER
export const slideUp = {
    initial: { opacity: 0, y: 16, filter: "blur(3px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.4, ease: easeOut }
};

export const slideUpLarge = {
    initial: { opacity: 0, y: 24, filter: "blur(4px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.5, ease: easeOut }
};

export const slideDown = {
    initial: { opacity: 0, y: -16, filter: "blur(3px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.4, ease: easeOut }
};

export const slideLeft = {
    initial: { opacity: 0, x: 24, filter: "blur(3px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)" },
    transition: { duration: 0.4, ease: easeOut }
};

export const slideRight = {
    initial: { opacity: 0, x: -24, filter: "blur(3px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)" },
    transition: { duration: 0.4, ease: easeOut }
};

// Scale animations with subtle rotation - FASTER
export const scaleIn = {
    initial: { opacity: 0, scale: 0.96, rotate: -0.5 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    transition: { duration: 0.4, ease: easeOut }
};

export const scaleInSubtle = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, ease: easeOut }
};

// Stagger containers with faster timing
export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.08
        }
    }
};

export const staggerContainerFast = {
    animate: {
        transition: {
            staggerChildren: 0.03,
            delayChildren: 0.05
        }
    }
};

export const staggerItem = {
    initial: { opacity: 0, y: 8, filter: "blur(2px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.3, ease: easeOut }
};

export const staggerItemScale = {
    initial: { opacity: 0, scale: 0.97, y: 6 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.4, ease: easeOut }
};

// Scroll-triggered animations with faster effects
export const scrollReveal = {
    initial: { opacity: 0, y: 20, filter: "blur(3px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, margin: "-80px", amount: 0.2 },
    transition: { duration: 0.4, ease: easeOut }
};

export const scrollRevealStagger = {
    initial: { opacity: 0, y: 12, filter: "blur(2px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, margin: "-60px", amount: 0.15 },
    transition: { duration: 0.35, ease: easeOut }
};

export const scrollRevealScale = {
    initial: { opacity: 0, scale: 0.96, y: 16 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    viewport: { once: true, margin: "-80px", amount: 0.2 },
    transition: { duration: 0.4, ease: easeOut }
};

// Parallax effect for scroll
export const parallaxSlow = {
    initial: { y: -15 },
    whileInView: { y: 0 },
    viewport: { once: false },
    transition: { duration: 0.8, ease: easeOut }
};

// Hover animations - FASTER
export const hoverScale = {
    scale: 1.02,
    transition: { duration: 0.2, ease: easeOut }
};

export const hoverScaleLarge = {
    scale: 1.05,
    transition: { duration: 0.2, ease: easeOut }
};

export const hoverLift = {
    y: -3,
    transition: { duration: 0.2, ease: easeOut }
};

export const hoverGlow = {
    boxShadow: "0 15px 30px rgba(14, 165, 233, 0.2)",
    transition: { duration: 0.2, ease: easeOut }
};

// Card animations - FASTER
export const cardHover = {
    scale: 1.02,
    y: -4,
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.08)",
    transition: { duration: 0.25, ease: easeOut }
};

export const cardTap = {
    scale: 0.98,
    transition: { duration: 0.1, ease: easeOut }
};

// Text reveal animations - FASTER
export const textReveal = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: easeOut }
};

export const textRevealStagger = (index) => ({
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay: index * 0.03, ease: easeOut }
});

// Number counter animation
export const counterAnimation = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, ease: easeOut }
};

// Divider line animation - FASTER
export const lineExpand = {
    initial: { scaleX: 0, opacity: 0 },
    animate: { scaleX: 1, opacity: 1 },
    transition: { duration: 0.4, ease: easeOut }
};

export const lineExpandVertical = {
    initial: { scaleY: 0, opacity: 0 },
    animate: { scaleY: 1, opacity: 1 },
    transition: { duration: 0.4, ease: easeOut }
};

// Navigation animations - FASTER
export const navSlideDown = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.4, ease: easeOut, delay: 0.1 }
};

// Page transition
export const pageTransition = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
    transition: { duration: 0.3, ease: easeOut }
};

// Magnetic effect (for interactive elements)
export const magneticEffect = (x, y) => ({
    x: x * 0.2,
    y: y * 0.2,
    transition: { type: "spring", stiffness: 200, damping: 20 }
});
