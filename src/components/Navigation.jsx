import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navigation = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    const backgroundColor = useTransform(
        scrollY,
        [0, 100],
        ['rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.95)']
    );

    const sections = [
        { id: 'hero', label: 'Home' },
        { id: 'competencies', label: 'Competencies' },
        { id: 'experience', label: 'Experience' },
        { id: 'impact', label: 'Impact' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            setIsScrolled(window.scrollY > 50);

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ backgroundColor }}
            className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${isScrolled ? 'border-neutral-200 shadow-sm' : 'border-transparent'
                }`}
        >
            <div className="section-container">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.button
                        onClick={() => scrollToSection('hero')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="text-xl font-bold text-neutral-900 hover:text-accent transition-colors relative z-10"
                        >
                            KP
                        </motion.div>

                        {/* Animated underline */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent origin-left"
                        />
                    </motion.button>

                    {/* Navigation Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="hidden md:flex items-center gap-8"
                    >
                        {sections.map((section, index) => (
                            <motion.button
                                key={section.id}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.7 + index * 0.08,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                onClick={() => scrollToSection(section.id)}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className={`relative nav-link ${activeSection === section.id ? 'text-accent' : ''
                                    }`}
                            >
                                {section.label}

                                {/* Active indicator with layout animation */}
                                {activeSection === section.id && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30
                                        }}
                                    />
                                )}

                                {/* Hover indicator */}
                                <motion.div
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    whileHover={{ scaleX: 1, opacity: 0.3 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent origin-center"
                                />
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                    >
                        <motion.svg
                            className="w-6 h-6 text-neutral-900"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <motion.path
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.5, delay: 1 }}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </motion.svg>
                    </motion.button>
                </div>
            </div>

            {/* Progress bar */}
            <motion.div
                style={{
                    scaleX: useTransform(scrollY, [0, document.documentElement.scrollHeight - window.innerHeight], [0, 1])
                }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent-light to-accent origin-left"
            />
        </motion.nav>
    );
};

export default Navigation;
