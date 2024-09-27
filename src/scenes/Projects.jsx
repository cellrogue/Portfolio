import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

const Projects = () => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

    return (
        <section id="projects" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
            {/* IMAGE SECTION */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreens ? (
                    <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
                        before:w-full before:max-w-[500px] before:h-full 
                        before:border-2 before:border-purple before:z-[-1]"
                    >
                        <img 
                            src="assets/duckevents.png" 
                            alt="duckevents" 
                            className="hover:saturate-50 transition duration-500 z-10 w-full
                                max-w-[400px] md:max-w-[600px] rounded"
                        />
                        <img 
                            src="assets/threadsD.png" 
                            alt="duckevents" 
                            className="hover:saturate-50 transition duration-500 z-10 w-full
                                max-w-[400px] md:max-w-[600px] rounded mt-5"
                        />
                    </div>
                ): (
                        <img
                            src="assets/duckevents.png" 
                            alt="duckevents" 
                            className="hover:saturate-50 transition duration-500 z-10 w-full
                                max-w-[400px] md:max-w-[600px] rounded-full border-purple border-4"
                        />
                        
                )}
            </div>
            {/* MAIN SECTION  */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
                {/* HEADINGS */}
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className="text-5xl font-chakra-petch z-10 text-center md:text-start">
                        🌟 Duck {''}
                        <span className="xs:relative xs:text-white xs:font-semibold z-20
                            before:absolute before:-left-[-200px]
                            before:-top-[150px] before:z-[-1]"
                        >
                            Events
                        </span>
                    </p>
                    <p className="mt-10 mb-7 font-silkscreen text-xl text-center text-pale-pink md:text-start">
                        A next.js project that displays all current events and allows users to book events
                    </p>
                    <p className="text-5xl font-chakra-petch z-10 text-center mt-20 md:text-start">
                        🌟 Threads {''}
                        <span className="xs:relative xs:text-white xs:font-semibold z-20
                            before:absolute before:-left-[-200px]
                            before:-top-[150px] before:z-[-1]"
                        >
                        </span>
                    </p>
                    <p className="mt-10 mb-7 font-silkscreen text-xl text-center text-pale-pink md:text-start">
                        A next.js project that works as a forum for users to post threads and comments
                    </p>
                </motion.div>
                
                {/* CALL TO ACTION */}
                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                </motion.div>
                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                </motion.div>
            </div>
        </section>
    )
}

export default Projects;