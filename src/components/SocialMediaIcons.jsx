const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-2 gap-7">
            <a 
                href="https://www.linkedin.com/in/ella-burn%C3%A4s-579975323/"
                className="hover:opacity-50 transition duration-500"
                target="_blank"
                rel="noreferrer"
            >
                <img src="../assets/linkedin-icon.png" alt="LinkedIn" />
            </a>

            <a 
                href="https://github.com/cellrogue"
                className="hover:opacity-50 transition duration-500"
                target="_blank"
                rel="noreferrer"
            >
                <img src="../assets/github.png" alt="GitHub" />
            </a>
        </div>
    )
}

export default SocialMediaIcons;