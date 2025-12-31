import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { scrollReveal } from '../utils/motion';

const AnimatedNumber = ({ value, suffix = '' }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 50,
        duration: 2500
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, motionValue, value]);

    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest) + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref}>0{suffix}</span>;
};

const Impact = () => {
    const metrics = [
        {
            value: 40,
            suffix: '+',
            label: 'Concurrent Initiatives',
            description: 'Managed simultaneously at AT&T',
            color: 'from-accent-light to-accent'
        },
        {
            value: 265,
            suffix: '',
            label: 'Acura Dealerships',
            description: 'Coordinated digital programs',
            color: 'from-accent to-accent-dark'
        },
        {
            value: 30,
            suffix: '%',
            label: 'Workflow Efficiency',
            description: 'Improvement through PMO framework',
            color: 'from-accent-dark to-accent'
        },
        {
            value: 25,
            suffix: '%',
            label: 'Traffic Growth',
            description: 'Organic mobile site increase',
            color: 'from-accent to-accent-light'
        },
        {
            value: 29,
            suffix: '%',
            label: 'Customer Satisfaction',
            description: 'Lift during COVID pivot',
            color: 'from-accent-light to-accent'
        },
        {
            value: 33,
            suffix: '%',
            label: 'Defect Reduction',
            description: 'Post-launch improvements',
            color: 'from-accent to-accent-dark'
        }
    ];

    return (
        <section id="impact" className="section-padding section-container bg-white">
            {/* Section Header */}
            <motion.div
                {...scrollReveal}
                className="text-center mb-16"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="heading-lg text-neutral-900 mb-4"
                >
                    Highlighted Impact
                </motion.h2>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="w-20 h-1 bg-accent mx-auto mb-6 origin-center"
                />
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="body-lg text-neutral-600 max-w-3xl mx-auto"
                >
                    Measurable results driving operational excellence and business growth
                </motion.p>
            </motion.div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
                {metrics.map((metric, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30, scale: 0.9, filter: "blur(4px)" }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.15,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        whileHover={{
                            scale: 1.05,
                            y: -12,
                            boxShadow: "0 25px 50px rgba(14, 165, 233, 0.15)",
                            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                        }}
                        className="card text-center relative group overflow-hidden"
                    >
                        {/* Gradient overlay on hover */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 0.05 }}
                            transition={{ duration: 0.3 }}
                            className={`absolute inset-0 bg-gradient-to-br ${metric.color} pointer-events-none`}
                        />

                        {/* Animated border */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent-light origin-left"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.15 + 0.4,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="text-5xl md:text-6xl font-bold text-accent mb-3 relative z-10"
                        >
                            <AnimatedNumber value={metric.value} suffix={metric.suffix} />
                        </motion.div>

                        <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                            className="text-xl font-semibold text-neutral-900 mb-2 relative z-10"
                        >
                            {metric.label}
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
                            className="text-neutral-600 leading-relaxed relative z-10"
                        >
                            {metric.description}
                        </motion.p>

                        {/* Decorative corner element */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 1, opacity: 0.1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-0 right-0 w-20 h-20 bg-accent rounded-tl-full pointer-events-none"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Impact;
