import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

const About = () => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

    return (
        <section id="about" className="pt-32 pb-16">
            <div className="md:flex md:justify-between md:gap-16 mt-32 text-center">
                <motion.div
                    className="md:w-1/3 text-center md:text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="font-chakra-petch font-semibold text-4xl mb-2 text-white">
                        🌈ABOUT ME🌈
                    </p>
                    <LineGradient width="w-80%" />
                    <p className="font-silkscreen text-3xl mt-8">
                        I am currently a student at KYH learning to become a frontend developer.
                    </p>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                         <div 
                            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                            before:w-full before:h-full 
                            before:border-2 before:bg-gradient-rainbow before:z-[-1]"
                        >
                         <img 
                             src="assets/goat.jpg" 
                             alt="goat" 
                             className="z-10"
                         />
                     </div>
                    ) : (
                        <img 
                            src="assets/goat.jpg" 
                            alt="goat" 
                            className="z-10"
                        />
                    )}
                </div>
            </div>
        </section>
    )
}

export default About;