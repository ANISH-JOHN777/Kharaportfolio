import { motion } from 'framer-motion';
import { scrollReveal, staggerContainer, staggerItem } from '../utils/motion';

const Competencies = () => {
    const expertise = [
        'Agile / Scrum Methodologies',
        'Cross-Functional Team Leadership',
        'Creative Operational Efficiency',
        'Streamline Traffic Across Multiple Workflow Systems',
        'Resource Planning & Scoping',
        'Risk & Issue Management',
        'Stakeholder Alignment & Comms',
        'Creative-to-Dev Workflow Alignment',
        'Digital Production Scheduling',
        'Sprint Planning',
        'Content Lifecycle Management',
        'QA & Launch Readiness',
        'Marketing Operations & Campaign Execution'
    ];

    const technical = [
        'Smartsheet',
        'Monday.com',
        'Workfront',
        'Asana',
        'ClickUp',
        'SharePoint',
        'Teams',
        'Google Workspace',
        'MS Suite',
        'Slack',
        'Zoom',
        'Jira',
        'Confluence',
        'Notion',
        'Trello',
        'Canva',
        'Squarespace',
        'WordPress',
        'Shopify',
        'MailChimp'
    ];

    return (
        <section id="competencies" className="section-padding section-container bg-white">
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
                    className="heading-lg text-neutral-900 mb-16"
                >
                    Core Competencies
                </motion.h2>
            </motion.div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto relative z-10">
                {/* Left Column - Areas of Expertise */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="heading-sm text-neutral-900 mb-6"
                    >
                        Areas of Expertise
                    </motion.h3>
                    <div className="space-y-3">
                        {expertise.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                whileHover={{
                                    scale: 1.03,
                                    x: 4,
                                    backgroundColor: "rgb(14, 165, 233)",
                                    color: "rgb(255, 255, 255)",
                                    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="pill-tag bg-neutral-100 hover:bg-accent hover:text-white transition-all duration-300 cursor-default"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Column - Technical Proficiencies */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h3
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="heading-sm text-neutral-900 mb-6"
                    >
                        Technical Proficiencies
                    </motion.h3>
                    <div className="flex flex-wrap gap-3">
                        {technical.map((tool, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                whileHover={{
                                    scale: 1.08,
                                    y: -2,
                                    backgroundColor: "rgb(14, 165, 233)",
                                    color: "rgb(255, 255, 255)",
                                    boxShadow: "0 10px 25px rgba(14, 165, 233, 0.2)",
                                    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="pill-tag bg-neutral-100 hover:bg-accent hover:text-white transition-all duration-300 cursor-default"
                            >
                                {tool}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Competencies;
