import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import { useRef, useEffect, useState } from "react";

const images = [
  "assets/beans3.jpg",
  "assets/bullet.jpg",
  "assets/bag.jpg",
  "assets/duck.jpg",
  "assets/lake.jpg",
  "assets/beans2.jpg",
  "assets/rainbow.jpg",
  "assets/gloves.jpg",
  "assets/puzzle.jpg",
  "assets/goat.jpg",
  "assets/view.jpg",
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
        <section id="about" className="pt-32 pb-16">
            <div className="md:flex md:justify-between md:gap-16 mt-32 text-center">
                <motion.div
                    className="md:w-1/3 text-center md:text-right"
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

                {/* Draggable Image Carousel */}
                <div className="mt-16 md:mt-0 w-full overflow-hidden cursor-grab">
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
                                className="min-w-[300px] h-[400px] md:h-[800px] flex-shrink-0 p-4"
                            >
                                <img
                                    src={image}
                                    alt={`carousel-image-${index}`}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
