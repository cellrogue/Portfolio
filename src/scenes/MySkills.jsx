import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

    return (
        <section id="skills" className="pt-32 pb-32 md:pb-32">
            <div className="md:flex md:justify-between md:gap-16 mt-32 text-center">
                <motion.div
                    className="md:w-1/3"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className="font-chakra-petch font-semibold text-4xl mb-5">
                        <span className="text-white">✨ SKILLS ✨</span>
                    </p>
                    <LineGradient width="w-80%" />

                    <p className="font-silkscreen text-3xl mt-8">
                        I have experience with the following: 💫
                    </p>
                </motion.div>
            </div>
            <div className="md:flex md:justify-between mt-16 gap-32">
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-silkscreen font-semibold text-4xl mt-3">HTML</p>
                            <img src="./assets/html.png" alt="html-logo" />
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-gradient-rainbow opacity-80 absolute right-0 top-0 z-[-1]" />
                    </div>
                </motion.div>

                <motion.div
                    className="md:w-1/3 mt-10"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-silkscreen font-semibold text-4xl mt-3">CSS + Tailwind</p>
                            <img src="./assets/css.png" alt="css-logo" />
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-gradient-rainbow opacity-80 absolute right-0 top-0 z-[-1]" />
                    </div>
                </motion.div>

                <motion.div
                    className="md:w-1/3 mt-10"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-silkscreen font-semibold text-4xl mt-3">JavaScript</p>
                            <img src="./assets/javascript.png" alt="js-logo" />
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-gradient-rainbow absolute right-0 top-0 z-[-1]" />
                    </div>
                </motion.div>
            </div>

            <div className="md:flex md:justify-between mt-16 gap-32">
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-silkscreen font-semibold text-4xl mt-3">Typescript</p>
                            <img src="./assets/typescript.png" alt="ts-logo" />
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-gradient-rainbow opacity-80 absolute right-0 top-0 z-[-1]" />
                    </div>
                </motion.div>

                <motion.div
                    className="md:w-1/3 mt-10"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-silkscreen font-semibold text-4xl mt-3">React</p>
                            <img src="./assets/react2.png" alt="react-logo" />
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-gradient-rainbow opacity-80 absolute right-0 top-0 z-[-1]" />
                    </div>
                </motion.div>

                <motion.div
                    className="md:w-1/3 mt-10"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-silkscreen font-semibold text-4xl mt-3">Next.JS</p>
                            <img src="./assets/nextjs2.png" alt="nextjs-logo" />
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-gradient-rainbow absolute right-0 top-0 z-[-1]" />
                    </div>
                </motion.div>
            </div>

            <div className="md:flex md:justify-between mt-16 gap-32">
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-silkscreen font-semibold text-4xl mt-3">Node.js</p>
                            <img src="./assets/nodejs.png" alt="node.js-logo" />
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-gradient-rainbow opacity-80 absolute right-0 top-0 z-[-1]" />
                    </div>
                </motion.div>

                <motion.div
                    className="md:w-1/3 mt-10"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-silkscreen font-semibold text-4xl mt-3">Firebase</p>
                            <img src="./assets/firebase.png" alt="firebase-logo" />
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-gradient-rainbow opacity-80 absolute right-0 top-0 z-[-1]" />
                    </div>
                </motion.div>

                <motion.div
                    className="md:w-1/3 mt-10"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-silkscreen font-semibold text-4xl mt-3">Figma</p>
                            <img src="./assets/figma.png" alt="figma-logo" />
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-gradient-rainbow absolute right-0 top-0 z-[-1]" />
                    </div>
                </motion.div>
            </div>
            <div className="md:pb-20 flex justify-end text-center">
                <motion.div
                    className="md:w-1/3"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className="font-silkscreen text-3xl mt-8 mb-10">
                        ...👽And more!👽
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default MySkills;