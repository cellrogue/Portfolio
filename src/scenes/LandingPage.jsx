import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
import ReactSparkle from "react-sparkle";

const LandingPage = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

    return(
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
           
            {/* IMAGE SECTION */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreens ? (
                    <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
                        before:w-full before:max-w-[500px] before:h-full 
                        before:border-2 before:border-purple before:z-[-1]"
                    >
                        <img 
                            src="assets/landing.jpg" 
                            alt="profile" 
                            className="hover:saturate-50 transition duration-500 z-10 w-full
                                max-w-[400px] md:max-w-[600px] rounded"
                        />
                    </div>
                ): (
                        <img
                            src="assets/landing.jpg" 
                            alt="profile" 
                            className="hover:saturate-50 transition duration-500 z-10 w-full
                                max-w-[400px] md:max-w-[600px] rounded-full border-purple border-4"
                        />
                )}
            </div>
                <ReactSparkle 
                    color={'#f0f'}
                    count={80}
                    minSize={5}
                    maxSize={15}
                    overflowPx={20}
                    fadeOutSpeed={0}
                    newSparkleOnFadeOut={true}
                    flicker={true}
                    flickerSpeed={'slowest'}
                    height={'100vh'}
                    width={'100vw'}
                    className="absolute top-0 left-0 z-0"
                />
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
                        <p className="text-8xl font-chakra-petch z-10 text-center md:text-start">
                            Ella {''}
                            <span className="xs:relative xs:text-white xs:font-semibold z-20
                                xs:before:content-sparkles before:absolute before:-left-[-200px]
                                before:-top-[150px] before:z-[-1]"
                            >
                                Burnäs
                            </span>
                        </p>
                        <p className="mt-10 mb-7 font-silkscreen text-2xl text-center text-pale-pink md:text-start">
                            👽 Front-End Developer in Training 👽
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
                        <AnchorLink 
                            href="#contact" 
                            className="bg-gradient-rainbow text-dark-blue rounded-sm py-3 px-7 font-bold
                                hover:bg-pink hover:text-white transition duration-500"
                            onClick={() => setSelectedPage('contact')}
                        >   
                         🦋🌈                           
                        </AnchorLink>
                        <AnchorLink
                            href="#contact"
                            className="rounded-r-sm bg-gradient-rainbow py-0.5 pr-0.5"
                            onClick={() => setSelectedPage('contact')}
                        >
                            <div className="bg-purple hover:text-dark-blue transition duration-500 font-semibold w-full h-full flex items-center
                                justify-center font-montserrat px-10"
                            >
                                ✨ Contact Me! ✨
                            </div>
                        </AnchorLink>
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
                        <SocialMediaIcons />
                    </motion.div>
                </div>
        </section>
    )
}

export default LandingPage;