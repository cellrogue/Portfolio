import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
    return (
        <footer className="h-50 bg-purple p-10 sticky top-[100vh]">
            <div className="w-10/12 mx-auto">
                <SocialMediaIcons />
                <div className="md:flex justify-center md:justify-between text-center">
                    <p className="font-chakra-petch text-md">✨ Created with React, JS, Framer-Motion, Tailwind ✨</p>
                </div>
            </div>
            <p className="flex md:justify-end md:flex justify-center mt-4 font-silkscreen">👽 Ella Burnäs Portfolio 2024 👽</p>
        </footer>
    )
}

export default Footer;