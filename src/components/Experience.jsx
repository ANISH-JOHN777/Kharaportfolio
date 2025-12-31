import { motion, useScroll, useTransform } from 'framer-motion';
import { scrollRevealStagger } from '../utils/motion';
import { MapPin, Calendar, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

const Experience = () => {
    const experiences = [
        {
            company: 'KERN/RAPP AGENCY | OMNICOM GROUP',
            role: 'Senior Digital Project Manager',
            dates: '2024 - 2025',
            location: 'Remote Contract Dallas, TX',
            highlights: [
                'Directed 40+ concurrent AT&T initiatives, reducing launch-blocking issues by 19% by integrating QA workflow systems into overall project delivery',
                'Optimized production workflow with process improvements boosting overall efficiency by 15-25% by building strong relationships & conducting business as a thought leader',
                'Reduced project delays by 20% by proactively identifying risks, driving mitigation plans, and coordinating weekly team and resource strategies to keep delivery on track',
                'Drafted documentation for global client managing 3 major LOBs, creating project plans for email marketing & streamlined communication with offshore vendors'
            ]
        },
        {
            company: 'VITAMIN A | SWIM USA',
            role: 'Senior Digital Creative Project Manager',
            dates: '2024',
            location: 'Remote Contract LA, CA',
            highlights: [
                'Created, designed and implemented scalable PMO framework, restructuring 25+ active initiatives into organized tiers with standardized workflows, timelines, intake forms, and approval checkpoints',
                'Built a fully operational system in ClickUp; including templates, folders, and leadership dashboards that improved cross-team visibility, cut workflow confusion by 30%',
                'Reclaimed 8–10 hours weekly in manual tracking and status updates for the team by reducing duplicate work by 15% and increased project predictability by 25%',
                'Delivered strategic recommendations and templates to improve planning accuracy, enabling faster project kickoffs and supporting long-term scalability'
            ]
        },
        {
            company: 'BANFIELD FOUNDATION | MARS INC',
            role: 'Senior Lead Brand Marketing Producer',
            dates: '2022 - 2024',
            location: 'Remote Full-Time Vancouver, OR',
            highlights: [
                'Owned and scaled the PMO function with improved standardized processes to create consistent high-quality delivery of brand marketing projects from start to finish',
                'Increased usage of MyBanfield App by 18% in mobile bookings by implementing essential UX updates, scheduling backlog sprint releases with development team',
                'Drove a 22% lift in engagement by partnering with marketing stakeholders to update site navigation, homepage placement, and email promotion',
                'Lead PHADO strategy & planning focused on SEO; boosting organic mobile site traffic by 25% and improved keyword rankings by 30%',
                'Led 5 FTEs in executing quarterly initiatives and e-commerce campaigns that increased engagement and contributed to sales growth'
            ]
        },
        {
            company: 'ACURA | HONDA',
            role: 'Senior Lead Project Manager',
            dates: '2020 - 2021',
            location: 'Remote Full-Time Torrance, CA',
            highlights: [
                'Managed Acura Dealer Digital Program (ADDP) comprised of 265 Acura Dealerships',
                'Increased customer satisfaction by 29% by pivoting quarterly biz plans to support new sales needs during COVID',
                'Enhanced engagement by 17% by leading dealer and field communications for all launch-related updates',
                'Guided internal strategy & planning for Acura.com, including email campaigns & website maintenance',
                'Collaborated with Shift Digital strategists for successful client retention through data analysis'
            ]
        },
        {
            company: 'FREELANCE PROJECT MANAGEMENT',
            role: 'Digital Project Manager',
            dates: '2017 - 2019',
            location: 'Various Clients',
            highlights: [
                'Sony Pictures Entertainment: Managed mobile gaming distribution & budgets up to $2M, reducing post-launch defects by 33%',
                'Mitsubishi Motors: Led production & launch of microsites while managing assets for seamless digital project execution',
                'American Apparel: Optimized online customer experiences for international e-commerce stores',
                'Additional clients: Honda Power Sports, BofA, Wonderful Brands, Fiji Water, DIRECTV, Skechers, Unilever'
            ]
        },
        {
            company: 'CROWDFUNDX',
            role: 'Lead Account Brand Manager',
            dates: '2016 - 2017',
            location: 'Hybrid Full-Time LA, CA',
            highlights: [
                'Directed cross-functional digital marketing campaigns including social media, PR, branding, video, and web development',
                'Managed client relationships and project workflows, coordinating 3 teams across creative, technical, and production disciplines',
                'Developed strategic campaign initiatives to build brand equity & growth for clients',
                'Supported 2 companies for IPO listing on NY stock exchange'
            ]
        },
        {
            company: 'UCLA MARKETING & SPECIAL EVENTS',
            role: 'Senior Digital Project Manager',
            dates: '2015 - 2016',
            location: 'Onsite Full-Time LA, CA',
            highlights: [
                'Championed monthly website update projects for new transfer student enrollment, increasing engagement by 21%',
                'Amplified brand visibility and stakeholder engagement by steering high-profile projects & events',
                'Supervised UCLA\'s Centennial 1919-2019 project, boosting application rates to 11% YOY',
                'Directed digital marketing projects, managing competing priorities, schedules, and resources across teams'
            ]
        }
    ];

    return (
        <section id="experience" className="section-padding section-container bg-neutral-50 relative overflow-hidden">
            {/* Animated timeline line */}
            <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-accent to-transparent origin-top hidden lg:block"
            />

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center mb-16 relative z-10"
            >
                <h2 className="heading-lg text-neutral-900 mb-4">Professional Experience</h2>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="w-20 h-1 bg-accent mx-auto origin-center"
                />
            </motion.div>

            {/* Timeline */}
            <div className="max-w-5xl mx-auto space-y-12 relative z-10">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, filter: "blur(4px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.1,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        whileHover={{
                            scale: 1.02,
                            y: -8,
                            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                        }}
                        className="card relative group"
                    >
                        {/* Timeline dot */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1 + 0.3,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="absolute -left-[41px] top-8 w-4 h-4 bg-accent rounded-full border-4 border-neutral-50 hidden lg:block group-hover:scale-150 transition-transform duration-300"
                        />

                        {/* Accent bar */}
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1 + 0.2,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="absolute left-0 top-0 bottom-0 w-1 bg-accent origin-top opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />

                        {/* Header */}
                        <div className="mb-6">
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                                className="text-2xl font-bold text-neutral-900 mb-2 group-hover:text-accent transition-colors duration-300"
                            >
                                {exp.company}
                            </motion.h3>
                            <div className="flex flex-wrap items-center gap-4 text-neutral-600">
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                                    className="font-semibold text-accent text-lg flex items-center gap-2"
                                >
                                    <TrendingUp className="w-4 h-4" />
                                    {exp.role}
                                </motion.span>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                                    className="flex items-center gap-1.5"
                                >
                                    <Calendar className="w-4 h-4" />
                                    <span className="font-medium">{exp.dates}</span>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                                    className="flex items-center gap-1.5"
                                >
                                    <MapPin className="w-4 h-4" />
                                    <span className="font-medium">{exp.location}</span>
                                </motion.div>
                            </div>
                        </div>

                        {/* Highlights */}
                        <ul className="space-y-3">
                            {exp.highlights.map((highlight, hIndex) => (
                                <motion.li
                                    key={hIndex}
                                    initial={{ opacity: 0, x: -12, filter: "blur(2px)" }}
                                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1 + hIndex * 0.08,
                                        ease: [0.16, 1, 0.3, 1]
                                    }}
                                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                                    className="flex gap-3 text-neutral-700 leading-relaxed"
                                >
                                    <motion.span
                                        whileHover={{ scale: 1.5, rotate: 180 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-accent mt-1.5 flex-shrink-0"
                                    >
                                        •
                                    </motion.span>
                                    <span>{highlight}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
