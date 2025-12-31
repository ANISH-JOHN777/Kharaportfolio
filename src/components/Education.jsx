import { motion } from 'framer-motion';
import { scaleIn, scrollReveal } from '../utils/motion';
import { GraduationCap, Award, Palette, Sparkles } from 'lucide-react';

const Education = () => {
    const credentials = [
        {
            icon: GraduationCap,
            title: 'UCLA',
            subtitle: 'Bachelors Sociology & Communications',
            description: 'Foundation in human behavior, organizational dynamics, and strategic communication'
        },
        {
            icon: Palette,
            title: 'ART CENTER',
            subtitle: 'Professional Development',
            description: 'Design Foundations, Visual Communications & Brand Identity Creation'
        },
        {
            icon: Award,
            title: 'Scrum Master Certified',
            subtitle: 'CSM® 2025 | SCRUM ALLIANCE',
            description: 'Advanced Agile methodologies and team facilitation expertise',
            highlight: true
        }
    ];

    return (
        <section id="education" className="section-padding section-container bg-neutral-50 relative overflow-hidden">
            {/* Animated background gradient */}
            <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                whileInView={{ opacity: 0.03, rotate: 180 }}
                viewport={{ once: true }}
                transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-accent to-accent-light rounded-full blur-3xl pointer-events-none"
            />

            {/* Section Header */}
            <motion.div
                {...scrollReveal}
                className="text-center mb-16 relative z-10"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="heading-lg text-neutral-900 mb-4"
                >
                    Education & Certifications
                </motion.h2>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="w-20 h-1 bg-accent mx-auto origin-center"
                />
            </motion.div>

            {/* Credentials Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
                {credentials.map((cred, index) => {
                    const Icon = cred.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 30, filter: "blur(4px)" }}
                            whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.2,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            whileHover={{
                                scale: 1.05,
                                y: -12,
                                boxShadow: cred.highlight
                                    ? "0 25px 50px rgba(14, 165, 233, 0.25)"
                                    : "0 20px 40px rgba(0, 0, 0, 0.1)",
                                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                            }}
                            className={`card text-center relative group overflow-hidden ${cred.highlight ? 'ring-2 ring-accent' : ''
                                }`}
                        >
                            {/* Sparkle effect for highlighted card */}
                            {cred.highlight && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                                    className="absolute top-4 right-4"
                                >
                                    <Sparkles className="w-5 h-5 text-accent" />
                                </motion.div>
                            )}

                            {/* Gradient overlay on hover */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: cred.highlight ? 0.08 : 0.05 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 bg-gradient-to-br from-accent to-accent-light pointer-events-none"
                            />

                            {/* Icon with rotation animation */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.2 + 0.2,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                whileHover={{
                                    rotate: [0, -10, 10, 0],
                                    transition: { duration: 0.6 }
                                }}
                                className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 relative z-10 ${cred.highlight ? 'bg-accent text-white' : 'bg-neutral-100 text-accent'
                                    }`}
                            >
                                <Icon className="w-8 h-8" />
                            </motion.div>

                            {/* Title */}
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                                className="text-xl font-bold text-neutral-900 mb-2 uppercase tracking-wide relative z-10"
                            >
                                {cred.title}
                            </motion.h3>

                            {/* Subtitle */}
                            <motion.p
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                                className="font-semibold text-accent mb-3 relative z-10"
                            >
                                {cred.subtitle}
                            </motion.p>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                                className="text-neutral-600 leading-relaxed text-sm relative z-10"
                            >
                                {cred.description}
                            </motion.p>

                            {/* Bottom accent line */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.4 }}
                                className={`absolute bottom-0 left-0 right-0 h-1 origin-center ${cred.highlight
                                    ? 'bg-gradient-to-r from-accent via-accent-light to-accent'
                                    : 'bg-accent'
                                    }`}
                            />
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Education;
