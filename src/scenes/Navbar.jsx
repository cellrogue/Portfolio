import { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? 'text-purple' : 'text-white'} 
                hover:text-purple transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
    const navbarBackground = isTopOfPage ? '' : 'bg-dark-blue shadow-md';

    return (
        <nav className={`${navbarBackground}z-40 w-full fixed top-0 py-6`}>
            <div className='flex items-center justify-between mx-auto w-5/6'>
                <h4 className='font-montserrat text-3xl font-bold'>
                    <img 
                        src="../assets/logo.svg" 
                        alt="logo" 
                        className='h-20 w-20'
                    />
                </h4>

                {/* DESKTOP */}
                {isAboveSmallScreens ? (
                    <div className='flex justify-between gap-16 font-chakra-petch text-xl font-semibold'>
                        <Link 
                            page='HOME' 
                            selectedPage={selectedPage} 
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page='ABOUT' 
                            selectedPage={selectedPage} 
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page='SKILLS' 
                            selectedPage={selectedPage} 
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page='PROJECTS' 
                            selectedPage={selectedPage} 
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page='CONTACT' 
                            selectedPage={selectedPage} 
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                <button 
                    className='rounded-full p-2'
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                    <img src="../assets/menu-icon.svg" alt="menu-icon" />
                </button>
            )}

            {/* MOBILE */}
            {!isAboveSmallScreens && isMenuToggled && (
                <div className='fixed right-0 bottom-0 h-full bg-pink w-[300px]'>
                    <div className='flex justify-end p-12'>
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <img src="../assets/close-icon.png" alt="close-icon" />
                        </button>
                    </div>

                    {/* LINKS */}
                    <div className='flex flex-col gap-10 ml-[33%] font-chakra-petch text-2xl text-dark-blue'>
                    <Link 
                            page='HOME' 
                            selectedPage={selectedPage} 
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page='ABOUT' 
                            selectedPage={selectedPage} 
                            setSelectedPage={setSelectedPage}
                        />
                         <Link 
                            page='SKILLS' 
                            selectedPage={selectedPage} 
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page='PROJECTS' 
                            selectedPage={selectedPage} 
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page='CONTACT' 
                            selectedPage={selectedPage} 
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            )}

            </div>
        </nav>
    )
}

export default Navbar;