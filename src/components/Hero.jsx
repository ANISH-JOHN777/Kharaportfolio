import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useRef } from 'react';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Parallax effects
    const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            id="hero"
            ref={ref}
            className="min-h-screen flex items-center justify-center section-container pt-20 relative overflow-hidden"
        >
            {/* Animated background gradient */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-white to-neutral-50 pointer-events-none"
            />

            <motion.div
                style={{ y, opacity }}
                className="w-full max-w-5xl mx-auto text-center relative z-10"
            >
                {/* Name - Fades in first - FASTER */}
                <motion.h1
                    initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                        duration: 0.6,
                        delay: 0.15,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className="heading-xl mb-6 text-primary"
                >
                    KHARA PECHTES
                </motion.h1>

                {/* Animated underline - FASTER */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{
                        duration: 0.4,
                        delay: 0.6,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className="w-24 h-1 bg-gradient-to-r from-accent via-accent-light to-accent mx-auto mb-8 origin-center"
                />

                {/* Role - Slides up - FASTER */}
                <motion.h2
                    initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                        duration: 0.5,
                        delay: 0.35,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className="heading-md mb-8 text-accent font-semibold"
                >
                    Remote Senior Digital Project Manager
                </motion.h2>

                {/* Description - FASTER */}
                <motion.p
                    initial={{ opacity: 0, scale: 0.97, filter: "blur(3px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{
                        duration: 0.5,
                        delay: 0.55,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className="body-lg text-neutral-600 max-w-4xl mx-auto mb-12 leading-relaxed"
                >
                    Agile project leader with <span className="font-semibold text-primary">12+ years</span> guiding cross-functional teams across digital transformation, marketing operations, and enterprise initiatives. Known for structuring complex programs into executable, results-driven workflows and managing project traffic across multiple workstreams.
                </motion.p>

                {/* Contact Row - FASTER stagger */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={{
                        animate: {
                            transition: {
                                staggerChildren: 0.08,
                                delayChildren: 0.75
                            }
                        }
                    }}
                    className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-neutral-600"
                >
                    {[
                        {
                            icon: Mail,
                            text: 'kpechtes@gmail.com',
                            href: 'mailto:kpechtes@gmail.com'
                        },
                        {
                            icon: MapPin,
                            text: 'LA, CA',
                            href: null
                        },
                        {
                            icon: Phone,
                            text: '310.467.9570',
                            href: 'tel:310.467.9570'
                        }
                    ].map((item, index) => {
                        const Icon = item.icon;
                        const Component = item.href ? motion.a : motion.div;

                        return (
                            <Component
                                key={index}
                                href={item.href || undefined}
                                variants={{
                                    initial: { opacity: 0, y: 10, filter: "blur(2px)" },
                                    animate: { opacity: 1, y: 0, filter: "blur(0px)" }
                                }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={item.href ? {
                                    scale: 1.05,
                                    y: -2,
                                    transition: { duration: 0.2 }
                                } : {}}
                                className="flex items-center gap-2 hover:text-accent transition-colors group cursor-pointer"
                            >
                                <motion.div
                                    whileHover={item.href ? {
                                        rotate: [0, -10, 10, 0],
                                        transition: { duration: 0.4 }
                                    } : {}}
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.div>
                                <span className="font-medium">{item.text}</span>
                            </Component>
                        );
                    })}
                </motion.div>

                {/* Scroll indicator - FASTER */}
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 1,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-6 h-10 border-2 border-neutral-300 rounded-full flex items-start justify-center p-2"
                    >
                        <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-1.5 h-1.5 bg-accent rounded-full"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
