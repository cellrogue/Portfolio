import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import { useRef, useEffect, useState } from "react";

const images = [
  "assets/beans3.jpg",
  "assets/bullet.jpg",
  "assets/beans2.jpg",
  "assets/lake.jpg",
  "assets/rainbow.jpg",
  "assets/view.jpg",
  "assets/bag.jpg",
  "assets/gloves.jpg",
  "assets/duck.jpg",
//   "assets/puzzle.jpg",
//   "assets/jellyfish.jpg",
//   "assets/goat.jpg",
];

const About = () => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
    const carouselRef = useRef(null);
    const [carouselWidth, setCarouselWidth] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            const totalWidth = carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;
            setCarouselWidth(totalWidth);
        }
    }, []);

    return (
        <section id="about" className="pt-32 pb-32">
            <div className="md:flex md:justify-between md:gap-16 mt-32 text-center">
                {/* About Me Section */}
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
                        🌈 ABOUT ME 🌈
                    </p>
                    <LineGradient width="w-80%" />
                    <p className="font-silkscreen text-xl mt-8">
                        ✨ I am currently a student at KYH learning to become a frontend developer. ✨
                    </p>
                    <p className="font-silkscreen text-xl mt-8">
                        Programming is becoming a real passion of mine and I am excited to see where it will take me.
                    </p>
                    <p className="font-silkscreen text-xl mt-8">
                        When I'm not programming I enjoy spending time with my friends and my dog. I also enjoy playing video games, crocheting, traveling, and painting. Or just anything creative really 👽
                    </p>
                </motion.div>

                {/* Image Carousel for small screens, Grid for large screens */}
                <div className="mt-16 md:mt-0 w-full">
                    {isAboveMediumScreens ? (
                        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {images.map((image, index) => (
                                <div key={index} className="w-full h-[300px]">
                                    <img
                                        src={image}
                                        alt={`grid-image-${index}`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="overflow-hidden cursor-grab">
                            <motion.div
                                ref={carouselRef}
                                className="flex"
                                drag="x"
                                dragConstraints={{ right: 0, left: -carouselWidth }}
                                dragElastic={0.2}
                                whileTap={{ cursor: "grabbing" }}
                            >
                                {images.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        className="min-w-[80%] sm:min-w-[50%] p-2"
                                    >
                                        <img
                                            src={image}
                                            alt={`carousel-image-${index}`}
                                            className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg"
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default About;
